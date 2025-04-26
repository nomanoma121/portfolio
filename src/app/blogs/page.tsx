import { getAllBlogs } from "@/src/lib/blog";
import { css } from "../../../styled-system/css";
import { Header } from "../../components/header";
import { Card } from "../../components/card/card";
import { Container } from "@/src/components/container";

const Blogs = () => {
	const blogList = getAllBlogs();
	return (
		<>
			<Header />
			<Container>
				<h1 className={css({
					fontSize: "30px",
					fontWeight: "500",
					color: "primary",
					marginBottom: "20px",
					display: "block",
					textAlign: "center",
				})}>Blogs</h1>
				<div
					className={css({
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "20px",
					})}
				>
					{blogList.map((blog) => (
						<Card
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
