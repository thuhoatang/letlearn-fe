import React from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";
import logo from "./letlearn03.png";
const Footer = () => {
  return (
    <div className="footer mt-4">
      <div className="logo-left">
        <img src={logo} />

        <div className="logo-social my-4">
          <span>
            <Icon
              icon="fa6-brands:square-twitter"
              style={{ fontSize: "30px" }}
            />
          </span>

          <span>
            <Icon
              className="mx-2"
              icon="fa6-brands:linkedin"
              style={{ fontSize: "30px" }}
            />
          </span>

          <span>
            <Icon
              className="mx-2"
              icon="fontisto:instagram"
              style={{ fontSize: "30px" }}
            />
          </span>

          <span>
            <Icon icon="entypo-social:facebook" style={{ fontSize: "30px" }} />
          </span>
        </div>
      </div>
      <div className="content-right">
        <div className="aboutus">
          <a href="#">Letlearn - học cùng bạn</a>
          <br />
          <a href="#">Giá trị học đường</a>
          <br />

          <a href="#">Chứng chỉ khóa học chất lượng</a>
          <br />
        </div>

        <div className="company">
          <a href="#">48 - Hải Châu - Đà Nẵng</a>
          <br />

          <a href="#">Đại học Sư phạm Kỹ thuật</a>
          <br />

          <a href="#">Công nghệ thông tin</a>
        </div>

        <div className="contactus">
          <a href="#">Trang chủ</a>
          <br />

          <a href="#">Về chúng tôi</a>
          <br />

          <a href="#">Hỗ trợ</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
