import React from "react";
import "./TopCourseDetail.css";
import { Icon } from "@iconify/react";
import imgCourse from "./8.webp";

const TopCourseDetail = () => {
  return (
    <div className="top-course-detail">
      <div className="left">
        <p className="name_course">Lập trình website đơn giản với 5 bước</p>
        <p className="decription_course my-3">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint.
        </p>

        <p className="lecturers_course">
          Giảng viên: <b> Marvin McKinney</b>
        </p>
        <p className="date_course my-3">
          Ngày cập nhật: <b>24/04/2023</b>
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
          <img src={imgCourse} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopCourseDetail;
