import React from "react";
import "./AppFooter1.css"; // Updated to match your CSS file name

const AppFooter1 = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Investors</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Discovery Udemy</h4>
          <ul>
            <li><a href="#">Get the app</a></li>
            <li><a href="#">Teach on Udemy</a></li>
            <li><a href="#">Plans and Pricing</a></li>
            <li><a href="#">Affiliate</a></li>
            <li><a href="#">Help and Support</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Udemy for Business</h4>
          <ul>
            <li><a href="#">Udemy Business</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal & Accessibility</h4>
          <ul>
            <li><a href="#">Accessibility statement</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2025 Udemy, Inc.</div>
        <div><a href="#">Cookie settings</a></div>
        <div className="footer-language">
          <span className="material-icons">language</span>
          <a href="#">English</a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter1;
