import { Container } from "@/components/container";
import { css } from "styled-system/css";
import { Header } from "../../components/header";
import { getAllWorks } from "../../lib/work";
import Link from "next/link";
import Image from "next/image";

const Works = () => {
	const works = getAllWorks();
	return (
		<>
			<Header />
			<Container>
				<h1
					className={css({
						fontSize: "2xl",
						fontWeight: "bold",
						color: "foreground",
						marginBottom: "4",
						display: "block",
					})}
				>
					Works
				</h1>
				<p
					className={css({
						fontSize: "sm",
						color: "muted-foreground",
						marginBottom: "12",
						display: "block",
					})}
				>
					それぞれクリックするとGitHubのリポジトリに遷移します。
				</p>
				<div className={css({ display: "flex", flexDirection: "column", gap: "8" })}>
					{works.map((work) => (
						<Link key={work.slug} href={work.url} target="_blank" rel="noopener noreferrer" className={css({ display: "block" })}>
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
										src={`/images/works/${work.slug}.png`}
										alt={work.title}
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
											transition: "colors",
											_groupHover: {
												color: "link",
											},
										})}
									>
										{work.title}
									</h3>
									<p className={css({ fontSize: "sm", color: "muted-foreground", lineHeight: "relaxed" })}>
										{work.description}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</Container>
		</>
	);
};

export default Works;
