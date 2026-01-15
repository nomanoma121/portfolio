import { getAllBlogs } from "@/lib/blog";
import { css } from "styled-system/css";
import { Header } from "../../components/header";
import { Container } from "@/components/container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
							<Link key={blog.slug} href={`/blogs/${blog.slug}`} className={css({ display: "block" })}>
								<div
									className={css({
										borderLeft: "2px solid transparent",
										paddingLeft: "6",
										paddingY: "2",
										transition: "all",
										_hover: {
											borderColor: "primary",
										},
									})}
								>
									<div className={css({ display: "flex", alignItems: "start", justifyContent: "space-between", gap: "4" })}>
										<div className={css({ flex: 1 })}>
											<div className={css({ display: "flex", gap: "3", marginBottom: "2" })}>
												<time
													className={css({
														fontSize: "sm",
														color: "muted-foreground",
														display: "block",
														fontFamily: "mono",
													})}
												>
													作成: {blog.date}
												</time>
												<time
													className={css({
														fontSize: "sm",
														color: "muted-foreground",
														display: "block",
														fontFamily: "mono",
													})}
												>
													更新: {blog.date}
												</time>
											</div>
											<h3
												className={css({
													fontWeight: "semibold",
													fontSize: "xl",
													marginBottom: "1.5",
													transition: "colors",
													_groupHover: {
														color: "primary",
													},
												})}
											>
												{blog.title}
											</h3>
											<p className={css({ color: "muted-foreground", lineHeight: "relaxed" })}>
												{blog.description}
											</p>
										</div>
										<ArrowRight
											className={css({
												h: "5",
												w: "5",
												color: "muted-foreground",
												flexShrink: 0,
												marginTop: "1",
												transition: "all",
												_groupHover: {
													color: "primary",
													transform: "translateX(0.25rem)",
												},
											})}
										/>
									</div>
								</div>
							</Link>
							{index < blogList.length - 1 && <div className={css({ borderTop: "1px solid", borderColor: "rgba(0, 0, 0, 0.15)" })} />}
						</>
					))}
				</div>
			</Container>
		</>
	);
};

export default Blogs;
