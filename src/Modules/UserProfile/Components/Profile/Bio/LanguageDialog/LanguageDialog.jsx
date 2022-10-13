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
export default function LanguageDialog({ open, onClose }) {
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
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Language</DialogTitle>
        <DialogContent>
          <DialogContentText>Language Here</DialogContentText>
          <StyledTextArea
            maxRows={4}
            aria-label="maximum height"
            placeholder=""
            style={{ width: '100%', height: '100px' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            sx={{ color: '#fff', backgroundColor: '#1dbf73' }}
            onClick={onClose}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
