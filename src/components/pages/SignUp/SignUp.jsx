import React from "react";
import { Icon } from "@iconify/react";
import { Button, Form, Input } from "antd";
import "./SignUp.css";
import logo02 from "./letlearn02.png";
import { Link } from "react-router-dom";
import auth from "../../../service/auth";

const onFinish = (values) => {
  auth.signUp({
    ...values,
  });
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="left-signup">
        <img src={logo02} alt="" />
        <p className="title">Come join us to learn more useful knowledge.</p>
      </div>
      {/* ---------------- */}
      <div className="right-signup">
        <div className="ask-account">
          <label>
            {" "}
            <b>Bạn đã có tài khoản?</b>
          </label>
          <Link to="/account/sign-in"> Đăng nhập</Link>
          {/* <a href="#" className="sign-in mx-3">
            Đăng nhập
          </a> */}
        </div>

        <p className="title-form">Đăng ký tài khoản Letlearn</p>
        <div className="btn-google mx-4">
          <label className="lable-btn-google">
            <Icon icon="devicon:google" className="icon-google" />
          </label>
          <lable className="mx-4">Đăng ký bằng Google</lable>
        </div>

        {/* ---------- */}
        <div className="line"></div>

        {/* ----------------------- */}
        <Form
          className="form-signin"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          // style={{
          //   maxWidth: 600,
          // }}

          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="name-username">
            <Form.Item
              className="fullname"
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập tên của bạn!",
                },
              ]}
            >
              <Input placeholder="Họ và tên" className="input-fullname" />
            </Form.Item>

            {/* <Form.Item
              className="username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập tên đăng nhập của bạn!",
                },
              ]}
            >
              <p className="mx-0">
                {" "}
                <b>Tên đăng nhập</b>
              </p>
              <Input className="input-name" />
            </Form.Item> */}
          </div>

          {/* <Form.Item
            className="email"
            name="password"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <p className="mx-0">
              {" "}
              <b>Email</b>
            </p>

            <Input.Email className="input-email" />
          </Form.Item> */}

          <Form.Item
            className="email"
            name="email"
            rules={[
              {
                required: true,
                message: "Hãy nhập email!",
              },
            ]}
          >
            {/* <p className="mx-0">
              <b>Email</b>
            </p> */}

            <Input placeholder="Email" className="input-email" />
          </Form.Item>

          {/* <Form.Item
            className="password"
            name="password"
            rules={[
              {
                required: true,
                message: "Hãy nhập mật khẩu!",
              },
            ]}
          >
            <p className="mx-0">
              {" "}
              <b>Mật khẩu</b>
            </p>

            <Input.Password className="input-password" />
          </Form.Item> */}
          <Form.Item
            className="email"
            name="phone"
            rules={[
              {
                required: true,
                message: "Hãy nhập số điện thoại!",
              },
            ]}
          >
            {/* <p className="mx-0">
              <b>Email</b>
            </p> */}

            <Input placeholder="Phone" className="input-email" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button className="button-submit" type="primary" htmlType="submit">
              Tạo tài khoản
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
