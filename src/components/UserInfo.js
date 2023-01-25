import React from "react";
import { logOut } from "../firebase.js";
import { NavLink } from "react-router-dom";

function UserInfo() {
  return (
    <section>
      <h1>User Page</h1>
      <img src={localStorage.getItem("photo")} alt="user pic" id="userImage" />
      <p id="userName">{localStorage.getItem("userName")}</p>
      <p id="userEmail">{localStorage.getItem("email")}</p>

      <NavLink to="/">
        <button onClick={logOut}>Sign Out</button>
      </NavLink>
    </section>
  );
}

export default UserInfo;
