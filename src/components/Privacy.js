import React from "react";
import github from "./images/SVGs/github.svg";
import { NavLink } from "react-router-dom";

function Privacy() {
  return (
    <section className="bookWebPage">
      <h1 className="gradient_head">
        <NavLink to="/about">
          <span style={{ fontSize: "20px" }}>&#8592;</span>&nbsp; Privacy Policy
        </NavLink>
      </h1>
      <ul className="aboutContent">
        <li>
          <span>Introduction: </span>
          BookCart is committed to protecting the privacy of our users. This
          privacy policy outlines the information we collect and how it is used.
          By using our website and services, you consent to the collection and
          use of your information as described in this policy.
        </li>

        <li>
          <span>Information Collection: </span>
          BookCart collects personal information from users who register for an
          account, including name, email address, phone number, and address. We
          also collect information about the books you list for sale and
          purchase, including title, price, images and other details related to
          the book.
        </li>

        <li>
          <span>Use of Information: </span>
          BookCart uses the information collected to provide and improve our
          website and services. We will use your address to display it with book
          details and you phone number to help other users connect you on
          WhatsApp .
        </li>

        <li>
          <span>Information Sharing: </span>
          BookCart does not share personal information with third parties,
          except as necessary to provide our website and services.
        </li>

        <li>
          <span>Data Retention: </span>
          BookCart will retain your personal information for as long as your
          account is active or as needed to provide our website and services.
        </li>

        <li>
          <span>Data Security: </span>
          BookCart takes appropriate security measures to protect against
          unauthorized access, alteration, disclosure, or destruction of
          personal information.
        </li>

        <li>
          <span>Changes to the Privacy Policy: </span>
          BookCart reserves the right to make changes to this privacy policy at
          any time. We will notify you of any changes by posting the new privacy
          policy on our website.
        </li>
      </ul>
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

export default Privacy;
