import React, { useState } from "react";
import yummlyLogo from '../image/yummlyLogo.png'
import whirle from '../image/whirle.webp'
import './Component.css'

function LeftMenu(){
const [checked,setChecked] = useState(false);
const [meal,setMeal] = useState(false);
const [rexipes,setrexipes] = useState(true);
const [articles,setArticles] = useState(false);
const [saved,setSaveed] = useState(false);
const [tools,setTools] = useState(false);
const [app,setApp] = useState(false);
const [overview,setOverview] = useState(false);
const [support,setSupport] = useState(false);
const [planning,setPlaning] = useState(true);
const [guides,setGuides] = useState(false);
const [feed,setFeed] = useState(false);
const [browse,setBrowser] = useState(false);
const [prores,setProres] = useState(false);
const [guidedProres,setGuidesProres] = useState(false);
const [bookmarket,setBookmarket] = useState(false);
const [yumButton,setYumButton] = useState(false);
const [about,setAbout] = useState(false);
const [aboutUs,setAboutUs] = useState(false);
const [careers,setCareers] = useState(false);
const [contct,setContact] = useState(false);
const [faq,setFaq] = useState(false);

const checkLink = (el)=>{
    setChecked(!checked);
    setMeal(false);
    setrexipes(false);
    setArticles(false);
    setSaveed(false);
    setTools(false);
    setApp(false);
    setPlaning(false);
    setGuides(false);
    setFeed(false);
    setProres(false);
    setBrowser(false);
    setGuidesProres(false);
    setBookmarket(false);
    setYumButton(false);
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
    setOverview(false);
    setSupport(false);
    setFeed(false);
    setProres(false);
    setBrowser(false);
    setGuidesProres(false);
    setBookmarket(false);
    setYumButton(false);
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
    setOverview(false);
    setSupport(false);
    setPlaning(false);
    setGuides(false);
    setBookmarket(false);
    setYumButton(false);
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
    setOverview(false);
    setSupport(false);
    setPlaning(false);
    setGuides(false);
    setFeed(false);
    setProres(false);
    setBrowser(false);
    setGuidesProres(false);
    setBookmarket(false);
    setYumButton(false);
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
    setOverview(false);
    setSupport(false);
    setPlaning(false);
    setGuides(false);
    setFeed(false);
    setProres(false);
    setBrowser(false);
    setGuidesProres(false);
    setBookmarket(false);
    setYumButton(false);
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
    setOverview(false);
    setSupport(false);
    setPlaning(false);
    setGuides(false);
    setFeed(false);
    setProres(false);
    setBrowser(false);
    setGuidesProres(false);
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
    setOverview(false);
    setSupport(false);
    setPlaning(false);
    setGuides(false);
    setFeed(false);
    setProres(false);
    setBrowser(false);
    setGuidesProres(false);
    setBookmarket(false);
    setYumButton(false);
    console.log("Yes checked"); 
}



const overviewLink = (el)=>{
    setOverview(!overview);
    setSupport(false);
    setPlaning(false);
    setGuides(false);
    setFeed(false);
    setProres(false);
    setBrowser(false);
    setGuidesProres(false);
    setBookmarket(false);
    setYumButton(false);
    setMeal(false);
    setrexipes(false);
    setArticles(false);
    setSaveed(false);
    setTools(false);
    setApp(false);
    console.log("Yes checked"); 
}

const supportLink = (el)=>{
    setOverview(false);
    setSupport(!support);
    setPlaning(false);
    setGuides(false);
    setFeed(false);
    setBrowser(false);
    setGuidesProres(false);
    setProres(false);
    setBookmarket(false);
    setYumButton(false);
    setMeal(false);
    setrexipes(false);
    setArticles(false);
    setSaveed(false);
    setTools(false);
    setApp(false);
    console.log("Yes checked"); 
}

const planingLink = (el)=>{
    setOverview(false);
    setSupport(false);
    setPlaning(!planning);
    setGuides(false);
    setFeed(false);
    setProres(false);
    setBrowser(false);
    setGuidesProres(false);
    setBookmarket(false);
    setYumButton(false);
    setChecked(false);
    setrexipes(false);
    setArticles(false);
    setSaveed(false);
    setTools(false);
    setApp(false);
    console.log("Yes checked"); 
}

const guidesLink = (el)=>{
    setOverview(false);
    setSupport(false);
    setPlaning(false);
    setGuides(!guides);
    setFeed(false);
    setProres(false);
    setBrowser(false);
    setGuidesProres(false);
    setBookmarket(false);
    setYumButton(false);
    setChecked(false);
    setrexipes(false);
    setArticles(false);
    setSaveed(false);
    setTools(false);
    setApp(false);
    console.log("Yes checked"); 
}

const feedLink = (el)=>{
    setOverview(false);
    setSupport(false);
    setPlaning(false);
    setGuides(false);
    setFeed(!feed);
    setProres(false);
    setBrowser(false);
    setGuidesProres(false);
    setBookmarket(false);
    setYumButton(false);
    setChecked(false);
    setMeal(false);
    setArticles(false);
    setSaveed(false);
    setTools(false);
    setApp(false);
    console.log("Yes checked"); 
}

const browseLink = (el)=>{
    setOverview(false);
    setSupport(false);
    setPlaning(false);
    setGuides(false);
    setFeed(false);
    setBrowser(!browse);
    setGuidesProres(false);
    setProres(false);
    setBookmarket(false);
    setYumButton(false);
    setChecked(false);
    setMeal(false);
    setArticles(false);
    setSaveed(false);
    setTools(false);
    setApp(false);
    console.log("Yes checked"); 
}

const proresLink = (el)=>{
    setOverview(false);
    setSupport(false);
    setPlaning(false);
    setGuides(false);
    setFeed(false);
    setProres(!prores);
    setBrowser(false);
    setGuidesProres(false);
    setBookmarket(false);
    setYumButton(false);
    setChecked(false);
    setMeal(false);
    setArticles(false);
    setSaveed(false);
    setTools(false);
    setApp(false);
    console.log("Yes checked"); 
}

const guidedProresLink = (el)=>{
    setOverview(false);
    setSupport(false);
    setPlaning(false);
    setGuides(false);
    setFeed(false);
    setProres(false);
    setBrowser(false);
    setGuidesProres(!guidedProres);
    setBookmarket(false);
    setYumButton(false);
    setMeal(false);
    setArticles(false);
    setSaveed(false);
    setTools(false);
    setApp(false);
    console.log("Yes checked"); 
}

const bookmarketLink = (el)=>{
    setOverview(false);
    setSupport(false);
    setPlaning(false);
    setGuides(false);
    setFeed(false);
    setProres(false);
    setBrowser(false);
    setGuidesProres(false);
    setBookmarket(!bookmarket);
    setYumButton(false);
    setChecked(false);
    setMeal(false);
    setrexipes(false);
    setArticles(false);
    setSaveed(false);
    setApp(false);
    console.log("Yes checked"); 
}


const yumButtonLink = (el)=>{
    setOverview(false);
    setSupport(false);
    setPlaning(false);
    setGuides(false);
    setFeed(false);
    setProres(false);
    setBrowser(false);
    setGuidesProres(false);
    setBookmarket(false);
    setYumButton(!yumButton);
    setChecked(false);
    setMeal(false);
    setrexipes(false);
    setArticles(false);
    setSaveed(false);
    setApp(false);
    console.log("Yes checked"); 
}


return(
<>
<div className="top-0 left-0 absolute sl:w-[40%] sm:w-[46%]  md:w-[30%] lg:w-[20%] xl:w-[15%] shadow-xl h-full ">
<div className="bg-[#fff] px-3 pt-10   ">
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
{overview ?  <a className="text-green" onClick={()=> overviewLink()}>Overview</a> : <a className="text-[#707070]" onClick={()=> overviewLink()}>Overview</a>}
{support  ?  <a className="text-green"  onClick={()=> supportLink()}>Support</a>  : <a className="text-[#707070]" onClick={()=> supportLink()}>Support</a>}
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
{planning ? <a className="text-green"  onClick={()=> planingLink()}>Meal Planner</a> : <a className="text-[#707070]"  onClick={()=> planingLink()}>Meal Planner</a>}
{guides ? <a className="text-green"  onClick={()=> guidesLink()}>Meal Planner Guides</a> : <a className="text-[#707070]"  onClick={()=> guidesLink()}>Meal Planner Guides</a>}
</div> : ""}
    </div>
        <div className="flex flex-col border-b-[1px] border-[#dddddd] pb-1">
        <div className="flex font-bold justify-between cursor-pointer pb-2 pt-2 items-center px-1 select-none"  onClick={()=> rexipesLink()}>
        {rexipes ? <h3 className="text-[14px] text-green hover:text-green ">Recipes</h3> : <h3 className="text-[14px] hover:text-green ">Recipes</h3>}
        {rexipes ? <svg xmlns="http://www.w3.org/2000/svg" fill="#3a9691"  viewBox="0 0 320 512" className="w-2 font-semibold transition rotate-[90deg]"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> :  <svg xmlns="http://www.w3.org/2000/svg" fill="#3a9691"  viewBox="0 0 320 512" className="w-2 font-semibold transition"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>}
        </div>
        {rexipes ?
<div className="flex flex-col gap-2 my-2 text-small cursor-pointer transition px-1.5 ">
{feed ? <a className="text-green"  onClick={()=> feedLink()}>My Feed</a> : <a className="text-[#707070]"  onClick={()=> feedLink()}>My Feed</a>}
{browse ?  <a className="text-green"  onClick={()=> browseLink()}>Browse</a> : <a className="text-[#707070]"  onClick={()=> browseLink()}>Browse</a>}
{prores ? <a className="text-green"  onClick={()=> proresLink()}>Pro Resipes</a> : <a className="text-[#707070]"  onClick={()=> proresLink()}>Pro Resipes</a>}
{guidedProres ? <a className="text-green"  onClick={()=> guidedProresLink()}>Guided Resipes</a> :  <a className="text-[#707070]"  onClick={()=> guidedProresLink()}>Guided Resipes</a>}
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
{bookmarket ? <a className="text-green"  onClick={()=> bookmarketLink()}>Bookmarklet</a> : <a className="text-[#707070]"  onClick={()=> bookmarketLink()}>Bookmarklet</a>}
{yumButton ?  <a className="text-green"  onClick={()=> yumButtonLink()}>Yum Button</a> : <a className="text-[#707070]"  onClick={()=> yumButtonLink()}>Yum Button</a>}
</div> : ""}
</div>

<div className="flex font-bold justify-between cursor-pointer border-b-[1px] border-[#dddddd] pb-2 pt-2 items-center px-1 select-none"  onClick={()=> appLink()}>
        {app ? <h3 className="text-[14px] text-green hover:text-green ">Download the Yummly App</h3> : <h3 className="text-[14px] hover:text-green ">Download the Yummly App</h3>}
        </div>

    </div>

</div>


<div className="absolute left-0 bottom-0 bg-[#f5f5f5] w-full">
<div className="px-4 py-2">

<div className="">
        <div className="flex flex-col border-b-[1px] border-[#dddddd] pb-1">
<div className="flex font-bold justify-between cursor-pointer pb-2 pt-2 items-center px-1 select-none"  onClick={()=> toolsLink()}>
        {tools ? <h3 className="text-[14px] text-green hover:text-green ">More Tools</h3> : <h3 className="text-[14px] hover:text-green ">More Tools</h3>}
        {tools ? <svg xmlns="http://www.w3.org/2000/svg" fill="#3a9691"  viewBox="0 0 320 512" className="w-2 font-semibold transition rotate-[90deg]"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> :  <svg xmlns="http://www.w3.org/2000/svg" fill="#3a9691"  viewBox="0 0 320 512" className="w-2 font-semibold transition"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>}
        </div>
{tools ? 
<div className="flex flex-col gap-2 my-2 text-small cursor-pointer transition px-1.5 ">
{bookmarket ? <a className="text-green"  onClick={()=> bookmarketLink()}>Bookmarklet</a> : <a className="text-[#707070]"  onClick={()=> bookmarketLink()}>Bookmarklet</a>}
{yumButton ?  <a className="text-green"  onClick={()=> yumButtonLink()}>Yum Button</a> : <a className="text-[#707070]"  onClick={()=> yumButtonLink()}>Yum Button</a>}
{bookmarket ? <a className="text-green"  onClick={()=> bookmarketLink()}>Bookmarklet</a> : <a className="text-[#707070]"  onClick={()=> bookmarketLink()}>Bookmarklet</a>}
{yumButton ?  <a className="text-green"  onClick={()=> yumButtonLink()}>Yum Button</a> : <a className="text-[#707070]"  onClick={()=> yumButtonLink()}>Yum Button</a>}
</div> : ""}
</div>
</div>


<div className="flex flex-col gap-2.5 my-2">
<a className="text-[12px] text-[#8a8a8a]" href="https://www.yummly.com/privacy">privacy</a>
<a className="text-[12px] text-[#8a8a8a]" href="https://www.yummly.com/privacy">Terms and Conditions</a>
<a className="text-[12px] text-[#8a8a8a]" href="https://www.yummly.com/copyright">Copyright</a>
<a className="text-[12px] text-[#8a8a8a]" href="https://www.yummly.com/privacy#advertising">Interest-Based Ads</a>
<a className="text-[12px] text-[#8a8a8a]" >Do Not Sell My Personal Information</a>
</div>


<div className="flex w-full justify-between items-center gap-2.5 my-3">
<a className="text-[12px] text-[#8a8a8a]" href="https://www.facebook.com/yummly"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#707070" className="w-2.5"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></a>
<a className="text-[12px] text-[#8a8a8a]" href="https://www.pinterest.com/yummly/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#707070" className="w-3"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/></svg></a>
<a className="text-[12px] text-[#8a8a8a]" href="https://www.instagram.com/yummly/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#707070" className="w-3.5"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
<a className="text-[12px] text-[#8a8a8a]" href="https://www.youtube.com/@Yummly/videos"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#707070" className="w-4"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg></a>
<a className="text-[12px] text-[#8a8a8a]" href="https://www.tiktok.com/search?q=mantoj&t=1708511256618"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#707070" className="w-3.5"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg></a>
</div> 

<div className="">
    <p className="text-[9px] mt-3.5">®/™©2024 Yummly. All rights reserved.</p>
    <a className="text-[11px] flex gap-1.5 mt-3 mb-2">port by <img src={whirle}  className=""/> </a>
</div>




</div>
</div>










</div>






















</>

)








}

export default LeftMenu
























