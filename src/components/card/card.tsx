import Link from "next/link";
import { css } from "../../../styled-system/css";

type CardProps = {
	slug: string;
	title: string;
	description: string;
};

export const Card = (content: CardProps) => {
	return (
		<div
			className={css({
				width: "400px",
				height: "200px",
				border: "1px solid #ccc",
				borderRadius: "8px",
				padding: "16px",
				margin: "16px 0",
				backgroundColor: "accentLight",
				boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
			})}
		>
			<h2>{content.title}</h2>
			<p>{content.description}</p>
			<Link href={`/blogs/${content.slug}`}>
				<button
					className={css({
						backgroundColor: "accentLight",
            color: "primary",
						border: "none",
            fontWeight: "bold",
						borderRadius: "5px",
						padding: "10px 20px",
						cursor: "pointer",
					})}
				>
					Read More
				</button>
			</Link>
		</div>
	);
};
