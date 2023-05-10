import React, { useContext } from "react";
import "./CartHome.css";
import cart01 from "./8.webp";
import { Icon } from "@iconify/react";
import { formatNumber } from "../../untils";
import { useNavigate } from "react-router-dom";
import cartService from "../../service/cart";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, setStatus, updateCarts } from "../../store/reduces/cart";
import NotificationContext from "../../contexts/notification";

const CartHome = ({
  courseId,
  courseImage = cart01,
  courseTitle,
  lecturerAvatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  price = 10000,
  nameLecturer = "None",
  loves = 0,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const { api } = useContext(NotificationContext);
  return (
    <div
      onClick={() => {
        navigate("/course-detail/" + courseId);
      }}
      className="cart-course"
    >
      <div className="cart-content">
        <div className="header-cart">
          <img src={courseImage} />
          <div className="blank-cart"></div>
          <div className="name-course">
            <p className="title">{courseTitle}</p>
            <button
              className="button-cart"
              onClick={async (e) => {
                const result = cart.items.find(
                  (item) => item.courseId == courseId
                );
                e.stopPropagation();
                console.log(result);
                if (!result) {
                  await cartService.add(courseId);
                  dispatch(updateCarts());
                  api.open({
                    message: "Thông báo",
                    description: "Đã thêm khóa học vào giỏ hàng",
                    placement: "top"
                  });  
                }
                dispatch(setStatus(true));
                    }}
            >
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
