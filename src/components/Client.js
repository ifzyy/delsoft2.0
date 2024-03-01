import React from 'react';

import clientOne from "../client-logos/1.jpg";
import clientTwo from "../client-logos/2.jpg";
import clientThree from "../client-logos/3.jpg";
import clientFour from "../client-logos/4.jpg";
import clientSix from "../client-logos/6.jpg";
import clientEight from "../client-logos/8.jpg";
import clientNine from "../client-logos/9.jpg";
import clientTen from "../client-logos/11.jpg";
import clientEleven from "../client-logos/12.jpg";
import clientTwelve from "../client-logos/13.jpg";
import clientFifteen from "../client-logos/15.jpg";
import clientSixteen from "../client-logos/changeroom.png";

const Client = () => {       
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[30px] p-[30px] justify-center items-center lg:p-[70px]">
      <img src={clientOne} width={500} height={300} alt=""/>
      <img src={clientTwo} width={500} height={300} alt=""/>
      <img src={clientThree} width={500} height={300} alt=""/>
      <img src={clientFour} width={500} height={300} alt=""/>
      <img src={clientSix} width={500} height={300} alt=""/>
      <img src={clientEight} width={500} height={300} alt=""/>
      <img src={clientNine} width={500} height={300} alt=""/>
      <img src={clientTen} width={500} height={300} alt=""/>
      <img src={clientEleven} width={500} height={300} alt=""/>
      <img src={clientTwelve} width={500} height={300} alt=""/>
      <img src={clientFifteen} width={500} height={300} alt=""/>
      <img src={clientSixteen} width={500} height={300} alt=""/>
    </div>
  )
}

export default Client;
