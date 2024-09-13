import React from "react";
const Header = ({ headertext }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="header">
          <h4 className="text-6xl w-1/2 font-bold">
            {headertext}
           
          </h4>
        </div>
      </div>
    </>
  );
};

export default Header;
