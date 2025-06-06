import React, { createContext, useState, useContext, useEffect } from "react";
import { colorPalettes } from "../styles/theme";
import { useStore } from "../hooks/Store/useStore";

type ThemeContextType = {
	currentTheme: typeof colorPalettes[0];
	changeTheme: (themeName: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
	currentTheme: colorPalettes[0],
	changeTheme: () => {},
});

export const ThemeProviderCustom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const { findOneStore } = useStore();

	const [currentTheme, setCurrentTheme] = useState(colorPalettes[0]);

	useEffect(() => {
		const themeId = Number(findOneStore?.data?.content?.THEME?.split("-")[1]);

		if (!isNaN(themeId) && colorPalettes[themeId]) {
			setCurrentTheme(colorPalettes[themeId]);
		}
	}, [findOneStore?.data?.content?.THEME]);

	const changeTheme = (themeName: string) => {
		const selectedTheme = colorPalettes.find((theme) => theme.name === themeName);
		if (selectedTheme) {
			setCurrentTheme(selectedTheme);
		}
	};

	return (
		<ThemeContext.Provider value={{ currentTheme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => useContext(ThemeContext);
