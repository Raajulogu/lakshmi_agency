"use client";

import { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function Orders() {
  let [click, setClick] = useState(false);
  return (
    <div className="min-h-screen bg-[white] overflow-hidden">
      <Header click={click} setClick={setClick} />
      <div className="overflow-auto w-screen h-[80vh] flex flex-col items-center justify-center">
        <img
        src={'./assert/order.png'}
        alt="orders"
        className="web:w-[308.897px] web:h-[184.325px] w-[235.956px] h-[141.197px]"
        />
        <br />
        <p className="w-[260px] web:w-[383px] text-[#747474] text-center font-inter text-[14px] web:text-[20px]  font-[400] leading-[140%] capitalize">
          {"To Get Started Add Your First Project"}
        </p>
        <br/>
        <button className="w-[130px] h-[29.654px] shrink-0 rounded-[4px] bg-[#000] web:w-[165px] web:h-[43px] flex items-center justify-center web:gap-[5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14 10.498H19.5V13.498H14H13.5V13.998V19.498H10.5V13.998V13.498H10H4.5V10.498H10H10.5V9.99805V4.49805H13.5V9.99805V10.498H14Z"
              fill="white"
              stroke="black"
            />
          </svg>

          <p className="text-#FFF font-roboto font-[400] leading-[100%] capitalize web:text-[16px] text-[12px]">
            Add New Project
          </p>
        </button>
      </div>

      <Footer click={click} setClick={setClick} />
    </div>
  );
}
