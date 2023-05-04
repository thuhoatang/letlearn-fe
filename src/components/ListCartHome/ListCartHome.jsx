import React from "react";
import "./ListCartHome.css";
import CartHome from "../CartHome/CartHome";

const ListCartHome = ({ courses }) => {
  return (
    <div className="list-cart my-4">
      {courses?.map((course) => (
        <CartHome
          courseImage={course?.image?.url}
          courseTitle={course.title}
          lecturerAvatar={course.created_by?.avatar?.thumbUrl}
          price={course.price}
          nameLecturer={course.created_by.fullName}
          loves={course.loves}
        />
      ))}

      {/* <CartHome />
      <CartHome />
      <CartHome />
      <CartHome />
      <CartHome />
      <CartHome />
      <CartHome />
      <CartHome />
      <CartHome />
      <CartHome /> */}
    </div>
  );
};

export default ListCartHome;
