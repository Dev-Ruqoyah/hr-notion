import React from "react";
const Subsect = ({image,header,subheader}) => {
    return ( 
        <>
        
            <div className="container mx-auto">
                <div className="gr">
                    <div className="flex flex-col">
                        <img src={image} className="w-20" alt="" />
                        <div className="text">
                            <h4 className="text-xl font-bold">{header}</h4>
                            <p className="text-gray-500 text-md">{subheader}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Subsect;