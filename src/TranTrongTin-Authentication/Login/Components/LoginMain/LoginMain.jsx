import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../slices/authSlice";
import LoginForm from "../LoginForm/LoginForm";
export default function LoginMain(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { onClose } = props;
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      await dispatch(loginUser(values))
        .unwrap()
        .then(() => {
          enqueueSnackbar("Login Successfully", {
            variant: "success",
            autoHideDuration: 1500,
          });
          setTimeout(() => {
            onClose();
          }, 1000);
        });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 1500,
      });
    }
  };
  return (
    <div>
      <DialogContent>
        <LoginForm onSubmit={handleSubmit} />
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Sign Up</Button> */}
      </DialogActions>
    </div>
  );
}
