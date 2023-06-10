import React, { useEffect, useMemo, useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import ReactPlayer from "react-player";
import { Tabs } from "antd";
import ListCourse from "./ListCourse";
import "./style.css";
import { useParams } from "react-router-dom";
import courseService from "../../../service/course";
const cx = classNames.bind(style);
const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: `Thông tin chung khóa học`,
    children: `èhwufuh`,
  },
  {
    key: "2",
    label: `Thông tin bài học`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: `Mục trao đổi giữa các học viên`,
    children: `Content of Tab Pane 3`,
  },
];
export default function WatchVideo() {
  const { id } = useParams();
  const [course, sertCourse] = useState();
  const [lectureSelected, setLectureSelected] = useState();

  useEffect(() => {
    const func = async () => {
      const course = await courseService.getCourseToLearn(id);
      sertCourse(course);
    };
    func();
  }, []);

  const lecture = useMemo(() => {
    const items = course?.course.sections
      .sort((a, b) => a.id - b.id)
      .reduce((pre, section) => {
        const items = section?.items.reduce((pre, item) => {
          const key = `lec-${item.id}`;
          return { ...pre, [key]: item };
        }, {});

        return { ...pre, ...items };
      }, {});

    return items;
  }, [course]);

  return (
    <>
      {course && (
        <div className={cx(style["wrapper"])}>
          <div className={cx(style.video)}>
            <ReactPlayer
              width={"100%"}
              height={"500px"}
              // url={"https://www.youtube.com/watch?v=EKEQGOtraOM"}
              url={lecture?.[lectureSelected]?.lecture?.video}
              controls
            />
            <div className={cx([style.wrapperTabs, "wrapperTabs"])}>
              {" "}
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
          </div>
          <div className={cx(style.lecture)}>
            <ListCourse
              sections={course.course.sections.sort((a, b) => a.id - b.id)}
              lectureBeingLearned={course.lectureBeingLearned}
              setLectureSelected={setLectureSelected}
            ></ListCourse>
          </div>
        </div>
      )}
    </>
  );
}
