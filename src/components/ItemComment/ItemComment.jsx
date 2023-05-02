import React from "react";
import "./ItemComment.css";
import { Icon } from "@iconify/react";

const ItemComment = () => {
  return (
    <div className="item-comment">
      <div className="avt-heart">
        <div className="left-img">
          <img
            className="img-avt"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div className="right-heart">
          <Icon icon="ph:heart-fill" className="icon-heart" />
        </div>
      </div>

      <div className="name-content">
        <p className="title-name">
          <b>Marvin McKinney</b>
        </p>

        <p className="content mb-3">
          Amet minim mollit non deserunt ullamcIteo est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.{" "}
        </p>
      </div>
    </div>
  );
};

export default ItemComment;
