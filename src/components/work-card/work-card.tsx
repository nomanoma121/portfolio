import { css } from "../../../styled-system/css";
import Link from "next/link";

type WorkCardProps = {
  slug: string;
  title: string;
  description: string;
  url: string;
  date: string;
  image: string;
};

export const WorkCard = (content: WorkCardProps) => {
  return (
    <Link href={content.url}>
      <div
        className={css({
          width: "350px",
          height: "280px",
          borderRadius: "8px",
          backgroundColor: "background",
        })}
      >
        <img
          src={content.image}
          alt={content.title}
          className={css({
            width: "100%",
            height: "200px",
            borderRadius: "8px",
            objectFit: "cover",
          })}
        />
        <h2
          className={css({
            fontSize: "18x",
            fontWeight: "bold",
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
      </div>
    </Link>
  );
};
