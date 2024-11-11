import React, { ReactNode } from "react";
import styles from "./Hero.module.css";
import Ripples from "../Animation/Ripples";
import Fadein from "../Animation/Fadein";

function Hero({ sectionRefs }:any) {
  return (
    <div className={styles.container}>
      <Ripples />
      <section ref={sectionRefs.home}>
        <Fadein start={-30} duration={2} delay={0.9}>
          <h1 className={styles.name}>nomanoma121</h1>
        </Fadein>
        <Fadein start={20} duration={2} delay={1.1}>
          <p className={styles.subtitle}>Web Developer</p>
        </Fadein>
      </section>
    </div>
  );
}

export default Hero;
