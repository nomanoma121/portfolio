import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <h1 className={styles.title}>About</h1>
      <p className={styles.sentence}>
        埼玉大学に通う大学一年生です。高校生のころにプログラミングを触り始めて、大学生になってから本格的に勉強しています。
        <br />
        大学ではMaximumというプログラミングサークルに所属しています。
        <br />
        機械学習や画像処理などにも興味があるため今後はWeb以外の分野も勉強していきたいと思っています。
      </p>
    </>
  );
}

export default About;
