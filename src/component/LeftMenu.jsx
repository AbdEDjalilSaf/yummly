import React, { useState } from "react";
import yummlyLogo from '../image/yummlyLogo.png'


function LeftMenu(){
const [checked,setChecked] = useState(false);

console.log("No checked");


const checkLink = ()=>{
    setChecked(!checked);
    console.log("Yes checked");
}



return(
<>
<div className="top-0 left-0 absolute sl:w-[40%] sm:w-[46%] md:w-[30%] lg:w-[20%] xl:w-[15%] shadow-xl h-full ">
<div className="bg-[#fff] px-3 pt-10">
    <div className="flex flex-col justify-center items-center gap-5 ">
<img src={yummlyLogo} className="bg-red-500 w-[88px] flex justify-center items-center"/>
<button className="text-[14px] text-center py-[10px] px-8 rounded-full font-bold bg-green hover:bg-[#3f9f9f] text-[#fff]  ">Sign Up / Log In</button>
    </div>
    <div className="mt-8 ">
        <div className="flex font-bold justify-between cursor-pointer items-center px-1 select-none  {checked && text-green} " onClick={()=> checkLink()}>
<h3 className="text-[14px]">Smart Thermometer</h3>
<svg xmlns="http://www.w3.org/2000/svg" fill="#3a9691"  viewBox="0 0 320 512" className="w-2 font-semibold "><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
        </div>
    </div>
</div>









</div>






















</>

)








}

export default LeftMenu
























