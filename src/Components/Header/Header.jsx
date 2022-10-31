import React, { useState } from 'react';
import { Box, Stack, Container } from '@mui/material';
import LeftHeader from './LeftHeader/LeftHeader';
import RightHeader from './RightHeader/RightHeader';
import styles from './Header.module.scss';
const Header = ({ color }) => {
  return (
    <Box width={'100%'}>
      <Container>
        <Stack
          className={styles.header}
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <LeftHeader color={color} />
          <RightHeader becomeSeller={'Become a Seller'} color={color} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
