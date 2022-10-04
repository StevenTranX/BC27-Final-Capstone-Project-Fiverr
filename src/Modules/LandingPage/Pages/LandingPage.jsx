import React from 'react';
import Slider from '../Components/Slider/Slider';
import { Box, Container } from '@mui/material';
import SliderHeader from '../Components/Slider/SliderHeader/SliderHeader';
import scss from './landingPage.module.scss';
const LandingPage = () => {
  return (
    <>
      <div className={scss.slider}>
        <Slider />
      </div>
      <div className={scss.sliderHeader}>
        <SliderHeader />
      </div>
    </>
  );
};

export default LandingPage;
