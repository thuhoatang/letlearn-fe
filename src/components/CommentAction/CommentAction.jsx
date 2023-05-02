import React, { useState } from "react";
import "./CommentAction.css";
import { Icon } from "@iconify/react";

const CommentAction = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  return (
    <div className="comment-action">
      <div>
        <p className="mx-0">
          <b>Nhập bình luận của bạn</b>
        </p>
        <textarea className="input-comment" />
      </div>

      <div className="rating-heart">
        <button
          style={{
            backgroundColor: isActive ? "transparent" : "",
            color: isActive ? "#EA4C89" : "",
          }}
          onClick={handleClick}
        >
          <Icon icon="ph:heart-fill" className="icon-heart" />
        </button>
      </div>
    </div>
  );
};

export default CommentAction;
