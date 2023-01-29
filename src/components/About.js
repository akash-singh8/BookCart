import React from "react";
import "./CSS/about.css";
import tAndC from "./images/About/tAndC.png";
import privacyPolicy from "./images/About/privacyPolicy.png";
import safety from "./images/About/safety.png";
import github from "./images/SVGs/github.svg";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <section className="bookWebPage">
      <h1 className="gradient_head">About us</h1>
      <p className="aboutContent">
        <span>BookCart</span> is an online marketplace designed for book lovers
        and collectors. Our mission is to make it easy for users to buy and sell
        used books, and to give old books a new life. With <span>BookCart</span>
        , you can find the books you've been looking for at a fraction of the
        cost, and sell your own books to other users.
      </p>
      <div id="aboutOptions">
        <NavLink to="terms&condition" className="about_options">
          <img src={tAndC} alt="t&c" />
          <p>Terms & Condition</p>
        </NavLink>
        <NavLink to="privacy-policy" className="about_options">
          <img src={privacyPolicy} alt="privacy" />
          <p>Privacy Policy</p>
        </NavLink>
        <NavLink to="safety-remarks" className="about_options">
          <img src={safety} alt="safety" />
          <p>Safety Remarks</p>
        </NavLink>
      </div>
      <div className="bottomNav">
        <a
          href="https://github.com/akash-singh8"
          target="_blank"
          rel="noreferrer"
          className="bottomNavIcon"
        >
          <img src={github} alt="github" width={32} />
          <div>
            Contribute on <br />{" "}
            <span style={{ fontSize: "18px" }}>Github</span>
          </div>
        </a>
        <p>
          <span>&#169;</span> 2022-2023 BookCart
        </p>
      </div>
    </section>
  );
}

export default About;
