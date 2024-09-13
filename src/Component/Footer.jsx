import React from "react";
import logo from "../Image/logo.png";
const Footer = () => {
  const company = [
    "About Us",
    "Careers",
    "Security",
    "Status",
    "Terms & Privacy",
  ];
  const Download = [
    "iOS & Android",
    "Mac & Windows",
    "Calendar",
    "Web Clipper",
  ];
  const Resources = [
    "Help Center",
    "Pricing",
    "Blog",
    "Community",
    "Integrations",
    "Templates",
    "Affiliates",
    "Web Clipper",
  ];
  const Notion = [
    "Enterprise",
    "Small Business",
    "Personal",
    
  ];
  return (
    <>
      <div className="border"></div>
      <div className="container mx-auto py-10">
        <div className="grid md:grid-cols-5 gap-5 grid-cols-2">
          <div className="first">
            <div className="nav-logo  flex items-center h-10 ">
              <img src={logo} alt="" className="w-11 " />
              <p className="font-extrabold  font-sans text-xl">Notion</p>
            </div>
            <div className="social-links">
              <div className="flex gap-3 item-center mt-4">
                <div className="border p-3 rounded-full"></div>
                <div className="border p-3 rounded-full"></div>
                <div className="border p-3 rounded-full"></div>
                <div className="border p-3 rounded-full"></div>
              </div>
            </div>

            <div className="lang my-4 flex flex-col gap-3">
              <select
                name=""
                id=""
                className="px-3 w-2/3 bg-slate-100 text-center rounded-lg py-2 border outline-0"
              >
                <option value="English">English</option>
                <option value="English">Francais</option>
                <option value="English">Spanish</option>
              </select>

              <div className="notice">
                <a>Do not sell or Share My Info</a>
                <p>Cookie Setting</p>
              </div>
              <div>
                <p>@2024 Notion Labs, Inc</p>
              </div>
            </div>
          </div>
          <div className="second">
            <h3 className="text-xl font-bold">Company</h3>
            <div className="flex flex-col gap-1 mt-3">
              {company.map((compan, index) => (
                <a key={index} href="#" className="flex">
                  {compan}
                </a>
              ))}
            </div>
          </div>

          <div className="second">
            <h3 className="text-xl font-bold">Download</h3>
            <div className="flex flex-col gap-1 mt-3">
              {Download.map((compan, index) => (
                <a key={index} href="#" className="flex">
                  {compan}
                </a>
              ))}
            </div>
          </div>

          <div className="second">
            <h3 className="text-xl font-bold">Resources</h3>
            <div className="flex flex-col gap-1 mt-3">
              {Resources.map((compan, index) => (
                <a key={index} href="#" className="flex">
                  {compan}
                </a>
              ))}
            </div>
          </div>
          <div className="second">
            <h3 className="text-xl font-bold">Notion for</h3>
            <div className="flex flex-col gap-1 mt-3">
              {Notion.map((compan, index) => (
                <a key={index} href="#" className="flex">
                  {compan}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
