import React from "react";
import "./CardManageCourse.css";
import course from "./9.webp";

const CardManageCourse = ({ title = "", image = course }) => {
  return (
    <div className="card-manage-course">
      <div className="img-course">
        <img src={image} alt="" />
      </div>
      <div className="name-date">
        <p className="name-detail">
          <b>{title}</b>
        </p>

        <p className="date-update">12/3/23</p>

        <button class="btn-update-course">Cập nhật khóa học</button>
      </div>

      <div className="student">
        <p className="mx-0">123</p>
        <p className="p-student mx-0">Học viên</p>
        <button class="btn-see-student">Xem học viên</button>
      </div>

      <div className="rating-heart">
        <p className="mx-0">123</p>
        <p className="p-rating-heart mx-0">Yêu thích</p>
        <button class="btn-see-student">Xem lượt</button>
      </div>

      <div className="comment">
        <p className="mx-0">123</p>
        <p className="p-comment mx-0">Bình luận</p>
        <button class="btn-see-student">Xem lượt</button>
      </div>
    </div>
  );
};

export default CardManageCourse;
