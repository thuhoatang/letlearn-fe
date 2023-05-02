import React from "react";
import "./RightHeader02.css";
import { Icon } from "@iconify/react";

const RightHeader02 = () => {
  return (
    <div className="right-hearder_02">
      <button className="btn-my_course">My Courses</button>

      <button className="btn-my_cart">
        <Icon icon="fa6-solid:cart-arrow-down" className="icon-cart" />
      </button>

      <div className="avatar">
        <div className="btn-avt">
          <img
            className="img-avata"
            src="https://images.unsplash.com/photo-1681958758179-207ff9bd9362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div class="dropdown-content">
          <a href="#">Thông tin cá nhân</a>
          <a href="#">Mục yêu thích</a>
          <a href="#">Thành Giảng viên</a>
          <a href="#">Đăng xuất</a>
        </div>
      </div>
    </div>
  );
};

export default RightHeader02;