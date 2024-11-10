import React from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import Ripples from "../Animation/Ripples";

function Hero({ sectionRefs }) {
  return (
    <div className={styles.container}>
      <Ripples />
      <section ref={sectionRefs.home}>
        <motion.div
          className={styles.name}
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <h1>nomanoma121</h1>
        </motion.div>
        <motion.div
          className={styles.subtitle}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1.3 }}
          viewport={{ once: true }}
        >
          <p>Web Developer</p>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
