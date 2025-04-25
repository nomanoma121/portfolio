import { css } from "../../styled-system/css";
import { Header } from "../components/header";
import { Hero } from "../components/hero";

const Home = () => {
  const section = css({
    width: "100%",
    margin: "0 auto",
    padding: "20px",
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
          <h3>About</h3>
          <p>
            2006年愛知生まれ。埼玉大学工学部情報工学科に在籍中。
            <br />
            プログラミングを本格的に始めたのは大学に入学してからで、もうすぐ1年がになります。
            <br />
            現在は大学のプログラミングサークルに所属し、共同開発や個人開発を行っています。
            <br />
            インフラ分野にも興味があるため、今後はそちらの分野にも挑戦していきたと考えています。
          </p>
        </section>
        <section className={section}>
          <h3>Skills</h3>
          <p>
            - HTML/CSS/JavaScript
            <br />
            - React/Next.js
            <br />
            - Node.js/Express
            <br />
            - TypeScript
            <br />
            - Figma
            <br />- Git/GitHub
          </p>
        </section>
        <section className={section}>
          <h3>Works</h3>
          <p>現在制作中です。</p>
        </section>
        <section className={section}>
          <h3>Blog</h3>
          <p>現在制作中です。aaaa
						<br />
						2024年1月から始める予定です。
						<br />
						<br/>
						- 2024年1月から始める予定です。
						<br />
						- 2024年1月から始める予定です。
						<br />
						- 2024年1月から始める予定です。
						<br />
						- 2024年1月から始める予定です。
					</p>
				</section>
				<section className={section}>
					<h3>Contact</h3>
					<p>
						Twitter:{" "}
						<a href="https://twitter.com/nomanoma121" target="_blank">
							@nomanoma121
						</a>
						<br />
					</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
