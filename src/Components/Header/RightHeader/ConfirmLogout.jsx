import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const ConfirmLogout = (props) => {
  const { open, onClose, handleLogout, handleClose } = props;
  const handleCancel = () => {
    onClose();
    setTimeout(() => {
      handleClose();
    }, 400);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Are you sure ?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Do you want to logout ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogout}>OK</Button>
          <Button onClick={handleCancel} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmLogout;
