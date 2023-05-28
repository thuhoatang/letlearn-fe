import React from "react";
import CardCoursePay from "../CardCoursePay/CardCoursePay";
import "./ListCardPay.css";
import { formatNumber } from "../../untils";

const ListCardPay = ({ items }) => {
  return (
    <div className="list-cart-pay">
      <h3>Giỏ hàng</h3>
      <div className="line-cart"></div>
      {items.map((item) => (
        <CardCoursePay
          name={item.course.title}
          creator={item.course.created_by.fullName}
          category="Sống xanh"
          price={`${formatNumber(item.course.price)} VNĐ`}
          id={item.courseId}
          src={item.course.image.thumbUrl}
          key={item.courseId}
        />
      ))}
      {/* <CardCoursePay
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
      /> */}
    </div>
  );
};

export default ListCardPay;
