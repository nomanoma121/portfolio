import React, { useState } from "react";
import Link from "next/link";
import styles from "./Drawer.module.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, AnimatePresence } from "framer-motion";

function Drawer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {isMenuOpen ? (
        <AnimatePresence>
          <motion.div className={styles.container}>
            <div
              className={styles.blank}
              onClick={() => setIsMenuOpen(false)}
            ></div>
            <div className={styles.menuContainer}>
              <CloseIcon
                className={styles.closeIcon}
                onClick={() => setIsMenuOpen(false)}
              />
              <ul className={styles.menu}>
                <li>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href="./"
                    className={styles.list}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href="./works"
                    className={styles.list}
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href="./blogs"
                    className={styles.list}
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <MenuIcon
          className={styles.menuIcon}
          onClick={() => setIsMenuOpen(true)}
        />
      )}
    </>
  );
}

export default Drawer;
