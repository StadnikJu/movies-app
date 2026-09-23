import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useAppDispatch, useAppSelector } from "@/common/hooks";
import { clearErrorAC, selectErrorMessage } from "@/common/slices/errorSlice";

export const ErrorSnackBar = () => {
    const message = useAppSelector(selectErrorMessage);
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(clearErrorAC());
    };

  return (
    <Snackbar open={!!message} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

