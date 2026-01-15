import { Container } from "@/components/container";
import { css } from "styled-system/css";
import { Header } from "../../components/header";
import { getAllWorks } from "../../lib/work";
import { WorkCard } from "../../components/card/work-card";

const Works = () => {
	const works = getAllWorks();
	return (
		<>
			<Header />
			<Container>
				<h1
					className={css({
						fontSize: "30px",
						fontWeight: "500",
						color: "primary",
						marginBottom: "20px",
						display: "block",
						textAlign: "center",
					})}
				>
					Works
				</h1>
				<p
					className={css({
						fontSize: "18px",
						color: "primary",
						marginBottom: "20px",
						display: "block",
						textAlign: "center",
					})}
				>
					それぞれクリックするとGitHubのリポジトリに遷移します。
				</p>
				<div
					className={css({
						display: "flex",
						justifyContent: { base: "center", md: "flex-start" },
						flexWrap: "wrap",
						maxWidth: { md: "720px", xl: "1090px" },
						gap: "20px",
						margin: "0 auto",
					})}
				>
					{works.map((work) => (
						<WorkCard
							key={work.slug}
							slug={work.slug}
							title={work.title}
							description={work.description}
							url={work.url}
							date={work.date}
							image={`/images/works/${work.slug}.png`}
						/>
					))}
				</div>
			</Container>
		</>
	);
};

export default Works;
