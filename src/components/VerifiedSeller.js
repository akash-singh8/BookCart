import React, { useState } from "react";
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

function VerifiedSeller() {
  const [bookName, setbookName] = useState("");
  const [bookDesc, setbookDesc] = useState("");

  const [bookFront, setbookFront] = useState(addImage);
  const [bookBack, setbookBack] = useState(addImage);
  const [bookIndex, setbookIndex] = useState(addImage);
  const [bookMiddle, setbookMiddle] = useState(addImage);

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
                onChange={(e) =>
                  setbookFront(URL.createObjectURL(e.target.files[0]))
                }
              />
              <img src={bookFront} alt="add" />
              <p>Front</p>
            </label>
            <label className="UploadBookImage">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setbookIndex(URL.createObjectURL(e.target.files[0]))
                }
              />
              <img src={bookIndex} alt="add" />
              <p>Index</p>
            </label>
          </div>
          <div className="vSellerBookPhotosMain">
            <label className="UploadBookImage">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setbookMiddle(URL.createObjectURL(e.target.files[0]))
                }
              />
              <img src={bookMiddle} alt="add" />
              <p>Middle</p>
            </label>
            <label className="UploadBookImage">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setbookBack(URL.createObjectURL(e.target.files[0]))
                }
              />
              <img src={bookBack} alt="add" />
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
          <form>
            <div className="bookInputBox">
              <img src={title} alt="title" />
              <input
                value={bookName}
                onChange={(e) => setbookName(e.target.value)}
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
                <input type="number" placeholder="Enter book price" required />
              </div>
              <div className="bookInputBox">
                <img src={rupee} alt="rupee" />
                <input
                  type="number"
                  placeholder="Book market price(MRP)"
                  required
                />
              </div>
            </div>
            <div className="bookInputBox">
              <img src={description} alt="description" />
              <input
                value={bookDesc}
                onChange={(e) => setbookDesc(e.target.value)}
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
                <input type="number" placeholder="Edition(Year)" required />
              </div>
              <div className="bookInputBox">
                <img src={publication} alt="publisher" />
                <input type="text" placeholder="Publisher " required />
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
              <button type="submit">Sell Book</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default VerifiedSeller;
