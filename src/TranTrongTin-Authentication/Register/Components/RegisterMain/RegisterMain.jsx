import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../slices/authSlice';
export default function RegisterMain() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      await dispatch(registerUser(values)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Join
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <RegisterForm onSubmit={handleSubmit} />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Sign Up</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
