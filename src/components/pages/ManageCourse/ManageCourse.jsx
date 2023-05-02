import React from "react";
import "./ManageCourse.css";
import CardManageCourse from "../../CardManageCourse/CardManageCourse";

const ManageCourse = () => {
  return (
    <div className="manage-course">
      <div className="header-manage-course">
        <p className="title mx-0">Quản lý khóa học</p>
        <div className="filter my-2">
          <input
            className="input-search px-2"
            type="text"
            placeholder="Tìm kiếm"
          />

          <select className="select-combobox mx-5 px-2" id="cars">
            <option value="volvo">Mới nhất</option>
            <option value="saab">Cũ nhất</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>

          <button className="create-course">Tạo khóa học</button>
        </div>
      </div>

      <div className="list-course">
        <CardManageCourse />
        <CardManageCourse />
        <CardManageCourse />
        <CardManageCourse />
        <CardManageCourse />
        <CardManageCourse />
      </div>
    </div>
  );
};

export default ManageCourse;
