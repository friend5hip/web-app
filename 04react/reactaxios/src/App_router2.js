import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutComp from "./layout/LayoutComp";
import HomeComp from "./components/home/HomeComp";
import AboutComp from "./components/AboutComp";
import ProductComp from "./components/ProductComp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutComp />}>
        {/* 중첩 라우트 => <Outlet /> */}
        <Route index element={<HomeComp />} />
        <Route path="/about" element={<AboutComp />} />
        <Route path="/product" element={<ProductComp />}>
          <Route path=""></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
