import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Container } from '@mui/material';
import LandingPage from '../../Modules/LandingPage/Pages/LandingPage';
import styles from './MainLayout.module.scss';
const MainLayout = () => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.landingPage}>
        <LandingPage />
      </div>
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default MainLayout;
