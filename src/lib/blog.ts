import fs from "fs";
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
	};
}

export function getAllBlogs() {
	const fileNames = fs.readdirSync(blogsDirectory);

	return fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md$/, "");
		const fullPath = path.join(blogsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data } = matter(fileContents);
		const { title, description, date } = data as BlogFrontMatter;

		return {
			slug,
			title,
			description: description || "",
			date: date,
		};
	});
}
