import { useState, useEffect } from "react";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility =
			() => {
				if (
					window.pageYOffset >
					1200
				) {
					setIsVisible(
						true
					);
				} else {
					setIsVisible(
						false
					);
				}
			};

		window.addEventListener(
			"scroll",
			toggleVisibility
		);

		return () => {
			window.removeEventListener(
				"scroll",
				toggleVisibility
			);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<button
			onClick={
				scrollToTop
			}
			className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-slate-600 hover:bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-600 text-white rounded-full shadow-lg transition-all duration-300 cursor-pointer transform ${
				isVisible
					? "translate-y-0 opacity-100 scale-100"
					: "translate-y-16 opacity-0 scale-0"
			} hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2`}
			aria-label="Kembali ke atas"
		>
			{" "}
			<svg
				className="w-5 h-5 mx-auto"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M5 10l7-7m0 0l7 7m-7-7v18"
				/>
			</svg>
		</button>
	);
};

export default BackToTop;
