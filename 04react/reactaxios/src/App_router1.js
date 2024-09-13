import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomeComp from "./components/home/HomeComp";
import AboutComp from "./components/AboutComp";
import ProductComp from "./components/ProductComp";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/product">Product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/about" element={<AboutComp />} />
        <Route path="/product:num" element={<ProductComp />} />
      </Routes>
      <footer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut
        dolore sit ex corrupti quo odit, magnam similique rerum neque.
      </footer>
    </div>
  );
}

export default App;
