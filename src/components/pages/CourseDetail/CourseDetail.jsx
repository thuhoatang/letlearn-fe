import React from "react";
import "./CourseDetail.css";
import TopCourseDetail from "../../TopCourseDetail/TopCourseDetail";
import LeftCourseDetail from "../../LeftCourseDetail/LeftCourseDetail";
import RightCourseDetail from "../../RightCourseDetail/RightCourseDetail";

const CourseDetail = () => {
  return (
    <div>
      <TopCourseDetail />
      <div className="body-detail-course">
        <LeftCourseDetail />

        <RightCourseDetail />
      </div>
    </div>
  );
};

export default CourseDetail;
