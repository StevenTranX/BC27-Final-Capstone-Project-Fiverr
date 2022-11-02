import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
const ConfirmDialog = (props) => {
  const { open, onClose, data, handleClickPayment } = props;

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
            Do you want to book this job with{' '}
            <Typography
              sx={{ fontSize: '16px', fontWeight: '700' }}
              component='span'
            >
              ${data.congViec.giaTien}.00
            </Typography>{' '}
            ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickPayment}>OK</Button>
          <Button onClick={onClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog;
