import React from 'react';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import styles from './Slider.module.scss';
import SliderHeader from './SliderHeader/SliderHeader';
import { Box, Container } from '@mui/material';
const Slider = () => {
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.mySwiper}
        modules={[Navigation, EffectFade, Autoplay]}
        // navigation
        autoplay
        effect={'fade'}
        speed={800}
        loop
        slidesPerView={1}
      >
        <SwiperSlide className={styles.backGround1}></SwiperSlide>
        <SwiperSlide className={styles.backGround2}></SwiperSlide>
        <SwiperSlide className={styles.backGround3}></SwiperSlide>
        <SwiperSlide className={styles.backGround4}></SwiperSlide>
        <SwiperSlide className={styles.backGround5}></SwiperSlide>

        <Container width="lg" className={styles.sliderContainer}>
          <SliderHeader className={styles.sliderHeader} />
        </Container>
      </Swiper>
    </div>
  );
};

export default Slider;
