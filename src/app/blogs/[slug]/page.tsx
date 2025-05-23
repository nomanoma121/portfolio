import { getAllBlogs, getBlog } from "../../../lib/blog";
import type { Metadata } from "next";
import { Header } from "../../../components/header";
import { css } from "../../../../styled-system/css";
import { Container } from "../../../components/container";
import Link from "next/link";
import { Button } from "../../../components/button";

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
		<main className="prose mx-auto p-8">
			<Header />
			<Container>
				<Link href="/blogs">
					<Button>← Back</Button>
				</Link>
				<h1
					className={css({
						fontSize: "30px",
						fontWeight: "500",
						color: "primary",
						marginBottom: "20px",
						display: "block",
						textAlign: "center",
						margin: "0 auto",
					})}
				>
					{blog.title}
				</h1>
				<article
					className={css({
						fontSize: "md",
						lineHeight: "base",
						color: "gray.800",
						mt: "8",
						"& h1": {
							fontSize: "xl",
							fontWeight: "bold",
							mt: "8",
							borderBottom: "2px solid",
							pb: "2",
						},
						"& h2": { fontSize: "lg", fontWeight: "bold", mt: "6" },
						"& p": { my: "4" },
						"& code": {
							borderRadius: "md",
							fontSize: "sm",
							backgroundColor: "",
						},
						"& a": { color: "blue.500", textDecoration: "underline" },
					})}
					dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
				/>
			</Container>
		</main>
	);
}
