import { css } from "../../../styled-system/css";

export const Footer = () => {
	return (
		<footer
			className={css({
				padding: "10px",
				position: "absolute",
				width: "100vw",
				textAlign: "center",
			})}
		>
			<p>© 2025 all right reserved</p>
		</footer>
	);
};
