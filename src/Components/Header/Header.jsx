import React, { useState } from 'react';
import { Box, Stack, Container } from '@mui/material';
import LeftHeader from './LeftHeader/LeftHeader';
import RightHeader from './RightHeader/RightHeader';
import styles from './Header.module.scss';
const Header = () => {
  return (
    <Box>
      <Stack
        className={styles.header}
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
