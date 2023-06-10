import React, { useCallback, useEffect, useState } from "react";
import "./AddFileCourse.css";
import AddSection from "../../AddSection/AddSection";
import { useParams } from "react-router-dom";
import courseService from "../../../service/course";
import { MangagementCourse } from "../../../contexts";

const AddFileCourse = () => {
  const [sectionCounter, setSectionCounter] = React.useState(1);
  const { courseId } = useParams();
  const [tempForreload, setempforReload] = useState(false);
  const [detail, setDetailt] = useState();
  const [creating, setCreating] = useState(false);

  const reload = useCallback(() => {
    setCreating(false);
    setempforReload(!tempForreload);
  }, [tempForreload]);
  // console.log(course]);

  useEffect(() => {}, []);
  useEffect(() => {
    const fun = async () => {
      const detailt = await courseService.detailtCourseWithTeacher(courseId);
      setDetailt(detailt);
    };
    fun();
  }, [courseId, tempForreload]);
  // console.log(course);
  function onChangeForm() {}

  function addSection(event) {
    setCreating(true);
  }

  return (
    <div className="add-file-course">
      <p className="title">Thêm khóa học</p>
      <div className="list-button d-flex">
        <button className="button-back mx-4">Quay lại</button>
        <button className="button-back">Lưu bài</button>
      </div>

      <div className="curriculum">
        <MangagementCourse.Provider
          value={{
            reload: reload,
          }}
        >
          {detail?.sections.map((section, index) => (
            <AddSection
              index={index}
              sectionId={section.id}
              key={section.id}
              courseId={detail?.id}
              title={section.title}
              description={section.description}
              items={section.items}
            />
          ))}
        </MangagementCourse.Provider>
        {creating && (
          <AddSection
            index={detail?.sections.length}
            title="Đang tạo"
            courseId={detail?.id}
            reload={reload}
          />
        )}
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
