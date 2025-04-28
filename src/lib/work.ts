import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// TODO: blog.tsとworks.tsの重複をなくす

const worksDirectory = path.join(process.cwd(), "src/content/works");

type WorkFrontMatter = {
	title: string;
	description: string;
	url: string;
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

export function getAllWorks() {
	const fileNames = fs.readdirSync(worksDirectory);

	const works = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md$/, "");
		const fullPath = path.join(worksDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data } = matter(fileContents);
		const { title, description, url, date } = data as WorkFrontMatter;

		return {
			slug,
			title,
			description: description,
			url,
			date,
		};
	});

	return works.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});
}

export const getRecentWorks = () => {
	const works = getAllWorks();
	const recentWorks = works.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});
	return recentWorks.slice(0, 2);
};
