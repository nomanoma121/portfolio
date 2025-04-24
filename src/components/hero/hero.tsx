import { css } from "../../../styled-system/css";

export const Hero = () => {
  return (
    <div
      className={css({
        backgroundColor: "#27374d",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#dde6edf0",
        fontSize: "40px",
      })}
      id="home"
    >
      <section>
        <h1
          className={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          nomanoma121
        </h1>
        <p
          className={css({
            color: "#526d82",
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          Web Developer
        </p>
      </section>
    </div>
  );
};
