"use client";

import { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Link from "next/link";
import Sidebar from "../component/sidebar";

export default function Address() {
  let [click, setClick] = useState(false);
  let data = {
    name: "Yuvanesh",
    deliver_name: "Sharath",
    phone: "+91 67676 67676 | +91 78787 78787",
    address: `Door No:12, ABC Street, Indra Nagar, Banglore,
               Karnataka, 500 001`,
  };
  return (
    <div className="min-h-screen bg-[white] overflow-hidden">
      <div className="hidden web:block">
        <Header click={click} setClick={setClick} />
        <div className="overflow-auto w-screen h-[80vh] flex pl-[90px] pt-[50px] pr-[30px] gap-[40px]">
          <div className="web-hidden">
            <Sidebar />
          </div>
          <div className="flex flex-col items-start gap-[40px]">
            <p className="text-[#000] font-roboto text-[24px] font-bold leading-[25.792px]">
              Hi {data.name}!
            </p>
            <div className="flex flex-col items-start gap-[5px]">
              <p className="text-[#000] font-roboto text-[20px] font-bold leading-[25.792px]">
                Delivery Address
              </p>
              <p className="text-[#000] font-roboto text-[16px] font-[400] leading-[25.792px]">
                Add in your delivery address where you would like your products
                to be delivered to
              </p>
            </div>

            <div className="flex gap-[20px]">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.59961 5.99961C3.59961 5.36309 3.85247 4.75264 4.30255 4.30255C4.75264 3.85247 5.36309 3.59961 5.99961 3.59961H17.9996C18.6361 3.59961 19.2466 3.85247 19.6967 4.30255C20.1468 4.75264 20.3996 5.36309 20.3996 5.99961V17.9996C20.3996 18.6361 20.1468 19.2466 19.6967 19.6967C19.2466 20.1468 18.6361 20.3996 17.9996 20.3996H5.99961C5.36309 20.3996 4.75264 20.1468 4.30255 19.6967C3.85247 19.2466 3.59961 18.6361 3.59961 17.9996V5.99961ZM5.99961 4.79961C5.68135 4.79961 5.37613 4.92604 5.15108 5.15108C4.92604 5.37613 4.79961 5.68135 4.79961 5.99961V17.9996C4.79961 18.3179 4.92604 18.6231 5.15108 18.8481C5.37613 19.0732 5.68135 19.1996 5.99961 19.1996H17.9996C18.3179 19.1996 18.6231 19.0732 18.8481 18.8481C19.0732 18.6231 19.1996 18.3179 19.1996 17.9996V5.99961C19.1996 5.68135 19.0732 5.37613 18.8481 5.15108C18.6231 4.92604 18.3179 4.79961 17.9996 4.79961H5.99961ZM11.9996 7.19961C12.1587 7.19961 12.3114 7.26282 12.4239 7.37535C12.5364 7.48787 12.5996 7.64048 12.5996 7.79961V11.3996H16.1996C16.3587 11.3996 16.5114 11.4628 16.6239 11.5753C16.7364 11.6879 16.7996 11.8405 16.7996 11.9996C16.7996 12.1587 16.7364 12.3114 16.6239 12.4239C16.5114 12.5364 16.3587 12.5996 16.1996 12.5996H12.5996V16.1996C12.5996 16.3587 12.5364 16.5114 12.4239 16.6239C12.3114 16.7364 12.1587 16.7996 11.9996 16.7996C11.8405 16.7996 11.6879 16.7364 11.5753 16.6239C11.4628 16.5114 11.3996 16.3587 11.3996 16.1996V12.5996H7.79961C7.64048 12.5996 7.48787 12.5364 7.37535 12.4239C7.26282 12.3114 7.19961 12.1587 7.19961 11.9996C7.19961 11.8405 7.26282 11.6879 7.37535 11.5753C7.48787 11.4628 7.64048 11.3996 7.79961 11.3996H11.3996V7.79961C11.3996 7.64048 11.4628 7.48787 11.5753 7.37535C11.6879 7.26282 11.8405 7.19961 11.9996 7.19961Z"
                    fill="black"
                  />
                </svg>
              </button>
              <p className="text-[#000] font-roboto text-[20px] font-bold leading-[25.792px]">
                Add another delivery address
              </p>
            </div>

            <div className="p-[10px] gap-[15px] items-start pl-[20px] flex flex-col w-[549.801px] h-[167.878px] shrink-0 rounded-[6.715px] bg-[#F5F5F5]">
              <p className="text-[#000] font-inter font-[500] leading-[100%] capitalize">
                {data.deliver_name}
              </p>
              <p className="w-[435.896px] text-[#808A93] font-inter text-[16px] font-[400] leading-[26.86px] capitalize">
                {data.address}
              </p>
              <div className="flex gap-[100px]">
                <div className="flex gap-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                  >
                    <path
                      d="M6.44289 9.73709C7.65161 12.1126 9.599 14.0599 11.9745 15.2687L13.8211 13.422C14.0562 13.187 14.3835 13.1198 14.6773 13.2122C15.6174 13.5227 16.6247 13.6906 17.6739 13.6906C17.8965 13.6906 18.1101 13.7791 18.2675 13.9365C18.4249 14.0939 18.5133 14.3074 18.5133 14.53V17.4679C18.5133 17.6905 18.4249 17.904 18.2675 18.0614C18.1101 18.2188 17.8965 18.3073 17.6739 18.3073C13.8894 18.3073 10.2599 16.8039 7.58378 14.1278C4.9077 11.4517 3.4043 7.82217 3.4043 4.03763C3.4043 3.81501 3.49273 3.60151 3.65015 3.44409C3.80756 3.28668 4.02107 3.19824 4.24369 3.19824H7.18155C7.40417 3.19824 7.61767 3.28668 7.77509 3.44409C7.93251 3.60151 8.02094 3.81501 8.02094 4.03763C8.02094 5.08687 8.18882 6.09414 8.49939 7.03426C8.59173 7.32804 8.52458 7.6554 8.28955 7.89043L6.44289 9.73709Z"
                      fill="black"
                    />
                  </svg>
                  <p className="text-[#000] font-inter text-[20px] font-[400] leading-[100%] capitalize">
                    {data.phone}
                  </p>
                </div>
                <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4ZM6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                    fill="black"
                  />
                </svg>
                </button>
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
            Address Book
          </p>
        </div>
        <div className="flex flex-col items-center pt-[110px] gap-[40px]">
          <p className="text-[#000] font-roboto text-[24px] font-bold leading-[25.792px]">
            Hi {data.name}!
          </p>

          <p className="w-[321px] h-[50px] shrink-0 text-[#000] font-roboto font-[400] text-[16px] leading-[25.792px]">
            Add in your delivery address where you would like your products to
            be delivered to!
          </p>
          <br />
          <p className="text-[#000] font-roboto text-[24px] font-bold leading-[25.792px]">
            Delivery Address
          </p>
          <div className="flex gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.59961 5.99961C3.59961 5.36309 3.85247 4.75264 4.30255 4.30255C4.75264 3.85247 5.36309 3.59961 5.99961 3.59961H17.9996C18.6361 3.59961 19.2466 3.85247 19.6967 4.30255C20.1468 4.75264 20.3996 5.36309 20.3996 5.99961V17.9996C20.3996 18.6361 20.1468 19.2466 19.6967 19.6967C19.2466 20.1468 18.6361 20.3996 17.9996 20.3996H5.99961C5.36309 20.3996 4.75264 20.1468 4.30255 19.6967C3.85247 19.2466 3.59961 18.6361 3.59961 17.9996V5.99961ZM5.99961 4.79961C5.68135 4.79961 5.37613 4.92604 5.15108 5.15108C4.92604 5.37613 4.79961 5.68135 4.79961 5.99961V17.9996C4.79961 18.3179 4.92604 18.6231 5.15108 18.8481C5.37613 19.0732 5.68135 19.1996 5.99961 19.1996H17.9996C18.3179 19.1996 18.6231 19.0732 18.8481 18.8481C19.0732 18.6231 19.1996 18.3179 19.1996 17.9996V5.99961C19.1996 5.68135 19.0732 5.37613 18.8481 5.15108C18.6231 4.92604 18.3179 4.79961 17.9996 4.79961H5.99961ZM11.9996 7.19961C12.1587 7.19961 12.3114 7.26282 12.4239 7.37535C12.5364 7.48787 12.5996 7.64048 12.5996 7.79961V11.3996H16.1996C16.3587 11.3996 16.5114 11.4628 16.6239 11.5753C16.7364 11.6879 16.7996 11.8405 16.7996 11.9996C16.7996 12.1587 16.7364 12.3114 16.6239 12.4239C16.5114 12.5364 16.3587 12.5996 16.1996 12.5996H12.5996V16.1996C12.5996 16.3587 12.5364 16.5114 12.4239 16.6239C12.3114 16.7364 12.1587 16.7996 11.9996 16.7996C11.8405 16.7996 11.6879 16.7364 11.5753 16.6239C11.4628 16.5114 11.3996 16.3587 11.3996 16.1996V12.5996H7.79961C7.64048 12.5996 7.48787 12.5364 7.37535 12.4239C7.26282 12.3114 7.19961 12.1587 7.19961 11.9996C7.19961 11.8405 7.26282 11.6879 7.37535 11.5753C7.48787 11.4628 7.64048 11.3996 7.79961 11.3996H11.3996V7.79961C11.3996 7.64048 11.4628 7.48787 11.5753 7.37535C11.6879 7.26282 11.8405 7.19961 11.9996 7.19961Z"
                fill="black"
              />
            </svg>
            <p className="text-[#000] font-roboto text-[16px] font-[600] leading-[25.792px]">
              Add Delivery Address
            </p>
          </div>

          <div className="p-[10px] w-[340px] h-[160px] shrink-0 rounded-[6.715px] bg-[#F5F5F5] flex flex-col gap-[20px] items-center">
            <div className="flex justify-around w-[100%]">
              <p className="text-[#000] font-inter font-[500] text-[16px] capitalize leading-[100%]">
                {data.deliver_name}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4ZM6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="w-[279px] text-[#808A93] font-inter font-[400] text-[16px] capitalize leading-[26.86px]">
              {data.address}
            </p>
            <div className="flex gap-[3px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
              >
                <path
                  d="M6.44289 9.73611C7.65161 12.1116 9.599 14.059 11.9745 15.2677L13.8211 13.421C14.0562 13.186 14.3835 13.1189 14.6773 13.2112C15.6174 13.5218 16.6247 13.6896 17.6739 13.6896C17.8965 13.6896 18.1101 13.7781 18.2675 13.9355C18.4249 14.0929 18.5133 14.3064 18.5133 14.529V17.4669C18.5133 17.6895 18.4249 17.903 18.2675 18.0604C18.1101 18.2179 17.8965 18.3063 17.6739 18.3063C13.8894 18.3063 10.2599 16.8029 7.58378 14.1268C4.9077 11.4507 3.4043 7.8212 3.4043 4.03666C3.4043 3.81404 3.49273 3.60053 3.65015 3.44312C3.80756 3.2857 4.02107 3.19727 4.24369 3.19727H7.18155C7.40417 3.19727 7.61767 3.2857 7.77509 3.44312C7.93251 3.60053 8.02094 3.81404 8.02094 4.03666C8.02094 5.08589 8.18882 6.09316 8.49939 7.03328C8.59173 7.32707 8.52458 7.65443 8.28955 7.88946L6.44289 9.73611Z"
                  fill="black"
                />
              </svg>
              <p className="text-[#000] text-[16px] font-inter font-[400] leading-[100%] capitalize">
                {data.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer click={click} setClick={setClick} />
    </div>
  );
}
