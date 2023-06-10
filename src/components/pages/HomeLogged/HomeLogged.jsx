import React, { useEffect, useState } from "react";
import "./HomeLogged.css";
import Banner from "../../Banner/Banner";
import Search from "../../Search/Search";
import NewProposal from "../../NewProposal/NewProposal";
import Filter from "../../Filter/Filter";
import ListCartHome from "../../ListCartHome/ListCartHome";
import Button from "../../Button/Button";
import courseService from "../../../service/course";
import { useLocation } from "react-router-dom";

const HomeLogged = () => {
  const [courses, serCourses] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [size, setSize] = useState(6);
  useEffect(() => {
    const fun = async () => {
      const objectJsonValue = Object.fromEntries(queryParams.entries());

      if (objectJsonValue.category)
        objectJsonValue.category = [objectJsonValue.category];

      objectJsonValue.size = size;
      const courseResult = await courseService.search(objectJsonValue);
      console.log(courseResult);
      serCourses(courseResult.items);
    };
    fun();
  }, [queryParams.toString(), size]);
  // useEffect(() => {
  //   const runFun = async () => {
  //     let course = await courseService.getAll();
  //     serCourses(course);
  //     // console.log(course);
  //   };
  //   runFun();
  // }, []);
  return (
    <>
      <Banner />
      <Search />
      <NewProposal />
      <Filter />
      <ListCartHome courses={courses} />
      <div className="loadmore">
        <Button
          onClick={() => setSize(size + 3)}
          title="Xem thêm"
          bgColor="pink"
        />
      </div>
    </>
  );
};

export default HomeLogged;
