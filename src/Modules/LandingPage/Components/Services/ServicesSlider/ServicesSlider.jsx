import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import './styles.css';

import { FreeMode, Pagination, Scrollbar, Navigation } from 'swiper';
import styles from './ServicesSlider.module.scss';

export default function App() {
  return (
    <>
      <Swiper
        className={styles.mySwiper}
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        navigation={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Scrollbar, Navigation]}
        slidesPerGroup={5}
        speed={500}
      >
        <SwiperSlide>
          <div className={styles.slideWrapper}>
            <div className={styles.slideHeader}>
              <h6>Build your brand</h6>
              <h3>Logo Design</h3>
            </div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
              alt="logo design"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideWrapper}>
            <div className={styles.slideHeader}>
              <h6>Build your brand</h6>
              <h3>Logo Design</h3>
            </div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
              alt="logo design"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideWrapper}>
            <div className={styles.slideHeader}>
              <h6>Build your brand</h6>
              <h3>Logo Design</h3>
            </div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
              alt="logo design"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.slideWrapper}>
            <div className={styles.slideHeader}>
              <h6>Build your brand</h6>
              <h3>Logo Design</h3>
            </div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
              alt="logo design"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideWrapper}>
            <div className={styles.slideHeader}>
              <h6>Build your brand</h6>
              <h3>Logo Design</h3>
            </div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
              alt="logo design"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideWrapper}>
            <div className={styles.slideHeader}>
              <h6>Build your brand</h6>
              <h3>Logo Design</h3>
            </div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
              alt="logo design"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideWrapper}>
            <div className={styles.slideHeader}>
              <h6>Build your brand</h6>
              <h3>Logo Design</h3>
            </div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"
              alt="logo design"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideWrapper}>
            <div className={styles.slideHeader}>
              <h6>Build your brand</h6>
              <h3>Logo Design</h3>
            </div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png"
              alt="logo design"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideWrapper}>
            <div className={styles.slideHeader}>
              <h6>Build your brand</h6>
              <h3>Logo Design</h3>
            </div>
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
              alt="logo design"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
