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

      <li>
        <NavLink exact to="/search" activeClassName="active">
          Search
        </NavLink>
      </li>
      <li>
        <NavLink to="/trending" activeClassName="active">
          Trending
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
