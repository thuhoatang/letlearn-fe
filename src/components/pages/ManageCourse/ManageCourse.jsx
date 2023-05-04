import React, { useEffect, useState } from "react";
import "./ManageCourse.css";
import CardManageCourse from "../../CardManageCourse/CardManageCourse";
import courseService from "../../../service/course";

const ManageCourse = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    console.log(courses);
    const callback = async () => {
      const course = await courseService.courseOwner();
      setCourses(course);
    };
    callback();
  }, []);
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
        {courses?.map((course) => (
          <CardManageCourse
            title={course.title}
            image={course?.image?.mediumUrl}
          />
        ))}
        {/* <CardManageCourse />
        <CardManageCourse />
        <CardManageCourse />
        <CardManageCourse />
        <CardManageCourse />
        <CardManageCourse /> */}
      </div>
    </div>
  );
};

export default ManageCourse;
