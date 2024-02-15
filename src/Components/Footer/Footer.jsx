import React from "react";
import "./Footer.css"; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            aliquam, lorem eget ullamcorper condimentum.
          </p>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
