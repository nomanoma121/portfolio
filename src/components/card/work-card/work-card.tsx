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
					width: "350px",
					height: "280px",
					borderRadius: "8px",
					boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
				})}
			>
				<img
					src={content.image}
					alt={content.title}
					className={css({
						width: "100%",
						height: "200px",
						borderRadius: "8px",
						objectFit: "cover",
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
