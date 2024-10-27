import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Footer from "./footer";
import "slick-carousel/slick/slick-theme.css";
import Clgvideo from '../img/clg-video.mp4'

export default function Home() {
  const clg_detailes = [
    "CMRIT is ranked 21st among private engineering colleges across India ",
    "CMRIT Ranked 6th among Karnataka’s private engineering colleges by Education World (EW) – India Higher Education Rankings 2023-24."
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    pauseOnHover: true
  };

  return (
    <>
      <div className="w-full bg-gray-600 ">
        <div className="w-9/10 ml-7 mr-7 h-auto">
          <Slider {...settings}>
            {clg_detailes.map((d, index) => (
              <div key={index} className="flex justify-center items-center text-white h-auto">
                <h1 className="mt-1 text-center h-auto">{d}</h1>
              </div>
            ))}
          </Slider>
        </div>
        </div>
        <video autoPlay  muted loop className="w-full h-auto bg-cover mt-1">
       <source src={Clgvideo} type="video/mp4"  />
       Your browser does not support the video tag.
       </video>
       <div><Footer/></div>
    </>
  );
}
