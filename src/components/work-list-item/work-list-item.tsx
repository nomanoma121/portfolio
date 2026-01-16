import Link from "next/link";
import { css } from "styled-system/css";
import Image from "next/image";

type WorkListItemProps = {
	slug: string;
	title: string;
	description: string;
	url: string;
	image: string;
};

export const WorkListItem = ({ slug, title, description, url, image }: WorkListItemProps) => {
	return (
		<Link href={url} target="_blank" rel="noopener noreferrer" className={css({ display: "block" })}>
			<div
				className={css({
					display: "flex",
					gap: "6",
					alignItems: "start",
					borderLeft: "2px solid transparent",
					paddingLeft: "6",
					transition: "all",
					_hover: {
						borderColor: "primary",
					},
				})}
			>
				<div
					className={css({
						width: "48",
						height: "32",
						backgroundColor: "muted",
						borderRadius: "md",
						overflow: "hidden",
						flexShrink: 0,
					})}
				>
					<Image
						src={image}
						alt={title}
						width={192}
						height={128}
						className={css({
							width: "full",
							height: "full",
							objectFit: "cover",
							transition: "transform",
							_groupHover: {
								transform: "scale(1.05)",
							},
						})}
					/>
				</div>
				<div className={css({ flex: 1, minWidth: 0 })}>
					<h3
						className={css({
							fontWeight: "semibold",
							fontSize: "lg",
							marginBottom: "2",
							color: "foreground",
							transition: "colors",
							_groupHover: {
								color: "link",
							},
						})}
					>
						{title}
					</h3>
					<p className={css({ fontSize: "sm", color: "muted-foreground", lineHeight: "relaxed" })}>
						{description}
					</p>
				</div>
			</div>
		</Link>
	);
};
