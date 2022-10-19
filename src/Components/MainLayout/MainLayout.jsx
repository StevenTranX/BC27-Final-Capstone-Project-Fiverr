import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Container } from '@mui/material';
import LandingPage from '../../Modules/LandingPage/Pages/LandingPage';
import styles from './MainLayout.module.scss';
const MainLayout = () => {
  return (
    <div>
      <Container className={styles.headerContainer}>
        <Header />
      </Container>

      <LandingPage />
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default MainLayout;
