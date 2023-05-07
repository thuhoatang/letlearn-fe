import React from "react";
import "./TopCourseDetail.css";
import { Icon } from "@iconify/react";
import imgCourse from "./8.webp";
import { formatDate, formatNumber } from "../../untils";

const TopCourseDetail = ({ course }) => {
  return (
    <div className="top-course-detail">
      <div className="left">
        <p className="name_course">{course.title}</p>
        <p className="decription_course my-3">{course.description}</p>

        <p className="lecturers_course">
          Giảng viên: <b> {course.created_by.fullName}</b>
        </p>
        <p className="date_course my-3">
          Ngày cập nhật: <b>{formatDate(course.created_at)}</b>
        </p>

        <div className="react-course">
          <div className="heart">
            <Icon icon="ph:heart-fill" className="icon-heart mx-2" />
            <label htmlFor="">116</label>
          </div>

          <div className="eye">
            <Icon icon="ri:eye-fill" className="icon-eye mx-2" />
            <label htmlFor="">11.8k</label>
          </div>

          <div className="comment mx-3">
            <Icon
              icon="majesticons:comment-2-text"
              className="icon-comment mx-2"
            />
            <label htmlFor="">116</label>
          </div>
        </div>

        <div className="button-learn">
          <button>Học ngay</button>
        </div>
      </div>
      <div className="right">
        <div className="img_course">
          <img src={course.image.url} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopCourseDetail;
