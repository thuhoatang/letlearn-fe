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
  }, []);

  useEffect(() => {}, []);
  useEffect(() => {
    const fun = async () => {
      const detailt = await courseService.detailtCourseWithTeacher(courseId);
      setDetailt(detailt);
    };
    fun();
  }, [tempForreload]);
  // console.log(course);
  function onChangeForm() {}

  function addSection(event) {
    setCreating(true);
  }

  return (
    <div className="add-file-course">
      <p className="title">Create course</p>
      <div className="list-button d-flex">
        <button className="button-back mx-4">Quay lại</button>
        <button className="button-back">Lưu bài</button>
      </div>

      <div className="curriculum">
        {" "}
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
            title="Be creating"
            courseId={detail?.id}
            reload={reload}
          />
        )}
        {/* {Array.from(
          { length: sectionCounter },
          (_unused, index) => index + 1
        ).map((sectionIndex) => {
          const sectionId = `${sectionIndex}`;
          return <AddSection sectionId={sectionId} courseId={detail?.id} />;
        })} */}
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
