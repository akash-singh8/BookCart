import React from "react";
import "./CSS/seller.css";
import sellerStore from "./images/sellerStore.png";
import smartphone from "./images/smartphone.png";

function Seller() {
  return (
    <section id="home">
      <div id="details">
        <h1>SELL BOOKS</h1>
        <h2 className="gradient_head">MAKE YOUR BOOK ALIVE AGAIN</h2>
        <div id="sellerInput">
          <p>Verify to become a seller</p>
          <div id="sellerPhoneInput">
            <img src={smartphone} alt="smartphone" width={28} />
            <input
              type="number"
              placeholder="Enter 10 digit phone number here"
            />
          </div>
        </div>
        <div id="detailButtons">
          <button>Get OTP</button>
        </div>
      </div>
      <img src={sellerStore} alt="online store" width={600} />
    </section>
  );
}

export default Seller;
