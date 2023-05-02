import React from "react";
import "./RightCourseDetail.css";
import CommentAction from "../CommentAction/CommentAction";
import ItemComment from "../ItemComment/ItemComment";

const RightCourseDetail = () => {
  return (
    <div className="right-course-detail">
      <div className="header-react">
        <p className="rate-heart">
          <b>Yêu thích: </b>4
        </p>

        <p className="comment">
          <b>Bình luận: </b>4
        </p>
      </div>

      <CommentAction />

      <div className="list-item_comment">
        <ItemComment />
        <ItemComment />
        <ItemComment />
        <ItemComment />
      </div>
    </div>
  );
};

export default RightCourseDetail;
