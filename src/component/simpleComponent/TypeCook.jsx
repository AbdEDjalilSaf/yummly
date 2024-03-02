import React from "react";
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
        spaceBetween={30}
        slidesPerView={2}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className=""
      >

{/* <Swiper
        spaceBetween={30}
        slidesPerView={2}
        pagination={{ clickable: true }}
        loop={true}
        className=""
      > */}
    <div className="flex justify-center items-center ">
{buttons.map((button, index) => (
          <SwiperSlide key={index}>
              <button className={`border-none outline-none cursor-pointer transition-[5000ms] bg-[#000] text-[#333] rounded-full w-[60px] h-[60px]   ${index === activeIndex ? 'border-none outline-none cursor-pointer rounded-full w-[60px] h-[60px] mx-[10px] bg-[#007bff] text-[#fff] ' : ''}`}>{button}</button>
          </SwiperSlide>

        ))}
    </div>


</Swiper>
 






</div>
















</>
)


}


export default TypeCook;