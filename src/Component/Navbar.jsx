import React, { useState } from "react";
import logo from "../Image/logo.png";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [isOpened, setIsOpened] = useState(true);
  const [isOpene, setIsOpene] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpe, setIsOpe] = useState(true);
  return (
    <>
      <div className="container-sm mx- py-3 px-2 fixed w-full z-40 bg-white top-0 mb-der border-b-2 border-0">
        <div className="navbar flex justify-between items-center gap-3">
          <div className="nav-links flex gap-3">
            <div className="nav-logo  flex items-center h-10 ">
              <img src={logo} alt="" className="w-11 " />
              <p className="font-extrabold  font-sans text-xl">Notion</p>
            </div>
            <div className="dropdown md:block hidden">
              <ul className="flex items-center">
                <div className="one w-18 h-11">
                  <li
                    className="flex items-center hover:bg-slate-200 px-2 rounded-lg py-2"
                    onMouseOver={() => setIsOpened(!true)}
                    onMouseOut={() => setIsOpened(true)}
                  >
                    <a href="#">Product</a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={
                        isOpened ? `size-4` : `size-4 hover:rotate-180`
                      }
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </li>
                  <div
                    className={
                      isOpened
                        ? `hidden`
                        : `flex flex-col mt-2 gap-2 bg-white shadow-md p-3 rounded-md w-74 absolute`
                    }
                  >
                    <NavLinks
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="size-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      }
                      header={"AI"}
                      subheader={"Integrated AI assistant"}
                    />

                    <NavLinks
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="size-6"
                        >
                          <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                        </svg>
                      }
                      header={"Docs"}
                      subheader={"Simple & Powerful"}
                    />

                    <NavLinks
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="size-6"
                        >
                          <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                        </svg>
                      }
                      header={"Wikis"}
                      subheader={"Centralise Your Knowledge"}
                    />

                    <NavLinks
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="size-6"
                        >
                          <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                        </svg>
                      }
                      header={"Wikis"}
                      subheader={"Centralise Your Knowledge"}
                    />

                    <NavLinks
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="size-6"
                        >
                          <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                        </svg>
                      }
                      header={"Wikis"}
                      subheader={"Centralise Your Knowledge"}
                    />
                  </div>
                </div>
                {/* SECOND */}
                <div className="flex hover:bg-slate-200  p-2 rounded-lg "  onMouseOver={() => setIsOpene(!true)}
                    onMouseOut={() => setIsOpene(true)}>
                  <a href="#" className="flex items-center">
                    <p>Teams</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <div
                    className={
                      isOpene
                        ? `hidden`
                        : `flex flex-col mt-9 gap-2 shadow-md p-3 bg-white rounded-md w-74 absolute`
                    }
                  >
                    <NavLinks
                     
                      subheader={"Product"}
                    />

                    <NavLinks
                      
                      subheader={"Engineering"}
                    />

                    <NavLinks
                      
                      subheader={"IT"}
                    />

                    <NavLinks
                    
                     
                      subheader={"Design"}
                    />

                    <NavLinks
                    
                       
                      subheader={"Marketting"}
                    />
                  </div>
                </div>

                {/* THIRD */}
                <div className="flex hover:bg-slate-200  p-2 rounded-lg "  onMouseOver={() => setIsOpen(!true)}
                    onMouseOut={() => setIsOpen(true)}>
                  <a href="#" className="flex items-center">
                    <p>Individuals</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <div
                    className={
                      isOpen
                        ? `hidden`
                        : `flex flex-col mt-9 gap-2 shadow-md p-3 rounded-md w-74 absolute bg-white`
                    }
                  >
                    <NavLinks
                     
                      subheader={"Personal"}
                    />

                    <NavLinks
                      
                      subheader={"Teachers"}
                    />

                    <NavLinks
                      
                      subheader={"Stident"}
                    />

                    <NavLinks
                    
                     
                      subheader={"Creators"}
                    />

                    <NavLinks
                    
                       
                      subheader={"Marketting"}
                    />
                  </div>
                </div>

                {/* THIRD */}
                <div className="flex hover:bg-slate-200  p-2 rounded-lg "  onMouseOver={() => setIsOpe(!true)}
                    onMouseOut={() => setIsOpe(true)}>
                  <a href="#" className="flex items-center">
                    <p>Download</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <div
                    className={
                      isOpe
                        ? `hidden`
                        : `flex flex-col mt-9 gap-2 shadow-md bg-white p-3 rounded-md w-74 absolute`
                    }
                  >
                    <NavLinks
                     
                      subheader={"Personal"}
                    />

                    <NavLinks
                      
                      subheader={"Teachers"}
                    />

                    <NavLinks
                      
                      subheader={"Stident"}
                    />

                    <NavLinks
                    
                     
                      subheader={"Creators"}
                    />

                    <NavLinks
                    
                       
                      subheader={"Marketting"}
                    />
                  </div>
                </div>
                <div className="p-2 hover:bg-slate-200 rounded-lg ">
                    <p>Pricings</p>
                </div>

              </ul>
            </div>
          </div>
          <div className="nav-button flex divide-x-1 gap-4">
            <div className="demo">
                <p>Request A Demo</p>
            </div>
            <div className="flex gap-2 border-0 border-l-2 ps-2 h-7">
                <p><a href="">Log in</a></p>
                <p><a href="" className="bg-black text-white p-1 px-2 rounded-md shadow-slate-200 shadow-md">Get Notion Free</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
