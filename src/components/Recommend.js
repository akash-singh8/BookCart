import React, { useState } from "react";
import "./CSS/recommend.css";
import recLogo from "./images/recommend_graphic.png";
import recImg from "./images/SVGs/recommend.svg";

function Recommend() {
  const [bookInput, setBookInput] = useState("");
  return (
    <section className="bookWebPage">
      <h1 className="gradient_head">Get Book Recommendation</h1>
      <div className="boxAndLogo">
        <div id="book_recommend" className="books_box">
          <p>Find your next read</p>
          <div id="book_recommend_input">
            <img src={recImg} alt="book icon" width={28} />
            <input
              type="text"
              value={bookInput}
              onChange={(e) => setBookInput(e.target.value)}
              placeholder="Enter any category or book_name or author"
            />
          </div>
          <button disabled={bookInput.length === 0}>Recommend Books</button>
        </div>
        <img src={recLogo} alt="recommend logo" width={225} />
      </div>
    </section>
  );
}

export default Recommend;
