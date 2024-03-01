import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from 'react-bootstrap/Carousel';
import "swiper/css";
import hist from "../images/history.jpg"
import { init } from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    init({ duration: 2000 });
  }, []);

  return (
    <div id="home">
       <Swiper className="mySwiper overlay">
        <SwiperSlide className='overlay'> <div style={{backgroundImage: `url(${hist})`}} className="pl-[20px] md:pl-[50px] lg:pl-[200px] pt-[170px]">
          <h1 data-aos="zoom-in-left" className="text-[white] text-[35px] md:text-[45px] font-bold text-left">
            Unleashing Your Infinite potential through technology.sfgfgf
          </h1>
          <a  href="#contact" className="bg-[#028fcc] text-white px-[40px] py-[10px] rounded-[20px]">
            Talk to us
          </a>
        </div> </SwiperSlide>
        <SwiperSlide> <div style={{backgroundImage: `url(${hist})`}} className="pl-[20px] md:pl-[50px] lg:pl-[200px] pt-[170px]">
          <h1 data-aos="zoom-in-left" className="text-[white] text-[35px] md:text-[45px] lg:text-[60px] lg:w-[550px] font-bold text-left">
            Unleashing Your Infinite potential through technology.sfgfgf
          </h1>
          <a  href="#contact" className="bg-[#028fcc] text-white px-[40px] py-[10px] rounded-[20px]">
            Talk to us
          </a>
        </div> </SwiperSlide>
        <SwiperSlide> <div style={{backgroundImage: `url(${hist})`}} className="pl-[20px] md:pl-[50px] lg:pl-[200px] pt-[170px]">
          <h1 data-aos="zoom-in-left" className="text-[white] text-[35px] md:text-[45px] lg:text-[60px] lg:w-[550px] font-bold text-left">
            Unleashing Your Infinite potential through technology.sfgfgf
          </h1>
          <a  href="#contact" className="bg-[#028fcc] text-white px-[40px] py-[10px] rounded-[20px]">
            Talk to us
          </a>
        </div> </SwiperSlide>
      </Swiper>
    
    </div>
  );
};

export default Hero;
