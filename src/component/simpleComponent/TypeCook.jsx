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
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function TypeCook() {

const [statColor,setStatColor] = useState("")
const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];
const SearchRecips = useRef();

const refFocus = ()=>{
  SearchRecips.current.focus(); 
}

const bgColorfunc = ()=>{
  setStatColor(!statColor);
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
        slidesPerView={0}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper  pl-16 pr-20 flex relative my-3 z-50"
>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "american"}  font-semibold`} onClick={()=> bgColorfunc()}><button>American</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Kid-Friendly"} font-semibold`} onClick={()=> bgColorfunc()}><button>Kid-Friendly</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Italian"} font-semibold`} onClick={()=> bgColorfunc()}><button>Italian</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Asian"} font-semibold`} onClick={()=> bgColorfunc()}><button>Asian</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Mexican"} font-semibold`} onClick={()=> bgColorfunc()}><button>Mexican</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Southern"} font-semibold px-5 `} onClick={()=> bgColorfunc()}><button>Southern & Soul Food</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "French"} font-semibold`} onClick={()=> bgColorfunc()}><button>French</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Southwestern"} font-semibold`} onClick={()=> bgColorfunc()}><button>Southwestern</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Barbecue"} font-semibold`} onClick={()=> bgColorfunc()}><button>Barbecue</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Indian"} font-semibold`} onClick={()=> bgColorfunc()}><button>Indian</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Chinese"} font-semibold`} onClick={()=> bgColorfunc()}><button>Chinese</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Cajun"} font-semibold`} onClick={()=> bgColorfunc()}><button>Cajun & Creole</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Mediterranean"} font-semibold`} onClick={()=> bgColorfunc()}><button>Mediterranean</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Greek"} font-semibold`} onClick={()=> bgColorfunc()}><button>Greek</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "English"} font-semibold`} onClick={()=> bgColorfunc()}><button>English</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Spanish"} font-semibold`} onClick={()=> bgColorfunc()}><button>Spanish</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Thai"} font-semibold`} onClick={()=> bgColorfunc()}><button>Thai</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "German"} font-semibold `} onClick={()=> bgColorfunc()}><button>German</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Moroccan"} font-semibold`} onClick={()=> bgColorfunc()}><button>Moroccan</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Irish"} font-semibold`} onClick={()=> bgColorfunc()}><button>Irish</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Japanese"} font-semibold`} onClick={()=> bgColorfunc()}><button>Japanese</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Cuban"} font-semibold`} onClick={()=> bgColorfunc()}><button>Cuban</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Hawaiian"} font-semibold`} onClick={()=> bgColorfunc()}><button>Hawaiian</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Swedish"} font-semibold`} onClick={()=> bgColorfunc()}><button>Swedish</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Hungarian"} font-semibold`} onClick={()=> bgColorfunc()} ><button>Hungarian</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer  rounded-full   text-[#fff] ${statColor ? "bg-[#3a9691]" : "Portuguese"} font-semibold`} onClick={()=> bgColorfunc()}><button>Portuguese</button></SwiperSlide>
        <SwiperSlide  className={` w-[140px] h-[140px] mx-5 cursor-pointer rounded-full  text-[#fff] ${statColor ? "bg-[#3a9691]" : "Brazilian"} font-semibold`} onClick={()=> bgColorfunc()}><button>Brazilian</button></SwiperSlide>
        <span className='bg-[#f6f6f6] w-7 h-full absolute left-0 '></span>
        <span></span>
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
      // // >
      // <SwiperSlide data-history="1" className=' w-[140px] h-[140px]  rounded-full american text-[#fff] font-semibold'><button>American</button></SwiperSlide>
      // <SwiperSlide data-history="Slide 2" className=' w-[140px] h-[140px]  rounded-full Kid-Friendly text-[#fff] font-semibold'><button>Kid-Friendly</button></SwiperSlide>
      // <SwiperSlide data-history="3" className='w-[140px] h-[140px]  rounded-full Italian text-[#fff] font-semibold'><button>Italian</button></SwiperSlide>
      // <SwiperSlide data-history="Slide 4" className=' w-[140px] h-[140px]  rounded-full Asian text-[#fff] font-semibold'><button>Asian</button></SwiperSlide>
      // <SwiperSlide data-history="5" className=' w-[140px] h-[140px]  rounded-full Mexican text-[#fff] font-semibold'><button>Mexican</button></SwiperSlide>
      // <SwiperSlide data-history="Slide 6" className=' w-[140px] h-[140px]  rounded-full Southern text-[#fff] font-semibold px-5'><button>Southern & Soul Food</button></SwiperSlide>
      // <SwiperSlide data-history="7" className=' w-[140px] h-[140px]  rounded-full French text-[#fff] font-semibold'><button>French</button></SwiperSlide>
      // <SwiperSlide data-history="1" className=' w-[140px] h-[140px]  rounded-full Southwestern text-[#fff] font-semibold'><button>Southwestern</button></SwiperSlide>
      // <SwiperSlide data-history="Slide 2" className=' w-[140px] h-[140px]  rounded-full Barbecue text-[#fff] font-semibold'><button>Barbecue</button></SwiperSlide>
      // <SwiperSlide data-history="3" className=' w-[140px] h-[140px]  rounded-full Indian text-[#fff] font-semibold'><button>Indian</button></SwiperSlide>
      // <SwiperSlide data-history="Slide 4" className=' w-[140px] h-[140px]  rounded-full Chinese text-[#fff] font-semibold'><button>Chinese</button></SwiperSlide>
      // <SwiperSlide data-history="5" className=' w-[140px] h-[140px]  rounded-full Cajun text-[#fff] font-semibold'><button>Cajun & Creole</button></SwiperSlide>
      // <SwiperSlide data-history="Slide 6" className=' w-[140px] h-[140px]  rounded-full Mediterranean text-[#fff] font-semibold'><button>Mediterranean</button></SwiperSlide>
      // <SwiperSlide data-history="7" className=' w-[140px] h-[140px]  rounded-full Greek text-[#fff] font-semibold'><button>Greek</button></SwiperSlide>
      // <SwiperSlide data-history="1" className=' w-[140px] h-[140px]  rounded-full English text-[#fff] font-semibold'><button>English</button></SwiperSlide>
      // <SwiperSlide data-history="Slide 2" className=' w-[140px] h-[140px]  rounded-full Spanish text-[#fff] font-semibold'><button>Spanish</button></SwiperSlide>
      // <SwiperSlide data-history="3" className=' w-[140px] h-[140px]  rounded-full Thai text-[#fff] font-semibold'><button>Thai</button></SwiperSlide>
      // <SwiperSlide data-history="Slide 4" className=' w-[140px] h-[140px]  rounded-full German text-[#fff] font-semibold '><button>German</button></SwiperSlide>
      // <SwiperSlide data-history="5" className=' w-[140px] h-[140px]  rounded-full Moroccan text-[#fff] font-semibold'><button>Moroccan</button></SwiperSlide>
      // <SwiperSlide data-history="Slide 6" className=' w-[140px] h-[140px]  rounded-full Irish text-[#fff] font-semibold'><button>Irish</button></SwiperSlide>
      // <SwiperSlide data-history="7" className=' w-[140px] h-[140px]  rounded-full Japanese text-[#fff] font-semibold'><button>Japanese</button></SwiperSlide>
      // <SwiperSlide data-history="1" className=' w-[140px] h-[140px]  rounded-full Cuban text-[#fff] font-semibold'><button>Cuban</button></SwiperSlide>
      // <SwiperSlide data-history="Slide 2" className=' w-[140px] h-[140px]  rounded-full Hawaiian text-[#fff] font-semibold'><button>Hawaiian</button></SwiperSlide>
      // <SwiperSlide data-history="3" className=' w-[140px] h-[140px]  rounded-full Swedish text-[#fff] font-semibold'><button>Swedish</button></SwiperSlide>
      // <SwiperSlide data-history="Slide 4" className=' w-[140px] h-[140px]  rounded-full Hungarian text-[#fff] font-semibold'><button>Hungarian</button></SwiperSlide>
      // <SwiperSlide data-history="5" className=' w-[140px] h-[140px]  rounded-full Swedish Portuguese text-[#fff] font-semibold'><button>Portuguese</button></SwiperSlide>
      // <SwiperSlide data-history="Slide 6" className=' w-[140px] h-[140px]  rounded-full Brazilian text-[#fff] font-semibold'><button>Brazilian</button></SwiperSlide>
      // // </Swiper>