import Link from "next/link";
import { css } from "styled-system/css";

export const Header = () => {
	const headerLink = css({
		fontSize: "xl",
		margin: "0 10px",
		paddingBottom: "5px",
		position: "relative",
		color: "primary-foreground",

		_before: {
			background: "primary-foreground",
			content: '""',
			width: "100%",
			height: "2px",
			position: "absolute",
			left: 0,
			bottom: 0,
			margin: "auto",
			transformOrigin: "center top",
			transform: "scale(0, 1)",
			transition: "transform 0.3s",
		},

		_hover: {
			_before: {
				transformOrigin: "center top",
				transform: "scale(1, 1)",
			},
		},
	});

	return (
		<header
			className={css({
				position: "sticky",
				top: "0",
				width: "100%",
				height: "70px",
				backgroundColor: "primary",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: 10,
				margin: 0,
				boxShadow: "0 4px 6px -2px rgba(0, 0, 0, 0.3)",
			})}
		>
			<ul
				className={css({
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				})}
			>
				<li>
					<Link href="/" className={headerLink}>
						Home
					</Link>
				</li>
				<li>
					<Link href="/works" className={headerLink}>
						Works
					</Link>
				</li>
				<li>
					<Link href="/blogs" className={headerLink}>
						Blogs
					</Link>
				</li>
			</ul>
		</header>
	);
};
