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
import styles from './RightHeader.module.scss';
const RightHeader = ({ children, becomeSeller, color }) => {
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
          direction='row'
          spacing={2}
          alignItems='center'
          justifyContent='flex-end'
        >
          <Typography
            sx={{ cursor: 'pointer' }}
            component='p'
            variant='h6'
            className={!color && styles.nav__light}
          >
            {becomeSeller}
          </Typography>
          {!isLoggedIn && (
            <>
              <Button
                onClick={() => {
                  handleOpen();
                  setMode(MODE.LOGIN);
                }}
                sx={{
                  borderColor: '#fff',
                  color: '#fff',
                }}
                className={color && styles.nav__dark}
              >
                Sign In
              </Button>
              <Button
                disabled={false}
                variant='outlined'
                onClick={() => {
                  handleOpen();
                  setMode(MODE.REGISTER);
                }}
                sx={{
                  '&:hover': {
                    backgroundColor: '#1dbf73',
                    borderColor: '#1dbf73',
                  },
                  color: '#fff',
                  borderColor: '#fff',
                }}
                className={color && styles.nav__dark}
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
                variant='outlined'
                onClick={() => {
                  handleOpen();
                  setMode(MODE.REGISTER);
                }}
                sx={{
                  width: '70px',
                  height: '30px',
                }}
              >
                Join
              </Button>
            </>
          )}

          {mode === MODE.LOGIN && (
            <Dialog open={open} onClose={handleClose}>
              <LoginMain sx={{ color: '#000' }} onClose={handleClose} />
              <Box textAlign='center' justifyContent='center'>
                <Button
                  onClick={() => {
                    setMode(MODE.REGISTER);
                  }}
                  color='secondary'
                  sx={{ fontSize: '13px' }}
                >
                  Don't have an account ? Register here
                </Button>
              </Box>
            </Dialog>
          )}

          {mode === MODE.REGISTER && (
            <Dialog open={open} onClose={handleClose}>
              <RegisterMain sx={{ color: '#000' }} onClose={handleClose} />
              <Box textAlign='center' justifyContent='center'>
                <Button
                  onClick={() => {
                    setMode(MODE.LOGIN);
                  }}
                  color='secondary'
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
