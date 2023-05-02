import React from "react";
import "./LeftCourseDetail.css";
import DropdownSection from "../DropdownSection/DropdownSection";

const LeftCourseDetail = () => {
  return (
    <div className="left-course-detail">
      <p className="title">Nội dung khóa học</p>
      <p className="quantity_section mb-4">3 section</p>
      <DropdownSection />
      <DropdownSection />
      <DropdownSection />
    </div>
  );
};

export default LeftCourseDetail;
