import { css } from "../../styled-system/css";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Container } from "../components/container";
import { getAllBlogs } from "../lib/blog";
import { Card } from "../components/card/card";
import Link from "next/link";

const Home = () => {
  const section = css({
    maxWidth: "700px",
    margin: "15px auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  });

  const sectionTitle = css({
    fontSize: "30px",
    color: "primary",
    fontWeight: "500",
    marginBottom: "10px",
    display: "block",
    margin: "0 auto",
  });

  const sectionText = css({
    fontSize: "18px",
    color: "primary",
    marginBottom: "10px",
    lineHeight: "1.6",
  });

  return (
    <div>
      <Hero />
      <Header />
      <Container>
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
            主にWeb開発を行っているため、TypeScript,
            Goなどをよく使用しています。
            <br />
            また、フロントエンド、バックエンドの両方度経験があります。
            <br />
            最近自分でPCを購入してUbuntu
            Serverとして運用しているため、Linux・インフラの知識も少しあります。
            <br />
            サークルの方では共同開発も行っており、Gitを使用した開発も行っています。
            <br />
          </p>
        </section>
        <section
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "15px auto",
            padding: "20px",
          })}
        >
          <h3 className={sectionTitle}>Works</h3>
          <div className={css({ display: "flex", gap: "20px" })}>
            {getAllBlogs().map((blog) => (
              <Card
                key={blog.slug}
                slug={blog.slug}
                title={blog.title}
                description={blog.description}
                date={blog.date}
              />
            ))}
          </div>
          <Link
            href="/works"
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            })}
          >
            <button
              className={css({
                color: "primary",
                border: "none",
                fontWeight: "bold",
                borderRadius: "5px",
                pt: "10px",
                cursor: "pointer",
                position: "relative", // Ensure 'before' is positioned correctly

                // Pseudo-element before
                "&:before": {
                  content: '""',
                  background: "primary",
                  position: "absolute",
                  left: "0",
                  bottom: "0",
                  width: "100%",
                  height: "2px",
                  transformOrigin: "center top",
                  transform: "scale(0, 1)", // Initially not visible
                  transition: "transform 0.3s",
                },

                // Hover effect on button
                "&:hover:before": {
                  transform: "scale(1, 1)", // Expands on hover
                },
              })}
            >
              See More
            </button>
          </Link>
        </section>
        <section
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "15px auto",
            padding: "20px",
          })}
        >
          <h3 className={sectionTitle}>Blogs</h3>
          <div className={css({ display: "flex", gap: "20px" })}>
            {getAllBlogs().map((blog) => (
              <Card
                key={blog.slug}
                slug={blog.slug}
                title={blog.title}
                description={blog.description}
                date={blog.date}
              />
            ))}
          </div>
          <Link
            href="/blogs"
            className={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            })}
          >
            <button
              className={css({
                color: "primary",
                border: "none",
                fontWeight: "bold",
                borderRadius: "5px",
                pt: "10px",
                cursor: "pointer",
                position: "relative", // Ensure 'before' is positioned correctly

                // Pseudo-element before
                "&:before": {
                  content: '""',
                  background: "primary",
                  position: "absolute",
                  left: "0",
                  bottom: "0",
                  width: "100%",
                  height: "2px",
                  transformOrigin: "center top",
                  transform: "scale(0, 1)", // Initially not visible
                  transition: "transform 0.3s",
                },

                // Hover effect on button
                "&:hover:before": {
                  transform: "scale(1, 1)", // Expands on hover
                },
              })}
            >
              See More
            </button>
          </Link>
        </section>
      </Container>
    </div>
  );
};

export default Home;
