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
        
<div className="bg-[#ccc]">
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


    </div>
</div>









</div>






















</>

)








}

export default LeftMenu
























