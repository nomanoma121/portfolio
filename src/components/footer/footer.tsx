import { css, cx } from "../../../styled-system/css";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={cx(
        css({
          padding: "10px",
          width: "100%",
          textAlign: "center",
        }),
        className
      )}
    >
      <p>© 2025 all right reserved</p>
    </footer>
  );
};
