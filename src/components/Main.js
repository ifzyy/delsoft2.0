import React, { useEffect } from "react";
import Timeline from "./Timeline";
import Contact from "./Contact";
import Client from "./Client";
import historyBg from "../images/history.jpg";
import serviceBg from "../images/services.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="lg:pt-[50px] bg-[#fff]" id="about">
      <div className="md:grid grid-it gap-[50px] lg:px-[100px]">
        <div className="pt-[-20px]" data-aos="fade-left">
          <h2 className="text-black lg:text-[50px] lg:text-left text-[35px] text-center font-bold">
            OUR HISTORY
          </h2>
          <p className="text-[#252627] lg:p-[20px] lg:text-[18px] text-[15px] text-center p-[20px]">
          Since 1997, Delsoft Limited has been Lagos' tech pioneer, crafting software solutions, business applications and AI marvels that push boundaries. Imagine, not just coding, but breathing life into digital dreams, where algorithms dance and machines learn, shaping the future, one line of code at a time. We're not just tech geeks, we're Nigeria's innovation alchemists, transforming ideas into reality. From software applications and banking bots to healthcare heroes, our software and AI creations are making waves, one megabyte at a time. We’ve got your technology solutions covered. We have supported many listed Companies and National and Sub-national Government Ministries, Departments and Agencies pioneering ground breaking critical applications doting Nigeria technology history. We always seek challenging technical nuts to crack, which we do with precision and our timeless methodology. No project too big or complex, we crack them all.
          </p>
        </div>
        <div
          className="flex justify-center w-[100%] p-[20px]"
          data-aos="fade-right"
        >
          <img
            src={historyBg} // Replace with the actual path
            className="rounded-[20px] md:h-[400px] lg:h-[600px] md:w-[800px] w-[160%]"
            alt=""
          />
        </div>
      </div>
      <div id="services"></div>
      <h2
        className="text-[40px] mt-[170px] text-black font-bold text-center dash"
        id="services"
      >
        Services
      </h2>
      <div className="md:flex justify-center ">
        <div
          className="pt-[50px] px-[20px] "
          data-aos="zoom-in"
        >
          <img
            src={serviceBg} // Replace with the actual path
            className="rounded-[20px] mt-[-40px] lg:h-[600px] md:h-[300px] md:w-[800px] w-[100%]"
            alt=""
          />
        </div>
        <div className="flex justify-between" data-aos="zoom-in">
          <Timeline />
        </div>
      </div>

      <div id="portfolio"></div>
      <div id="portfolio" className="mt-[170px]">
        <h2 className="text-center text-[40px] dash text-black font-bold">
          Our Clients
        </h2>
        <p className="text-center ">Below are some of our clients</p>
        <Client />
      </div>
      <div id="contact"></div>
      <div className="pb-[100px] mt-[170px]" id="contact">
        <h2 className="text-center text-[40px] dash text-black font-bold">
          Contact Us
        </h2>
        <Contact />
      </div>
    </div>
  );
};

export default Main;
