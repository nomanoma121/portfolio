"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";
import { css } from "styled-system/css";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<div className={css({ h: "5", w: "5" })} aria-label="Loading theme toggle">
				<Sun className={css({ h: "5", w: "5", color: "primary-foreground", opacity: 0.8 })} />
			</div>
		);
	}

	return (
		<button
			type="button"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className={css({
				color: "primary-foreground",
				opacity: 0.8,
				transition: "colors",
				_hover: {
					opacity: 1,
				},
			})}
			aria-label="Toggle theme"
		>
			{theme === "light" ? <Moon className={css({ h: "5", w: "5" })} /> : <Sun className={css({ h: "5", w: "5" })} />}
		</button>
	);
}
