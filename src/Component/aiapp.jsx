import React  from "react";
const Aiapp = () => {
    return ( 
        <>
            <div className="container relative mx-auto flex justify-center h-60 my-10 pb-36">
                <div className="pin h-100">
                    <img src="https://www.notion.so/front-static/pages/product/super-duper/pin.png" className="w-24" alt="" />
                </div>
                <div className="flex justify-center items-center lg:w-2/5 md:w-3/4 px-3   bg-slate-50 -z-50 mx-auto py-4 h-40  -rotate-3 absolute top-20 flex-col ">
                    <p className="text-4xl font-semibold text-center">"Your AI everything app."</p>
                    <span className="text-center font-bold text-xl">forbes</span>
                </div>
            </div>
        </>
     );
}
 
export default Aiapp;