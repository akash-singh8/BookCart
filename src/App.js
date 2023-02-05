import "./App.css";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Book from "./components/Book";
import UserInfo from "./components/UserInfo";
import Seller from "./components/Seller";
import VerifiedSeller from "./components/VerifiedSeller";
import Recommend from "./components/Recommend";
import About from "./components/About";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Safety from "./components/Safety";

import { db } from "./firebase";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    db.collection("books")
      .orderBy("bookID")
      .onSnapshot((snapshot) => {
        setBooks(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  console.log(books);

  return (
    <>
      <div id="navigation">
        <SideNav />
        <div id="mainContent">
          <TopNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category" element={<Category books={books} />} />
            <Route
              path="category/:catId"
              element={<Category books={books} />}
            />
            <Route path="book/:bookId" element={<Book books={books} />} />
            <Route path="seller" element={<Seller />} />
            <Route path="seller/verified" element={<VerifiedSeller />} />
            <Route path="recommend" element={<Recommend />} />
            <Route path="about" element={<About />} />
            <Route path="about/terms&condition" element={<Terms />} />
            <Route path="about/privacy-policy" element={<Privacy />} />
            <Route path="about/safety-remarks" element={<Safety />} />
            <Route path="user" element={<UserInfo />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
