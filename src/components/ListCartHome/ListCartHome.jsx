import React from "react";
import "./ListCartHome.css";
import CartHome from "../CartHome/CartHome";

const ListCartHome = ({ courses }) => {
  return (
    <div className="list-cart my-4">
      {courses?.map((course) => (
        <CartHome
        courseId={course.id}
          courseImage={course?.image?.url}
          courseTitle={course.title}
          lecturerAvatar={course.created_by?.avatar?.thumbUrl}
          price={course.price}
          nameLecturer={course.created_by.fullName}
          loves={course.loves}
        />
      ))}
    </div>
  );
};

export default ListCartHome;
