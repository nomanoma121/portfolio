import React from "react";
import styles from "./Header.module.css";

function Header({ scrollToSection }) {

  return (
    <div className={styles.container}>
      <div className={styles.headerMenu}>
        <button className={styles.button} onClick={() => scrollToSection("home")}>Home</button>
        <button className={styles.button} onClick={() => scrollToSection("about")}>About</button>
        <button className={styles.button} onClick={() => scrollToSection("skills")}>Skills</button>
        <button className={styles.button} onClick={() => scrollToSection("works")}>Works</button>
        <button className={styles.button} onClick={() => scrollToSection("blogs")}>Blogs</button>
      </div>
    </div>
  );
}

export default Header;
