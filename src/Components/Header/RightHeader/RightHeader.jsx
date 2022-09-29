import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import LoginMain from '../../../TranTrongTin-Authentication/Login/Components/LoginMain/LoginMain';
import RegisterMain from '../../../TranTrongTin-Authentication/Register/Components/RegisterMain';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
const RightHeader = () => {
  const [open, setOpen] = React.useState(false);

  const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
  };
  const [mode, setMode] = useState(MODE.REGISTER);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Stack direction="row" spacing={2}>
          <Typography component="p" variant="h6">
            Become a Seller
          </Typography>
          <Button
            onClick={() => {
              handleOpen();
              setMode(MODE.LOGIN);
            }}
          >
            Sign In
          </Button>
          {mode === MODE.LOGIN && (
            <Dialog open={open} onClose={handleClose}>
              <LoginMain sx={{ color: '#000' }} />
              <Box textAlign="center" justifyContent="center">
                <Button
                  onClick={() => {
                    setMode(MODE.REGISTER);
                  }}
                  color="secondary"
                  sx={{ fontSize: '13px' }}
                >
                  Don't have an account ? Register here
                </Button>
              </Box>
            </Dialog>
          )}

          <Button
            variant="outlined"
            onClick={() => {
              handleOpen();
              setMode(MODE.REGISTER);
            }}
          >
            Join
          </Button>

          {mode === MODE.REGISTER && (
            <Dialog open={open} onClose={handleClose}>
              <RegisterMain sx={{ color: '#000' }} />
              <Box textAlign="center" justifyContent="center">
                <Button
                  onClick={() => {
                    setMode(MODE.LOGIN);
                  }}
                  color="secondary"
                  sx={{ fontSize: '13px' }}
                >
                  Already have an account ? Login here
                </Button>
              </Box>
            </Dialog>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default RightHeader;
