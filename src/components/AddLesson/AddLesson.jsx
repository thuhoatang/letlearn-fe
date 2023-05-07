import React from "react";
import ListOptionTypeLesson from "../ListOptionTypeLesson/ListOptionTypeLesson";

const AddLesson = ({ sectionId, item }) => {
  return (
    <div>
      <ListOptionTypeLesson sectionId={sectionId} item={item} />
    </div>
  );
};

export default AddLesson;
