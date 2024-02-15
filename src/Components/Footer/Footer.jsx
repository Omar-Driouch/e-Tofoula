import React from "react";
import "./Footer.css"; // Import CSS file for styling
import main_logo from "../../../public/main_logo.png";
import email from "../../../public/mail.png";
import facebook from "../../../public/facebook.png";
import feedback from "../../../public/feedback.png";
import instagram from "../../../public/instagram.png";
import telephone from "../../../public/telephone.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <img src={main_logo} alt="" />
            </div>
            <div className="email">
              <img src={email} alt="" /> hello@gomykid.ma
            </div>
          </div>
          <div className="footer-section">
            <div className="socialmedia">
              <div className="email">
                <img src={instagram} alt="" />
              </div>
              <div className="email">
                <img src={facebook} alt="" />
              </div>
            </div>
          </div>
          <div className="footer-section">
            <div className="email">
              <img src={feedback} alt="" /> feedback
            </div>
            <div className="email">
              <img src={telephone} alt="" /> +212 6 12 34 56 78
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; Copyright 2024 GoMyKid</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
