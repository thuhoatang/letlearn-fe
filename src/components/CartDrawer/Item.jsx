import React from "react";
import style from "./style-cart.module.scss";
import classNames from "classnames";
import { DeleteOutlined } from "@ant-design/icons";
const cx = classNames.bind(style);
export default function Item() {
  return (
    <div className={cx(style.wrapper)}>
      <div style={{ width: "150px" }}>
        {" "}
        <img
          width="100%"
          style={{ objectFit: "cover" }}
          src="https://i.ibb.co/YyLvtwJ/h-c-TAnh-4.png"
          alt=""
        />
      </div>
      <div className={cx(style.textDescription)}>
        <h4>
          Khóa học rau câu 3D kim thiết kế "Ngàn hoa khoe sắc" "Ngàn hoa khoe
          sắc" "Ngàn hoa khoe sắc" "Ngàn hoa khoe sắc"
        </h4>
        <h6 className={cx()}>Trần An Nhiên</h6>
        <h5>400.000 vnđ</h5>
      </div>
      <DeleteOutlined style={{ fontSize: "24px",color: "#ea4c89" }} />
    </div>
  );
}
