import React, { useState } from "react";
import "./CSS/topNav.css";
import search from "./images/SVGs/search.svg";

function TopNav() {
  const [option, setOption] = useState("Book");
  return (
    <div id="topNav">
      <div id="topNavSearch">
        <select
          value={option}
          onChange={(event) => setOption(event.target.value)}
        >
          <option value="book">Book</option>
          <option value="publisher">Publisher</option>
          <option value="city">City</option>
          <option value="pincode">Pincode</option>
        </select>
        <input type="text" placeholder={`Enter ${option} to search`} />
        <img id="topNavSearchBtn" src={search} alt="search" />
      </div>
    </div>
  );
}

export default TopNav;
