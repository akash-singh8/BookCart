import React from "react";
import "./CSS/category.css";
import categoryLogo from "./images/category.png";
import science from "./images/Categories/science.png";
import programming from "./images/Categories/programming.png";
import math from "./images/Categories/math.png";
import biography from "./images/Categories/biography.png";
import novel from "./images/Categories/novel.png";
import { NavLink, useParams } from "react-router-dom";

function Category() {
  const { catId } = useParams();
  document.addEventListener("hover", () => {
    console.log("Loaded");
    document.querySelector("#nav_category").style = {
      borderBottom: "4px solid #FFA700",
      fill: "#FFA700",
      transform: "scale(1.1)",
    };
  });
  // {{    borderBottom: "4px solid #FFA700",
  //   fill: "#FFA700",
  //   transform: "scale(1.1)",}};

  const categoryImg = {
    science: science,
    programming: programming,
    mathematics: math,
    novel: novel,
    biography: biography,
  };

  return (
    <section className="bookWebPage">
      <h1 className="gradient_head">CATEGORIES</h1>
      <div className="boxAndLogo">
        <div id="book_category" className="books_box">
          <NavLink to="/category/science" className="books_category">
            <img src={science} alt="Science" />
            <p>Science</p>
          </NavLink>
          <NavLink to="/category/programming" className="books_category">
            <img src={programming} alt="Programming" />
            <p>Programming</p>
          </NavLink>
          <NavLink to="/category/mathematics" className="books_category">
            <img src={math} alt="Mathematics" />
            <p>Mathematics</p>
          </NavLink>
          <NavLink to="/category/novel" className="books_category">
            <img src={novel} alt="Novel" />
            <p>Novel</p>
          </NavLink>
          <NavLink to="/category/biography" className="books_category">
            <img src={biography} alt="Biography" />
            <p>Biography</p>
          </NavLink>
        </div>
        <img
          src={categoryLogo}
          alt="recommend logo"
          width={320}
          style={{ marginTop: "-25px" }}
        />
      </div>

      <div>
        {catId ? (
          <div id="bookByCategoryHead">
            <img src={categoryImg[catId.toLowerCase()]} alt={catId} />
            <p>{catId[0].toUpperCase() + catId.substring(1)} books</p>
          </div>
        ) : (
          <h1>Select any category to browse books</h1>
        )}

        <div id="bookByCategory"></div>
      </div>
    </section>
  );
}

export default Category;
