import React from "react";
import "./ListOptionTypeLesson.css";
import Lecture01 from "../Lecture01/Lecture01";

const ListOptionTypeLesson = ({ lessonId }) => {
  return (
    <>
      <div className="list-option-type">
        <button className="button-video">Video bài giảng</button>
        <button className="button-text mx-5">Tài liệu học tập</button>
        <button className="button-practice-test">Bài kiểm tra</button>
      </div>

      <Lecture01 lessonId={lessonId} />
    </>
  );
};

export default ListOptionTypeLesson;
