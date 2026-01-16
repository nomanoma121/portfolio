import Link from "next/link";
import { css } from "styled-system/css";
import { Button } from "../../../components/button";

type CardProps = {
	slug: string;
	title: string;
	description: string;
	date: string;
};

export const BlogCard = (content: CardProps) => {
	return (
		<div
			className={css({
				width: { base: "100%", md: "350px" },
				height: { base: "auto", md: "180px" },
				borderRadius: "8px",
				padding: "16px",
				backgroundColor: "background",
				boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
			})}
		>
			<span
				className={css({
					fontSize: "15px",
					color: "muted-foreground",
					marginBottom: "8px",
				})}
			>
				{new Date(content.date).toLocaleDateString("ja-JP", {
					year: "numeric",
					month: "2-digit",
					day: "2-digit",
				})}
			</span>
			<h2
				className={css({
					fontSize: "20px",
					fontWeight: "bold",
					marginBottom: "8px",
					color: "foreground",
				})}
			>
				{content.title}
			</h2>
			<div
				className={css({
					height: "30px",
				})}
			>
				<p
					className={css({
						fontSize: "14px",
						color: "muted-foreground",
						fontWeight: "500",
					})}
				>
					{content.description}
				</p>
			</div>
			<Link
				href={`/blogs/${content.slug}`}
				className={css({
					mt: "25px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				})}
			>
				<Button>Read More</Button>
			</Link>
		</div>
	);
};
