import React, { useEffect, useMemo, useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import ReactPlayer from "react-player";
import { Tabs } from "antd";
import ListCourse from "./ListCourse";
import "./style.css";
import { useParams } from "react-router-dom";
import courseService from "../../../service/course";
import { learnedService } from "../../../store/reduces/learnedService";
import General from "./General/General";
import Comments from "./ListCourse/Comments";
const cx = classNames.bind(style);
const onChange = (key) => {
  console.log(key);
};

export default function WatchVideo() {
  const { id } = useParams();
  const [course, sertCourse] = useState();
  const [lectureSelected, setLectureSelected] = useState();
  const [fresh, setFresh] = useState(false);
  const [progress, setProgress] = useState(false);
  const refresh = useMemo(
    () => () => {
      setFresh(!fresh);
    },
    []
  );
  const items = useMemo(
    () => [
      {
        key: "1",
        label: `Tổng quang`,
        children: <General course={course} />,
      },
      {
        key: "2",
        label: `Trao đổi`,
        children:  <Comments courseId={id} />,
      },
      {
        key: "3",
        label: `Đánh giá`,
        children: `Content of Tab Pane 3`,
      },
    ],
    [course]
  );

  useEffect(() => {
    const func = async () => {
      const course = await courseService.getCourseToLearn(id);
      sertCourse(course);
    };
    func();
  }, [fresh]);

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
              onProgress={async (pro) => {
                const { played } = pro;
                console.log(!progress);
                if (played >= 0.85 && !progress) {
                  // Thực hiện hành động tại đây khi video đạt đến 85% thời gian
                  console.log("Đã đạt đến 85% thời gian của video");
                  await learnedService.create(+lectureSelected.substring(4));
                  refresh();

                  setProgress(true);
                  // Gọi hàm hoặc thực hiện hành động mong muốn
                }
              }}
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
              refresh={refresh}
              courseId={course.course.id}
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
