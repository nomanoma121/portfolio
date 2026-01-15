import Link from "next/link";
import { css } from "styled-system/css";
import { ThemeToggle } from "../theme-toggle";

export const Header = () => {
	return (
		<header
			className={css({
				borderBottom: "1px solid",
				borderColor: "border",
				backgroundColor: "primary",
				backdropFilter: "blur(8px)",
				position: "sticky",
				top: 0,
				zIndex: 50,
			})}
		>
			<nav
				className={css({
					maxWidth: "5xl",
					marginX: "auto",
					paddingX: "6",
					paddingY: "4",
				})}
			>
				<div
					className={css({
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					})}
				>
					<Link
						href="/"
						className={css({
							fontSize: "lg",
							fontWeight: "semibold",
							color: "primary-foreground",
							transition: "colors",
							_hover: {
								opacity: 0.8,
							},
						})}
					>
						nomanoma121
					</Link>
					<div
						className={css({
							display: "flex",
							alignItems: "center",
							gap: "8",
						})}
					>
						<Link
							href="/"
							className={css({
								fontSize: "sm",
								fontWeight: "medium",
								color: "primary-foreground",
								opacity: 0.9,
								transition: "opacity",
								_hover: {
									opacity: 1,
								},
							})}
						>
							Home
						</Link>
						<Link
							href="/works"
							className={css({
								fontSize: "sm",
								fontWeight: "medium",
								color: "primary-foreground",
								opacity: 0.9,
								transition: "opacity",
								_hover: {
									opacity: 1,
								},
							})}
						>
							Works
						</Link>
						<Link
							href="/blogs"
							className={css({
								fontSize: "sm",
								fontWeight: "medium",
								color: "primary-foreground",
								opacity: 0.9,
								transition: "opacity",
								_hover: {
									opacity: 1,
								},
							})}
						>
							Blogs
						</Link>
						<div
							className={css({
								display: "flex",
								alignItems: "center",
								gap: "4",
								marginLeft: "4",
								borderLeft: "1px solid",
								borderColor: "primary-foreground",
								opacity: 0.2,
								paddingLeft: "4",
							})}
						>
							<ThemeToggle />
							<a
								href="https://github.com/nomanoma121"
								target="_blank"
								rel="noopener noreferrer"
								className={css({
									color: "primary-foreground",
									opacity: 0.8,
									transition: "opacity",
									_hover: {
										opacity: 1,
									},
								})}
							>
								<Github className={css({ h: "5", w: "5" })} />
								<span className={css({ srOnly: true })}>GitHub</span>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};
