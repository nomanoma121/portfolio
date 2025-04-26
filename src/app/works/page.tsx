import { Container } from "@/src/components/container";
import { css } from "../../../styled-system/css";
import { Header } from "../../components/header";

const Works = () => {
	return (
		<>
			<Header />
			<Container>
				<h1
					className={css({
						fontSize: "30px",
						fontWeight: "500",
						color: "primary",
						marginBottom: "20px",
						display: "block",
						textAlign: "center",
					})}
				>
					Works
				</h1>
				<div
					className={css({
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "20px",
					})}
				>
					{/* Add your works here */}
				</div>
			</Container>
		</>
	);
};

export default Works;
