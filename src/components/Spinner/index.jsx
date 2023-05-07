import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import { selectSpinner } from "../../store/reduces/spinner";

const cx = classNames.bind(style);

export default function Spinner() {
  const loading = useSelector(selectSpinner);

  return (
    <div className={cx(style["spinner"])} style={!loading ? {display: "none"} : {}}>
      <Spin spinning={loading} tip="Loading...">
        <div className={cx(style["spinner-fullscreen"])}></div>
      </Spin>
    </div>
  );
}
