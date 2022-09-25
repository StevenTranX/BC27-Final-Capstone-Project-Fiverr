import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';

export default function RegisterMain() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values) => {
    console.log(values);
  };
  // TODO : Research and setup fiverr API - setup axiosClient.
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
