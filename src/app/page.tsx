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
					<div className={css({ maxWidth: "none" })}>
						<p
							className={css({
								color: "muted-foreground",
								lineHeight: "relaxed",
								marginBottom: "4",
							})}
						>
							埼玉大学工学部情報工学科2年生です。現在は埼玉に住んでいます。
						</p>
						<p
							className={css({
								color: "muted-foreground",
								lineHeight: "relaxed",
								marginBottom: "4",
							})}
						>
							高校のころに少しだけプログラミングを触ったことはありましたが、本格的に始めたのは大学に入ってからなので、プログラミング歴はだいたい1年くらいです。
						</p>
						<p
							className={css({
								color: "muted-foreground",
								lineHeight: "relaxed",
								marginBottom: "4",
							})}
						>
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
							に所属しています。今年からは講師としても活動させていただいています。
						</p>
						<p
							className={css({
								color: "muted-foreground",
								lineHeight: "relaxed",
							})}
						>
							今までは主にWeb開発を行っていましたが、最近はインフラ分野にも興味があり、少しずつ学んでいけたらと思っています。
						</p>
					</div>
				</section>

				{/* Skills Section - 従来のデザイン維持 */}
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
					<p
						className={css({
							color: "muted-foreground",
							lineHeight: "relaxed",
							marginBottom: "4",
						})}
					>
						主にWeb開発を行っており、TypeScript, Goなどをよく使用しています。
					</p>
					<p
						className={css({
							color: "muted-foreground",
							lineHeight: "relaxed",
							marginBottom: "4",
						})}
					>
						個人開発ではありますが、フロントエンド、バックエンドの両方経験があります。フレームワークなどはフロントエンドではReact、バックエンドだと
						Echo ( Go ) や Hono.js ( Node.js ) を使用することが多いです。
					</p>
					<p
						className={css({
							color: "muted-foreground",
							lineHeight: "relaxed",
							marginBottom: "4",
						})}
					>
						最近はPCを購入して自宅サーバーとして運用するなどインフラ分野にも挑戦しており、LinuxやDockerに関する基礎的な知識も身につけています。
					</p>
					<p
						className={css({
							color: "muted-foreground",
							lineHeight: "relaxed",
						})}
					>
						サークルの方では共同開発も行っており、Gitを使用した開発にもそこそこ慣れています。
					</p>
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
						<h2 className={css({ fontSize: "2xl", fontWeight: "bold" })}>
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
