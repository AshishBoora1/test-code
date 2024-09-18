import React from "react";
import Slider from "react-slick";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { GetData } from "../Context/Context";

// Move font loader to module scope
const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const SimpleSlider = () => {
  const { getprojectsdata } = GetData();
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ margin: "0 auto", width: "100%" }}>
      <Slider {...settings}>
        {getprojectsdata.map((value, index) => {
          return (
            <div className="px-2 overflow-hidden" key={index}>
              <Link
                href={{
                  pathname: "./workbook/detailspage",
                  query: { title: value.title },
                }}
              >
                <div className="hover-scale"> 
                 <img
                    className="image-scale w-full h-[700px] sm:h-auto"
                    src={value.sliderimg}
                    alt={value.title}
                  />
                  <h5
                    className={`${outfit.className} text-white text-base font-semibold mt-4`}
                  >
                    {value.title}
                  </h5>
                  <p className="text-[11px] opacity-75 text-white font-normal mt-1">
                    {value.category_name}
                  </p>
                </div>
              </Link>
            </div>
          );
    })}
    
      </Slider>
    </div>
  );
};

export default SimpleSlider;
