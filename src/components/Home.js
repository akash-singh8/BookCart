import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/home.css";
import laptop from "./images/laptop.png";

function Home() {
  return (
    <section id="home">
      <div id="details">
        <h1>BOOKCART</h1>
        <h2>WHERE OLD BOOKS COME ALIVE AGAIN</h2>
        <p>
          Your one-stop shop for buying and selling books. Whether you are
          looking for your next favorite read or looking to sell some of your
          gently used books, we've got you covered.
        </p>
        <div id="detailButtons">
          <NavLink to="/category">
            <button>Explore</button>
          </NavLink>
          <NavLink to="/seller">
            <button>Sell Now</button>
          </NavLink>
        </div>
      </div>
      <img src={laptop} alt="laptop" width={560} />
    </section>
  );
}

export default Home;
