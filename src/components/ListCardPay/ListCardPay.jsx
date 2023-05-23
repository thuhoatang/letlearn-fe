import React from "react";
import CardCoursePay from "../CardCoursePay/CardCoursePay";
import "./ListCardPay.css";

const ListCardPay = () => {
  return (
    <div className="list-cart-pay">
      <h3>Giỏ hàng</h3>
      <div className="line-cart"></div>
      <CardCoursePay
        name="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur"
        creator="Tăng Thu Hòa"
        category="Sống xanh"
        price="105.000 VNĐ"
      />
      <CardCoursePay
        name="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        creator="Tăng Thu Hòa"
        category="Sống xanh"
        price="105.000 VNĐ"
      />
      <CardCoursePay
        name="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        creator="Tăng Thu Hòa"
        category="Sống xanh"
        price="105.000 VNĐ"
      />
    </div>
  );
};

export default ListCardPay;
