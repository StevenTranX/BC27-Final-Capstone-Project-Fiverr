import React from 'react';
import Button from '@mui/material/Button';
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

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <RegisterForm
        onSubmit={handleSubmit}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}
