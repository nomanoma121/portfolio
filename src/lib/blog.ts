import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";

const blogsDirectory = path.join(process.cwd(), "src/content/blogs");

type BlogFrontMatter = {
	title: string;
	description?: string;
	date: string;
	updatedAt?: string;
};

export async function getBlog(slug: string) {
	const filePath = path.join(blogsDirectory, `${slug}.md`);
	const fileContents = await fs.promises.readFile(filePath, "utf8");

	const { data, content } = matter(fileContents);

	// remarkでMarkdown→HTMLに変換
	const processedContent = await remark()
		.use(remarkRehype)
		.use(rehypeHighlight)
		.use(rehypeStringify)
		.process(content);

	const contentHtml = processedContent.toString();

	return {
		slug,
		contentHtml,
		title: data.title,
		description: data.description || "",
		date: data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date,
		updatedAt: data.updatedAt ? (data.updatedAt instanceof Date ? data.updatedAt.toISOString().split('T')[0] : data.updatedAt) : undefined,
	};
}

export function getAllBlogs() {
	const fileNames = fs.readdirSync(blogsDirectory);

	const blogs = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md$/, "");
		const fullPath = path.join(blogsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data } = matter(fileContents);
		const { title, description, date, updatedAt } = data as BlogFrontMatter;

		return {
			slug,
			title,
			description: description || "",
			date: new Date(date).toISOString().split('T')[0],
			updatedAt: updatedAt ? new Date(updatedAt).toISOString().split('T')[0] : undefined,
		};
	});

	return blogs.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});
}

export const getRecentBlogs = () => {
	const blogs = getAllBlogs();
	const recentBlogs = blogs.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return recentBlogs.slice(0, 2);
};
