import React from "react";
import "./Header.css";
import logoLetlearn from "../../asset/images/logoLetlearn.png";
import RightHeader01 from "../RightHeader01/RightHeader01";
import RightHeader02 from "../RightHeader02/RightHeader02";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/reduces/auth";

function Header() {
  const user = useSelector(selectUser);
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logoLetlearn} alt="logo" />
        </div>

        <div className="menu">
          <div className="menu-header">
            <a href="#">Trang chủ</a>
          </div>
          <div className="menu-header categorise">
            <a href="#">Danh mục</a>

            <div class="dropdown-categorise">
              <a href="#">Danh mục 1 Danh mục</a>
              <a href="#">Danh mục 2</a>
              <a href="#">Danh mục 3</a>
              <a href="#">Danh mục 4</a>
              <a href="#">Danh mục 5</a>
              <a href="#">Danh mục 6</a>
            </div>
          </div>
          <div className="menu-header">
            <a href="#">Về chúng tôi</a>
          </div>{" "}
          <div className="menu-header">
            <a href="#">Về chúng tôi</a>
          </div>
        </div>

        <div className="rightHeader">
          {user ? <RightHeader02 /> : <RightHeader01 />}
          {/* <RightHeader01 /> */}
          {/* <RightHeader02 /> */}
        </div>
      </div>
    </>
  );
}

export default Header;
