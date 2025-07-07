import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
	const [isDark, setIsDark] = useState(false);

	// Initialize theme on mount
	useEffect(() => {
		const savedTheme =
			localStorage.getItem(
				"theme"
			);
		const prefersDark =
			window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;

		const shouldBeDark =
			savedTheme ===
				"dark" ||
			(!savedTheme &&
				prefersDark);

		setIsDark(shouldBeDark);

		if (shouldBeDark) {
			document.documentElement.classList.add(
				"dark"
			);
		} else {
			document.documentElement.classList.remove(
				"dark"
			);
		}
	}, []);
	const toggleTheme = () => {
		console.log(
			"Toggle theme called, current isDark:",
			isDark
		);
		const newIsDark = !isDark;
		setIsDark(newIsDark);

		if (newIsDark) {
			document.documentElement.classList.add(
				"dark"
			);
			localStorage.setItem(
				"theme",
				"dark"
			);
			console.log(
				"Switched to dark mode"
			);
		} else {
			document.documentElement.classList.remove(
				"dark"
			);
			localStorage.setItem(
				"theme",
				"light"
			);
			console.log(
				"Switched to light mode"
			);
		}

		console.log(
			"HTML classList after toggle:",
			document.documentElement.classList.toString()
		);
	};

	return (
		<ThemeContext.Provider
			value={{
				isDark,
				toggleTheme,
			}}
		>
			{
				children
			}
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;
export { ThemeContext };
