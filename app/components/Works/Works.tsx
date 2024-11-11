import React from "react";
import Link from "next/link";
import styles from "./Works.module.css";

function Works() {
  return (
    <>
      <h1 className={styles.title}>Works</h1>
      <div>随時更新予定</div>
      <Link href="/works">View More</Link>
    </>
  );
}

export default Works;
