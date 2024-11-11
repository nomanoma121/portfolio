import React from "react";
import Link from "next/link";
import styles from "./Blogs.module.css";

function Blogs() {
  return (
    <>
      <h1 className={styles.title}>Blogs</h1>
      <div>随時更新予定</div>
      <Link href="/blogs">View More</Link>
    </>
  );
}

export default Blogs;
