"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import client_image from "../images/png/client_image.png";
import Link from "next/link";
import slider_img from "../images/png/slider_img.png";
import { Raleway, Jersey_10, Montserrat, Outfit } from "next/font/google";
import {
  Email,
  PhoneIcon,
  RoundDownload,
  SectionSign,
  AboutMe,
} from "../icon/Icon";
const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const Jersey = Jersey_10({
  weight: ["400"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
});

function ZicSrool() {


  return (
    <div className=" min-h-scree n">
      <div className=" container mx-auto px-3  xl:max-w-[1200px]">
        <div className="flex pt-[50px] gap-14 lg:gap-0 flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row justify-between">
          <div className=" w-full  md:w-10/12 lg:w-8/12 left lg:pe-5 xl:pe-0 mx-auto lg:mx-0">
              <div  className="text-white details">
                <div className={"Raleway.className"}>
                  <p className="text-sm sm:text-base font-normal text-white">
                    I am <span className="text-[#3CFF00]">Vikash Boora</span>,
                    pursuing my passionate working at{" "}
                    <span className="text-[#3CFF00]">
                      Hexabird Private Limited
                    </span>{" "}
                    as Head Manager. I’ve discovered a passion for using
                    development as a powerful tool for solving digital problems
                    and exploring the depth of my imagination and handling,
                    fueled by a love for storytelling. I aspire to create
                    impactful narratives that resonate with my students and
                    audiences, even if they simply evoke a smile. Recognizing
                    the power of stories to connect and share experiences, I am
                    dedicated to honing my skills and mastering the art of
                    creating vision into reality through the lens of coding.
                  </p>
                  <h3 className="font-semibold text-white text-lg sm:text-[22px] my-5">
                    Experience
                  </h3>
                  <div className="flex flex-wrap md:flex-nowrap gap-y-3 md:gap-5 items-center justify-start sm:justify-center md:justify-start">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-10/12 sm:w-6/12 md:w-4/12">
                        <div className="overflow-hidden p-5 md:p-[14px] lg:p-5 h-full relative btn_border">
                          <span className="absolute block w-full top-0 left-0 h-[2px]"></span>
                          <span className="absolute block -top-full right-0 w-[2px] h-full"></span>
                          <span className="absolute block bottom-0 right-0 h-[2px] w-full"></span>
                          <span className="absolute block -bottom-full left-0 w-[2px] h-full"></span>
                          <h3 className="text-[#3CFF00] font-semibold text-base">
                            Hexabirds Pvt Ltd
                          </h3>
                          <h5 className="text-sm font-semibold text-white my-[2px]">
                            Full-Stack Developer
                          </h5>
                          <p className="text-white text-sm font-normal opacity-75">
                            01-01-2020 to 10-02-2024
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h3 className="font-semibold text-white text-lg sm:text-[22px] my-5">
                    Stack Proficiency
                  </h3>
                  <div>
                    {[
                      "Frontend Development",
                      "Backend Development",
                      "UI / UX Design",
                    ].map((category) => (
                      <div key={category}>
                        <h6 className="text-base opacity-75 font-normal text-white my-5">
                          {category}
                        </h6>
                        <div className="flex gap-4 flex-wrap">
                          {[...Array(8)].map((_, i) => (
                            <p
                              key={i}
                              className="uppercase text-base text-white font-semibold bg-[#FFFFFF3D] rounded-[50px] px-4 py-1"
                            >
                              HTML
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </div>
          <div className=" w-full lg:w-4/12 xl:w-3/12 pt-5">
            <div className="rightblock items-end w-full flex lg:flex-col">
              <div className=" w-full xl:pe-0 flex justify-center flex-wrap sm:flex-nowrap lg:inline sm:justify-between items-center">
                <div className=" relative w-full sm:w-6/12 lg:w-full pt-4 md:pt-0">
                  <div className=" absolute lg:-top-12 xl:-top-5 lg:left-0 xl:-left-8 -top-12 -left-2">
                    <AboutMe />
                  </div>
                  <div className=" absolute lg:bottom-0 lg:left-0 bottom-8 left-5">
                    <SectionSign />
                  </div>
                  <Image
                    className=" w-full"
                    src={client_image}
                    alt="client_image"
                  />
                </div>
                <div className=" mt-10 lg:ps-8 w-10/12 sm:w-5/12 lg:w-auto">
                  <div>
                    <div className=" flex justify-center sm:justify-start">
                      <Link className=" flex items-center gap-5" href={""}>
                        <Email />
                        <span
                          className={`${raleway.className} text-sm text-white font-normal`}
                        >
                          vikashboora10270@gmail.com
                        </span>
                      </Link>
                    </div>
                    <div className=" flex justify-center sm:justify-start  mt-5">
                      <Link className=" flex items-center gap-5" href={""}>
                        <PhoneIcon />
                        <span
                          className={`${raleway.className} text-sm text-white font-normal`}
                        >
                          +91 -999-25-10270
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className=" mt-7 flex justify-center sm:justify-start">
                    <button
                      className={`${raleway.className} text-sm text-white font-normal flex items-center justify-center sm:py-2 py-3 px-5 border border-[#FFFFFF52] rounded-[50px]`}
                    >
                      <div>
                        <RoundDownload />
                      </div>
                      <span className="ms-3"> Download Resume</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZicSrool;
