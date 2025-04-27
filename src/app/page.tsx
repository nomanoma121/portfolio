import { css } from "../../styled-system/css";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Container } from "../components/container";
import { getAllBlogs } from "../lib/blog";
import { Card } from "../components/card/card";
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
		marginBottom: "10px",
		lineHeight: "1.6",
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
						<br />
						高校のころに少しだけプログラミングをかじっていましたが、本格的に始めたのは大学に入ってからなので、プログラミング歴はだいたい1年くらいです。
						<br />
						<br />
						大学ではプログラミングサークル
						<a
							href="https://maximum.vc"
							className={css({ textDecoration: "underline" })}
						>
							Maximum
						</a>
						に所属しています。今年からは講師としても活動させていただいています。
						<br />
						<br />
						今までは主にWeb開発を行っていましたが、最近はインフラ分野にも挑戦したいと思っており、たくさんのことを学んでいきたいと思っています。
					</p>
				</section>
				<section className={section}>
					<h3 className={sectionTitle}>Skills</h3>
					<p className={sectionText}>
						主にWeb開発を行っており、TypeScript, Goなどをよく使用しています。
						<br />
						個人開発ではありますが、フロントエンド、バックエンドの両方経験があります。フレームワークなどはフロントエンドではReact,
						Next.js、バックエンドだとEcho(Go)やHono(Node.js)を使用することが多いです。
						<br />
						<br />
						最近自分でPCを購入して自宅サーバーとして運用するなどインフラ分野にも触れているため、LinuxやDockerの知識も少しあります。
						<br />
						<br />
						サークルの方では共同開発も行っており、Gitを使用した開発も行っています。
						<br />
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
					<div className={css({ display: "flex", gap: "20px" })}>
						{getAllBlogs().map((blog) => (
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
						href="/works"
						className={css({
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
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
					<div className={css({ display: "flex", gap: "20px" })}>
						{getAllBlogs().map((blog) => (
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
