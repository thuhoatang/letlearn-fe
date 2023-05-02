import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const RightHeader01 = () => {
  const navigation = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigation("account/sign-up")}
        title="Đăng ký"
        bgColor="bg-none"
      />
      <Button
        onClick={() => navigation("account/sign-in")}
        title="Đăng nhập"
        bgColor="pink"
      />
    </>
  );
};

export default RightHeader01;
