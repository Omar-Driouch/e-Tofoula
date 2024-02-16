import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import main_logo from "../../../public/main_logo.png";
import { Link, NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation("global");

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header">
      <div className="container-header">
        <Link to="/" className="logo">
          <img src={main_logo} width={"180px"} alt="app-logo" />
        </Link>
        <div className="header-top">
          <div className="menu">
            <ul className="nav-menu">
              <div className="inner-menu">
                <li className="menu-item">
                  <NavLink className="menu-link" to="/">
                    {t("header.Home")}
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink className="menu-link" to="/Activities">
                    Activities
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink className="menu-link" to="/About">
                    About
                  </NavLink>

                  <NavLink className="menu-link" to="/Rights"></NavLink>
                </li>
                <li className="menu-item">
                  <NavLink className="menu-link" to="/About">
                    About Us
                  </NavLink>
                </li>
              </div>
              <div className="flags">
                <li className="menu-item">
                  <div className="language-selected">
                    <img
                      alt="United States"
                      src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                      onClick={() => handleLanguageChange("en")}
                    />
                  </div>
                </li>
                <li className="menu-item">
                  <div className="language-selected">
                    <img
                      alt="French"
                      src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
                      onClick={() => handleLanguageChange("fr")}
                    />
                  </div>
                </li>
                <li className="menu-item">
                  <div className="language-selected">
                    <img
                      alt="Arabe"
                      src="http://purecatamphetamine.github.io/country-flag-icons/3x2/MA.svg"
                    />
                  </div>
                </li>
                <li className="menu-item">
                  <div className="language-selected">
                    <img alt="AZ" src="../../../amazigh.png" />
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
