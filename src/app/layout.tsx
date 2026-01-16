import "./globals.css";
import { css } from "styled-system/css";
import type { Metadata } from "next";
import { Footer } from "../components/footer";
import "highlight.js/styles/github-dark-dimmed.css";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
	title: "nomanoma121",
	description: "This is nomanoma121's portfolio site.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" className={`${notoSansJP.variable} ${css({ height: "100%" })}`}>
			<body
				className={`${notoSansJP.className} ${css({
					backgroundColor: "background",
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					margin: "0",
					padding: "0",
					height: "100%",
				})}`}
			>
				<div
					className={css({
						flexGrow: 1,
					})}
				>
					{children}
				</div>
				<Footer
					className={css({
						marginTop: "auto",
					})}
				/>
			</body>
		</html>
	);
}
