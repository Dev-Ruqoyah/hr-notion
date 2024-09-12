import React from "react";
const NavLinks = ({icon,header,subheader}) => {
    return ( 
        <>
            <p className="hover:bg-slate-200">
                      <a
                        href="#"
                        className="flex items-center justify-start gap-2 ms-3  "
                      >
                        <div className="icon border p-1 rounded-md">
                          {icon}
                        </div>
                        <div className="words flex flex-col justify-center">
                          <li className="text-md font-semibold m-0 p-0">{header}</li>
                          <p className="m-0 p-0">{subheader}</p>
                        </div>
                      </a>
                    </p>
        </>
     );
}
 
export default NavLinks;