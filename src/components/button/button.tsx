import type React from "react";
import { css } from "../../../styled-system/css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	className?: string;
};

export const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button
			type="button"
			className={
				css({
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
				}) + (className ? ` ${className}` : "")
			}
			{...props}
		>
			{children}
		</button>
	);
};
