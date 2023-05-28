import React, { useCallback, useEffect, useState } from "react";
import "./RightCourseDetail.css";
import CommentAction from "../CommentAction/CommentAction";
import ItemComment from "../ItemComment/ItemComment";
import { io } from "socket.io-client";
import courseService from "../../service/course";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/reduces/auth";

const RightCourseDetail = ({ courseId }) => {
  const user = useSelector(selectUser);
  const [client, setClient] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(null);
  const comment = useCallback(
    (content) => {
      client.emit("comment", { content: content, courseId: courseId });
    },
    [client]
  );

  useEffect(() => {
    if (newComment) {
      setComments([newComment, ...comments]);
    }
  }, [newComment]);

  useEffect(() => {
    const funct = async () => {
      const comment = await courseService.getAllComment(courseId);
      setComments(comment);
    };

    funct();
    const jwt = localStorage.getItem("access_token");

    const socket = io("http://localhost:8000", {
      extraHeaders: {
        Authorization: "Bearer " + jwt,
      },
    });
    socket.on("connect", function () {
      console.log("Connected");
    });
    setClient(socket);
    socket.on("course:" + courseId, (data) => {
      setNewComment(data);
      // console.log(data);
    });
    // socket.on("events", function (data) {
    //   console.log("event", data);
    // });
    socket.on("exception", function (data) {
      console.log("event", data);
    });
    socket.on("disconnect", function () {
      console.log("Disconnected");
    });

    return () => {
      socket.close();
    };
  }, []);
  return (
    <div className="right-course-detail">
      <div className="header-react">
        <p className="rate-heart">
          <b>Yêu thích: </b>4
        </p>

        <p className="comment">
          <b>Bình luận: </b>
          {comments.length}
        </p>
      </div>

      {user && <CommentAction comment={comment} />}

      <div className="list-item_comment">
        {comments.map((comment) => (
          <ItemComment
            content={comment.content}
            fullName={comment.account.fullName}
            avatar={comment.account?.avatar?.thumbUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default RightCourseDetail;
