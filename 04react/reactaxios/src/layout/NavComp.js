import React from "react";
import { NavLink } from "react-router-dom";

function NavComp() {
  return (
    <nav>
      <h1>logo</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavComp;
