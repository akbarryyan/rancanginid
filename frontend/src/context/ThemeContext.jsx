import { createContext, useEffect, useState } from "react";

// Create context outside component to avoid Fast Refresh issues
const ThemeContext = createContext();

function ThemeProvider({ children }) {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		// Check for saved theme preference or use system preference
		const savedTheme =
			localStorage.getItem(
				"theme"
			);
		const prefersDark =
			window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;

		if (
			savedTheme ===
				"dark" ||
			(!savedTheme &&
				prefersDark)
		) {
			setIsDark(
				true
			);
			document.documentElement.classList.add(
				"dark"
			);
		} else {
			setIsDark(
				false
			);
			document.documentElement.classList.remove(
				"dark"
			);
		}
	}, []);

	const toggleTheme = () => {
		setIsDark(!isDark);
		if (!isDark) {
			document.documentElement.classList.add(
				"dark"
			);
			localStorage.setItem(
				"theme",
				"dark"
			);
		} else {
			document.documentElement.classList.remove(
				"dark"
			);
			localStorage.setItem(
				"theme",
				"light"
			);
		}
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
