import React from "react";
import { css } from "../../../styled-system/css";

export const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			className={css({
				padding: "20px",
				margin: "0 auto",
				maxWidth: "1200px",
			})}
		>
			{children}
		</div>
	);
};
