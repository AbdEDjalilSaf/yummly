import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import firstImg from './../../image/strawberry-grain.webp'
import middleImg from './../../image/img-fruit-bowl.webp'
import lastImg from './../../image/img-strawberry.webp'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './TypeCook.css';
// import required modules
import { Navigation, Pagination, History } from 'swiper/modules';

export default function TypeCook() {

const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];
const SearchRecips = useRef();

const refFocus = ()=>{
  SearchRecips.current.focus(); 
}

return (
<>
<div className=" absolute  tribleImg  lg:ml-[240px] ">
<div className=" flex justify-between ">
<div className='w-32 '>
<img src={firstImg} className='top-[-25%] relative'/>
</div>
<div>
<div className='flex gap-2 bg-[#fff] rounded-full cursor-pointer  shadow-lg shadow-indigo-500/40 mt-9 px-7 lg:w-[170%]' onClick={()=> refFocus()}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-9' onClick={()=> refFocus()}><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
<input type='text' className=' outline-none  w-full px-3 py-3 cursor-pointer rounded-full lg:w-[200%]  lg:h-[170%]' placeholder='Search recipes' ref={SearchRecips} />
</div>
</div>
<div className='lastImage relative'>
<img src={middleImg} className=''/>
<img src={lastImg} className='absolute  left-[40%] top-[45%]'/>

</div>
</div>

<div className=''>
<div className='flex justify-center items-center mb-4 flex-col gap-1.5'>
<p className='text-[#777] font-semibold '>Personalize Your Experience</p>
<h2 className='text-xtralarge font-semibold text-[#555] '>What are your favorite cuisines?</h2>
</div>



<Swiper
        spaceBetween={50}
        slidesPerView={0}
        navigation={false}
        history={{
          key: 'slide',
        }}
        modules={[Navigation, Pagination, History]}
        className="mySwiper px-16 flex relative my-3"
      >
        <SwiperSlide data-history="1" className=' w-[140px] h-[140px]  rounded-full american text-[#fff] font-semibold'><button>American</button></SwiperSlide>
        <SwiperSlide data-history="Slide 2" className=' w-[140px] h-[140px]  rounded-full Kid-Friendly text-[#fff] font-semibold'><button>Kid-Friendly</button></SwiperSlide>
        <SwiperSlide data-history="3" className='w-[140px] h-[140px]  rounded-full Italian text-[#fff] font-semibold'><button>Italian</button></SwiperSlide>
        <SwiperSlide data-history="Slide 4" className=' w-[140px] h-[140px]  rounded-full Asian text-[#fff] font-semibold'><button>Asian</button></SwiperSlide>
        <SwiperSlide data-history="5" className=' w-[140px] h-[140px]  rounded-full Mexican text-[#fff] font-semibold'><button>Mexican</button></SwiperSlide>
        <SwiperSlide data-history="Slide 6" className=' w-[140px] h-[140px]  rounded-full Southern text-[#fff] font-semibold'><button>Southern & Soul Food</button></SwiperSlide>
        <SwiperSlide data-history="7" className=' w-[140px] h-[140px]  rounded-full French text-[#fff] font-semibold'><button>French</button></SwiperSlide>
        <SwiperSlide data-history="1" className=' w-[140px] h-[140px]  rounded-full Southwestern text-[#fff] font-semibold'><button>Southwestern</button></SwiperSlide>
        <SwiperSlide data-history="Slide 2" className=' w-[140px] h-[140px]  rounded-full Barbecue text-[#fff] font-semibold'><button>Barbecue</button></SwiperSlide>
        <SwiperSlide data-history="3" className=' w-[140px] h-[140px]  rounded-full Indian text-[#fff] font-semibold'><button>Indian</button></SwiperSlide>
        <SwiperSlide data-history="Slide 4" className=' w-[140px] h-[140px]  rounded-full Chinese text-[#fff] font-semibold'><button>Chinese</button></SwiperSlide>
        <SwiperSlide data-history="5" className=' w-[140px] h-[140px]  rounded-full Cajun text-[#fff] font-semibold'><button>Cajun & Creole</button></SwiperSlide>
        <SwiperSlide data-history="Slide 6" className=' w-[140px] h-[140px]  rounded-full Mediterranean text-[#fff] font-semibold'><button>Mediterranean</button></SwiperSlide>
        <SwiperSlide data-history="7" className=' w-[140px] h-[140px]  rounded-full Greek text-[#fff] font-semibold'><button>Greek</button></SwiperSlide>
        <SwiperSlide data-history="1" className=' w-[140px] h-[140px]  rounded-full English text-[#fff] font-semibold'><button>English</button></SwiperSlide>
        <SwiperSlide data-history="Slide 2" className=' w-[140px] h-[140px]  rounded-full Spanish text-[#fff] font-semibold'><button>Spanish</button></SwiperSlide>
        <SwiperSlide data-history="3" className=' w-[140px] h-[140px]  rounded-full Thai text-[#fff] font-semibold'><button>Thai</button></SwiperSlide>
        <SwiperSlide data-history="Slide 4" className=' w-[140px] h-[140px]  rounded-full German text-[#fff] font-semibold '><button>German</button></SwiperSlide>
        <SwiperSlide data-history="5" className=' w-[140px] h-[140px]  rounded-full Moroccan text-[#fff] font-semibold'><button>Moroccan</button></SwiperSlide>
        <SwiperSlide data-history="Slide 6" className=' w-[140px] h-[140px]  rounded-full Irish text-[#fff] font-semibold'><button>Irish</button></SwiperSlide>
        <SwiperSlide data-history="7" className=' w-[140px] h-[140px]  rounded-full Japanese text-[#fff] font-semibold'><button>Japanese</button></SwiperSlide>
        <SwiperSlide data-history="1" className=' w-[140px] h-[140px]  rounded-full Cuban text-[#fff] font-semibold'><button>Cuban</button></SwiperSlide>
        <SwiperSlide data-history="Slide 2" className=' w-[140px] h-[140px]  rounded-full Hawaiian'><button>Hawaiian</button></SwiperSlide>
        <SwiperSlide data-history="3" className=' w-[140px] h-[140px]  rounded-full Swedish'><button>Swedish</button></SwiperSlide>
        <SwiperSlide data-history="Slide 4" className=' w-[140px] h-[140px]  rounded-full Hungarian'><button>Hungarian</button></SwiperSlide>
        <SwiperSlide data-history="5" className=' w-[140px] h-[140px]  rounded-full Swedish Portuguese'><button>Portuguese</button></SwiperSlide>
        <SwiperSlide data-history="Slide 6" className=' w-[140px] h-[140px]  rounded-full Brazilian'><button>Brazilian</button></SwiperSlide>
        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-3 absolute left-3 z-50'><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>
        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-3 absolute right-3 z-50'><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></button>
</Swiper>






</div>

   </div> 







  </>
  );
}




      // <Swiper
      //   spaceBetween={50}
      //   slidesPerView={4}
      //   navigation={true}
      //   history={{
      //     key: 'slide',
      //   }}
      //   modules={[Navigation, Pagination, History]}
      //   className="mySwiper"
      // >
      //   <SwiperSlide data-history="1">Slide 1</SwiperSlide>
      //   <SwiperSlide data-history="Slide 2">Slide 2</SwiperSlide>
      //   <SwiperSlide data-history="3">Slide 3</SwiperSlide>
      //   <SwiperSlide data-history="Slide 4">Slide 4</SwiperSlide>
      //   <SwiperSlide data-history="5">Slide 5</SwiperSlide>
      //   <SwiperSlide data-history="Slide 6">Slide 6</SwiperSlide>
      //   <SwiperSlide data-history="7">Slide 7</SwiperSlide>
      //   <SwiperSlide data-history="Slide 8">Slide 8</SwiperSlide>
      //   <SwiperSlide data-history="9">Slide 9</SwiperSlide>
      // </Swiper>