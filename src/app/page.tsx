import { css } from "styled-system/css";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { getRecentBlogs } from "../lib/blog";
import { getRecentWorks } from "../lib/work";
import Link from "next/link";
import { Button } from "../components/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
					<h2 className={css({ fontSize: "2xl", fontWeight: "bold", marginBottom: "6" })}>About me</h2>
					<div className={css({ maxWidth: "none" })}>
						<p className={css({ color: "muted-foreground", lineHeight: "relaxed", marginBottom: "4" })}>
							埼玉大学工学部情報工学科2年生です。現在は埼玉に住んでいます。
						</p>
						<p className={css({ color: "muted-foreground", lineHeight: "relaxed", marginBottom: "4" })}>
							高校のころに少しだけプログラミングを触ったことはありましたが、本格的に始めたのは大学に入ってからなので、プログラミング歴はだいたい1年くらいです。
						</p>
						<p className={css({ color: "muted-foreground", lineHeight: "relaxed", marginBottom: "4" })}>
							大学ではプログラミングサークル
							<a
								href="https://maximum.vc"
								target="_blank"
								rel="noopener noreferrer"
								className={css({ color: "link", _hover: { textDecoration: "underline" }, marginX: "1" })}
							>
								Maximum
							</a>
							に所属しています。今年からは講師としても活動させていただいています。
						</p>
						<p className={css({ color: "muted-foreground", lineHeight: "relaxed" })}>
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
					<h2 className={css({ fontSize: "2xl", fontWeight: "bold", marginBottom: "6" })}>Skills</h2>
					<p className={css({ color: "muted-foreground", lineHeight: "relaxed", marginBottom: "4" })}>
						主にWeb開発を行っており、TypeScript, Goなどをよく使用しています。
					</p>
					<p className={css({ color: "muted-foreground", lineHeight: "relaxed", marginBottom: "4" })}>
						個人開発ではありますが、フロントエンド、バックエンドの両方経験があります。フレームワークなどはフロントエンドではReact、バックエンドだと
						Echo ( Go ) や Hono.js ( Node.js ) を使用することが多いです。
					</p>
					<p className={css({ color: "muted-foreground", lineHeight: "relaxed", marginBottom: "4" })}>
						最近はPCを購入して自宅サーバーとして運用するなどインフラ分野にも挑戦しており、LinuxやDockerに関する基礎的な知識も身につけています。
					</p>
					<p className={css({ color: "muted-foreground", lineHeight: "relaxed" })}>
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
					<div className={css({ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8" })}>
						<h2 className={css({ fontSize: "2xl", fontWeight: "bold" })}>Works</h2>
						<Link href="/works">
							<Button className={css({ display: "flex", alignItems: "center", gap: "2" })}>
								See More
								<ArrowRight className={css({ h: "4", w: "4" })} />
							</Button>
						</Link>
					</div>
					<div className={css({ display: "flex", flexDirection: "column", gap: "8" })}>
						{getRecentWorks().map((work) => (
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
					<div className={css({ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8" })}>
						<h2 className={css({ fontSize: "2xl", fontWeight: "bold" })}>Blogs</h2>
						<Link href="/blogs">
							<Button className={css({ display: "flex", alignItems: "center", gap: "2" })}>
								See More
								<ArrowRight className={css({ h: "4", w: "4" })} />
							</Button>
						</Link>
					</div>
					<div className={css({ display: "flex", flexDirection: "column", gap: "6" })}>
						{getRecentBlogs().map((blog, index) => (
							<div key={blog.slug}>
								<Link href={`/blogs/${blog.slug}`} className={css({ display: "block" })}>
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
												<time
													className={css({
														fontSize: "xs",
														color: "muted-foreground",
														marginBottom: "2",
														display: "block",
														fontFamily: "mono",
													})}
												>
													{blog.date}
												</time>
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
													{blog.title}
												</h3>
												<p className={css({ fontSize: "sm", color: "muted-foreground", lineHeight: "relaxed" })}>
													{blog.description}
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
														color: "link",
														transform: "translateX(0.25rem)",
													},
												})}
											/>
										</div>
									</div>
								</Link>
								{index < getRecentBlogs().length - 1 && (
									<div className={css({ borderTop: "1px solid", borderColor: "border", marginY: "6" })} />
								)}
							</div>
						))}
					</div>
				</section>

				{/* Timeline Section */}
				<section>
					<h2 className={css({ fontSize: "2xl", fontWeight: "bold", marginBottom: "8" })}>Timeline</h2>
					<div className={css({ display: "flex", flexDirection: "column", gap: "8" })}>
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
								<div className={css({ width: "0.5", height: "full", backgroundColor: "border", marginTop: "2" })} />
							</div>
							<div className={css({ flex: 1, paddingBottom: "8" })}>
								<time className={css({ fontSize: "sm", color: "muted-foreground", fontFamily: "mono" })}>2024/04</time>
								<h3 className={css({ fontWeight: "semibold", fontSize: "lg", marginTop: "2", marginBottom: "1" })}>
									埼玉大学 工学部 情報工学科 入学
								</h3>
								<p className={css({ fontSize: "sm", color: "muted-foreground", lineHeight: "relaxed" })}>
									情報工学科に入学し、プログラミングを本格的に学び始めました。
								</p>
							</div>
						</div>

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
								<div className={css({ width: "0.5", height: "full", backgroundColor: "border", marginTop: "2" })} />
							</div>
							<div className={css({ flex: 1, paddingBottom: "8" })}>
								<time className={css({ fontSize: "sm", color: "muted-foreground", fontFamily: "mono" })}>2024/06</time>
								<h3 className={css({ fontWeight: "semibold", fontSize: "lg", marginTop: "2", marginBottom: "1" })}>
									プログラミングサークル Maximum 加入
								</h3>
								<p className={css({ fontSize: "sm", color: "muted-foreground", lineHeight: "relaxed" })}>
									大学のプログラミングサークルに加入し、Web開発を中心に学習を開始しました。
								</p>
							</div>
						</div>

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
								<div className={css({ width: "0.5", height: "full", backgroundColor: "border", marginTop: "2" })} />
							</div>
							<div className={css({ flex: 1, paddingBottom: "8" })}>
								<time className={css({ fontSize: "sm", color: "muted-foreground", fontFamily: "mono" })}>2024/12</time>
								<h3 className={css({ fontWeight: "semibold", fontSize: "lg", marginTop: "2", marginBottom: "1" })}>
									個人開発プロジェクト開始
								</h3>
								<p className={css({ fontSize: "sm", color: "muted-foreground", lineHeight: "relaxed" })}>
									チャットアプリやリバースプロキシなど、様々な個人開発プロジェクトに取り組み始めました。
								</p>
							</div>
						</div>

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
							</div>
							<div className={css({ flex: 1 })}>
								<time className={css({ fontSize: "sm", color: "muted-foreground", fontFamily: "mono" })}>2025/04</time>
								<h3 className={css({ fontWeight: "semibold", fontSize: "lg", marginTop: "2", marginBottom: "1" })}>
									Maximum 講師就任
								</h3>
								<p className={css({ fontSize: "sm", color: "muted-foreground", lineHeight: "relaxed" })}>
									プログラミングサークルで講師として活動を開始し、後輩への指導を行っています。
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
