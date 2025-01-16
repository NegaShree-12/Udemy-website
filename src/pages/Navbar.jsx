import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-title">Company Name</div>
      <div className="nav-links">
        <span className="nav-link">Home</span>
        <span className="nav-link">About Us</span>
        <span className="nav-link">Our Team</span>
        <span className="nav-link">Investment Approach</span>
        <span className="nav-link">Contact Us</span>
      </div>
    </header>
  );
};

export default Navbar;
