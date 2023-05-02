import React from "react";
import Banner from "../../Banner/Banner";
import Search from "../../Search/Search";
import NewProposal from "../../NewProposal/NewProposal";
import ListCartHome from "../../ListCartHome/ListCartHome";
import SignInOrSignUp from "../../SignInOrSignUp/SignInOrSignUp";

const Home = () => {
  return (
    <>
      <Banner />
      <Search />
      <NewProposal />
      <ListCartHome />
      <SignInOrSignUp />
    </>
  );
};

export default Home;
