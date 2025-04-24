import { css } from "../../styled-system/css";
import { Header } from "../components/header";
import { Hero } from "../components/hero";

const Home = () => {
  const section = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#27374d",
    width: "100%",
    color: "#dde6edf0",
    fontSize: "40px",
    height: "100vh",
  });

  return (
    <div>
      <Hero />
      <Header />
      <section className={section}>
        <h3>About</h3>
        <p>
          こんにちは、nomanoma121です。Web開発者として活動しています。
          <br />
          このサイトは私のポートフォリオです。
          <br />
          現在はおもにWeb開発をおこなっているため、JavaScriptをメインで使っています。
          <br />
          ReactやNext.jsを使用して、フロントエンドの開発をおこなっています。
          <br />
          また、Node.jsやExpressを使用して、バックエンドの開発もおこなっています。
          <br />
          最近は、TypeScriptを使用して、より安全なコードを書くことを心がけています。
          <br />
          また、デザインにも興味があり、Figmaを使用して、UI/UXデザインをおこなっています。
          <br />
          このサイトでは、私の制作物やブログを公開しています。
          <br />
          ぜひご覧ください。
          <br />
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
        <p>現在制作中です。</p>
      </section>
      <footer
        className={css({
          backgroundColor: "#27374d",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#dde6edf0",
          fontSize: "20px",
          height: "100px",
        })}
      >
        <p>© 2023 nomanoma121</p>
      </footer>
    </div>
  );
};

export default Home;
