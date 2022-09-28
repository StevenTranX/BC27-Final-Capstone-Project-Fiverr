import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { registerUser } from '../../../slices/authSlice';
export default function RegisterMain() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      await dispatch(registerUser(values))
        .unwrap()
        .then(() => {
          enqueueSnackbar('Register Successfully', { variant: 'success' });
          handleClose();
        });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Join
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <RegisterForm closeDiaglog={handleClose} onSubmit={handleSubmit} />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Sign Up</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
