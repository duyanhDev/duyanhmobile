import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.scss";

// import required modules
import { Pagination } from "swiper/modules";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const texts = [
    " K+ NƠI DUY NHẤT TRỌN VẸN",
    "Chương trình sắp laptop MSI",
    "Tai nghe Sony ULT900N - Chính hãng",
    "Mở bán Xiaomi 14 Ultra",
    "OSCAL TIGER 12 (12+12GB/256GB",
  ];

  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/06/19/1200x375.png"
            alt="lỗi 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/06/17/1200x375-msi-150624.png"
            alt="lỗi 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/05/30/web-sony-ult-wear-01.jpg"
            alt="lối 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/05/30/xiaomi-14-1200-x-375.jpg"
            alt="lối 5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/06/06/ocal-tiger-1200x375.png"
            alt="lỗi 7"
          />
        </SwiperSlide>
      </Swiper>
      <div className="text-container">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`text-item ${activeIndex === index ? "active" : ""}`}
          >
            {text}
          </div>
        ))}
      </div>
      <div className="text-banner">
        <img
          src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/06/05/samsung-1.png"
          alt="1"
        />
        <img
          src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/06/15/sanphamhot-macbook-air-m1-18390.png"
          alt="2"
        />
        <img
          src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/05/20/sanphamhot-thu-cu_638518167272108503.png"
          alt="3"
        />
        <img
          src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/05/21/sanphamhot-1.png"
          alt="4"
        />
      </div>
      <div className="img-banner">
        <img
          src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/06/08/600x100_638534461287264081.png"
          alt="1"
        />
        <img
          src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/06/12/anh-chuyen-muc-redmi-note-13.png"
          alt="2"
        />
      </div>
    </>
  );
};

export default Slider;
