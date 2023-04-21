import Providers from "@/context/providers";

import "./globals.css";
import { cookies } from "next/headers";
import NavBar from "./navbar";
import { Children, Theme } from "@/interfaces";
import { Session } from "next-auth";


interface IProps extends Children {
	session: Session | null;
}



export default function RootLayout({ children, session }: IProps) {
	const theme = cookies().get("theme");
	return (
		<html
			lang="en"
			className={`${
				theme
					? theme.value === "dark"
						? "dark-theme"
						: "base-theme"
					: "base-theme"
			}`}
		>
			<body className="min-w-screen min-h-screen scroll-custom">
				<Providers
					session={session}
					theme={theme ? (theme.value as Theme) : "light"}
				>
					<NavBar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
