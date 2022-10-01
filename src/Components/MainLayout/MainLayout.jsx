import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Container } from '@mui/material';
const MainLayout = () => {
  return (
    <div>
      <Container maxWidth="lg" fixed={true}>
        <Header />
        <Footer />
      </Container>
    </div>
  );
};

export default MainLayout;
