"use client"
import React, { useEffect } from "react";
import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
  title: String;
  percentage: number;
};

function ProgressBar({ title, percentage }: ProgressBarProps) {
  useEffect(() => {
    
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.caption}>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.percentage}>{percentage}%</h1>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.fill} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
