"use client";
import React from "react";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Blogs from "./components/Blogs/Blogs";
import styles from "./page.module.css";

function page() {
  return (
    <div>
      <div className={styles.container}>
        <section className={styles.content}>
          <About />
        </section>
        <section className={styles.content}>
          <Skills />
        </section>
        <section className={styles.content}>
          <Works />
        </section>
        <section className={styles.content}>
          <Blogs />
        </section>
      </div>
    </div>
  );
}

export default page;
