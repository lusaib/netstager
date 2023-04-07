import { createTheme } from "@mui/material/styles";
import type {} from "@mui/lab/themeAugmentation";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFCB4E",
    },
    secondary: {
      main: "#f44336",
      // light  : "#ffff"
    },
    error: {
      main: "#f44336",
    },
    success: {
      main: "#66bb6a",
    },
    warning: {
      main: "#ffa726",
    },
    info: {
      main: "#29b6f6",
    },
    background: {
      default: "#F5F5F5",
    },
    action: {
      active: "#ffd700",
      hover: "#1876ea",
      focus: "#5eb7f3",
      selected: "#41eb1f",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      '"Open Sans"',
      "sans-serif",
      "'Open Sans Regular'",
      "'Open Sans Semibold'",
      "'Arial Rounded MT'",
    ].join(","),
    // h1: {
    //   fontSize: "2.5rem",
    //   fontWeight: 700,
    //   lineHeight: 1.2,
    // },
    // h2: {
    //   fontSize: "2rem",
    //   fontWeight: 600,
    //   lineHeight: 1.3,
    // },
    // body1: {
    //   fontSize: "1.5rem",
    //   fontWeight: 400,
    //   lineHeight: 1.5,
    // },
    // body2: {
    //   fontSize: "1.25rem",
    //   fontWeight: 400,
    //   lineHeight: 1.4,
    // },
    // fontWeightBold: "bolder",
    // fontWeightRegular: "normal",
    // fontWeightLight: "lighter",
    // fontWeightMedium: "bold",
    // button:{
    //   fontWeight : 600,
    // },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // change border width to 1px
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
          },
          // change focus color to black
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
            borderWidth: "1px",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          "&:focus": {
            color: "black", // change color when focused
            borderWidth: "1px", // change border width when focused
          },
        },
      },
    },
  },
});

export default theme;
