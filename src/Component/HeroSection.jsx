import React from "react";
import SideContent from "./SideContent";
import hero from '../Image/hero.webp'
const HeroSection = () => {
    return ( 
        <>
            <div className="container mx-auto py-8"> 
                <div className="grid md:grid-cols-2 grid-cols-1 place-content-center place-items-end  px-4">
                    <SideContent  title={"Write. Plan. Collaborate."} subtitle={"In Notion, work feels better (and gets done faster). With a little help from AI."} text={"Get Notion Free"} texte={"Request A Demo"}/>
                    <div className="side-image ">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
        
        </>
     );
}
 
export default HeroSection;