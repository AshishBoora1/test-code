"use client";
import { Raleway } from "next/font/google";
import Link from "next/link";
import { GetData } from "@/app/Context/Context";
import { useState } from "react";
import Navbar from "../../Navbar/page";
const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const page = (dataa) => {
  const { getprojectsdata } = GetData();
  return (
    <>
      <div
        className={`bg_img bg-fixed bg-no-repeat min-h-screen bg-cover bg-center ${raleway.className} pb-[30px] md:pb-[50px]`}
      >
        <div className="py-[30px] md:py-[50px]">
          <Navbar/>
        </div>
        <div className=" container mx-auto px-3  xl:max-w-[1200px]">
          {getprojectsdata
            .filter((value, index, array) => {
              return (
                value.title.toLowerCase() ===
                dataa.searchParams.title.toLowerCase()
              );
            })
            .map((value, index) => {
              return (
                <div key={index}>
                  <div>
                    <div className=" flex flex-wrap gap-8 lg:gap-0 lg:flex-nowrap flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between">
                      <div className=" w-full md:w-10/12 lg:w-9/12">
                        <h1 className=" text-[22px] text-white font-semibold">
                          {value.title}
                        </h1>
                        <p className=" text-sm sm:text-base font-normal text-white mt-3">
                          {value.description}
                        </p>
                      </div>
                      <div className=" w-6/12 sm:w-4/12 lg:w-2/12">
                        <div className=" bg-white p-2">
                          <img src={value.logo} alt="logo" />
                        </div>
                        <div className=" mt-5 text-end">
                          <Link
                            className=" text-[#3CFF00] text-base font-normal"
                            href={value.livelink}
                          >{`>> Visit Website`}</Link>
                        </div>
                      </div>
                    </div>
                    <div className=" flex gap-4 flex-wrap">
                      <div className=" mt-[50px]">
                        {value.frameworks.map((value, index) => {
                          return (
                            <p
                              key={index}
                              className=" uppercase text-base text-white font-semibold bg-[#FFFFFF3D] rounded-[50px] px-4 py-1"
                            >
                              {value}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className=" mt-[30px] md:mt-[50px] ">
                    <img
                      className="w-full rounded-xl"
                      src={value.detailsimg}
                      alt={value.title}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default page;
