import React from "react";
import Header from "./header";
import WorkContent from "./WorkContent";
const Work = () => {
    return ( 
        <>
        <div className="container py-10 mx-auto">
            <div className="header">
                <Header headertext={"Everything you need to do your best work."}/>

                <WorkContent/>
            </div>
        </div>
        </>
     );
}
 
export default Work;