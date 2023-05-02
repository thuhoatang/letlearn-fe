import React, { useState } from "react";
import "./AddFileCourse.css";
import AddSection from "../../AddSection/AddSection";

const AddFileCourse = () => {
  const [sectionCounter, setSectionCounter] = React.useState(1);

  function onChangeForm() {}

  function addSection(event) {
    event.preventDefault();
    setSectionCounter((prev) => prev + 1);
  }

  return (
    <div className="add-file-course">
      <p className="title">Create course</p>
      <div className="list-button d-flex">
        <button className="button-back mx-4">Quay lại</button>
        <button className="button-back">Lưu bài</button>
      </div>

      <div className="curriculum">
        {Array.from(
          { length: sectionCounter },
          (_unused, index) => index + 1
        ).map((sectionIndex) => {
          const sectionId = `${sectionIndex}`;
          return <AddSection sectionId={sectionId} />;
        })}

        {/* button thêm 1 section */}

        <span className="clown-add">
          <button className="button-add-section" onClick={addSection}>
            Thêm chương
          </button>
        </span>
      </div>
    </div>
  );
};

export default AddFileCourse;
