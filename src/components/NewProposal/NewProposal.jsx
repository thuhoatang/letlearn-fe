import React from "react";
import "./NewProposal.css";

const NewProposal = () => {
  return (
    <div className="new-proposal">
      <p className="title">Đề xuất mới: </p>
      <a className="menu-content" href="#">
        marketing
      </a>
      <a className="menu-content" href="#">
        lập trình ios
      </a>
      <a className="menu-content" href="#">
        ui ux
      </a>
      <a className="menu-content" href="#">
        designer
      </a>
      <a className="menu-content" href="#">
        lập trình website
      </a>
    </div>
  );
};

export default NewProposal;
