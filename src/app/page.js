"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import manimg from "./images/png/man_img.png";
import header_img from "./images/svg/header_img.svg";
import client_image from "./images/png/client_image.png";
import message_image from "./images/png/message_image.png";
import Cone from "./images/svg/Cone.svg";
import green_arrow from "./images/svg/green_arrow.svg";
import Navbar from "./Navbar/page";
import {
  Raleway,
  Jersey_10,
  Montserrat,
  Outfit,
} from "next/font/google";
import {
  HeaderArrow,
  FooterSign,
  Linkedin,
  Telegram,
  Github,
  Whatsapp,
  IconsSend,
} from "./icon/Icon";
import Link from "next/link";
import SimpleSlider from "@/app/components/SimpleSlider";
import ZicSrool from "@/app/components/ZicSrool";
import { GetData } from "@/app/Context/Context";
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

export default function Home() {
  const sectionRefs = useRef([]);
  const { SubmitMessage, loading } = GetData();
  const [showIcons, setShowIcons] = useState(true);
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onhandelchange = (e) => {
    const { name, value } = e.target;
    setUserMessage({ ...userMessage, [name]: value });
  };
  const onhandelsubmit = (e) => {
    e.preventDefault();
    SubmitMessage(userMessage);
    setUserMessage({
      name: "",
      email: "",
      message: "",
    });
  };

  const scrollToNextSection = (index) => {
    sectionRefs.current[index].scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="bg_img bg-fixed bg-no-repeat min-h-screen bg-cover bg-center">
      <div
        className={`flex items-center gap-5 flex-col fixed right-4 z-50 top-2/4 -translate-y-2/4 transition-opacity duration-500 ${
          showIcons ? "opacity-100 md:opacity-100" : "opacity-0 md:opacity-100"
        }`}
      >
        <Link href={""}>
          <Linkedin />
        </Link>
        <Link href={""}>
          <Telegram />
        </Link>
        <Link href={""}>
          <Github />
        </Link>
        <Link href={""}>
          <Whatsapp />
        </Link>
      </div>
      <header>
        <div className="flex flex-col pb-5 xl:h-screen">
          <div className=" py-[50px]">
            <Navbar />
          </div>
          <div className="grow flex justify-center items-center pb-[50px] sm:pb-[80px] lg:pb-[40px]">
            <div className=" container mx-auto px-3  xl:max-w-[1200px]">
              <div className={" flex lg:flex-wrap items-center"}>
                <div className="w-full  md:w-7/12">
                  <h2
                    className={`${raleway.className} font-normal relative text-2xl lg:text-[40px] text-white`}
                  >
                    Hello! i’m
                    <Image
                      className=" absolute left-[30%] md:left-0 -top-[8px] md:top-4"
                      src={green_arrow}
                      alt="green_arrow"
                    />
                  </h2>
                  <h1
                    className={`${Jersey.className} text-4xl sm:text-5xl lg:text-[72px] text-white font-normal my-3 `}
                  >
                    FULL STACK DEVELOPER
                  </h1>
                  <p
                    className={`${raleway.className} text-white text-sm  sm:text-base lg:text-lg opacity-75 font-normal sm:max-w-[90%] lg:max-w-[78%]`}
                  >
                    I Like to Visualize my every Single Component of my
                    Developing Sinerio where i have Freedom to get solutions
                    which our digital world need’s
                  </p>
                  <div className="mt-16 xxl:mt-[84px]">
                    <div className=" relative inline">
                      <Image
                        className=" absolute left-3/4 -translate-x-3/4  bottom-[72%]"
                        src={Cone}
                        alt="Cone"
                      />
                      <button
                        onClick={() => scrollToNextSection(3)}
                        className={`${montserrat.className} duration-700 overflow-hidden relative inline-block btn_border font-normal text-base text-white  px-[40px] py-[12px] sm:px-[52px] sm:py-[15px] `}
                      >
                        <span className=" absolute block w-full top-0 left-0 h-[2px]"></span>
                        <span className=" absolute block -top-full right-0 w-[2px] h-full"></span>
                        <span className=" absolute block bottom-0 right-0 h-[2px] w-full"></span>
                        <span className=" absolute block -bottom-full left-0 w-[2px] h-full"></span>
                        Hire Me
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-6/12 lg:w-5/12 hidden md:block">
                  <div className=" relative">
                    <div className=" absolute bottom-[40%] left-[10%]">
                      <HeaderArrow />
                    </div>
                    <Image
                      src={header_img}
                      priority={false}
                      alt="manimg"
                      className=" w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section>
          <ZicSrool />
        </section>

        <section>
          <div className="py-[60px] xl:pt-[80px]">
            <div className=" container mx-auto px-3 xl:max-w-[1200px]">
              <div>
                <h2
                  className={`text-[#3CFF00] ${outfit.className} text-3xl sm:text-4xl md:text-[48px]  font-bold capitalize text-center`}
                >
                  My Latest Projects
                </h2>
                <p
                  className={`${outfit.className} text-sm sm:text-base text-white mt-4 sm:mt-5  opacity-75 font-normal md:max-w-[80%] lg:max-w-[60%] text-center mx-auto`}
                >
                  Lorem ipsum dolor sit amet consectetur. Phasellus senectus
                  odio molestie sodales etiam pretium. Mauris lobortis ultricies
                  posuere montes ut nisl. Nunc euismod amet pretium urna ipsum
                  in viverra.{" "}
                </p>
                <div className=" flex mt-[40px]">
                  <SimpleSlider />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={(el) => (sectionRefs.current[3] = el)}>
          <div className="sm:pt-[50px] xl:pt-[120px] xl:h-screen">
            <div className="flex flex-col justify-between gap-14 mg:gap-5 h-full  ">
              <div className=" container mx-auto px-3  xl:max-w-[1200px]">
                <div>
                  <p
                    className={`${raleway.className} text-sm opacity-75 sm:text-base text-white font-normal text-center `}
                  >
                    Got a question or proposal? or just want to say HELLO!
                  </p>
                  <h2
                    className={`text-[#3CFF00] ${raleway.className}  text-xl sm:text-2xl mt-4  md:text-[30px]  font-semibold capitalize text-center`}
                  >
                    Get your quote now!
                  </h2>
                </div>
                <div className=" flex gap-[40px] md:gap-[80px] lg:gap-[50px] mt-[50px]  md:mt-[80px]  lg:mt-[50px] items-center flex-wrap lg:flex-nowrap justify-center lg:justify-start">
                  <div className=" w-full md:w-10/12  lg:w-6/12">
                    <Image
                      src={message_image}
                      alt="message_image"
                      className="w-full"
                    />
                  </div>
                  <div className=" w-full md:w-10/12 lg:w-6/12">
                    <form onSubmit={onhandelsubmit}>
                      <div>
                        <div className=" flex items-center gap-5 flex-wrap sm:flex-nowrap">
                          <input
                            className={` text-white w-full sm:w-6/12 text-base outline-none font-semibold placeholder:text-white placeholder:text-base placeholder:font-semibold ${raleway.className} px-5 py-3 bg-[#FFFFFF33]`}
                            type="text"
                            required
                            onChange={onhandelchange}
                            value={userMessage.name}
                            name="name"
                            placeholder="Enter your name"
                          />
                          <input
                            className={` text-white w-full sm:w-6/12 text-base outline-none font-semibold placeholder:text-white placeholder:text-base placeholder:font-semibold ${raleway.className} px-5 py-3 bg-[#FFFFFF33]`}
                            type="email"
                            required
                            onChange={onhandelchange}
                            value={userMessage.email}
                            name="email"
                            placeholder="Enter your email"
                          />{" "}
                        </div>
                        <div className=" mt-5">
                          <textarea
                            required
                            onChange={onhandelchange}
                            value={userMessage.message}
                            className={` text-white text-base outline-none font-semibold placeholder:text-white placeholder:text-base placeholder:font-semibold ${raleway.className} px-5 py-3 bg-[#FFFFFF33] resize-none w-full min-h-[96px]`}
                            name="message"
                            placeholder="Enter your message"
                          ></textarea>
                        </div>
                        <div className=" mt-5">
                          <button
                            className={`${raleway.className} font-normal text-sm text-white py-2 border border-[#FFFFFF52] w-full flex  justify-center gap-4 items-center`}
                          >
                            <div>
                              {" "}
                              <IconsSend />
                            </div>
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-black py-[30px] xl:py-[60px]">
                <div className=" container mx-auto px-3  xl:max-w-[1200px]">
                  <div className=" flex items-center justify-around flex-wrap gap-10">
                    <div className=" flex items-center gap-7">
                      <button
                        className={`${raleway.className} text-[#3CFF00] text-sm font-normal`}
                      >
                        Make it work
                      </button>
                      <button
                        className={`${raleway.className} text-[#3CFF00] text-sm font-normal`}
                      >
                        Make it right
                      </button>
                      <button
                        className={`${raleway.className} text-[#3CFF00] text-sm font-normal`}
                      >
                        Make it fast
                      </button>
                    </div>
                    <div>
                      <FooterSign />
                    </div>
                    <div className=" flex items-center gap-5">
                      <Link href={""}>
                        <Linkedin />
                      </Link>
                      <Link href={""}>
                        <Telegram />
                      </Link>
                      <Link href={""}>
                        <Github />
                      </Link>
                      <Link href={""}>
                        <Whatsapp />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
