import React from "react";
import "./MenuLeftTeacher.css";
import logo from "./letlearn02.png";
import {
  YoutubeOutlined,
  UsergroupAddOutlined,
  FundOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const mappingRoute = {
  1: "/teacher/manage-course",
  2: "/teacher/add-course",
};
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
    className: "fontSize",
  };
}
const items = [
  getItem("Bài giảng", "sub1", <YoutubeOutlined />, [
    getItem(
      "Quản lý",
      "g1",
      null,
      [getItem("Danh sách bài giảng", "1"), getItem("Tạo bài giảng", "2")],
      "group"
    ),
  ]),
  getItem("Học viên", "sub2", <UsergroupAddOutlined />, [
    getItem("Đăng ký khóa học", "5"),
    getItem("Đã hoàn thành KH", "6"),
    getItem("Bình luận", "sub3", null, [
      getItem("Xem bình luận", "7"),
      getItem("Trò chuyện", "8"),
    ]),
  ]),
  {
    type: "divider",
  },
  getItem("Thống kê", "sub4", <FundOutlined />, [
    getItem("Doanh thu khóa học", "9"),
    getItem("Quản lý thanh toán", "10"),
    getItem("Option 12", "11"),
  ]),
  getItem(
    "Tiện ích",
    "grp",
    null,
    [getItem("Đang chờ thanh toán", "13")],
    "group"
  ),
];

const MenuLeftTeacher = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(mappingRoute[e.key]);
  };
  return (
    <Menu
      // onChange={(e) => {

      // }}
      className="menu-left-teacher"
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default MenuLeftTeacher;
