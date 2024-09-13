import React from "react";
import { Outlet } from "react-router-dom";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";

function LayoutComp() {
  return (
    <>
      <NavComp />
      <Outlet />
      <FooterComp />
    </>
  );
}

export default LayoutComp;
