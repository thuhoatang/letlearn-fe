import React from "react";
import "./HomeLogged.css";
import Banner from "../../Banner/Banner";
import Search from "../../Search/Search";
import NewProposal from "../../NewProposal/NewProposal";
import Filter from "../../Filter/Filter";
import ListCartHome from "../../ListCartHome/ListCartHome";
import Button from "../../Button/Button";

const HomeLogged = () => {
  return (
    <>
      <Banner />
      <Search />
      <NewProposal />
      <Filter />
      <ListCartHome />
      <div className="loadmore">
        <Button title="Xem thêm" bgColor="pink" />
      </div>
    </>
  );
};

export default HomeLogged;
