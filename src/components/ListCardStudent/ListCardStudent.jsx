import React, { useEffect } from "react";
import CardStudent from "../CardStudent/CardStudent";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMyCourse,
  updateMyCourse,
} from "../../store/reduces/myCourseSlice";

const ListCardStudent = () => {
  const dispatch = useDispatch();
  const myCourse = useSelector(selectMyCourse);

  useEffect(() => {
    dispatch(updateMyCourse());
  }, []);
  return (
    <div className="list-cart my-4">
      {myCourse.map((course) => (
        <CardStudent
          id={course.courseId}
          key={course.courseId}
          image={course.course.image.mediumUrl}
          title={course.course.title}
          created_by={course.course.created_by.fullName}
          // avatar={
          //   course.course.created_by.avatar
          //     ? course.course.created_by.avatar
          //     : null
          // }
        />
      ))}
      {/* <CardStudent /> */}
    </div>
  );
};

export default ListCardStudent;
