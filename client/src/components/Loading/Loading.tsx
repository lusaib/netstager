import { Box, CircularProgress, Fade, Modal, useTheme } from "@mui/material";

type LoadingScreenProps = {
  open: boolean;
  // setOpen :
};

export default function LoadingScreen({ open }: LoadingScreenProps) {

  const theme = useTheme()
  return (
    <Modal
      open={open}
      //   onClose={handleClose}
      closeAfterTransition
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            backgroundColor: "transparent",
            border: "0px solid transparent",
            padding: theme.spacing(100, 1000, 100),
          }}
        >
          <CircularProgress sx={{ color: "white" }} />
        </Box>
      </Fade>
    </Modal>
  );
}
