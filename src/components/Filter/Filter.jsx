import React, { useEffect, useState } from "react";
import "./Filter.css";
import { useSelector } from "react-redux";
import { selectCategoies } from "../../store/reduces/categories";
import { useLocation, useNavigate } from "react-router-dom";

const Filter = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  useEffect(() => {
    if (urlParams.get("category")) setCategory(urlParams.get("category"));
  }, []);
  const gategories = useSelector(selectCategoies);
  return (
    <div className="filter mx-4 mt-4">
      <select
        value={category}
        className="popular"
        id="popular"
        onChange={(e) => {
          const searchParams = new URLSearchParams(location.search);
          searchParams.set("category", e.target.value);

          // console.log(searchParams.toString());
          // navigate(searchParams.toString());
          // const courseResult = await courseService.search({
          //   keyword,
          //   ...values,
          // });
          navigate("/home?" + searchParams.toString());
        }}
      >
        {gategories?.map((cate) => {
          return cate.subCategories.map((sub) => {
            return (
              <option key={sub.id} value={sub.id}>
                {sub.name}
              </option>
            );
          });
        })}

        {/* <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>  */}
      </select>
    </div>
  );
};

export default Filter;
