import React, { useEffect, useMemo, useState } from "react";
import "./CourseDetail.css";
import TopCourseDetail from "../../TopCourseDetail/TopCourseDetail";
import LeftCourseDetail from "../../LeftCourseDetail/LeftCourseDetail";
import RightCourseDetail from "../../RightCourseDetail/RightCourseDetail";
import { useParams } from "react-router-dom";
import courseService from "../../../service/course";

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState();
  useEffect(() => {
    const fun = async () => {
      const course = await courseService.getOne(courseId);
      setCourse(course?.[0]);
    };
    fun();
  }, []);

  const { sections, ...detail } = course || {};
  return (
    <div>
      {course ? (
        <>
          <TopCourseDetail course={detail} />
          <div className="body-detail-course">
            <LeftCourseDetail sections={sections} />

            <RightCourseDetail />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CourseDetail;
