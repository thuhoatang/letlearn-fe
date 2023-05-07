import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { Spin } from "antd";

const cx = classNames.bind(style);

export default function Spinner() {
  return (
    <div className={cx(style["spinner"])}>
      <Spin spinning={true} tip="Loading...">
        <div className={cx(style["spinner-fullscreen"])}></div>
      </Spin>
    </div>
  );
}
