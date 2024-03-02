import React from "react";
import "./TypeCook.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';






function TypeCook(){
    const [activeIndex, setActiveIndex] = useState(0);
    const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];
  
const handleButtonClick = (index) => {
    setActiveIndex(index);
};


return (
<>
<div className="flex justify-center">
<Swiper
      spaceBetween={1}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-[300px] h-[800px]"
    >

{buttons.map((souds, index) => (
          <SwiperSlide key={index}>
<button className={`border-none outline-none cursor-pointer bg-[#000] text-[#333] rounded-full w-[60px] h-[60px] mx-[10px]  ${index === activeIndex ? 'border-none outline-none cursor-pointer rounded-full w-[60px] h-[60px]  bg-[#007bff] text-[#fff] mx-[10px] ' : ''}`} onClick={()=> handleButtonClick()}>{souds}</button>
          </SwiperSlide>

        ))}
   


</Swiper>
 






</div>
















</>
)


}


export default TypeCook;