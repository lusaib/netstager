import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import "./styles.css";
import { LoadingScreen } from "../../components";
import { LogLevel, log } from "../../utils/loggerConfig";
import axiosInstance from "../../services/axiosConfig";
import { apiPath } from "../../services/api_path";
import { insightType, insightTypeCast } from "./common";
import {
  BarObjectType,
  NotificationSnackbar,
} from "../../components/SnackBar/SnackBar";
const LazyLoadedComponent = lazy(() => import("./CardComponent"));
const CardComponent = React.memo(LazyLoadedComponent);

export default function CardPage() {
  const [loading, setLoading] = useState(false);

  const [bar, setBar] = useState<BarObjectType>({
    open: false,
    title: "",
    message: "",
    iconType: "success",
  });

  const [cardList, setCardList] = useState<Array<insightType>>([]);

  //fetch the insight list
  const fetchCardList = async () => {
    log(LogLevel.INFO, `fetchCardList function called`);
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 10000)); // 10000 milliseconds = 10 seconds
      const resp = await axiosInstance.get(apiPath.INSIGHT);
      if (resp.status !== 200) {
        throw new Error(`Error: Response status code is ${resp.status}.`);
      }
      const data = JSON.parse(JSON.stringify(resp.data));
      const frmtData = data.map((e: any) => insightTypeCast(e));

      //sort with created date and also for favorite flag
      frmtData.sort(function compareData(a: insightType, b: insightType) {
        if (a.favoriteFlag && !b.favoriteFlag) {
          return -1;
        } else if (!a.favoriteFlag && b.favoriteFlag) {
          return 1;
        } else {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        }
      });
      setCardList((e) => [...e, ...frmtData]);
    } catch (e) {
      log(
        LogLevel.ERROR,
        `Some thing went wrong in fetchCardList -  ${JSON.stringify(e)}`
      );
      setBar((e) => ({
        ...e,
        iconType: "error",
        message: "Something went wrong!",
        open: true,
        title: "Failed",
      }));
    }
    setLoading(false);
  };

  const [page, setPage] = useState(1);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchCardList();
  }, [page]);

  // Load more data when the user scrolls to the bottom
  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    console.log(target.isIntersecting);
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <Grid
        container
        direction="row"
        rowSpacing={2}
        columnSpacing={2}
        sx={{
          position: "fixed",
          height: "100%",
          width: "100%",
          margin: "10px",
          overflow: "scroll",
        }}
      >
        {loading &&
          [1, 2, 3, 4].map((e) => (
            <Grid item xs={4} key={e.toString()}>
              <div className="card" style={{ height: 200, width: 400 }}>
                <div className="skeleton-loading">
                  <div
                    className="skeleton-loading__item"
                    style={{ height: 50 }}
                  ></div>
                  <div
                    className="skeleton-loading__item"
                    style={{ height: 30 }}
                  ></div>
                  <div className="skeleton-loading__item"></div>
                </div>
              </div>
            </Grid>
          ))}
        <Suspense fallback={<div>Loading...</div>}>
          {cardList.map((e, i) => (
            <Grid item xs={4} key={i.toString()}>
              <CardComponent e={e} />
            </Grid>
          ))}
        </Suspense>
      </Grid>
      <div ref={ref}></div>

      <LoadingScreen open={loading} />
      <NotificationSnackbar bar={bar} setBar={setBar} />
    </>
  );
}
