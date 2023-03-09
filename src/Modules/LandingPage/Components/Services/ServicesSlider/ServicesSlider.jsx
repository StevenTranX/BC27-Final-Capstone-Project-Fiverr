import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "./styles.css";

import { FreeMode, Pagination, Scrollbar, Navigation } from "swiper";
import styles from "./ServicesSlider.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getJobsByName } from "../../../../JobList/Slices/JobListSlice";

const categories = [
  {
    id: 1,
    slogan: "Build your brand",
    title: "Logo Design",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png",
  },
  {
    id: 2,
    slogan: "Customize your site",
    title: "WordPress",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png",
  },
  {
    id: 3,
    slogan: "Share your message",
    title: "Voice Over",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png",
  },
  {
    id: 4,
    slogan: "Reach more customers",
    title: "Social Media",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png",
  },
  {
    id: 5,
    slogan: "Unlock growth online",
    title: "SEO",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png",
  },
  {
    id: 6,
    slogan: "Color your dreams",
    title: "Illutration",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png",
  },
  {
    id: 7,
    slogan: "Go global",
    title: "Translation",
    imgUrl:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png",
  },
];

export default function ServicesSlider() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        className={`${styles.mySwiper} overflow-visible`}
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        navigation={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Scrollbar, Navigation]}
        slidesPerGroup={5}
        speed={500}
        loop={true}
      >
        {categories &&
          categories.map((item) => (
            <SwiperSlide
              style={{
                cursor: "pointer",
              }}
              onClick={async () => {
                await dispatch(getJobsByName(item.title)).unwrap();
                navigate("/jobs");
              }}
              key={item.id}
            >
              <div className="w-full max-w-[293px] h-[345px] relative">
                <div className="absolute top-3 text-left left-[20px]  ">
                  <h6 className="text-white font-medium text-sm ">
                    {item.slogan}
                  </h6>
                  <h3 className="text-white text-lg ">{item.title}</h3>
                </div>
                <img src={item.imgUrl} alt={item.title} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
