import React from "react";
import "./LeftCourseDetail.css";
import DropdownSection from "../DropdownSection/DropdownSection";

const LeftCourseDetail = ({ sections }) => {
  console.log(sections);
  return (
    <div className="left-course-detail">
      <p className="title">Nội dung khóa học</p>
      <p className="quantity_section mb-4">{sections.length} section</p>
      {sections.map((section, index) => (
        <DropdownSection key={index} section={section} />
      ))}
      {/* <DropdownSection />
      <DropdownSection />
      <DropdownSection /> */}
    </div>
  );
};

export default LeftCourseDetail;
