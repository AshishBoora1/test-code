"use client";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { GetData } from "../Context/Context";
import Navbar from "../Navbar/page";
import Image from "next/image";
const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Page = () => {
  const { getprojectsdata } = GetData();

  return (
    <>
      <div className="bg_img bg-fixed bg-no-repeat min-h-screen bg-cover bg-center pt-[50px]">
        <div>
          <Navbar />
        </div>
        <div className=" pt-[58px]">
          <div className="container mx-auto px-3  xl:max-w-[1200px]">
            <div className=" flex flex-wrap items-center justify-between gap-y-9">
              {getprojectsdata.map((value, index, array) => {
                return (
                  <div key={index} className=" w-full md:w-[45%] lg:w-[32%]">
                    <Link
                      href={{
                        pathname: "./workbook/detailspage",
                        query: { title: value.title },
                      }}
                    >
                      <div>
                        {/* <Image
                          src={value.cubeImg}
                          alt={value.title}
                          width={100} 
                          height={100} 
                          layout="responsive"
                          className="rounded-xl"
                        /> */}
                        <img height={'100%'} width={'100%'} src={value.cubeImg} alt={value.title} />
                        <h5
                          className={`${outfit.className} text-white text-base font-semibold mt-4`}
                        >
                          {value.title}
                        </h5>
                        <p className=" text-[11px] opacity-75 text-white font-normal mt-1">
                          {value.category_name}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;


