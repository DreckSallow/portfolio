"use client";
import { Theme } from "@/interfaces";
import { useCallback, useEffect, useState } from "react";

export const useLocalTheme = (): [Theme, (theme: Theme) => void] => {
	const [theme, setTheme] = useState(() => {
		if (typeof window === "undefined") return "light";
		const theme = window.localStorage.getItem("theme") ?? "light";
		if (theme) {
			return theme as Theme;
		} else {
			return "light";
		}
	});

	const toggleTheme = useCallback((theme: Theme) => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark-theme");
			document.documentElement.classList.remove("base-theme");
		} else {
			document.documentElement.classList.remove("dark-theme");
			document.documentElement.classList.add("base-theme");
		}
	}, []);

	useEffect(() => {
		toggleTheme(theme);
	}, []);

	const changeTheme = (theme: Theme) => {
		if (typeof window !== "undefined") {
			window.localStorage.setItem("theme", theme);
			toggleTheme(theme);
			setTheme(theme);
		}
	};

	return [theme, changeTheme];
};
