import React from "react";
import styles from "./styles";

const TopNavbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <span style={styles.logoIcon}>Udemy</span>
      </div>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for anything"
          style={styles.searchInput}
        />
      </div>
      <div style={styles.links}>
        <a href="#plans" style={styles.link}>
          Plans & Pricing
        </a>
        <a href="#business" style={styles.link}>
          Udemy Business
        </a>
        <a href="#teach" style={styles.link}>
          Teach on Udemy
        </a>
        <div style={styles.cart}>
          <span role="img" aria-label="cart">
            🛒
          </span>
        </div>
        <button style={styles.loginButton}>Log in</button>
        <button style={styles.signupButton}>Sign up</button>
        <div style={styles.languageIcon}>🌐</div>
      </div>
    </nav>
  );
};

export default TopNavbar;
