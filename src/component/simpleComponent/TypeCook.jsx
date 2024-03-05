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
        slidesPerView={8}
        navigation={false}
        history={{
          key: 'slide',
        }}
        modules={[Navigation, Pagination, History]}
        className="mySwiper px-16 flex"
      >
        <SwiperSlide data-history="1"><button>Slide 1</button></SwiperSlide>
        <SwiperSlide data-history="Slide 2"><button>Slide 2</button></SwiperSlide>
        <SwiperSlide data-history="3"><button>Slide 3</button></SwiperSlide>
        <SwiperSlide data-history="Slide 4"><button>Slide 4</button></SwiperSlide>
        <SwiperSlide data-history="5"><button>Slide 5</button></SwiperSlide>
        <SwiperSlide data-history="Slide 6"><button>Slide 6</button></SwiperSlide>
        <SwiperSlide data-history="7"><button>Slide 7</button></SwiperSlide>
        <button><svg xmlns="http://www.w3.org/2000/svg" fill='#000000' viewBox="0 0 512 512" className=''><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg></button>
        <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg></button>
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