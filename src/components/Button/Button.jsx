import React from "react";
import "./Button.css";

const Button = ({ title, bgColor }) => {
  return (
    <>
      <button className={`${bgColor ? bgColor : ""}`}>{title}</button>
    </>
  );
};

export default Button;
