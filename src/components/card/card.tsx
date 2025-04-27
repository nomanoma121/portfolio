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
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
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
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
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
          Read More
        </button>
      </Link>
    </div>
  );
};
