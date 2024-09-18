"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const page = () => {
  const path = usePathname();
  return (
    <nav>
      <div className=" container mx-auto px-3  xl:max-w-[1200px]">
        <div className=" flex items-center gap-8 sm:gap-14 lg:gap-[50px] bg-[#FFFFFF24]  py-[15px] rounded-[100px] justify-center">
          <Link
            className={`${
              path === "/" ? "text-[#3cff00]" : "text-white"
            } capitalize font-semibold text-base  after:content-[''] after:absolute after:bg-white after:h-[2px] after:bottom-[-4px] after:left-0 after:w-0 relative after:rounded-full after:transition-all after:duration-[1s] hover:text-[#3CFF00] hover:after:animation-slide-in hover:after:w-full after:origin-left`}
            href={"/"}
          >
            home
          </Link>
          <Link
            className={`${
              path === "/workbook"
                ? " text-[#3cff00] after:w-full"
                : "text-white"
            } capitalize font-semibold text-base  after:content-[''] after:absolute after:bg-white after:h-[2px] after:bottom-[-4px] after:left-0 after:w-0 relative after:rounded-full after:transition-all after:duration-[1s] hover:text-[#3CFF00] hover:after:animation-slide-in hover:after:w-full after:origin-left`}
            href={"/workbook"}
          >
            Workbook
          </Link>
          {/* <Link
            className={`${
              "path" === "" ? " text-[#3cff00] after:w-full" : "text-white"
            } capitalize font-semibold text-base  after:content-[''] after:absolute after:bg-white after:h-[2px] after:bottom-[-4px] after:left-0 after:w-0 relative after:rounded-full after:transition-all after:duration-[1s] hover:text-[#3CFF00] hover:after:animation-slide-in hover:after:w-full after:origin-left`}
            href={""}
          >
            Resume
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default page;
