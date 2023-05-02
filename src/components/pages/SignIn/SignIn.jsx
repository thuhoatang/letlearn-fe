import React, { useCallback, useState } from "react";
import "./SignIn.css";
import { Button, Checkbox, Form, Input } from "antd";
import { Icon } from "@iconify/react";
import logo from "./letlearn02.png";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../service/auth";
import { getProfile } from "../../../store/reduces/auth";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";

// const onFinish = async (values) => {
//   const res = await auth.signIn(values);
//   localStorage.setItem("access_token", res.data.access_token);
//   getProfile();
// };
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignIn = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const onFinish = useCallback(async (values) => {
    const res = await auth.signIn(values);
    console.log(res);
    if (res.status === 401) {
      setMessage("Sai mật khẩu hoặc tên đăng nhập!");
    } else {
      localStorage.setItem("access_token", res.data.access_token);
      dispatch(getProfile());
      navigate("/home");
    }
  }, []);

  return (
    <div className="sign-in">
      <div className="left-signin">
        <img src={logo} alt="" />
        <p className="title">Come join us to learn more useful knowledge.</p>
      </div>

      {/* ------ */}

      <div className="right-signin">
        <div className="ask-account">
          <label>
            {" "}
            <b>Bạn chưa có tài khoản?</b>
          </label>
          <Link to="/account/sign-up" className="sign-in mx-3">
            Đăng ký
          </Link>
          {/* <a href="#" className="sign-in mx-3">
            Đăng ký
          </a> */}
        </div>

        <p className="title-form">Đăng nhập với Letlearn</p>
        <div className="btn-google mx-4">
          <label className="lable-btn-google">
            <Icon icon="devicon:google" className="icon-google" />
          </label>
          <lable className="mx-4">Đăng nhập bằng Google</lable>
        </div>

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
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <p>{message}</p>
          <Form.Item
            className="username"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng điền thông tin!",
              },
            ]}
          >
            {/* <p className="mx-0">
              {" "}
              <b>Email</b>
            </p> */}

            <Input className="input-username" />
          </Form.Item>

          <Form.Item
            className="password"
            name="password"
            rules={[
              {
                required: true,
                message: "Hãy nhập mật khẩu!",
              },
            ]}
          >
            {/* <p className="mx-0">
              {" "}
              <b>Mật khẩu</b>
            </p> */}

            <Input.Password className="input-password" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button className="button-submit" type="primary" htmlType="submit">
              Đăng nhập{" "}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
