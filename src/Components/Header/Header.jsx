import React from 'react';
import { Box, Stack, Container } from '@mui/material';
import LeftHeader from './LeftHeader/LeftHeader';
import RightHeader from './RightHeader/RightHeader';
const Header = () => {
  return (
    <Container sx={{ maxWidth: '1200px' }} maxWidth="xl" fixed={true}>
      <Box>
        <Stack flexDirection="row" justifyContent="space-between">
          <LeftHeader />
          <RightHeader />
        </Stack>
      </Box>
    </Container>
  );
};

export default Header;
