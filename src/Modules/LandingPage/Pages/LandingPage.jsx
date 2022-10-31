import React from 'react';
import Slider from '../Components/Slider/Slider';
import { Box, Container } from '@mui/material';
import SliderHeader from '../Components/Slider/SliderHeader/SliderHeader';
import Services from '../Components/Services/Services';
import Freelance from '../Components/Freelance/Freelance';
import MarketPlace from '../Components/MarketPlace/MarketPlace';
import styles from './landingPage.module.scss';
import ScrollToTop from 'react-scroll-to-top';
const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.slider}>
        <Slider />
        <div className={styles.sliderHeaderContainer}>
          <SliderHeader />
        </div>
      </div>

      <div className={styles.services}>
        <Services />
      </div>
      <div className={styles.freelance}>
        <Freelance />
      </div>
      <div className={styles.marketPlace}>
        <MarketPlace />
      </div>
      <ScrollToTop smooth width={'30px'} height={'30px'} color={'#1dbf73'} />
    </div>
  );
};

export default LandingPage;
