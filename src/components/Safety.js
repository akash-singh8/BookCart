import React from "react";
import github from "./images/SVGs/github.svg";
import { NavLink } from "react-router-dom";

function Safety() {
  return (
    <section className="bookWebPage">
      <h1 className="gradient_head">
        <NavLink to="/about">
          <span style={{ fontSize: "20px" }}>&#8592;</span>&nbsp; Safety Remarks
        </NavLink>
      </h1>
      <ul className="aboutContent">
        <li>
          Be wary of unsolicited emails or messages that ask for personal
          information, even if they appear to be from BookCart or a legitimate
          source. Never click on links or download attachments from unknown or
          suspicious sources.
        </li>

        <li>
          Be cautious when buying or selling items with people you don't know.
          It's best to meet in a public place, and take a friend or family
          member with you.
        </li>

        <li>
          Always be mindful of your surroundings when receiving or sending
          books, and if you feel unsafe, don't hesitate to walk away from the
          situation.
        </li>

        <li>
          When buying or selling books, always check the condition of the book
          before making the transaction.
        </li>

        <li>
          Keep your account and login information safe, and never share it with
          anyone. If you suspect that your account has been hacked or
          compromised, contact BookCart immediately.
        </li>

        <li>
          Be aware of the potential risks associated with online transactions,
          and take the necessary precautions to protect yourself.
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

export default Safety;
