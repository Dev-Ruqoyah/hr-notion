import React from "react";
import Header from "./header";
import notion from '../Image/notion-app.webp'
const Start = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="header">
          <Header headertext={"Get Started."} />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="one my-10 bg-slate-100 rounded-lg">
            <div className="heading py-16 px-4">
             <h3 className="text-5xl font-bold py-3">Notion</h3>
             <div className="btn flex items-center gap-4">
                <button className="bg-colorPrimary px-4 rounded-lg text-white hover:bg-blue-800 py-3 text-md">Try it Free</button>
                <button className="hover:bg-colorPrimary px-5 hover:text-white rounded-lg bg-white border text-blue-800 py-3 text-md">Download Now</button>
             </div>
            </div>
            <div className="image ps-16">
              <img src={notion} className="w-full" alt="" />
            </div>
          </div>
          <div className="one my-10 bg-slate-100 rounded-lg">
            <div className="heading py-16 px-4">
             <h3 className="text-5xl font-bold py-3">Notion Calendar</h3>
             <div className="btn flex items-center gap-4">
                <button className="bg-colorPrimary px-4 rounded-lg text-white hover:bg-blue-800 py-3 text-md">Try it Free</button>
                <button className="hover:bg-colorPrimary px-5 hover:text-white rounded-lg bg-white border text-blue-800 py-3 text-md">Download Now</button>
             </div>
            </div>
            <div className="image ps-16">
              <img src={notion} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
