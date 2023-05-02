import React from "react";
import "./NewProposal.css";
import { useSelector } from "react-redux";
import { selectCategoies } from "../../store/reduces/categories";
import { Link } from "react-router-dom";

const NewProposal = () => {
  const categories = useSelector(selectCategoies);

  return (
    <div className="new-proposal">
      <p className="title">Đề xuất mới: </p>

      {categories.map((category) => {
        return category.subCategories.map((sub) => (
          <Link className="menu-content" to="#">
            {sub.name}
          </Link>
        ));
      })}
      {/* <a className="menu-content" href="#">
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
      </a> */}
    </div>
  );
};

export default NewProposal;
