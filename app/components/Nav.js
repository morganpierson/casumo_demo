import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      Search by:
      <li>
        <NavLink exact to="/artist" activeClassName="active">
          Artist
        </NavLink>
      </li>
      <li>
        <NavLink to="/song" activeClassName="active">
          Song
        </NavLink>
      </li>
      <li>
        <NavLink to="/genre" activeClassName="active">
          Genre
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
