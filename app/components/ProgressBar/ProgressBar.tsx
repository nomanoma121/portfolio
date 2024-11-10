import React from "react";
import styles from "./ProgressBar.module.css";
import { motion, useInView } from "framer-motion";

type ProgressBarProps = {
  name: String;
  percentage: number;
  index: number;
};

function ProgressBar({ name, percentage, index }: ProgressBarProps) {
  return (
    <div className={styles.container}>
      <div className={styles.caption}>
        <h1 className={styles.name}>{name}</h1>
        <h1 className={styles.percentage}>{percentage}%</h1>
      </div>
      <div className={styles.progressBar}>
        <motion.div
          className={styles.fill}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%`}}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{once: true}}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
