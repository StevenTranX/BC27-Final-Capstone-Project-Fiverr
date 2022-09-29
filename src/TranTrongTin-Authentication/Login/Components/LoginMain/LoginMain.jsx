import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { loginUser } from '../../../slices/authSlice';
export default function LoginMain(props) {
  const { onClose } = props;
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      await dispatch(loginUser(values))
        .unwrap()
        .then(() => {
          enqueueSnackbar('Login Successfully', { variant: 'success' });
          onClose();
        });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <DialogContent>
        <LoginForm closeDiaglog={onClose} onSubmit={handleSubmit} />
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Sign Up</Button> */}
      </DialogActions>
    </div>
  );
}
