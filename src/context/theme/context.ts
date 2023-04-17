import { createContext, useContext } from "react";

type Theme = "light" | "dark";

export interface IThemeContext {
	theme: Theme;
	setTheme: (t: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("The Theme context is not available");
	}

	return context;
};
