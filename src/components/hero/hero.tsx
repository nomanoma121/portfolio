import styles from "./Hero.module.css";

export const Hero = () => {
	return (
		<div className={styles.container} id="home">
			<section>
				<h1 className={styles.name}>nomanoma121</h1>
				<p className={styles.subtitle}>Web Developer</p>
			</section>
		</div>
	);
};
