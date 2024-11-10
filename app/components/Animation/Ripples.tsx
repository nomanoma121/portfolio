import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import styles from "./Ripples.module.css";

function Ripples() {
  const [screenHeight, setScreenHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    }
  }, []);

  //レイアウトが崩れないように小さいほうにあわせる
  const circleSize = Math.min(screenHeight, screenWidth) - 20;
  const smallerDimension = circleSize * 0.95;
  return (
    <>
      <motion.div
        className={styles.circle}
        initial={{ width: 0, opacity: 1 }}
        whileInView={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          opacity: 0,
        }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
      />
      <motion.div
        className={styles.circle}
        initial={{ width: 0, opacity: 1 }}
        whileInView={{
          width: `${smallerDimension}px`,
          height: `${circleSize}px`,
          opacity: 0,
        }}
        transition={{ duration: 3, delay: 0 }}
        viewport={{ once: true }}
      />
      <motion.div
        className={styles.circle}
        initial={{ width: 0, opacity: 1 }}
        whileInView={{
          width: `${circleSize}px`,
          height: `${smallerDimension}px`,
          opacity: 0,
        }}
        transition={{ duration: 3, delay: 0 }}
        viewport={{ once: true }}
      />
    </>
  )
}

export default Ripples
