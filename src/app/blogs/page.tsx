import { getAllBlogs } from "@/lib/blog";
import { css } from "styled-system/css";
import { Header } from "../../components/header";
import { Container } from "@/components/container";
import { BlogListItem } from "../../components/blog-list-item";

const Blogs = () => {
	const blogList = getAllBlogs();
	return (
		<>
			<Header />
			<Container>
				<h1
					className={css({
						fontSize: "2xl",
						fontWeight: "bold",
						color: "foreground",
						marginBottom: "12",
						display: "block",
					})}
				>
					Blogs
				</h1>
				<div className={css({ display: "flex", flexDirection: "column", gap: "4" })}>
					{blogList.map((blog, index) => (
						<>
							<BlogListItem key={blog.slug} slug={blog.slug} title={blog.title} description={blog.description} date={blog.date} updatedAt={blog.updatedAt} />
							{index < blogList.length - 1 && <div className={css({ borderTop: "1px solid", borderColor: "divider" })} />}
						</>
					))}
				</div>
			</Container>
		</>
	);
};

export default Blogs;
