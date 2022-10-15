import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/system';
import { TextareaAutosize } from '@mui/material';
import DatePickerField from '../../FormControl/DatePickerField/DatePickerField';
export default function Profile__Dialog({
  open,
  onClose,
  headerTitle,
  headerContent,
  name,
  form,
  label,
  type,
  setValue,
  value,
}) {
  const StyledTextArea = styled(TextareaAutosize)({
    font: '400 16px macan,helvetica neue,Helvetica,Arial,sans-serif',
    color: '#7a7d85',
    border: '1px #b5b6ba solid',
    padding: '6px 7px 7px',
    margin: 0,
    resize: 'none',
    borderRadius: '3px',
    boxSizing: 'border-box',
  });
  return (
    <div>
      <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>{headerTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{headerContent}</DialogContentText>
          <DatePickerField
            form={form}
            name={name}
            label={label}
            type={type}
            setValue={setValue}
            value={value}
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: '#fff', backgroundColor: '#1dbf73' }}
            onClick={onClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
