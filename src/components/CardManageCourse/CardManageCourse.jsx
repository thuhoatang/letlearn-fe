import React from "react";
import "./CardManageCourse.css";
import course from "./9.webp";
import { useNavigate } from "react-router-dom";
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  return `${day}/${month}/${year}`;
}
const CardManageCourse = ({
  title = "",
  image = course,
  updatedAt = "",
  id = 0,
}) => {
  const navigate = useNavigate();
  return (
    <div className="card-manage-course">
      <div className="img-course">
        <img src={image} alt="" />
      </div>
      <div className="name-date">
        <p className="name-detail">
          <b>{title}</b>
        </p>

        <p className="date-update">{formatDate(new Date(updatedAt))}</p>

        <button
          onClick={() => {
            navigate("/teacher/add-course/" + id);
          }}
          class="btn-update-course"
        >
          Cập nhật khóa học
        </button>
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
