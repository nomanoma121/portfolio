"use client";
import React from "react";
import Link from "next/link";
import Drawer from "../Drawer/Drawer";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.headerMenu}>
        <li><Link href="./" className={styles.headerList}>Home</Link></li> 
        <li><Link href="./works" className={styles.headerList}>Works</Link></li>
        <li><Link href="./blogs" className={styles.headerList}>Blogs</Link></li>
      </ul>
      <Drawer />
    </header>
  );
}

export default Header;
