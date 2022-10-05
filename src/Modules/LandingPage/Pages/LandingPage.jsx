import React from 'react';
import Slider from '../Components/Slider/Slider';
import { Box, Container } from '@mui/material';
import SliderHeader from '../Components/Slider/SliderHeader/SliderHeader';
import scss from './landingPage.module.scss';
import Services from '../Components/Services/Services';
import Freelance from '../Components/Freelance/Freelance';
const LandingPage = () => {
  return (
    <>
      <div className={scss.slider}>
        <Slider />
      </div>
      <div className={scss.sliderHeader}>
        <SliderHeader />
      </div>
      <div className={scss.services}>
        <Services />
      </div>
      <div className={scss.freelance}>
        <Freelance />
      </div>
    </>
  );
};

export default LandingPage;
