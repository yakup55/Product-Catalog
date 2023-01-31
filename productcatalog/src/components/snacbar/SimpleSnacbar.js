import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { closeSnacbar } from "../../redux/actions/appActions";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnacbar() {
  const dispacth = useDispatch();
  const { snacbar } = useSelector((state) => state.app);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispacth(closeSnacbar());
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={snacbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snacbar.severity}
          sx={{ width: "100%" }}
        >
          {snacbar.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
