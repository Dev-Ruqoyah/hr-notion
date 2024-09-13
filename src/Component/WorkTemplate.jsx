import React from "react";
const WorkTemplate = ({ icon, title, subtitle }) => {
  return (
    <>
      <div className="container mx-auto shadow p-6 hover:text-blue-600 cursor-pointer">
        <div className="flex flex-col gap-3">
          <div>{icon}</div>
          <div className="textes">
            <div className="flex items-center">
              <h5 className="text-2xl  font-bold">{title}</h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <h5 className="text-xl">{subtitle}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkTemplate;
