import React from "react";
import "./AppFooter1.css";

const AppFooter1 = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    console.log("Scroll to top clicked!"); // Debugging: Check if the function is called
    window.scrollTo({
      bottom: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <footer className="app-footer">
      {/* Up Arrow Button */}
      

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