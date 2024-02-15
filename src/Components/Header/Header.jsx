import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import main_logo from "../../../public/main_logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const headerTopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerTopRef.current.style.boxShadow =
          "rgba(0, 0, 0, 0.1) 0px 4px 12px";
      } else {
        headerTopRef.current.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" ref={headerTopRef}>
      <div className="container-header">
        <Link to="/" className="logo">
          <img
            src={main_logo}
            width={"180px"}
            
            alt="app-logo"
          />
        </Link>
        <div className="header-top">
          <div className="menu">
            <ul className="nav-menu">
              <li className="menu-item">
                <NavLink className="menu-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-link" to="/Games">
                  Games
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-link" to="/Register">
                  About
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-link" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
