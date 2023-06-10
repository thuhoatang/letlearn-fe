import React, { useEffect, useState } from "react";
import "./Search.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setKeyword(urlParams.get("keyword"));
  }, []);
  return (
    <div className="search-bar">
      <div>
        <button
          onClick={() => {
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set("keyword", keyword);
            if (keyword) navigate("/home?" + urlParams.toString());
          }}
        >
          <Icon icon="ic:round-search" className="icon-search" />
        </button>
        <input
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          type="search"
          id="search-home"
          placeholder="Nhập khóa học"
        />
      </div>
    </div>
  );
};

export default Search;
