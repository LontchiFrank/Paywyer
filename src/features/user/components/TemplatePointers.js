// import BusinessCreate from "./BusinessCreate";
import Card from "./Card";
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import App from "../../../App";

function BusinessCreate({ open, children }) {
  return ReactDOM.createPortal(
    <div
      className={`w-full h-screen bg-blue-500 z-10 text-white flex justify-center items-center absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 ${
        open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="w-full">{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
}

function TemplatePointers() {
  const [open, setOpen] = useState(false);
  const divRef = useRef(null);

  const handleClick = () => {
    setOpen(true);
    console.log(open);
  };

  return (
    <>
      <div className="w-full overflow-x-hidden ">
        <BusinessCreate open={open}>
          <div>
            <h2>Create Application</h2>
          </div>
        </BusinessCreate>
        <div
        //   className={`w-full h-screen bg-blue-500 z-10 text-white flex justify-center items-center absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 ${
        //     open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        //   }`}
        ></div>
        <div className="container mx-4 px-12 "></div>
        <div className="w-full h-[25vh] bg-indigo-300 dark:bg-[rgba(4,30,73,0.67)]">
          <div className="w-full relative ">
            <div className="absolute lg:top-[1rem]  md:top-[-4rem] ">
              <img
                src="/images/1.png"
                style={{ width: "40%", height: "90%" }}
              />
            </div>
          </div>
          <div className="w-full relative ">
            <div className="absolute lg:top-[-3rem] right-[-12rem]  md:top-[-4rem] ">
              <img
                src="/images/2.png"
                style={{ width: "70%", height: "20%" }}
              />
            </div>
          </div>
          <div className="pt-16 px-[12rem] relative">
            <h3 className="text-[#041e49] pb-4 text-[1.3rem] dark:text-[#d8d8d8]">
              Your Paywyer Projects
            </h3>
            <div className="w-full flex flex-wrap mb-16">
              <Card onClick={handleClick} />
            </div>
            <div className="w-full border border-t-[0.6px] border-[#a9b7cf]">
              {" "}
            </div>
            <div className="pt-16 w-[70%]">
              <div className="p-6 flex w-full border-[0.6px] border-[#a9b7cf]  rounded-md">
                <div className="w-1/4 p-2">
                  <h3 className="text-[#041e49] pb-4 text-[1.3rem] dark:text-[#d8d8d8]">
                    Paywyer Project containers for your apps
                  </h3>
                  <span className="text-[#041e49b3] text-[1rem] dark:text-[#b5b5b5]">
                    Apps in a project share features like Real-time Analytics
                  </span>
                </div>
                <div className="w-3/4 flex justify-between bg-[#a3e5fd] py-4 rounded-md">
                  <div style={{ height: "50%", width: "50%" }}>
                    <img src="/images/3.jpg" />
                  </div>
                  <div style={{ height: "50%", width: "50%" }}>
                    <img src="/images/4.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[75vh] bg-white dark:bg-base-100"></div>
      </div>
    </>
  );
}

export default TemplatePointers;

ReactDOM.render(<TemplatePointers />, document.getElementById("root"));
