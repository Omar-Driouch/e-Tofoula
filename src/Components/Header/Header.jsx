import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container-header">
        <div className="header-top">
          <a href="#">
            <img src="#" alt="#" />
          </a>
        </div>
        <div className="menu">
          <ul className="nav-menu">
            <li className="menu-item">
              <NavLink className="menu-link" to="/events">
                Home
              </NavLink>
            </li>
            <li className="menu-item">
              <a href="#">Home</a>
            </li>
            <li className="menu-item">
              <a href="#">Home</a>
            </li>
            <li className="menu-item">
              <a href="#">Home</a>
            </li>
            <li className="menu-item">
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
