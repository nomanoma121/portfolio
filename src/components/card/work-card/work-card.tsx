import { css } from "../../../../styled-system/css";
import Link from "next/link";

type WorkCardProps = {
	slug: string;
	title: string;
	description: string;
	url: string;
	date: string;
	image: string;
};

export const WorkCard = (content: WorkCardProps) => {
	return (
		<Link href={content.url}>
			<div
				className={css({
					width: { base: "100%", md: "350px" },
					height: { base: "auto", md: "280px" },
					borderRadius: "8px",
					boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
				})}
			>
				<img
					src={content.image}
					alt={content.title}
					className={css({
						width: "100%",
						minWidth: "100%",
						height: { base: "auto", md: "200px" },
						aspectRatio: "7/4",
						borderRadius: "8px",
						objectFit: "cover",
						objectPosition: "center",
					})}
				/>
				<h2
					className={css({
						fontSize: "18x",
						fontWeight: "bold",
						color: "text",
						padding: "0px 10px",
						mt: "5px",
					})}
				>
					{content.title}
				</h2>
				<div
					className={css({
						height: "50px",
						padding: "0 10px",
					})}
				>
					<p
						className={css({
							fontSize: "14px",
							color: "accent",
							fontWeight: "500",
						})}
					>
						{content.description}
					</p>
				</div>
			</div>
		</Link>
	);
};
