import React, { useState } from 'react';
import { Box, Stack, Container } from '@mui/material';
import LeftHeader from './LeftHeader/LeftHeader';
import RightHeader from './RightHeader/RightHeader';

const Header = () => {
  return (
    <Box>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <LeftHeader />
        <RightHeader />
      </Stack>
    </Box>
  );
};

export default Header;
