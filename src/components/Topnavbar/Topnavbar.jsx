import React from "react";
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      backgroundColor: "#FAF9F6",
      width: "95%",
      border: "1px solid #e0e0e0",
      borderRadius: "10px",
    },
    brand: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "1.5rem",
      color: "#313F30",
      fontWeight: "bold",
    },
    menu: {
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    menuItem: {
      fontFamily: "'Inter', sans-serif",
      fontSize: "0.9rem",
      color: "#313F30",
      textTransform: "uppercase",
      fontWeight: "500",
      cursor: "pointer",
    },
    button: {
      padding: "0.5rem 1rem",
      fontSize: "0.9rem",
      fontFamily: "'Inter', sans-serif",
      color: "#313F30",
      border: "1px solid #313F30",
      borderRadius: "25px",
      backgroundColor: "transparent",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
  };

  return (
    <nav style={styles.container}>
      <div style={styles.brand}>Udemy</div>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>Courses</li>
        <li style={styles.menuItem}><Link to="/about">About</Link></li>
        <li style={styles.menuItem}>Contact</li>
        <li style={styles.menuItem}>Login</li>
        <button style={styles.button}>
          Get Started <span>→</span>
        </button>
      </ul>
    </nav>
  );
};

export default TopNavbar;
