import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import FloatingSocialContact from "../components/FloatingSocialContact";

function LandingPage() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
			mirror: false,
		});
	}, []);

	return (
		<div className="font-sans antialiased transition-theme bg-white text-secondary-800 dark:bg-secondary-900 dark:text-secondary-100 min-h-screen">
			<MobileMenu />
			<Header />{" "}
			<main>
				<Hero />
				<About />
				<Services />
				<Process />
				<Portfolio />
				<Testimonials />
				<Pricing />
				<FAQ />
				<Blog />
				<Contact />
			</main>
			<Footer />
			<BackToTop />
			<FloatingSocialContact />
		</div>
	);
}

export default LandingPage;
