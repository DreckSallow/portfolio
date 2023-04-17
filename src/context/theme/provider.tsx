"use client";
import { Children, Theme } from "@/interfaces";
import { useCallback, useEffect, useState } from "react";
import { ThemeContext } from "./context";

interface ThemeProps extends Children {
	theme: Theme;
}

const ThemeProvider = ({ children, theme }: ThemeProps) => {
	const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

	const toggleTheme = useCallback((theme: Theme) => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark-theme");
			document.documentElement.classList.remove("base-theme");
		} else {
			document.documentElement.classList.remove("dark-theme");
			document.documentElement.classList.add("base-theme");
		}

		document.cookie = `theme=${theme}; path='/'; SameSite:'strict'; Secure`;
	}, []);

	useEffect(() => {
		toggleTheme(currentTheme);
	}, []);

	return (
		<ThemeContext.Provider
			value={{
				theme: currentTheme,
				setTheme: (t) => {
					setCurrentTheme(t);
					toggleTheme(t);
				},
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
