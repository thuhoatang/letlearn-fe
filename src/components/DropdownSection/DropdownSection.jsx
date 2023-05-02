import React, { useState } from "react";
import "./DropdownSection.css";
import { Icon } from "@iconify/react";

const DropdownSection = () => {
  const [isShow, setIsShow] = React.useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="section">
      <div className="title_section text-left py-4 px-4" onClick={handleClick}>
        <label htmlFor="">Giới thiệu tổng quan</label>
      </div>
      {isShow ? (
        <div className="list_lesson">
          <div className="item-list_lesson">
            <Icon icon="ph:video-fill" className="icon-video" />
            <a href="#">Bài học số 1</a>
          </div>

          <div className="item-list_lesson">
            <Icon icon="ph:video-fill" className="icon-video" />
            <a href="#">Bài học số 1</a>
          </div>

          <div className="item-list_lesson">
            <Icon icon="mdi:file-text" className="icon-text" />
            <a href="#">Bài học số 1</a>
          </div>

          <div className="item-list_lesson">
            <Icon
              icon="fluent:book-question-mark-24-filled"
              className="icon-ask"
            />
            <a href="#">Bài học số 1</a>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DropdownSection;
