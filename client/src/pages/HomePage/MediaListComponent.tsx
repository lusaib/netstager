import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import "./styles.css";
import { Box, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#ffffff",
    color: "rgba(0, 0, 0, 0.87)",
    minWidth: "305px",
    maxHeight: "65vh",
    height: "auto",
    fontSize: 15,
    border: "1px solid black",
  },
}));

type imageListCompType = {
  list: Array<string>;
};
export default function ImageListComp({ list }: imageListCompType) {
  return (
    <LightTooltip
      title={
        <>
          <Box
            component="div"
            className="scroll-class"
            sx={{
              height: "auto",
              maxHeight: "35vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {list.map((itm, i) => {
              return (
                <Box
                  key={itm.toString()}
                  component="a"
                  href={itm}
                  target="_blank"
                  sx={{
                    borderBottom: "1px solid grey",
                    padding: 1,
                  }}
                  //     display: "flex",
                  //     flexDirection: "row",
                  //     alignItems: "center",
                  //     justifyContent: "space-around",
                  //   }}
                >
                  {itm}
                </Box>
              );
            })}
          </Box>
        </>
      }
    >
      <IconButton aria-label="info" size="small" sx={{ color: "black" }}>
        <InfoIcon fontSize="inherit" />
      </IconButton>
    </LightTooltip>
  );
}
