import { makeStyles } from "@mui/material";
import { BG_COLOR, FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from "../../utils/vars";


export const useNavbarStyles = makeStyles({
  avatarStyle: {
    height: "20px",
    width: "20px",
    backgroundColor: "transparent",
    border: "2px solid black",
    color: BG_COLOR.TEXT_COLOR_BLACK,
    fontSize: FONT_SIZE.TEXT_LABEL,
    fontWeight: FONT_WEIGHT.BOLD,
    marginBottom: "5px",
  },
  headingText: {
    color: BG_COLOR.TEXT_COLOR_BLACK,
    fontFamily: FONT_FAMILY.PRIMARY_FONT,
    fontSize: FONT_SIZE.TITLE_TEXT,
    fontWeight: "550",
  },
});
