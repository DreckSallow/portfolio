"use client";
import { Children, Theme } from "@/interfaces";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import ThemeProvider from "./theme/provider";

interface Props extends Children {
	session?: Session | null;
	theme: Theme;
}

const Providers = ({ children, theme }: Props) => {
	return (
		<SessionProvider>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</SessionProvider>
	);
};

export default Providers;
