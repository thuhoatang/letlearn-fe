import React from "react";
import "./Search.css";
import { Icon } from "@iconify/react";

const Search = () => {
  return (
    <div className="search-bar">
      <div>
        <button>
          <Icon icon="ic:round-search" className="icon-search" />
        </button>
        <input type="search" id="search-home" placeholder="Nhập khóa học" />
      </div>
    </div>
  );
};

export default Search;
