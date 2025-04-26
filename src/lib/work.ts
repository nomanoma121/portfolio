import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// TODO: blog.tsとworks.tsの重複をなくす

const worksDirectory = path.join(process.cwd(), "src/content/works");

type WorkFrontMatter = {
	title: string;
	description?: string;
	date: string;
};

export async function getBlog(slug: string) {
	const filePath = path.join(worksDirectory, `${slug}.md`);
	const fileContents = await fs.promises.readFile(filePath, "utf8");

	const { data, content } = matter(fileContents);

	// remarkでMarkdown→HTMLに変換
	const processedContent = await remark().use(html).process(content);
	const contentHtml = processedContent.toString();

	return {
		slug,
		contentHtml,
		title: data.title,
		description: data.description || "",
	};
}

export function getAllBlogs() {
	const fileNames = fs.readdirSync(worksDirectory);

	return fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md$/, "");
		const fullPath = path.join(worksDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data } = matter(fileContents);
		const { title, description } = data as WorkFrontMatter;

		return {
			slug,
			title,
			description: description || "",
		};
	});
}
