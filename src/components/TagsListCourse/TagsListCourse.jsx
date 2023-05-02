import React from "react";
import "./TagsListCourse.css";

const TagsListCourse = () => {
  return (
    <div className="list-filter container">
      <div>
        <p className="mx-0 my-1">
          {" "}
          <b>Danh mục</b>
        </p>
        <select className="filter-categories">
          <option value="volvo">Khoa học máy tính</option>
          <option value="saab">Saab</option>
          <option value="vw">VW</option>
          <option value="audi" selected>
            Audi
          </option>
        </select>
      </div>

      {/* ---- */}

      <div className="mx-5">
        <p className="mx-0 my-1">
          {" "}
          <b>Người tạo</b>
        </p>
        <select className="filter-creator">
          <option value="volvo">Khoa học máy tính</option>
          <option value="saab">Saab</option>
          <option value="vwdưq">VW</option>
          <option value="audi" selected>
            Audi
          </option>
        </select>
      </div>

      <div className="mr-5">
        <p className="mx-0 my-1">
          {" "}
          <b>Trạng thái khóa học</b>
        </p>
        <select className="filter-status">
          <option value="volvo">Đang học</option>
          <option value="saab">Saab</option>
          <option value="vw">VW</option>
          <option value="audi" selected>
            Audi
          </option>
        </select>
      </div>
    </div>
  );
};

export default TagsListCourse;
