import React, { useEffect, useState } from "react";
import "./CSS/book.css";
import locationIcon from "./images/Books/locationIcon.png";
import rupeeIcon from "./images/Books/rupee.png";
import whatsappIcon from "./images/Books/WhatsAppIcon.png";
import telegramIcon from "./images/Books/TelegramIcon.png";
import { useParams } from "react-router-dom";

function Book({ books }) {
  const bookId = parseInt(useParams().bookId);

  if (books[bookId] === undefined) {
    console.log("Not such book is available");
  }
  console.log("bookId :", bookId);

  const [book, setBook] = useState({});

  useEffect(() => {
    setBook(books[bookId]);
    const mainBook = document.querySelector(".currentBookPage");
    const allCover = document.querySelectorAll(".bookOptionImage");
    let curr = allCover[0];
    mainBook.setAttribute("src", curr.getAttribute("src"));
    curr.classList.add("bookDetailImageActive");
    allCover.forEach((image) => {
      image.addEventListener("mouseenter", () => {
        mainBook.setAttribute("src", image.getAttribute("src"));
        curr.classList.remove("bookDetailImageActive");
        image.classList.add("bookDetailImageActive");
        curr = image;
      });
    });
  }, [bookId, books]);

  return (
    <section className="bookDetailSection">
      <div className="bookDetailsContainer">
        <div className="bookDetailsImages">
          <div className="bookDetailsImagesOption">
            <img
              className="bookOptionImage"
              src={book?.bookFront}
              alt="book front"
            />
            <img
              className="bookOptionImage"
              src={book?.bookIndex}
              alt="book index"
            />
            <img
              className="bookOptionImage"
              src={book?.bookMiddle}
              alt="book middle"
            />
            <img
              className="bookOptionImage"
              src={book?.bookBack}
              alt="book back"
            />
          </div>
          <img
            className="currentBookPage"
            src={book?.bookFront}
            alt="book front"
          />
        </div>
        <div className="bookDetailDivider"></div>
        <div className="bookDetailsAbout">
          <h1>{book?.name}</h1>
          <div className="bookDetailsUser">
            <div className="bookDetailsUserLocation">
              <img src={locationIcon} alt="location" />
              <p>{book?.location}</p>
            </div>
            <ul>
              <li>
                Sold by <span>{book?.seller}</span>
              </li>
            </ul>
          </div>
          <div className="bookDetailsPrice">
            <div className="bookDetailsCurrPrice" title="Current price">
              <img src={rupeeIcon} alt="rupee" />
              <p>{book?.price}</p>
            </div>
            <p title="Market price">MRP : ₹{book?.mrp}</p>
          </div>
          <div className="bookDetailsDescription">
            <h3 className="gradient_head">Description</h3>
            <p>{book?.description}</p>
          </div>
          <div className="bookDetailsOthers">
            <p>
              <span>Publisher</span> {book?.publisher}
            </p>
            <p>
              <span>Edition(year)</span> {book?.edition}
            </p>
            <p>
              <span>Category</span> {book?.category}
            </p>
          </div>
          <div className="bookDetailUserConnect">
            <a
              href={`https://wa.me/+91${book?.whatsapp}?text=Hello,%20I%20would%20like%20to%20buy%20the%20book%20${book?.name}.%0AFrom%20BookCart.`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="bookDuserConnect whatsappConnect">
                <img src={whatsappIcon} alt="whatsapp" />
                <p>
                  Connect on <span>WhatsApp</span>
                </p>
              </button>
            </a>
            <a
              href={`https://t.me/${book?.telegram}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="bookDuserConnect telegramConnect">
                <img src={telegramIcon} alt="telegram" />
                <p>
                  Connect on <span>Telegram</span>
                </p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book;
