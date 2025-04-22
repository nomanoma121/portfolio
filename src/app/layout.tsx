import { Header } from "../components/header";
import { Hero } from "../components/hero";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Hero />
				<Header />
				{children}
			</body>
		</html>
	);
}
