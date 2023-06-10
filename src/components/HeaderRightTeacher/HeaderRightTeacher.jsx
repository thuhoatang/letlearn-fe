import React from "react";
import "./HeaderRightTeacher.css";
import { Link } from "react-router-dom";

const HeaderRightTeacher = () => {
  return (
    <div className="header-right-teacher">
      <div>
        {/* <a href="#" className="mx-5">
          Trở thành học viên
        </a> */}
        <Link className="mx-5" to="/home">Quay lại trang chủ</Link>
      </div>
      <div className="avt-img">
        <img
          src="https://images.unsplash.com/photo-1601150057881-38ff0ccc58dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bHVja3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeaderRightTeacher;
