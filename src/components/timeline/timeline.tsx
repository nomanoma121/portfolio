import { css } from "styled-system/css";

export type TimelineItemProps = {
	date: string;
	title: string;
	description: string;
	isLast?: boolean;
};

export const TimelineItem = ({ date, title, description, isLast = false }: TimelineItemProps) => {
	return (
		<div className={css({ display: "flex", gap: "6" })}>
			<div className={css({ display: "flex", flexDirection: "column", alignItems: "center" })}>
				<div
					className={css({
						width: "3",
						height: "3",
						borderRadius: "full",
						backgroundColor: "primary",
						flexShrink: 0,
						marginTop: "1.5",
					})}
				/>
				{!isLast && (
					<div className={css({ width: "0.5", height: "full", backgroundColor: "border", marginTop: "2" })} />
				)}
			</div>
			<div className={css({ flex: 1, paddingBottom: isLast ? "0" : "8" })}>
				<time className={css({ fontSize: "sm", color: "muted-foreground", fontFamily: "mono" })}>{date}</time>
				<h3 className={css({ fontWeight: "semibold", fontSize: "lg", marginTop: "2", marginBottom: "1" })}>
					{title}
				</h3>
				<p className={css({ fontSize: "sm", color: "muted-foreground", lineHeight: "relaxed" })}>
					{description}
				</p>
			</div>
		</div>
	);
};
