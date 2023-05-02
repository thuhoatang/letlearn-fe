import React from "react";
import "./MasterLayout.css";
import Header from "../Header/Header";
import Home from "../pages/Home/Home";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const MasterLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="body-content">
        {/* <Home /> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MasterLayout;
