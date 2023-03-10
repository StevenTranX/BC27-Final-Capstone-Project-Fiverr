import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../slices/authSlice";
import RegisterForm from "../RegisterForm/RegisterForm";
export default function RegisterMain(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { onClose } = props;

  return (
    <div>
      <DialogContent>
        <RegisterForm closeDiaglog={onClose} />
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Sign Up</Button> */}
      </DialogActions>
    </div>
  );
}
