import { Container } from "@/components/container";
import { css } from "styled-system/css";
import { Header } from "../../components/header";
import { getAllWorks } from "../../lib/work";
import { WorkListItem } from "../../components/work-list-item";

const Works = () => {
	const works = getAllWorks();
	return (
		<>
			<Header />
			<Container>
				<h1
					className={css({
						fontSize: "2xl",
						fontWeight: "bold",
						color: "foreground",
						marginBottom: "4",
						display: "block",
					})}
				>
					Works
				</h1>
				<p
					className={css({
						fontSize: "sm",
						color: "muted-foreground",
						marginBottom: "12",
						display: "block",
					})}
				>
					それぞれクリックするとGitHubのリポジトリに遷移します。
				</p>
				<div
					className={css({
						display: "flex",
						flexDirection: "column",
						gap: "8",
					})}
				>
					{works.map((work) => (
						<WorkListItem
							key={work.slug}
							slug={work.slug}
							title={work.title}
							description={work.description}
							url={work.url}
							image={`/images/works/${work.slug}.png`}
						/>
					))}
				</div>
			</Container>
		</>
	);
};

export default Works;
