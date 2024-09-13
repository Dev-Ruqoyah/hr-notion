import React from "react";

const Subsection = ({ title, subtitle, link, texte, section }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center gap-3 h-full py-4 my-auto mx-auto">
          <p className="bg-slate-200 w-24 text-center rounded-md font-semibold px-3">
            {section}
          </p>
          <p className="md:text-6xl text-5xl font-semibold break-words lg:w-3/4">
            {title}
          </p>
          <p className="text-xl text-wrap md:w-4/5">{subtitle}</p>
          <a href="#" className="flex text-blue-600 items-center hover:underline gap-2">
            <p className="text-xl">{link}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-4"
            >
              <path
                fill-rule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Subsection;
