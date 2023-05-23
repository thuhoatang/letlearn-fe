import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter mx-4 mt-4">
      <select className="popular" id="popular">
        <option value="volvo">Phổ biến</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default Filter;
