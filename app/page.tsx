"use client";
import React, { useRef } from "react";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Blogs from "./components/Blogs/Blogs";
import styles from "./page.module.css";

function page() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    works: useRef(null),
    blogs: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div>
      <Hero sectionRefs={sectionRefs} />
      <Header scrollToSection={scrollToSection} />
      <div className={styles.container}>
        <section className={styles.content} ref={sectionRefs.about}>
          <About />
        </section>
        <section className={styles.content} ref={sectionRefs.skills}>
          <Skills />
        </section>
        <section className={styles.content} ref={sectionRefs.works}>
          <Works />
        </section>
        <section className={styles.content} ref={sectionRefs.blogs}>
          <Blogs />
        </section>
      </div>
    </div>
  );
}

export default page;
