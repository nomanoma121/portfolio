import Link from "next/link";
import { css } from "../../../styled-system/css";

type CardProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export const Card = (content: CardProps) => {
  return (
    <div
      className={css({
        width: "400px",
        height: "200px",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px 0",
        backgroundColor: "background",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      })}
    >
      <span
        className={css({
          fontSize: "15px",
          color: "accent",
          marginBottom: "8px",
        })}
      >
        {new Date(content.date).toLocaleDateString("ja-JP", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </span>
      <h2
        className={css({
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "8px",
          color: "text",
        })}
      >
        {content.title}
      </h2>
      <div
        className={css({
          height: "70px",
        })}
      >
        <p>{content.description}</p>
      </div>
      <Link
        href={`/blogs/${content.slug}`}
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
            padding: "10px 20px",
            cursor: "pointer",
          })}
        >
          Read More
        </button>
      </Link>
    </div>
  );
};
