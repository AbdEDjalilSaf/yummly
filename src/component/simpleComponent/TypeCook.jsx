import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './TypeCook.css';

// import required modules
import { Navigation, Pagination, History } from 'swiper/modules';

export default function App() {

    const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];

  return (
    <>
    
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation={true}
        history={{
          key: 'slide',
        }}
        modules={[Navigation, Pagination, History]}
        className="mySwiper"
      >
        <SwiperSlide data-history="1">Slide 1</SwiperSlide>
        <SwiperSlide data-history="Slide 2">Slide 2</SwiperSlide>
        <SwiperSlide data-history="3">Slide 3</SwiperSlide>
        <SwiperSlide data-history="Slide 4">Slide 4</SwiperSlide>
        <SwiperSlide data-history="5">Slide 5</SwiperSlide>
        <SwiperSlide data-history="Slide 6">Slide 6</SwiperSlide>
        <SwiperSlide data-history="7">Slide 7</SwiperSlide>
        <SwiperSlide data-history="Slide 8">Slide 8</SwiperSlide>
        <SwiperSlide data-history="9">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
