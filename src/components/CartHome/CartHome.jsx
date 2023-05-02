import React from "react";
import "./CartHome.css";
import cart01 from "./8.webp";
import { Icon } from "@iconify/react";
import { formatNumber } from "../../untils";

const CartHome = ({
  courseImage = cart01,
  courseTitle,
  lecturerAvatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  price = 10000,
  nameLecturer = "None",
  loves = 0,
}) => {
  return (
    <div className="cart-course">
      <div className="cart-content">
        <div className="header-cart">
          <img src={courseImage} />
          <div className="blank-cart"></div>
          <div className="name-course">
            <p className="title">{courseTitle}</p>
            <button className="button-cart">
              <Icon icon="teenyicons:bag-plus-solid" className="icon-cart" />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-cart">
        <div className="left-footer-cart">
          <div className="avatar">
            <img src={lecturerAvatar} alt="" />
          </div>

          <div className="info-lecturer">
            <a href="#">
              <label className="name-lecturer mx-3">
                <b>{nameLecturer}</b>
              </label>
              <label className="lecturer-armorial">Pro</label>
            </a>
            {/* ----------- */}
            <div className="react-course">
              <label className="mx-3">
                <Icon icon="mdi:heart" className="icon-heart" />
                {loves}
              </label>
              <label>
                <Icon icon="solar:eye-bold" className="icon-eye" />
                116
              </label>
            </div>
          </div>
        </div>

        <div className="right-footer-cart">
          <div className="current-price mx-3">{formatNumber(+price)} vnđ</div>
          <div className="root-price">350.000 vnđ</div>
        </div>
      </div>
    </div>
  );
};

export default CartHome;
