import React, { useState } from "react";
import { db, storage } from "../firebase";
import "./CSS/verifiedSeller.css";

import addImage from "./images/Seller/addImage.png";
import category from "./images/Seller/category.png";
import description from "./images/Seller/description.png";
import Edition from "./images/Seller/Edition.png";
import rupee from "./images/Seller/rupee.png";
import title from "./images/Seller/Title.png";
import publication from "./images/Seller/publication.png";
import menuVertical from "./images/Seller/menuVertical.png";
import preview from "./images/Seller/preview.png";

function VerifiedSeller({ verified, userId, user }) {
  const [bookName, setbookName] = useState("");
  const [bookDesc, setbookDesc] = useState("");

  const [bookFront, setbookFront] = useState("");
  const [bookBack, setbookBack] = useState("");
  const [bookIndex, setbookIndex] = useState("");
  const [bookMiddle, setbookMiddle] = useState("");

  async function handleUpload(e) {
    e.preventDefault();

    if (!verified) {
      alert("Please signin or verify to sell your book");
      return;
    }

    if (!bookFront || !bookIndex || !bookMiddle || !bookBack) {
      alert("Please upload the images of book");
    } else {
      const countRef = await db.collection("totalCount").get();
      const count = countRef.docs[0].data().count;

      // book Details
      const bookDetails = document.querySelectorAll(".bookInputBox input");
      const bprice = bookDetails[1];
      const bmrp = bookDetails[2];
      const bEdition = bookDetails[4];
      const bPublisher = bookDetails[5];
      const bCategory = document.getElementById("bookInputCategorySelect");

      const frontUpload = await storage
        .ref(`frontCovers/bookFront${count}.${bookFront.name.slice(-3)}`)
        .put(bookFront);
      const backUpload = await storage
        .ref(`backCovers/bookBack${count}.${bookBack.name.slice(-3)}`)
        .put(bookBack);
      const indexUpload = await storage
        .ref(`indexPage/boodIndex${count}.${bookIndex.name.slice(-3)}`)
        .put(bookIndex);
      const middleUpload = await storage
        .ref(`middlePage/bookMiddle${count}.${bookMiddle.name.slice(-3)}`)
        .put(bookMiddle);
      // const btn = document.querySelector("#createPost form button");

      const bookFrontURL = await frontUpload.ref.getDownloadURL();
      const bookBackURL = await backUpload.ref.getDownloadURL();
      const bookIndexURL = await indexUpload.ref.getDownloadURL();
      const bookMiddleURL = await middleUpload.ref.getDownloadURL();

      console.log("bookFrontURL :", bookFrontURL);

      const book = {
        bookID: count,
        bookFront: bookFrontURL,
        bookBack: bookBackURL,
        bookIndex: bookIndexURL,
        bookMiddle: bookMiddleURL,
        name: bookName,
        price: parseInt(bprice.value),
        mrp: parseInt(bmrp.value),
        description: bookDesc,
        publisher: bPublisher.value,
        edition: parseInt(bEdition.value),
        category: bCategory.value,
        seller: user?.name,
        sellerId: userId,
        location: user?.location,
        telegram: user?.telegram,
      };

      console.log(book);

      db.collection("books").add(book);

      db.collection("totalCount")
        .doc("count")
        .update({ count: count + 1 });

      db.collection("users")
        .doc(userId)
        .update({ bookToSell: [...user.bookToSell, count] });

      // Reset all input values
      setbookFront("");
      setbookBack("");
      setbookIndex("");
      setbookMiddle("");
      setbookName("");
      bprice.value = "";
      bmrp.value = "";
      setbookDesc("");
      bEdition.value = "";
      bPublisher.value = "";
      bCategory.value = "";
    }
  }

  return (
    <section>
      <h1 className="gradient_head" id="vSellerHead">
        Sell Books
      </h1>
      <div id="vSellerUploadBook">
        <div id="vSellerBookPhotos">
          <p>Upload 4 photos of the book</p>
          <div className="vSellerBookPhotosMain">
            <label className="UploadBookImage">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setbookFront(e.target.files[0])}
              />
              <img
                src={bookFront ? URL.createObjectURL(bookFront) : addImage}
                alt="add"
              />
              <p>Front</p>
            </label>
            <label className="UploadBookImage">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setbookIndex(e.target.files[0])}
              />
              <img
                src={bookIndex ? URL.createObjectURL(bookIndex) : addImage}
                alt="add"
              />
              <p>Index</p>
            </label>
          </div>
          <div className="vSellerBookPhotosMain">
            <label className="UploadBookImage">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setbookMiddle(e.target.files[0])}
              />
              <img
                src={bookMiddle ? URL.createObjectURL(bookMiddle) : addImage}
                alt="add"
              />
              <p>Middle</p>
            </label>
            <label className="UploadBookImage">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setbookBack(e.target.files[0])}
              />
              <img
                src={bookBack ? URL.createObjectURL(bookBack) : addImage}
                alt="add"
              />
              <p>Back</p>
            </label>
          </div>
        </div>
        <div id="vSellerDivider"></div>
        <div id="vSellerBookDetails">
          <div id="bookDetailsHead">
            <h2>Book Details</h2>
            <img
              src={menuVertical}
              alt="menu"
              onClick={() => {
                const popup = document.getElementById("bookDetailHeadMenu");
                popup.style.display =
                  popup.style.display === "flex" ? "none" : "flex";
                if (popup.style.display === "flex") {
                  setTimeout(() => {
                    function optionPop(e) {
                      if (!popup.contains(e.target)) {
                        popup.style.display = "none";
                        document.removeEventListener("click", optionPop);
                      }
                    }
                    document.addEventListener("click", optionPop);
                  }, 10);
                }
              }}
            />
          </div>
          <div id="bookDetailHeadMenu">
            <h3>Options</h3>
            <div>
              <img src={preview} alt="Preview" />
              <p>Overview</p>
            </div>
            <div>
              <img src={description} alt="Example" />
              <p>Example</p>
            </div>
          </div>
          <form onSubmit={handleUpload}>
            <div className="bookInputBox">
              <img src={title} alt="title" />
              <input
                value={bookName}
                onChange={(e) => setbookName(e.target.value)}
                maxLength={30}
                type="text"
                placeholder="Enter book title or name"
                style={{ width: "81%" }}
                required
              />
              <span title="Character Limit">{30 - bookName.length}</span>
            </div>
            <div className="bookInputRow">
              <div className="bookInputBox">
                <img src={rupee} alt="rupee" />
                <input
                  type="number"
                  placeholder="Enter book price"
                  required
                  min={0}
                  max={10000}
                />
              </div>
              <div className="bookInputBox">
                <img src={rupee} alt="rupee" />
                <input
                  type="number"
                  placeholder="Book market price(MRP)"
                  required
                  min={0}
                  max={10000}
                />
              </div>
            </div>
            <div className="bookInputBox">
              <img src={description} alt="description" />
              <input
                value={bookDesc}
                onChange={(e) => setbookDesc(e.target.value)}
                maxLength={280}
                type="text"
                placeholder="Enter description about book & its condition"
                style={{ width: "80%" }}
                required
              />
              <span title="Character Limit">{280 - bookDesc.length}</span>
            </div>
            <div className="bookInputRow">
              <div className="bookInputBox">
                <img src={Edition} alt="edition" />
                <input
                  type="number"
                  placeholder="Edition(Year)"
                  required
                  min={1990}
                  max={new Date().getFullYear()}
                />
              </div>
              <div className="bookInputBox">
                <img src={publication} alt="publisher" />
                <input
                  type="text"
                  placeholder="Publisher "
                  required
                  maxLength={25}
                />
              </div>
            </div>
            <div id="bookInputCategory">
              <img src={category} alt="category" />
              <label htmlFor="bookInputCategorySelect">Select Category</label>
              <select id="bookInputCategorySelect">
                <option value="science">Science</option>
                <option value="programming">Programming</option>
                <option value="growth">Growth</option>
                <option value="mathematics">Mathematics</option>
                <option value="novel">Novel</option>
                <option value="literature">Literature</option>
              </select>
            </div>
            <div className="detailButtons">
              <button type="submit" disabled={!user}>
                Sell Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default VerifiedSeller;
