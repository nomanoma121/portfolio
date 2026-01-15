import { getAllBlogs } from "@/lib/blog";
import { css } from "styled-system/css";
import { Header } from "../../components/header";
import { BlogCard } from "../../components/card/blog-card";
import { Container } from "@/components/container";

const Blogs = () => {
	const blogList = getAllBlogs();
	return (
		<>
			<Header />
			<Container>
				<h1
					className={css({
						fontSize: "30px",
						fontWeight: "500",
						color: "foreground",
						marginBottom: "20px",
						display: "block",
						textAlign: "center",
					})}
				>
					Blogs
				</h1>
				<div
					className={css({
						display: "flex",
						alignItems: "center",
						justifyContent: { base: "center", md: "flex-start" },
						gap: "20px",
						maxWidth: { md: "720px", xl: "1090px" },
						flexWrap: "wrap",
						margin: "0 auto",
					})}
				>
					{blogList.map((blog) => (
						<BlogCard
							key={blog.slug}
							slug={blog.slug}
							title={blog.title}
							description={blog.description}
							date={blog.date}
						/>
					))}
				</div>
			</Container>
		</>
	);
};

export default Blogs;
