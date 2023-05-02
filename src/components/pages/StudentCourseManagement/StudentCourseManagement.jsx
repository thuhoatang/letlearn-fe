import React from "react";
import Banner from "../../Banner/Banner";
import Search from "../../Search/Search";
import TagsListCourse from "../../TagsListCourse/TagsListCourse";
import ListCardStudent from "../../ListCardStudent/ListCardStudent";

const StudentCourseManagement = () => {
  return (
    <>
      <Banner />
      <Search />
      <TagsListCourse />
      <ListCardStudent />
    </>
  );
};

export default StudentCourseManagement;
