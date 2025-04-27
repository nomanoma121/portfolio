import css from "styled-jsx/css";

export const BlogContent = ({ content }: { content: string }) => {
  return (
    <div
      className={css({

      })}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
