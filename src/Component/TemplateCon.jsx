import React from "react";

const TemplateCon = ({ icon, text}) => {
  return (
    <>
      <div className="container">
        <div className="bg-slate-200 rounded-lg hover:bg-slate-300 py-3">
          <div className="  flex flex-col gap-10  items-center p-4 border-b border-slate-100">
            {icon}
            <div className="flex items-center text-xl">
              {text}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 mt-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateCon;
