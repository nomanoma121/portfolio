import { css } from "../../styled-system/css";
import { Header } from "../components/header";
import { Hero } from "../components/hero";

const Home = () => {
	const section = css({
		maxWidth: "900px",
		margin: "15px auto",
		padding: "20px",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
	});

	const sectionTitle = css({
		fontSize: "30px",
		color: "primary",
		marginBottom: "10px",
	});

	const sectionText = css({
		fontSize: "18px",
		color: "primary",
		marginBottom: "10px",
	});

	return (
		<div>
			<Hero />
			<Header />
			<div
				className={css({
					width: "100%",
					padding: "0 20px",
				})}
			>
				<section className={section}>
					<h3 className={sectionTitle}>About me</h3>
					<p className={sectionText}>
						2006年愛知生まれ。埼玉大学工学部情報工学科に在籍中。
						<br />
						プログラミングを本格的に始めたのは大学に入学してからで、もうすぐ1年がになります。
						<br />
						現在は大学のプログラミングサークルMaximumに所属しています。
						<br />
						インフラ分野にも興味があるため、今後はそちらの分野にも挑戦していきたと考えています。
            <br />
            競技プログラミングの方は全然できていませんが、これから挑戦していきたいと考えています。
					</p>
				</section>
				<section className={section}>
					<h3 className={sectionTitle}>Skills</h3>
					<p className={sectionText}>
            主にWeb開発を行っているため、TypeScript, Goなどをよく使用しています。
            <br />また、フロントエンド、バックエンドの両方度経験があります。
            <br />最近自分でminPCを購入してUbuntu Serverとして運用しているため、Linuxの知識も少しあります。
            <br />サークルの方では共同開発も行っており、Gitを使用した開発も行っています。<br />
					</p>
				</section>
				<section className={section}>
					<h3 className={sectionTitle}>Works</h3>
					<p className={sectionText}>現在制作中です。</p>
				</section>
				<section className={section}>
					<h3 className={sectionTitle}>Blogs</h3>
					<p className={sectionText}>現在制作中です。</p>
				</section>
			</div>
		</div>
	);
};

export default Home;
