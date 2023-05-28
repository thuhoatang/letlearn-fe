import { Menu } from "antd";
import React, { useEffect, useMemo } from "react";

import style from "./style.module.scss";
import classNames from "classnames";
import check from "./check.svg";
import uncheck from "./uncheck.svg";
import "./style.css";
const cx = classNames.bind(style);
function getItem(label, key, icon, children, type, className) {
  return {
    key,
    icon,
    children,
    label,
    type,
    className,
  };
}

// const items = [
//   getItem(
//     "Navigation Three1234 1234 1234 asd asd ád1234",
//     "sub1",
//     null,
//     [
//       getItem(
//         "Option 9",
//         "1",
//         null,
//         null,
//         null,
//         cx([style.item, "item-lecture"])
//       ),
//       getItem(
//         "Option 10",
//         "2",
//         null,
//         null,
//         null,
//         cx([style.item, "item-lecture"])
//       ),
//       getItem(
//         "Option 11",
//         "3",
//         <img alt="" src={check} />,
//         null,
//         null,
//         cx([style.item, "item-lecture"])
//       ),
//       getItem(
//         <>
//           "Option qweqweq weqweqeqeqeq eqeqeqeqeq eqe qeqeqwe12"<span></span>
//         </>,
//         "12",
//         <img alt="" src={check} />,
//         null,
//         null,
//         cx([style.item, "item-lecture"])
//       ),
//     ],
//     null,
//     cx([style.submenu, "item-lecture"])
//   ),
//   getItem(
//     "Navigation Three1234 1234 1234 asd asd ád1234",
//     "sub2",
//     null,
//     [
//       getItem(
//         "Option 9",
//         "4",
//         null,
//         null,
//         null,
//         cx([style.item, "item-lecture"])
//       ),
//       getItem(
//         "Option 10",
//         "5",
//         null,
//         null,
//         null,
//         cx([style.item, "item-lecture"])
//       ),
//       getItem(
//         "Option 11",
//         "6",
//         <img alt="" src={check} />,
//         null,
//         null,
//         cx([style.item, "item-lecture"])
//       ),
//       getItem(
//         <>
//           "Option qweqweq weqweqeqeqeq eqeqeqeqeq eqe qeqeqwe12"<span></span>
//         </>,
//         "13",
//         <img alt="" src={check} />,
//         null,
//         null,
//         cx([style.item, "item-lecture"])
//       ),
//     ],
//     null,
//     cx([style.submenu, "item-lecture"])
//   ),
//   getItem(
//     "Navigation Three1234 1234 1234 asd asd ád1234",
//     "sub3",
//     null,
//     [
//       getItem(
//         "Option 9",
//         "7",
//         null,
//         null,
//         null,
//         cx([style.item, "item-lecture"])
//       ),
//       getItem(
//         "Option 10",
//         "8",
//         null,
//         null,
//         null,
//         cx([style.item, "item-lecture"])
//       ),
//       getItem(
//         "Option 11",
//         "9",
//         <img alt="" src={check} />,
//         null,
//         null,
//         cx([style.item, "item-lecture"])
//       ),
//       getItem(
//         <>
//           "Option qweqweq weqweqeqeqeq eqeqeqeqeq eqe qeqeqwe12"<span></span>
//         </>,
//         "14",
//         <img alt="" src={check} />,
//         null,
//         null,
//         cx([style.item, "item-lecture"])
//       ),
//     ],
//     null,
//     cx([style.submenu, "item-lecture"])
//   ),
// ];

export default function ListCourse({
  sections,
  lectureBeingLearned,
  setLectureSelected,
}) {
  useEffect(() => {
    setLectureSelected(
      lectureBeingLearned
        ? `lec-${lectureBeingLearned}`
        : `lec-${sections[0]?.items[0].id}`
    );
  }, []);

  const items = useMemo(() => {
    const items = sections?.map((section) =>
      getItem(
        section.title,
        `sec-${section.id}`,
        null,
        section.items.map((item) =>
          getItem(
            item.title,
            `lec-${item.id}`,
            <img alt="" src={uncheck} />,
            null,
            null,
            cx([style.item, "item-lecture"])
          )
        ),
        null,
        cx([style.submenu, "item-lecture"])
      )
    );
    return items;
  }, [sections]);
  const onClick = (e) => {
    console.log("click ", e);
    setLectureSelected(e.key)
  };

  return (
    <Menu
      className={cx(style.wapper)}
      onClick={onClick}
      style={{ width: "100%" }}
      defaultSelectedKeys={
        lectureBeingLearned
          ? `lec-${lectureBeingLearned}`
          : `lec-${sections[0]?.items[0].id}`
      }
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    ></Menu>
  );
}
