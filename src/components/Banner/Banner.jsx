import React from "react";
import "./Banner.css";
import banner from "./banner.png";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <img className="banner" src={banner} alt="" />
      </div>
      <div className="text-banner">
        <p className="text-title">SEARCH ON LETLEARN</p>
        <p className="text-content">With more than +10.0 quality lectures</p>
      </div>
    </>
  );
};

export default Banner;
