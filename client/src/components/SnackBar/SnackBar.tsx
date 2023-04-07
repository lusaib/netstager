import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Box, Grid } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function chooseIcon(iconType: string) {
  switch ((iconType || "").toLowerCase()) {
    case "error":
      return <ErrorIcon />;
    case "warning":
      return <WarningIcon />;
    default:
      return <CheckCircleIcon />;
  }
}

export type BarObjectType = {
  open: boolean;
  title: string;
  message: string;
  iconType: "warning" | "error" | "success";
};

type SnackBarProps = {
  bar: BarObjectType;
  setBar: (arg: BarObjectType) => void;
};

//Lusaib On 13/09/2022
export const NotificationSnackbar = ({ bar, setBar }: SnackBarProps) => {
  const messageIcon = chooseIcon(bar.iconType);
  const title =
    (bar.title || "").length > 150
      ? bar.title.substring(0, 150).concat("...")
      : bar.title;
  const message =
    (bar.message || "").length > 150
      ? bar.message.substring(0, 150).concat("...")
      : bar.message;
  return (
    <Snackbar
      key={"snackbar"}
      ContentProps={{
        sx: {
          height: "auto",
          width: "auto",
          maxWidth: "17vw",
          paddingLeft: "10px",
          background: "white",
          color: "black",
        },
      }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      open={bar.open}
      autoHideDuration={30000}
      onClose={() => setBar({ ...bar, open: false })}
    >
      <Box
        component={"div"}
        sx={{
          backgroundColor: "white",
          width: "280px",
          height: "auto",
          minHeight: "60px",
          border: "0.5px solid grey ",
          boxShadow: "0 0 10px 2px rgba(189, 186, 186, 0.5)",
          borderRadius: 2,
          paddingInline: "10px",
          display: "flex",
          alignItems: "center",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        <Grid
          container
          direction="row"
          spacing={3}
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs={2}>
            <Box
              component={"div"}
              style={{
                fontSize: "25px",
                height: "100%",
                // width: "100%",
                display: "grid",
                alignItems: "center",
                paddingLeft: "4px",
                // justifyContent: "center",
                borderLeft: "3px solid blue",
              }}
            >
              {messageIcon}
            </Box>
          </Grid>
          <Grid item xs={10}>
            <Box
              component={"div"}
              style={{
                fontSize: "17px",
                whiteSpace: "break-spaces",
                width: "100%",
                fontWeight: "bold",
                color: "black",
                marginBottom: "5px",
                wordWrap: "break-word",
              }}
            >
              {title}
            </Box>
            <Box
              component={"div"}
              style={{
                fontSize: "15px",
                whiteSpace: "break-spaces",
                width: "100%",
                color: "grey",
                wordWrap: "break-word",
              }}
            >
              {message}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Snackbar>
  );
};
