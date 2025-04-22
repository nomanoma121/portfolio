import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
	return (
		<header className={styles.container}>
			<ul className={styles.headerMenu}>
				<li>
					<Link href="./" className={styles.headerList}>
						Home
					</Link>
				</li>
				<li>
					<Link href="./works" className={styles.headerList}>
						Works
					</Link>
				</li>
				<li>
					<Link href="./blogs" className={styles.headerList}>
						Blogs
					</Link>
				</li>
			</ul>
		</header>
	);
};
