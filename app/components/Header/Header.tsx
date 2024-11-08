import React from "react";
import styles from "./Header.module.css";

function Header() {

  return (
    <div className={styles.container}>
      <div className={styles.headerMenu}>
        <button className={styles.button}>Home</button>
        <button className={styles.button}>About</button>
        <button className={styles.button}>Skills</button>
        <button className={styles.button}>Works</button>
        <button className={styles.button}>Blogs</button>
      </div>
    </div>
  );
}

export default Header;
