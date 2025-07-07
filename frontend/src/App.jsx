import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ThemeProvider from "./context/ThemeContext";

function App() {
	useEffect(() => {
		// Initialize AOS (Animate On Scroll)
		AOS.init({
			duration: 800,
			offset: 100,
			easing: "ease-in-out",
			once: true,
		});
	}, []);

	return (
		<ThemeProvider>
			<div className="font-sans antialiased transition-theme bg-white text-secondary-800 dark:bg-secondary-900 dark:text-secondary-100">
				<MobileMenu />
				<Header />
				<main>
					<Hero />
					<About />
					<Services />
					<Portfolio />
					<Blog />
					<Contact />
				</main>
				<Footer />
				<BackToTop />
			</div>
		</ThemeProvider>
	);
}

export default App;
