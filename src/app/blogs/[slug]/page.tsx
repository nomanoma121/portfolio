import { getAllBlogs, getBlog } from "../../../lib/blog";
import { Metadata } from "next";
import { Header } from "../../../components/header";

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
}: { params: Params }): Promise<Metadata> {
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
			<h1>{blog.title}</h1>
			<article dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
		</main>
	);
}
