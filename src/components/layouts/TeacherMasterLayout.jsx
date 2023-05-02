import React from "react";
import "./MasterLayout.css";
import MenuLeftTeacher from "../MenuLeftTeacher/MenuLeftTeacher";
import HeaderRightTeacher from "../HeaderRightTeacher/HeaderRightTeacher";
import { Outlet } from "react-router-dom";

const TeacherMasterLayout = () => {
  return (
    <div className="teacher-master-layout">
      <div className="menu-left">
        <MenuLeftTeacher />
      </div>

      <div className="body-right">
        <HeaderRightTeacher />
        <div className="body-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TeacherMasterLayout;
