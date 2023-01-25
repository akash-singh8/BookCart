import React, { useState } from "react";
import "./CSS/sideNav.css";
import logo from "./images/logo.png";
import googleLogo from "./images/googleLogo.png";
import home from "./images/navigation/home.svg";
import category from "./images/navigation/category.svg";
import sellBooks from "./images/navigation/sellBooks.svg";
import recommend from "./images/navigation/bookRecommend.svg";
import about from "./images/navigation/about.svg";
import { NavLink } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";

function SideNav() {
  const [pic, setPic] = useState("");
  auth.onAuthStateChanged((user) => {
    if (user) {
      setPic(user.photoURL);
    } else {
      setPic("");
    }
  });
  return (
    <div id="sideNav">
      <img className="sideNavlogo" src={logo} alt="BookCart logo" />
      <div id="sideNavMenu">
        <NavLink to="/">
          <img className="sideNavOptions" src={home} alt="home" />
        </NavLink>
        <NavLink to="category">
          <img className="sideNavOptions" src={category} alt="category" />
        </NavLink>
        <NavLink to="seller">
          <img className="sideNavOptions" src={sellBooks} alt="sell books" />
        </NavLink>
        <NavLink to="recommend">
          <img className="sideNavOptions" src={recommend} alt="recommend" />
        </NavLink>
        <NavLink to="about">
          <img className="sideNavOptions" src={about} alt="about" />
        </NavLink>
      </div>
      {pic ? (
        <NavLink to="user">
          <img
            className="sideNavlogo"
            src={pic}
            alt="userPic"
            title="User Profile"
            style={{
              borderRadius: "50%",
              boxShadow: "0 0 15px tomato",
            }}
          />
        </NavLink>
      ) : (
        <img
          className="sideNavlogo"
          src={googleLogo}
          alt="google logo"
          title="Login or Signup using Google"
          onClick={signInWithGoogle}
        />
      )}
    </div>
  );
}

export default SideNav;
