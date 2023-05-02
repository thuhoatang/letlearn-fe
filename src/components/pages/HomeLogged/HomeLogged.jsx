import React, { useEffect, useState } from "react";
import "./HomeLogged.css";
import Banner from "../../Banner/Banner";
import Search from "../../Search/Search";
import NewProposal from "../../NewProposal/NewProposal";
import Filter from "../../Filter/Filter";
import ListCartHome from "../../ListCartHome/ListCartHome";
import Button from "../../Button/Button";
import courseService from "../../../service/course";

const HomeLogged = () => {
  const [courses, serCourses] = useState([]);

  useEffect(() => {
    const runFun = async () => {
      let course = await courseService.getAll();
      serCourses(course);
      // console.log(course);
    };
    runFun();
  }, []);
  return (
    <>
      <Banner />
      <Search />
      <NewProposal />
      <Filter />
      <ListCartHome courses={courses} />
      <div className="loadmore">
        <Button title="Xem thêm" bgColor="pink" />
      </div>
    </>
  );
};

export default HomeLogged;
