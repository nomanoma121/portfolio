import { css } from "../../../styled-system/css";
import Link from "next/link";

export const Hero = () => {
  const icon = css({
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginRight: "20px",
  });

  const caption = css({
    fontSize: "20px",
    color: "accentLight",
    marginBottom: "10px",
    alignItems: "center",
  });

  const logo = css({
    width: "30px",
    height: "30px",
    marginRight: "10px",
  });

  return (
    <div
      className={css({
        backgroundColor: "primary",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        height: "200px",
        flexWrap: "wrap",
				flexDirection: { base: "column", md: "row" },
				gap: { base: 0, md: "100px" }
      })}
      id="home"
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <img src="/images/icon.webp" alt="icon" className={icon} />
        <div>
          <h1
            className={css({
              fontSize: "30px",
              color: "background",
              // TODO: マイナスを使わないようにする
              marginTop: "-15px",
            })}
          >
            nomanoma121
          </h1>
          <div className={css({ display: "flex", marginTop: "10px" })}>
            <Link href="https://github.com/nomanoma121" target="_blank">
              <img src="/images/github.svg" alt="github" className={logo} />
            </Link>
            <Link href="https://x.com/sobur1al" target="_blank">
              <img src="/images/x.svg" alt="github" className={logo} />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
						flexDirection: "column",
          })}
        >
          <p className={caption}>Born on January 21, 2006 in Aichi</p>
          <p className={caption}>Computer Science Student</p>
        </div>
      </div>
    </div>
  );
};
