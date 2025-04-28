import { css } from "../../styled-system/css";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Container } from "../components/container";
import { getRecentBlogs } from "../lib/blog";
import { getRecentWorks } from "../lib/work";
import { Card } from "../components/card/card";
import { WorkCard } from "../components/work-card/work-card";
import Link from "next/link";
import { Button } from "../components/button";

const Home = () => {
	const section = css({
		maxWidth: "800px",
		margin: "15px auto",
		padding: "20px",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
	});

	const sectionTitle = css({
		fontSize: "30px",
		color: "primary",
		fontWeight: "500",
		marginBottom: "10px",
		display: "block",
		margin: "0 auto",
	});

	const sectionText = css({
		fontSize: "18px",
		color: "primary",
		lineHeight: "1.6",
		marginBottom: "10px",
	});

	return (
		<div>
			<Hero />
			<Header />
			<Container>
				<section className={section}>
					<h3 className={sectionTitle}>About me</h3>
					<p className={sectionText}>
						埼玉大学工学部情報工学科2年生です。現在は埼玉に住んでいます。
					</p>
					<p className={sectionText}>
						高校のころに少しだけプログラミングを触ったことはありましたが、本格的に始めたのは大学に入ってからなので、プログラミング歴はだいたい1年くらいです。
					</p>
					<p className={sectionText}>
						大学ではプログラミングサークル
						<a
							href="https://maximum.vc"
							className={css({ textDecoration: "underline" })}
						>
							Maximum
						</a>
						に所属しています。今年からは講師としても活動させていただいています。
					</p>
					<p className={sectionText}>
						今までは主にWeb開発を行っていましたが、最近はインフラ分野にも興味があり、少しずつ学んでいけたらと思っています。
					</p>
				</section>
				<section className={section}>
					<h3 className={sectionTitle}>Skills</h3>
					<p className={sectionText}>
						主にWeb開発を行っており、TypeScript, Goなどをよく使用しています。
					</p>
					<p className={sectionText}>
						{" "}
						個人開発ではありますが、フロントエンド、バックエンドの両方経験があります。フレームワークなどはフロントエンドではReact、バックエンドだと
						Echo ( Go ) や Hono.js ( Node.js ) を使用することが多いです。
					</p>
					<p className={sectionText}>
						最近はPCを購入して自宅サーバーとして運用するなどインフラ分野にも挑戦しており、LinuxやDockerに関する基礎的な知識も身につけています。
					</p>
					<p className={sectionText}>
						サークルの方では共同開発も行っており、Gitを使用した開発にもそこそこ慣れています。
					</p>
				</section>
				<section
					className={css({
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						margin: "15px auto",
						padding: "20px",
					})}
				>
					<h3 className={sectionTitle}>Works</h3>
					<div
						className={css({
							display: "flex",
							gap: "20px",
							flexWrap: "wrap",
							mt: "10px",
						})}
					>
						{getRecentWorks().map((work) => (
							<WorkCard
								key={work.slug}
								slug={work.slug}
								title={work.title}
								description={work.description}
								url={work.url}
								date={work.date}
								image={`/images/works/${work.slug}.png`}
							/>
						))}
					</div>
					<Link
						href="/works"
						className={css({
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							mt: "10px",
						})}
					>
						<Button>See More</Button>
					</Link>
				</section>
				<section
					className={css({
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						margin: "15px auto",
						padding: "20px",
					})}
				>
					<h3 className={sectionTitle}>Blogs</h3>
					<div
						className={css({
							display: "flex",
							gap: "20px",
							flexWrap: "wrap",
							justifyContent: "center", // TODO: これを消す
							width: "720px",
							margin: "0 auto",
							mt: "10px",
						})}
					>
						{getRecentBlogs().map((blog) => (
							<Card
								key={blog.slug}
								slug={blog.slug}
								title={blog.title}
								description={blog.description}
								date={blog.date}
							/>
						))}
					</div>
					<Link
						href="/blogs"
						className={css({
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							mt: "10px",
						})}
					>
						<Button>See More</Button>
					</Link>
				</section>
			</Container>
		</div>
	);
};

export default Home;
