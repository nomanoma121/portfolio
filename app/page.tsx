import React from "react";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import styles from "./page.module.css";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function page() {
  return (
    <div>
      <Hero />
      <Header />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>About</h1>
            <p className={styles.sentence}>
              埼玉大学に通う大学一年生です。高校生のころにプログラミングを触り始めて、大学生になってから本格的に勉強しています。大学ではMaximumというプログラミングサークルに所属しています。機械学習や画像処理などに興味があるため今後はWeb以外の分野も勉強していきたいと思っています。
            </p>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Skills</h1>
            <p className={styles.sentence}>現在はおもにWeb開発をおこなっているため、JavaScriptをメインで使っています。</p>
            <div className={styles.mySkills}>
              <ProgressBar title={"HTML&CSS"} percentage={80} />
              <ProgressBar title={"JavaScript"} percentage={70} />
              <ProgressBar title={"React/Next.js"} percentage={60} />
              <ProgressBar title={"Node.js"} percentage={40} />
              <ProgressBar title={"Python"} percentage={20} />
              <ProgressBar title={"C++"} percentage={30} />
            </div>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Works</h1>
            <div></div>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Blogs</h1>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
