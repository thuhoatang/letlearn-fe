import React from "react";
import "./Button.css";

const Button = ({ title, bgColor, ...props }) => {
  return (
    <>
      <button {...props} className={`${bgColor ? bgColor : ""}`}>
        {title}
      </button>
    </>
  );
};

export default Button;
