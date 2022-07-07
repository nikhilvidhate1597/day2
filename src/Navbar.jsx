import React from "react";
import { NavLink } from "react-router-dom";
import Parent from "./Prop/Parent";

function Navbar() {
  return (
    <div>
      <Parent />
      <ul className="topList">
        <NavLink style={{ textDecoration: "none" }} to="/home">
          <li className="topListItem">Home </li>
        </NavLink>

        <NavLink style={{ textDecoration: "none" }} to="/about">
          <li className="topListItem">About </li>
        </NavLink>

        <NavLink style={{ textDecoration: "none" }} to="/notfound">
          <li className="topListItem">Not Found </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
