import React from "react";
import "./AddSection.css";
import { Icon } from "@iconify/react";
import AddLesson from "../AddLesson/AddLesson";

const AddSection = ({ sectionId }) => {
  const [showOption, setShowOption] = React.useState(false);
  const [lessonCounter, setLessonCounter] = React.useState(1);

  function onChangeForm() {}

  function addLesson(event) {
    event.preventDefault();
    setShowOption(true);
    setLessonCounter((prev) => prev + 1);
  }
  return (
    <div className="add-section">
      <div className="header-section">
        <p className="title">Chương {sectionId}</p>
        <button className="button-delete">
          <Icon className="icon-detele" icon="mingcute:delete-2-fill" />
        </button>
      </div>

      <div className="description-section mx-4">
        <p className="mx-0">Tên chương học</p>
        <input
          className="input-name-section px-4"
          type="text"
          placeholder="Nhập tên chương"
        />

        <p className="mx-0 mt-4">Mô tả chương học</p>
        <input
          className="input-name-section px-4"
          type="text"
          placeholder="Nhập mô tả"
        />
      </div>

      {/* button them bài học nhỏ */}
      {Array.from({ length: lessonCounter }, (_unused, index) => index + 1).map(
        (lessonIndex) => {
          const lessonId = `${lessonIndex}`;
          return <AddLesson lessonId={lessonId} />;
        }
      )}

      {/* {showOption && <AddLesson lessonId="1" />} */}
      <button className="button-add-lesson" onClick={addLesson}>
        Thêm bài học
      </button>
      <button className="button-submit-lesson">Đồng ý</button>
    </div>
  );
};

export default AddSection;
