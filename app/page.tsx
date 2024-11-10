"use client"
import React, { useRef } from "react";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import styles from "./page.module.css";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Link from "next/link";

type skill = {
  name: string;
  level: number;
};

type skills = Array<skill>;

const skills: skills = [
  {name: "HTML&CSS",    level: 60},
  {name: "JavaScript:", level: 70},
  {name: "React",       level: 60},
  {name: "Node.js",     level: 40},
  {name: "Python",      level: 30},
  {name: "C++",         level: 20},
];

function page() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    works: useRef(null),
    blogs: useRef(null),
  }; 
  
  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth", block: "center" });
    console.log("スクロール関数動いてるよ！！"); 
  }; 

  return (
    <div>
      <Hero sectionRefs={sectionRefs} />
      <Header scrollToSection={scrollToSection} />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content} ref={sectionRefs.about}>
            <h1 className={styles.title}>About</h1>
            <p className={styles.sentence}>
              埼玉大学に通う大学一年生です。高校生のころにプログラミングを触り始めて、大学生になってから本格的に勉強しています。大学ではMaximumというプログラミングサークルに所属しています。機械学習や画像処理などに興味があるため今後はWeb以外の分野も勉強していきたいと思っています。
            </p>
          </div>
          <div className={styles.content} ref={sectionRefs.skills}>
            <h1 className={styles.title}>Skills</h1>
            <p className={styles.sentence}>現在はおもにWeb開発をおこなっているため、JavaScriptをメインで使っています。</p>
            <div className={styles.mySkills}>
              {skills.map((e, index) => (
                <ProgressBar key={index} name={e.name} percentage={e.level} index={index} />
              ))}
            </div>
          </div>
          <div className={styles.content} ref={sectionRefs.works}>
            <h1 className={styles.title}>Works</h1>
            <div>随時更新予定</div>
            <Link href="/works">View More</Link>
          </div>
          <div className={styles.content} ref={sectionRefs.blogs}>
            <h1 className={styles.title}>Blogs</h1>
            <div>随時更新予定</div>
            <Link href="/blogs">View More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
