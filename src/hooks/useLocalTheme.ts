import { Theme } from "@/interfaces";
import { useCallback, useEffect, useState } from "react";

export const useLocalTheme = (): [Theme, (theme: Theme) => void] => {
	const [theme, setTheme] = useState(() => {
		const theme = window.localStorage.getItem("theme");
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
		window.localStorage.setItem("theme", theme);
		toggleTheme(theme);
		setTheme(theme);
	};

	return [theme, changeTheme];
};
