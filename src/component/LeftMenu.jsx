import React, { useState } from "react";
import yummlyLogo from '../image/yummlyLogo.png'


function LeftMenu(){
const [checked,setChecked] = useState(false);
const [meal,setMeal] = useState(false);
const [rexipes,setrexipes] = useState(true);
const [articles,setArticles] = useState(false);
const [saved,setSaveed] = useState(false);
const [tools,setTools] = useState(false);
const [app,setApp] = useState(false);




const checkLink = (el)=>{
    setChecked(!checked);
    setMeal(false);
    setrexipes(false);
    setArticles(false);
    setSaveed(false);
    setTools(false);
    setApp(false);
    console.log("Yes checked"); 
}

const MealLink = (el)=>{
    setMeal(!meal);
    setChecked(false);
    setrexipes(false);
    setArticles(false);
    setSaveed(false);
    setTools(false);
    setApp(false);
    console.log("Yes checked"); 
}

const rexipesLink = (el)=>{
    setrexipes(!rexipes);
    setChecked(false);
    setMeal(false);
    setArticles(false);
    setSaveed(false);
    setTools(false);
    setApp(false);
    console.log("Yes checked"); 
}

const articlesLink = (el)=>{
    setChecked(false);
    setMeal(false);
    setrexipes(false);
    setArticles(!articles);
    setSaveed(false);
    setTools(false);
    setApp(false);
    console.log("Yes checked"); 
}

const savedLink = (el)=>{
    setChecked(false);
    setMeal(false);
    setrexipes(false);
    setArticles(false);
    setSaveed(!saved);
    setTools(false);
    setApp(false);
    console.log("Yes checked"); 
}

const toolsLink = (el)=>{
    setChecked(false);
    setMeal(false);
    setrexipes(false);
    setArticles(false);
    setSaveed(false);
    setTools(!tools);
    setApp(false);
    console.log("Yes checked"); 
}

const appLink = (el)=>{
    setChecked(false);
    setMeal(false);
    setrexipes(false);
    setArticles(false);
    setSaveed(false);
    setTools(false);
    setApp(!app);
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
    <div className="flex flex-col border-b-[1px] border-[#dddddd] pb-1">
        <div className="flex font-bold justify-between cursor-pointer  pb-2 pt-2 items-center px-1 select-none"  onClick={()=> checkLink()}>
        {checked ? <h3 className="text-[14px] text-green hover:text-green ">Smart Thermometer</h3> : <h3 className="text-[14px] hover:text-green ">Smart Thermometer</h3>}
        {checked ? <svg xmlns="http://www.w3.org/2000/svg" fill="#3a9691"  viewBox="0 0 320 512" className="w-2 font-semibold transition rotate-[90deg]"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> :  <svg xmlns="http://www.w3.org/2000/svg" fill="#3a9691"  viewBox="0 0 320 512" className="w-2 font-semibold transition"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>}
        </div>
{checked ?
<div className="flex flex-col gap-2 my-2 text-small cursor-pointer transition px-1.5">
<a className="text-[#707070]">Overview</a>
<a className="text-[#707070]">Support</a>
</div>
: ""}
</div>
    <div className="flex flex-col border-b-[1px] border-[#dddddd] pb-1">
        <div className="flex font-bold justify-between cursor-pointer  pb-2 pt-2 items-center px-1 select-none"  onClick={()=> MealLink()}>
        {meal ? <h3 className="text-[14px] text-green hover:text-green ">Meal Planning</h3> : <h3 className="text-[14px] hover:text-green ">Meal Planning</h3>}
        {meal ? <svg xmlns="http://www.w3.org/2000/svg" fill="#3a9691"  viewBox="0 0 320 512" className="w-2 font-semibold transition rotate-[90deg]"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> :  <svg xmlns="http://www.w3.org/2000/svg" fill="#3a9691"  viewBox="0 0 320 512" className="w-2 font-semibold transition"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>}
        </div>
        {meal ?
<div className="flex flex-col gap-2 my-2 text-small cursor-pointer transition px-1.5">
<a className="text-[#707070]">Meal Planner</a>
<a className="text-[#707070]">Meal Planner Guides</a>
</div> : ""}
    </div>
        <div className="flex flex-col border-b-[1px] border-[#dddddd] pb-1">
        <div className="flex font-bold justify-between cursor-pointer pb-2 pt-2 items-center px-1 select-none"  onClick={()=> rexipesLink()}>
        {rexipes ? <h3 className="text-[14px] text-green hover:text-green ">Recipes</h3> : <h3 className="text-[14px] hover:text-green ">Recipes</h3>}
        {rexipes ? <svg xmlns="http://www.w3.org/2000/svg" fill="#3a9691"  viewBox="0 0 320 512" className="w-2 font-semibold transition rotate-[90deg]"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> :  <svg xmlns="http://www.w3.org/2000/svg" fill="#3a9691"  viewBox="0 0 320 512" className="w-2 font-semibold transition"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>}
        </div>
        {rexipes ?
<div className="flex flex-col gap-2 my-2 text-small cursor-pointer transition px-1.5 ">
<a className="text-[#707070]">My Feed</a>
<a className="text-[#707070]">Browse</a>
<a className="text-[#707070]">Pro Resipes</a>
<a className="text-[#707070]">Guided Resipes</a>
</div> : ""}
</div>

        <div className="flex font-bold justify-between cursor-pointer border-b-[1px] border-[#dddddd] pb-2 pt-2 items-center px-1 select-none"  onClick={()=> articlesLink()}>
        {articles ? <h3 className="text-[14px] text-green hover:text-green ">Articles</h3> : <h3 className="text-[14px] hover:text-green ">Articles</h3>}
        </div>

        <div className="flex font-bold justify-between cursor-pointer border-b-[1px] border-[#dddddd] pb-2 pt-2 items-center px-1 select-none"  onClick={()=> savedLink()}>
        {saved ? <h3 className="text-[14px] text-green hover:text-green ">Saved Recipes</h3> : <h3 className="text-[14px] hover:text-green ">Saved Recipes</h3>}
        </div>


<div className="flex flex-col border-b-[1px] border-[#dddddd] pb-1">
<div className="flex font-bold justify-between cursor-pointer pb-2 pt-2 items-center px-1 select-none"  onClick={()=> toolsLink()}>
        {tools ? <h3 className="text-[14px] text-green hover:text-green ">More Tools</h3> : <h3 className="text-[14px] hover:text-green ">More Tools</h3>}
        {tools ? <svg xmlns="http://www.w3.org/2000/svg" fill="#3a9691"  viewBox="0 0 320 512" className="w-2 font-semibold transition rotate-[90deg]"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> :  <svg xmlns="http://www.w3.org/2000/svg" fill="#3a9691"  viewBox="0 0 320 512" className="w-2 font-semibold transition"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>}
        </div>
{tools ? 
<div className="flex flex-col gap-2 my-2 text-small cursor-pointer transition px-1.5 ">
<a className="text-[#707070]">Bookmarklet</a>
<a className="text-[#707070]">Yum Button</a>
</div> : ""}
</div>

<div className="flex font-bold justify-between cursor-pointer border-b-[1px] border-[#dddddd] pb-2 pt-2 items-center px-1 select-none"  onClick={()=> appLink()}>
        {app ? <h3 className="text-[14px] text-green hover:text-green ">Download the Yummly App</h3> : <h3 className="text-[14px] hover:text-green ">Download the Yummly App</h3>}
        </div>
        
    </div>
</div>









</div>






















</>

)








}

export default LeftMenu
























