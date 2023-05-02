import React from "react";
import Button from "../Button/Button";
import "./SignInOrSignUp.css";
const SignInOrSignUp = () => {
  return (
    <div className="button-signin-signup">
      <Button title="Đăng nhập để khám phá" bgColor="pink" />
      <Button title="Bạn chưa có tài khoản" bgColor="bg-none" />
    </div>
  );
};

export default SignInOrSignUp;
