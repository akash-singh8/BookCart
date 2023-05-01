import React, { useState } from "react";
import "./CSS/topNav.css";
import search from "./images/SVGs/search.svg";
import { NavLink } from "react-router-dom";

function TopNav() {
  const [option, setOption] = useState("name");
  const [toSearch, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setSearch("");
  }
  return (
    <div id="topNav">
      <form id="topNavSearch" onClick={handleSubmit}>
        <select
          value={option}
          onChange={(event) => setOption(event.target.value)}
        >
          <option value="name">Name</option>
          <option value="publisher">Publisher</option>
          <option value="location">Location</option>
        </select>
        <input
          type="text"
          placeholder={`Enter ${option} to search`}
          value={toSearch}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <NavLink to={`/search/${option}/${toSearch}`}>
          <button
            type="submit"
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <img id="topNavSearchBtn" src={search} alt="search" />
          </button>
        </NavLink>
      </form>
    </div>
  );
}

export default TopNav;
