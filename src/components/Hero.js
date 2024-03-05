import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "swiper/css";
import heroOne from "../images/hero-one.jpg";
import heroTwo from "../images/hero-two.jpg";
import heroThree from "../images/hero-three.jpg";
import { init } from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    init({ duration: 2000 });
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="mb-[50px] " id="home">
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        <Carousel.Item interval={3000}>
          <div className="dark-overlay">
            <img src={heroThree} className="d-block w-100 h-[100vh]" alt="" />
          </div>
          <Carousel.Caption >
            <div className="">
              <h1
                data-aos="zoom-in-left"
                className="text-[white] text-[35px] md:text-[45px]  lg:text-[60px] font-bold text-left"
              >
                Unleashing Your Infinite potential through technology.
              </h1>
              <a
                href="#contact"
                className="bg-[#028fcc] text-white  px-[40px] py-[10px] rounded-[20px]"
              >
                Talk to us
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="dark-overlay">
            <img src={heroTwo} className="d-block w-100 h-[100vh]" alt="" />
          </div>
          <Carousel.Caption >
            <div className="">
              <h1
                data-aos="zoom-in-left"
                className="text-[white] text-[35px] md:text-[45px]  lg:text-[60px] font-bold text-left"
              >
                Unleashing Your Infinite potential through technology.
              </h1>
              <a
                href="#contact"
                className="bg-[#028fcc] text-white  px-[40px] py-[10px] rounded-[20px]"
              >
                Talk to us
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <div className="dark-overlay">
            <img src={heroOne} className="d-block w-100 h-[100vh]" alt="" />
          </div>
          <Carousel.Caption >
            <div className="flex flex-col items-center">
              <h1
                data-aos="zoom-in-left"
                className="text-[white] text-[35px] md:text-[45px]  lg:text-[60px] font-bold text-left"
              >
                Unleashing Your Infinite potential through technology.
              </h1>
              <a
                href="#contact"
                className="bg-[#028fcc] text-white  px-[40px] py-[10px] rounded-[20px]"
              >
                Talk to us
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
