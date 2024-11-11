import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

function Header({ scrollToSection }: any) {
  const handleClick = () => {
    
  }

  return (
    <header className={styles.container}>
      <div className={styles.headerMenu}>
        <ul>
          <li onClick={handleClick}>Home</li> 
          <li onClick={handleClick}>About</li>
          <li onClick={handleClick}>Skills</li>
          <li onClick={handleClick}>Works</li>
          <li onClick={handleClick}>Blogs</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
