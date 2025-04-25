import { css } from "../../../styled-system/css";

export const Hero = () => {
  return (
    <div
      className={css({
        backgroundColor: "primary",
				width:"100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#dde6edf0",
        fontSize: "30px",
				height: "200px",
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
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          Web Developer
        </p>
      </section>
			<section>
				<p className={css({
					color: "accentLight",
					fontSize: "20px",
				})}>Born on January 21, 2006 in Aichi</p>
			</section>
    </div>
  );
};
