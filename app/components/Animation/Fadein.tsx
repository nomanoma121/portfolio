import React from "react";
import { motion } from "framer-motion";
import styles from "./Fadein.module.css";

function Fadein({ start, duration, delay, children }:any) {
  return (
    <motion.div
      className={styles.container}
      initial={{ y: start, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: duration, delay: delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default Fadein;
