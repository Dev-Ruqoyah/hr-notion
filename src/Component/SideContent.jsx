import React from "react";
import Trusted from "./Trusted";

const SideContent = ({title,subtitle,text,texte,section}) => {
    return ( 
        <>
            <div>
                <div className="flex flex-col justify-center gap-3 h-full py-4 my-auto">
                    <p className="bg-slate-400">{section}</p>
                 <p className="md:text-8xl text-6xl font-semibold text-wrap">{title}</p>
                 <p className="text-xl text-wrap md:w-4/5">{subtitle}</p>
                 <div className="flex gap-3">
                    <button className="bg-colorPrimary hover:bg-blue-700  text-white px-3 py-2 rounded-md">{text}</button>
                    <button className="text-colorPrimary hover:bg-colorPrimary hover:text-white bg-colorlight  px-3 py-2 rounded-md">{texte}</button>

                 </div>
                 <Trusted/>
                </div>
            </div>
        </>
     );
}
 
export default SideContent;