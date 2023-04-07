import {
  AppBar,
  Avatar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

type NavBarProps = {
  head: string;
};

const NavBar = ({ head }: NavBarProps) => {
  const [iconLetters, setIconLetters] = useState("");

  return (
    <>
      <AppBar
        id="navBar"
        // position="static"
        sx={{
          // boxShadow: "0px 0px",
          height: 60,
          // minHeight: COMMON_HEIGHTS.MIN_NAVBAR_HEIGHT,
          boxShadow: "none",
        }}
      >
        <Toolbar variant="dense">
          {/* <Avatar sx={{ mr: 2, mi: "auto" }}>H</Avatar> */}
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", textAlign: "center" }}
          >
            Paste the url
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
