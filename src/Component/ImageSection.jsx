import React from "react";
const ImageSection = ({image}) => {
    return ( 
        <>
            <div className="container p-5">
                <img src={image} className="container border rounded-2xl" alt="" />
            </div>
        </>
     );
}
 
export default ImageSection;