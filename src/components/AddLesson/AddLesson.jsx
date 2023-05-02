import React from "react";
import ListOptionTypeLesson from "../ListOptionTypeLesson/ListOptionTypeLesson";

const AddLesson = ({ lessonId }) => {
  return (
    <div>
      <ListOptionTypeLesson lessonId={lessonId} />
    </div>
  );
};

export default AddLesson;
