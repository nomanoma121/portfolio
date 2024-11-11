import React from "react";
import styles from "./Skills.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

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

function Skills() {
  return (
    <>
      <h1 className={styles.title}>Skills</h1>
      <p className={styles.sentence}>
        現在はおもにWeb開発をおこなっているため、JavaScriptをメインで使っています。
      </p>
      <div className={styles.mySkills}>
        {skills.map((e, index) => (
          <ProgressBar
            key={index}
            name={e.name}
            percentage={e.level}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

export default Skills;
