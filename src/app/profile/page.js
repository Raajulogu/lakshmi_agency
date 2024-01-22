"use client";

import { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Sidebar from "../component/sidebar";
import Link from "next/link";

export default function Profile() {
  let [click, setClick] = useState(false);
  let data = {
    name: "Yuvanesh",
    fullname: "Yuvanesh Kumar K",
    phone: "9489123456",
    mail: "Yuvi@gmail.com",
  };
  return (
    <div className="min-h-screen bg-[white] overflow-hidden">
      <div className="hidden web:block">
        <Header click={click} setClick={setClick} />
        <div className="overflow-auto w-screen h-[80vh] flex pl-[90px] pt-[50px] pr-[30px] gap-[40px]">
          <div className="web-hidden">
            <Sidebar />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[#000] font-roboto text-[24px] font-bold leading-[25.792px]">
              Hi {data.name}!
            </p>
            <div className="pt-[10px] flex flex-col items-start w-[950px] h-[189px] shrink-0 rounded-[8px] border-[0.25px] border-solid border-[#000] bg-[#FFF]">
              <p className="pl-[3px] text-[#B3B3B3] font-roboto text-[16px] font-[400] leading-[25.792px]">
                Full Name
              </p>
              <p className="pl-[8px] text-[#000] font-roboto font-[400] leading-[25.792px] text-[16px]">
                {data.fullname}
              </p>
              <br />
              <div className="flex justify-between w-[70%]">
                <div className="flex flex-col">
                  <p className="pl-[3px] text-[#B3B3B3] font-roboto text-[16px] font-[400] leading-[25.792px]">
                    Mobile Number
                  </p>
                  <p className="pl-[8px] text-[#000] font-roboto font-[400] leading-[25.792px] text-[16px]">
                    {data.phone}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#B3B3B3] font-roboto text-[16px] font-[400] leading-[25.792px]">
                    Email Address
                  </p>
                  <p className="text-[#000] font-roboto font-[400] leading-[25.792px] text-[16px]">
                    {data.mail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Mobile view */}
      <div className="web:hidden relative fixed h-[100vh] w-[100vw] bg-[#FFF] ">
        <div className="absolute top-0 w-screen h-[60px] shrink-0 bg-[#F5F5F5] flex justify-start px-[40px] items-center gap-[10px]">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M21 11.0977H6.83L10.41 7.50766L9 6.09766L3 12.0977L9 18.0977L10.41 16.6777L6.83 13.0977H21V11.0977Z"
                fill="black"
              />
            </svg>
          </Link>
          <p className="text-[#000] font-inter text-[16px] font-[600] leading-[24px]">
            My Profile
          </p>
        </div>
        <div className="flex flex-col items-center pt-[110px] gap-[40px]">
          <div className="relative h-[59px] flex justfiy-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="59"
              height="59"
              viewBox="0 0 59 59"
              fill="none"
              className="absolute"
            >
              <circle cx="29.5" cy="29.5" r="29.5" fill="#F2F2F2" />
            </svg>
            <p className="absolute left-4 text-[#000] font-roboto font-[400] text-[40px] leading-[25.792px]">
              {data.name[0]}
            </p>
          </div>

          <div className="flex gap-[10px] items-center">
            <p className="text-[#000] font-roboto text-[16px] font-[400] leading-[25.792px]">
              {data.fullname}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_125_1973)">
                <path
                  d="M2 11.4997V13.9997H4.5L11.8733 6.62638L9.37333 4.12638L2 11.4997ZM13.8067 4.69305C14.0667 4.43305 14.0667 4.01305 13.8067 3.75305L12.2467 2.19305C11.9867 1.93305 11.5667 1.93305 11.3067 2.19305L10.0867 3.41305L12.5867 5.91305L13.8067 4.69305Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_125_1973">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="flex gap-[70px] w-[310px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.2652 15.5 20.5196 15.6054 20.7071 15.7929C20.8946 15.9804 21 16.2348 21 16.5V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21C15.4913 21 11.1673 19.2089 7.97918 16.0208C4.79107 12.8327 3 8.50868 3 4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H7.5C7.76522 3 8.01957 3.10536 8.20711 3.29289C8.39464 3.48043 8.5 3.73478 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                fill="black"
              />
            </svg>
            <p className="text-[#000] font-roboto text-[16px] font-[400] leading-[25.792px]">
              {data.phone}
            </p>
            <button className="text-[#555] text-center font-inter text-[12px] font-[400] leading-[100%] capitalize underline">
              change
            </button>
          </div>

          <div className="flex gap-[70px] w-[310px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 8.608V16.75C22.0001 17.5801 21.6824 18.3788 21.1123 18.9822C20.5422 19.5856 19.7628 19.948 18.934 19.995L18.75 20H5.25C4.41986 20.0001 3.62117 19.6824 3.01777 19.1123C2.41437 18.5422 2.052 17.7628 2.005 16.934L2 16.75V8.608L11.652 13.664C11.7594 13.7202 11.8788 13.7496 12 13.7496C12.1212 13.7496 12.2406 13.7202 12.348 13.664L22 8.608ZM5.25 4H18.75C19.5556 3.9999 20.3325 4.299 20.93 4.83927C21.5276 5.37954 21.9032 6.12248 21.984 6.924L12 12.154L2.016 6.924C2.09352 6.15431 2.44305 5.43752 3.00175 4.90246C3.56045 4.36741 4.29168 4.04919 5.064 4.005L5.25 4H18.75H5.25Z"
                fill="black"
              />
            </svg>
            <p className="text-[#000] font-roboto text-[16px] font-[400] leading-[25.792px]">
              {data.mail}
            </p>
          </div>
        </div>
      </div>
      <Footer click={click} setClick={setClick} />
    </div>
  );
}
