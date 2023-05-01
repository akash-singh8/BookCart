import React, { useEffect, useState } from "react";
import "./CSS/search.css";
import { NavLink, useParams, useNavigate } from "react-router-dom";

function Search({ books }) {
  const { option, search } = useParams();
  const [reqBook, setReqBook] = useState([]);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    setReqBook([]);
    const toSearch = search?.toLowerCase();
    books.forEach((book) => {
      if (book[option]?.toLowerCase()?.includes(toSearch)) {
        setReqBook((prevBook) => [...prevBook, book]);
      }
    });
  }, [option, search, books]);

  return (
    <section id="searchResult">
      <h1
        onClick={goBack}
        style={{ cursor: "pointer" }}
        className="gradient_head"
      >
        &#8592; &nbsp; Search Results
      </h1>
      <div id="resultBox">
        <h2>Search for books with {` ${option} '${search}'`}</h2>
        <div>
          {reqBook.map((book, key) => {
            let bName = book.name;
            if (bName?.length > 21) {
              bName = bName.substring(0, 20) + "...";
            }
            return (
              <NavLink
                to={`/book/${book.bookID}`}
                className="bookOverview"
                target="_blank"
                key={key}
              >
                <img src={book.bookFront} alt="book" />
                <h2>{bName}</h2>
                <button>₹{book.price}</button>
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Search;
