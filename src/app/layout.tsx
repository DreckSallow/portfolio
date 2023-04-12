import AuthProvider from "@/context/auth/provider";
import "./globals.css";
import NavBar from "./navbar";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="base-theme">
			<body className="min-w-screen min-h-screen">
				<AuthProvider>
					<NavBar />
					{children}
				</AuthProvider>
			</body>
		</html>
	);
}
