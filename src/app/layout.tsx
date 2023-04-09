import NavBar from "@/components/navbar";
import "./globals.css";

const routes = [
	{
		link: "#about",
		text: "About",
	},
	{
		link: "#projects",
		text: "Projects",
	},
	{
		link: "#blog",
		text: "Blog",
	},
];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="min-w-screen min-h-screen">
				<NavBar routes={routes} withTheme />
				{children}
			</body>
		</html>
	);
}
