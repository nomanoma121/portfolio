import { css } from "styled-system/css";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { TimelineItem } from "../components/timeline";
import { getRecentBlogs } from "../lib/blog";
import { getRecentWorks } from "../lib/work";
import Link from "next/link";
import { Button } from "../components/button";
import { ArrowRight } from "lucide-react";
import { BlogListItem } from "../components/blog-list-item";
import { WorkListItem } from "../components/work-list-item";

const timelineItems = [
	{
		date: "2025/12",
		title: "応用情報技術者を取得",
		description: "2025年度秋季 応用情報技術者試験に合格しました",
	},
	{
		date: "2025/05",
		title: "燈株式会社",
		description:
			"ソフトウェアエンジニアとしてアルバイト（インターン）をしています",
	},
	{
		date: "2024/06",
		title: "プログラミングサークル Maximum 加入",
		description: "大学のプログラミングサークルに加入し、Webを中心に活動",
	},
	{
		date: "2024/04",
		title: "埼玉大学",
		description: "埼玉大学工学部情報工学科に進学しました",
	},
	{
		date: "2021/04",
		title: "愛知県立国府高等学校",
		description: "愛知県立国府高等学校 普通科 に進学しました",
	},
];

const Home = () => {
	return (
		<div className={css({ minHeight: "100vh", backgroundColor: "background" })}>
			<Hero />
			<Header />

			<main
				className={css({
					maxWidth: "5xl",
					marginX: "auto",
					paddingX: "6",
					paddingY: "16",
				})}
			>
				{/* About Section */}
				<section
					className={css({
						marginBottom: "20",
						borderBottom: "1px solid",
						borderColor: "border",
						paddingBottom: "20",
					})}
				>
					<h2
						className={css({
							fontSize: "2xl",
							fontWeight: "bold",
							marginBottom: "6",
							color: "foreground",
						})}
					>
						About me
					</h2>
					<div className={css({ display: "flex", flexDirection: "column", gap: "4" })}>
						<p className={css({ color: "muted-foreground", lineHeight: "relaxed" })}>
							埼玉大学工学部情報工学科3年生です。現在は埼玉に住んでいます。
						</p>
						<p className={css({ color: "muted-foreground", lineHeight: "relaxed" })}>
							大学ではプログラミングサークル
							<a
								href="https://maximum.vc"
								target="_blank"
								rel="noopener noreferrer"
								className={css({
									color: "link",
									_hover: { textDecoration: "underline" },
									marginX: "1",
								})}
							>
								Maximum
							</a>
							に所属しています。昨年から講師としても活動させていただいています。
						</p>
						<p className={css({ color: "muted-foreground", lineHeight: "relaxed" })}>
							バックエンドやインフラの領域に興味があり、Go を使った API 開発や Kubernetes を用いたインフラ構築に取り組んでいます。
						</p>
					</div>
				</section>

				{/* Skills Section */}
				<section
					className={css({
						marginBottom: "20",
						borderBottom: "1px solid",
						borderColor: "border",
						paddingBottom: "20",
					})}
				>
					<h2
						className={css({
							fontSize: "2xl",
							fontWeight: "bold",
							marginBottom: "6",
							color: "foreground",
						})}
					>
						Skills
					</h2>
					<div className={css({ display: "flex", flexDirection: "column", gap: "4" })}>
						{[
							{ label: "Languages", value: "Go / TypeScript / Python" },
							{ label: "Backend", value: "gRPC / REST API / WebSocket / Redis / PostgreSQL" },
							{ label: "Infrastructure", value: "Kubernetes / Docker / AWS / Ansible / Prometheus / Grafana" },
							{ label: "Frontend", value: "React / Next.js" },
							{ label: "Others", value: "Linux / 応用情報技術者" },
						].map(({ label, value }) => (
							<div
								key={label}
								className={css({
									display: "grid",
									gridTemplateColumns: "160px 1fr",
									gap: "4",
									alignItems: "baseline",
								})}
							>
								<span
									className={css({
										fontWeight: "medium",
										color: "foreground",
									})}
								>
									{label}
								</span>
								<span className={css({ color: "muted-foreground" })}>{value}</span>
							</div>
						))}
					</div>
				</section>

				{/* Works Section */}
				<section
					className={css({
						marginBottom: "20",
						borderBottom: "1px solid",
						borderColor: "border",
						paddingBottom: "20",
					})}
				>
					<div
						className={css({
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							marginBottom: "8",
						})}
					>
						<h2
							className={css({
								fontSize: "2xl",
								fontWeight: "bold",
								color: "foreground",
							})}
						>
							Works
						</h2>
						<Link href="/works">
							<Button
								className={css({
									display: "flex",
									alignItems: "center",
									gap: "2",
								})}
							>
								See More
								<ArrowRight className={css({ h: "4", w: "4" })} />
							</Button>
						</Link>
					</div>
					<div
						className={css({
							display: "flex",
							flexDirection: "column",
							gap: "8",
						})}
					>
						{getRecentWorks().map((work) => (
							<WorkListItem
								key={work.slug}
								slug={work.slug}
								title={work.title}
								description={work.description}
								url={work.url}
								image={`/images/works/${work.slug}.png`}
							/>
						))}
					</div>
				</section>

				{/* Blogs Section */}
				<section
					className={css({
						marginBottom: "20",
						borderBottom: "1px solid",
						borderColor: "border",
						paddingBottom: "20",
					})}
				>
					<div
						className={css({
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							marginBottom: "8",
						})}
					>
						<h2 className={css({ fontSize: "2xl", fontWeight: "bold", color: "foreground" })}>
							Blogs
						</h2>
						<Link href="/blogs">
							<Button
								className={css({
									display: "flex",
									alignItems: "center",
									gap: "2",
								})}
							>
								See More
								<ArrowRight className={css({ h: "4", w: "4" })} />
							</Button>
						</Link>
					</div>
					<div
						className={css({
							display: "flex",
							flexDirection: "column",
							gap: "4",
						})}
					>
						{getRecentBlogs().map((blog, index) => (
							<>
								<BlogListItem
									key={blog.slug}
									slug={blog.slug}
									title={blog.title}
									description={blog.description}
									date={blog.date}
									updatedAt={blog.updatedAt}
								/>
								{index < getRecentBlogs().length - 1 && (
									<div
										className={css({
											borderTop: "1px solid",
											borderColor: "divider",
										})}
									/>
								)}
							</>
						))}
					</div>
				</section>

				{/* Timeline Section */}
				<section>
					<h2
						className={css({
							fontSize: "2xl",
							fontWeight: "bold",
							marginBottom: "8",
							color: "foreground",
						})}
					>
						Timeline
					</h2>
					<div
						className={css({
							display: "flex",
							flexDirection: "column",
						})}
					>
						{timelineItems.map((item, index) => (
							<TimelineItem
								key={item.title}
								date={item.date}
								title={item.title}
								description={item.description}
								isLast={index === timelineItems.length - 1}
							/>
						))}
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
