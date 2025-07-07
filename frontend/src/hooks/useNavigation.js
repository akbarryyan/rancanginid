import { useState } from "react";

export const useMobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openMenu = () => setIsOpen(true);
	const closeMenu = () => setIsOpen(false);
	const toggleMenu = () => setIsOpen(!isOpen);

	return {
		isOpen,
		openMenu,
		closeMenu,
		toggleMenu,
	};
};

export const useScrollToTop = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return { scrollToTop };
};

export const useSmoothScroll = () => {
	const scrollToSection = (targetId) => {
		const target =
			document.getElementById(
				targetId
			);
		if (target) {
			target.scrollIntoView(
				{
					behavior: "smooth",
					block: "start",
				}
			);
		}
	};

	return { scrollToSection };
};
