import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import { useForm } from 'react-hook-form';
const RegisterForm = (props) => {
  const { open, handleClose } = props;
  const form = useForm({
    defaultValues: {
      taiKhoan: '',
      mauKhau: '',
      hoTen: '',
      email: '',
      soDt: '',
    },
  });
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <form>
            <TextField fullWidth variant="outlined"></TextField>
          </form>
        </DialogContent>

        <DialogActions>
          <Button type onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RegisterForm;
