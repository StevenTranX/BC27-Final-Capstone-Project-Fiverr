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
  // TODO : Style Form 
  // TODO : Replace TextField by Reusable InputField by controller of react-hook-form - Composition
  // TODO : Research and setup fiverr API - setup axiosClient.
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Register
      </Button> */}
      
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
            <RegisterForm onSubmit = {handleSubmit}/>
        </DialogContent>
        <DialogActions>
          <Button type onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Sign Up</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
