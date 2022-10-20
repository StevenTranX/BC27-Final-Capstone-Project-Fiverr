import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import LoginMain from '../../../TranTrongTin-Authentication/Login/Components/LoginMain/LoginMain';
import RegisterMain from '../../../TranTrongTin-Authentication/Register/Components/RegisterMain';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AccountCircleRounded } from '@mui/icons-material';
import UserDropdown from './UserDropdown';
import userAPI from '../../../Apis/userAPI';
const RightHeader = ({ children, becomeSeller, marginLeft }) => {
  const [open, setOpen] = React.useState(false);
  const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
  };
  const [mode, setMode] = useState(MODE.REGISTER);
  const { currentUser } = useSelector((state) => state.auth);
  const isLoggedIn = !!currentUser?.id;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleDropdown = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Typography component="p" variant="h6">
            {becomeSeller}
          </Typography>
          {!isLoggedIn && (
            <>
              <Button
                onClick={() => {
                  handleOpen();
                  setMode(MODE.LOGIN);
                }}
              >
                Sign In
              </Button>
              <Button
                disabled={false}
                variant="outlined"
                onClick={() => {
                  handleOpen();
                  setMode(MODE.REGISTER);
                }}
              >
                Join
              </Button>
            </>
          )}
          {isLoggedIn && (
            <>
              <UserDropdown
                open={openMenu}
                handleClick={handleDropdown}
                handleClose={handleCloseDropdown}
                anchorEl={anchorEl}
              />
              <Button
                disabled={true}
                variant="outlined"
                onClick={() => {
                  handleOpen();
                  setMode(MODE.REGISTER);
                }}
                sx={{ width: '70px', height: '30px' }}
              >
                Join
              </Button>
            </>
          )}

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
