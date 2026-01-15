import { getAllBlogs, getBlog } from "../../../lib/blog";
import type { Metadata } from "next";
import { Header } from "../../../components/header";
import { css } from "styled-system/css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Params = {
	slug: string;
};

export async function generateStaticParams() {
	const blogs = getAllBlogs();

	return blogs.map((blog) => ({
		slug: blog.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata> {
	const blog = await getBlog(params.slug);

	return {
		title: blog.title,
		description: blog.description || "",
	};
}

export default async function BlogPage({ params }: { params: Params }) {
	const blog = await getBlog(params.slug);

	return (
		<div className={css({ minHeight: "100vh", backgroundColor: "background" })}>
			<Header />

			<main
				className={css({
					maxWidth: "4xl",
					marginX: "auto",
					paddingX: "6",
					paddingY: "12",
				})}
			>
				<Link
					href="/blogs"
					className={css({
						display: "inline-flex",
						alignItems: "center",
						gap: "2",
						fontSize: "sm",
						color: "muted-foreground",
						marginBottom: "8",
						transition: "colors",
						_hover: {
							color: "link",
						},
					})}
				>
					<ArrowLeft className={css({ h: "4", w: "4" })} />
					Back to Blogs
				</Link>

				<article>
					<header
						className={css({
							marginBottom: "12",
							paddingBottom: "8",
							borderBottom: "1px solid",
							borderColor: "border",
						})}
					>
						<time className={css({ fontSize: "sm", color: "muted-foreground", fontFamily: "mono" })}>
							{blog.date}
						</time>
						<h1 className={css({ fontSize: "4xl", fontWeight: "bold", marginTop: "4", marginBottom: "6", color: "foreground" })}>
							{blog.title}
						</h1>
					</header>

					<div
						className={css({
							maxWidth: "none",
							color: "foreground",
							"& h1": {
								fontSize: "4xl",
								fontWeight: "bold",
								marginTop: "8",
								marginBottom: "6",
								color: "foreground",
								borderBottom: "1px solid",
								borderColor: "border",
								paddingBottom: "4",
							},
							"& h2": {
								fontSize: "3xl",
								fontWeight: "bold",
								marginTop: "8",
								marginBottom: "4",
								color: "foreground",
								borderLeft: "4px solid",
								borderColor: "primary",
								paddingLeft: "4",
							},
							"& h3": {
								fontSize: "2xl",
								fontWeight: "semibold",
								marginTop: "6",
								marginBottom: "3",
								color: "foreground",
							},
							"& h4": {
								fontSize: "xl",
								fontWeight: "semibold",
								marginTop: "4",
								marginBottom: "2",
								color: "foreground",
							},
							"& p": {
								color: "muted-foreground",
								lineHeight: "relaxed",
								marginBottom: "4",
							},
							"& a": {
								color: "link",
								_hover: {
									textDecoration: "underline",
								},
							},
							"& ul, & ol": {
								marginBottom: "4",
								paddingLeft: "6",
								color: "muted-foreground",
							},
							"& li": {
								marginBottom: "2",
							},
							"& code": {
								backgroundColor: "muted",
								color: "foreground",
								paddingX: "1.5",
								paddingY: "0.5",
								borderRadius: "sm",
								fontSize: "sm",
								fontFamily: "mono",
							},
							"& pre": {
								backgroundColor: "muted",
								borderRadius: "lg",
								overflowX: "auto",
								marginBottom: "4",
							},
							"& pre code": {
								backgroundColor: "transparent",
								padding: "0",
							},
							"& blockquote": {
								borderLeft: "4px solid",
								borderColor: "primary",
								paddingLeft: "4",
								fontStyle: "italic",
								color: "muted-foreground",
								marginY: "4",
							},
							"& img": {
								borderRadius: "lg",
								marginY: "4",
								border: "none",
								display: "block",
								maxWidth: "full",
								backgroundColor: "transparent",
							},
							"& table": {
								width: "full",
								borderCollapse: "collapse",
								marginBottom: "4",
							},
							"& th": {
								backgroundColor: "muted",
								paddingX: "4",
								paddingY: "2",
								textAlign: "left",
								fontWeight: "semibold",
								border: "1px solid",
								borderColor: "border",
							},
							"& td": {
								paddingX: "4",
								paddingY: "2",
								border: "1px solid",
								borderColor: "border",
							},
							"& hr": {
								marginY: "8",
								borderColor: "border",
							},
						})}
						dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
					/>
				</article>
			</main>
		</div>
	);
}
