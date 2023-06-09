import React from "react";
import "./CardCoursePay.css";
import img_course from "./8 cấp độ tư do tài chính (3).png";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../store/reduces/cart";

const CardCoursePay = ({ name, creator, category, price, src, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="card-pay">
      <div className="img-course">
        <img src={src} alt="" />
      </div>
      <div className="content-course">
        <p className="content-course-name mx-0">
          <b>{name}</b>
        </p>

        <p className="mx-0">Bởi: {creator}</p>

        <p className="mx-0">{category}</p>
      </div>
      <div className="action-course">
        <p className="price mx-0">{price}</p>
        <p
          onClick={() => {
            dispatch(deleteCart(id));
          }}
          className="detele-cart mx-0"
        >
          Xóa khóa học
        </p>
        <p className="payment-only mx-0">Thanh toán riêng</p>
      </div>
    </div>
  );
};

export default CardCoursePay;
