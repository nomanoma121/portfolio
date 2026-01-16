import { css } from "styled-system/css";
import Link from "next/link";

export const Hero = () => {
	const icon = css({
		width: "100px",
		height: "100px",
		borderRadius: "50%",
		marginRight: { base: "0", md: "20px" },
		marginBottom: { base: "4", md: "0" },
	});

	const caption = css({
		fontSize: { base: "14px", md: "20px" },
		color: "primary-foreground",
		marginBottom: "10px",
		alignItems: "center",
		textAlign: { base: "center", md: "left" },
	});

	const logo = css({
		width: "30px",
		height: "30px",
		marginRight: "10px",
	});

	return (
		<div
			className={css({
				backgroundColor: "primary",
				display: "flex",
				flexDirection: { base: "column", md: "row" },
				justifyContent: "center",
				alignItems: "center",
				fontSize: "30px",
				minHeight: { base: "auto", md: "200px" },
				paddingY: { base: "8", md: "0" },
				paddingX: { base: "4", md: "0" },
				gap: { base: "6", md: "0" },
			})}
			id="home"
		>
			<div
				className={css({
					display: "flex",
					flexDirection: { base: "column", md: "row" },
					alignItems: "center",
					justifyContent: "center",
					marginRight: { base: "0", md: "100px" },
				})}
			>
				<img src="/images/icon.webp" alt="icon" className={icon} />
				<div className={css({ textAlign: { base: "center", md: "left" } })}>
					<h1
						className={css({
							fontSize: { base: "24px", md: "30px" },
							color: "primary-foreground",
							marginTop: { base: "0", md: "-15px" },
						})}
					>
						nomanoma121
					</h1>
					<div
						className={css({
							display: "flex",
							marginTop: "10px",
							justifyContent: { base: "center", md: "flex-start" },
						})}
					>
						<Link href="https://github.com/nomanoma121" target="_blank">
							<img src="/images/github.svg" alt="github" className={logo} />
						</Link>
						<Link href="https://x.com/sobur1al" target="_blank">
							<img src="/images/x.svg" alt="github" className={logo} />
						</Link>
					</div>
				</div>
			</div>
			<div
				className={css({
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				})}
			>
				<p className={caption}>Born on January 21, 2006 in Aichi</p>
				<p className={caption}>Computer Science Student</p>
			</div>
		</div>
	);
};
