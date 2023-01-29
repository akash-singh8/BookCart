import "./App.css";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import UserInfo from "./components/UserInfo";
import Seller from "./components/Seller";
import Recommend from "./components/Recommend";
import About from "./components/About";

function App() {
  return (
    <>
      <div id="navigation">
        <SideNav />
        <div id="mainContent">
          <TopNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/:catId" element={<Category />} />
            <Route path="seller" element={<Seller />} />
            <Route path="recommend" element={<Recommend />} />
            <Route path="about" element={<About />} />
            <Route path="user" element={<UserInfo />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
