import React, { useEffect, useState } from "react";
import "./CSS/userInfo.css";
import { logOut, db } from "../firebase.js";
import { NavLink, useParams } from "react-router-dom";

import nametag from "./images/User/nameTag.png";
import maillogo from "./images/User/mail.png";
import telegram from "./images/Seller/Telegram.png";
import location from "./images/Seller/locationIcon.png";
import nonSeller from "./images/Seller/nonSeller.png";
import pageNotFound from "./images/pageNotFound.png";

function UserInfo({ books, currUser, userData }) {
  const { userId } = useParams();
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    if (userId === currUser) {
      setUserDetail(userData);
    } else {
      db.collection("users")
        .doc(userId)
        .get()
        .then((doc) => {
          setUserDetail(doc.data());
        });
    }
  }, [userId, currUser, userData]);

  return (
    <section>
      <h1 className="gradient_head" id="userInfoHead">
        {userDetail ? "Account Details" : "No user found"}
      </h1>
      {userDetail ? (
        <>
          <div id="userInfoDetails">
            <div id="userLogout">
              <img src={userDetail?.image} alt="user pic" id="userImage" />
              {userId === currUser ? (
                <NavLink to="/">
                  <button onClick={logOut}>Sign Out</button>
                </NavLink>
              ) : (
                <></>
              )}
            </div>
            <div id="userDetails">
              <div>
                <div className="userInfoData" title="User name">
                  <img src={nametag} alt="name" />
                  {userDetail?.name}
                </div>
                {userDetail?.verified ? (
                  <div className="userInfoData" title="User telegram id">
                    <img src={telegram} alt="telegram" />
                    {userDetail?.telegram}
                  </div>
                ) : (
                  <div className="userInfoData" title="non verified">
                    <img src={nonSeller} alt="telegram" />
                    Not Seller
                  </div>
                )}
              </div>
              <div>
                <div className="userInfoData" title="User email">
                  <img src={maillogo} alt="mail" />
                  {userDetail?.email}
                </div>
                {userDetail?.verified ? (
                  <div className="userInfoData" title="User location">
                    <img src={location} alt="location" />
                    {userDetail?.location + " - " + userDetail?.pincode}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div id="userBookDetail">
            {userId === currUser ? (
              <div className="userBooks">
                <h1>Wishlist</h1>
                <div>
                  {userDetail?.wishlist?.map((id) => {
                    let bName = books[id]?.name;
                    if (bName?.length > 21) {
                      bName = bName.substring(0, 20) + "...";
                    }
                    return (
                      <NavLink to={`/book/${id}`} className="bookOverview">
                        <img src={books[id]?.bookFront} alt="book" />
                        <h2>{bName}</h2>
                        <button>₹{books[id]?.price}</button>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
            {userDetail?.verified ? (
              <div className="userBooks">
                <h1>Books to sell</h1>
                <div>
                  {userDetail?.bookToSell?.map((id) => {
                    let bName = books[id]?.name;
                    if (bName?.length > 21) {
                      bName = bName.substring(0, 20) + "...";
                    }
                    return (
                      <NavLink
                        to={`/book/${id}`}
                        className="bookOverview"
                        target="_blank">
                        <img src={books[id]?.bookFront} alt="book" />
                        <h2>{bName}</h2>
                        <button>₹{books[id]?.price}</button>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        <img className="pageNotFound" src={pageNotFound} alt="page not found" />
      )}
    </section>
  );
}

export default UserInfo;
