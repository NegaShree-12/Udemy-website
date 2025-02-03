import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import styles from "./TopNavbar.module.css";

const TopNavbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className={styles.container}>
      <div className={styles.brand} onClick={() => navigateTo("/")}>
        Udemy
      </div>

      <ul className={`${styles.menu} ${menuOpen ? styles.hidden : ""}`}>
        <li className={styles.menuItem} onClick={() => navigateTo("/about")}>
          About
        </li>
        <li className={styles.menuItem} onClick={() => navigateTo("/contact")}>
          Contact
        </li>
        <li className={styles.menuItem} onClick={() => navigateTo("/tutorial")}>
          Courses
        </li>
        <li className={styles.menuItem}>Learnings</li>
        <button className={styles.button} onClick={() => navigateTo("/login")}>
          Login <span className={styles.arrow}>→</span>
        </button>
      </ul>

      {/* Mobile Menu Icon */}
      <div className={styles.menuIcon} onClick={() => setMenuOpen(true)}>
        <Menu />
      </div>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.closeIcon} onClick={() => setMenuOpen(false)}>
            <Close />
          </div>
          <ul className={styles.mobileMenuList}>
            <li onClick={() => navigateTo("/about")}>About</li>
            <li onClick={() => navigateTo("/contact")}>Contact</li>
            <li onClick={() => navigateTo("/tutorial")}>Courses</li>
            <li>Learnings</li>
            <button onClick={() => navigateTo("/login")}>Login</button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default TopNavbar;
