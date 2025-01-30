import React from "react";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem",
      backgroundColor: "#FAF9F6",
      width: "100%",
      maxWidth: "1450px",
      margin: "0 auto",
      border: "1px solid #cccccc",
      borderRadius: "10px",
      boxSizing: "border-box",
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
      gap: "1rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
      flexWrap: "wrap",
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

  const navigateToContact = () => {
    navigate("/contact");
  };

  return (
    <nav style={styles.container}>
      <div style={styles.brand}>Udemy</div>
      <ul style={styles.menu}>
        <li style={styles.menuItem}>Courses</li>
        <li style={styles.menuItem}>About</li>
        <li style={styles.menuItem} onClick={navigateToContact}>
          Contact
        </li>
        <li style={styles.menuItem}>Login</li>
        <button style={styles.button}>
          Get Started <span>→</span>
        </button>
      </ul>
    </nav>
  );
};

export default TopNavbar;
