import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import LoginMain from '../../../TranTrongTin-Authentication/Login/Components/LoginMain/LoginMain';
import RegisterMain from '../../../TranTrongTin-Authentication/Register/Components/RegisterMain';
const RightHeader = () => {
  return (
    <>
      <Box>
        <Stack direction="row" spacing={2}>
          <Typography component="p" variant="h6">
            Become a Seller
          </Typography>
          <LoginMain sx={{ color: '#000' }} />
          <RegisterMain />
        </Stack>
      </Box>
    </>
  );
};

export default RightHeader;
