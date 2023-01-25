import React from "react";
import "./CSS/topNav.css";
import search from "./images/navigation/search.svg";

function TopNav() {
  return (
    <div id="topNav">
      <div id="topNavSearch">
        <input type="text" placeholder="Enter book name to search" />
        <img id="topNavSearchBtn" src={search} alt="search" />
      </div>
    </div>
  );
}

export default TopNav;
