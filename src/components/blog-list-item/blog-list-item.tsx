import Link from "next/link";
import { css } from "styled-system/css";
import { ArrowRight } from "lucide-react";

type BlogListItemProps = {
	slug: string;
	title: string;
	description: string;
	date: string;
	updatedAt?: string;
};

export const BlogListItem = ({ slug, title, description, date, updatedAt }: BlogListItemProps) => {
	return (
		<Link href={`/blogs/${slug}`} className={css({ display: "block" })}>
			<div
				className={css({
					borderLeft: "2px solid transparent",
					paddingLeft: "6",
					paddingY: "2",
					transition: "all",
					_hover: {
						borderColor: "primary",
					},
				})}
			>
				<div className={css({ display: "flex", alignItems: "start", justifyContent: "space-between", gap: "4" })}>
					<div className={css({ flex: 1 })}>
						<div className={css({ display: "flex", gap: "3", marginBottom: "2" })}>
							<time
								className={css({
									fontSize: "sm",
									color: "muted-foreground",
									display: "block",
									fontFamily: "mono",
								})}
							>
								作成: {date}
							</time>
							{updatedAt && updatedAt !== date && (
								<time
									className={css({
										fontSize: "sm",
										color: "muted-foreground",
										display: "block",
										fontFamily: "mono",
									})}
								>
									更新: {updatedAt}
								</time>
							)}
						</div>
						<h3
							className={css({
								fontWeight: "semibold",
								fontSize: "xl",
								marginBottom: "1.5",
								color: "foreground",
								transition: "colors",
								_groupHover: {
									color: "primary",
								},
							})}
						>
							{title}
						</h3>
						<p className={css({ color: "muted-foreground", lineHeight: "relaxed" })}>
							{description}
						</p>
					</div>
					<ArrowRight
						className={css({
							h: "5",
							w: "5",
							color: "muted-foreground",
							flexShrink: 0,
							marginTop: "1",
							transition: "all",
							_groupHover: {
								color: "primary",
								transform: "translateX(0.25rem)",
							},
						})}
					/>
				</div>
			</div>
		</Link>
	);
};
