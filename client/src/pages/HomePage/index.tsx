import React, { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import "./styles.css";
import { FormInputField, LoadingScreen } from "../../components";
import SendIcon from "@mui/icons-material/Send";
import { LogLevel, log } from "../../utils/loggerConfig";
import axiosInstance from "../../services/axiosConfig";
import { apiPath } from "../../services/api_path";
import TableComponent from "./TableComponent";
import { insightType, insightTypeCast } from "./common";
import {
  BarObjectType,
  NotificationSnackbar,
} from "../../components/SnackBar/SnackBar";

async function getPageInfo(url: string) {
  log(LogLevel.INFO, `get page info function called`);
  try {
    const response = await axiosInstance.get(`/pageinfo?url=${url}`);
    const { wordCount, imgUrls, title } = response.data;
    if (response.status !== 200) {
      throw new Error(`Error: Response status code is ${response.status}.`);
    }
    return { wordCount, imgUrls, title };
  } catch (e) {
    log(
      LogLevel.ERROR,
      `Some thing went wrong in getPageInfo -  ${JSON.stringify(e)}`
    );
  }
}

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [bar, setBar] = useState<BarObjectType>({
    open: false,
    title: "",
    message: "",
    iconType: "success",
  });

  const [insightList, setInsightList] = useState<Array<insightType>>([]);

  //fetch the insight list
  const fetchInsightList = async () => {
    log(LogLevel.INFO, `fetchInsightList function called`);
    setLoading(true);
    try {
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
      setInsightList(frmtData);
    } catch (e) {
      log(
        LogLevel.ERROR,
        `Some thing went wrong in fetchInsightList -  ${JSON.stringify(e)}`
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

  useEffect(() => {
    fetchInsightList();
  }, []);

  //on url send
  const onSubmitEnter = async () => {
    setError((e) => ({ ...e, isError: false }));
    log(LogLevel.INFO, `onSubmitEnter function called`);
    setLoading(true);
    try {
      if (!url) {
        setError((e) => ({
          ...e,
          isError: true,
          message: "No URL Provided",
        }));
        return;
      }
      const webPageScrapRes = await getPageInfo(url);
      if (!webPageScrapRes) throw new Error("No api result ");
      const inputData = {
        url: url,
        title: webPageScrapRes?.title,
        mediaUrls: webPageScrapRes?.imgUrls,
        wordCount: webPageScrapRes?.wordCount,
      };
      const resp = await axiosInstance.post(apiPath.INSIGHT, inputData);
      if (resp.status !== 201) {
        throw new Error(`Error: Response status code is ${resp.status}.`);
      }
      await fetchInsightList();
    } catch (e) {
      log(
        LogLevel.ERROR,
        `Some thing went wrong in onSubmitEnter -  ${JSON.stringify(e)}`
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

  //delete insights
  const onDeleteInsight = async (id: string) => {
    log(LogLevel.INFO, `onDeleteInsight function called`);
    setLoading(true);
    try {
      const resp = await axiosInstance.delete(`${apiPath.INSIGHT}\\${id}`);
      if (resp.status !== 200) {
        throw new Error(`Error: Response status code is ${resp.status}.`);
      }
      await fetchInsightList();
    } catch (e) {
      log(
        LogLevel.ERROR,
        `Some thing went wrong in onDeleteInsight -  ${JSON.stringify(e)}`
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

  //manage the favorites
  const onManageFav = async (id: string, newFavoriteFlag: boolean) => {
    log(LogLevel.INFO, `onManageFav function called`);
    setLoading(true);
    try {
      const inputData = {
        favoriteFlag: newFavoriteFlag,
      };
      const resp = await axiosInstance.patch(
        `${apiPath.INSIGHT}\\${id}\\favorite`,
        inputData
      );
      if (resp.status !== 200) {
        throw new Error(`Error: Response status code is ${resp.status}.`);
      }
      await fetchInsightList();
    } catch (e) {
      log(
        LogLevel.ERROR,
        `Some thing went wrong in onManageFav -  ${JSON.stringify(e)}`
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

  return (
    <>
      <Grid
        container
        direction="column"
        sx={{ position: "fixed", height: "100%", width: "100%" }}
      >
        <Grid item xs={4}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "50%", display: "flex", flexDirection: "row" }}>
              <FormInputField
                error={error.isError}
                id={"urlField"}
                // labelHeading={"url"}
                onChange={(e) => {
                  let val = e.target.value;
                  setUrl(val.trim());
                }}
                value={url}
                helperText={error.message}
                placeHolder="Url here"
                size="small"
                multiline={true}
                rows={2}
              />
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                sx={{ ml: 3, height: "60px" }}
                onClick={onSubmitEnter}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "90%", height: "65%", position: "fixed" }}>
            <TableComponent
              rows={insightList}
              onDeleteFn={onDeleteInsight}
              onManageFav={onManageFav}
            />
          </Box>
        </Grid>
      </Grid>
      <LoadingScreen open={loading} />
      <NotificationSnackbar bar={bar} setBar={setBar} />
    </>
  );
}
