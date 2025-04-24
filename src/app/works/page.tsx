import { css } from "../../../styled-system/css";

const WorksList = () => {
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
        height: "100vh",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        textAlign: "center",
      })}
    >
      <p>ここは制作物一覧ページ。ただいま準備中</p>
    </div>
  );
};

export default WorksList;
