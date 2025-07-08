import { useState } from "react";
import { useMobileMenu } from "../hooks/useNavigation";

const MobileMenu = () => {
	const { isOpen, closeMenu } = useMobileMenu();
	const [isServicesOpen, setIsServicesOpen] =
		useState(false);

	const toggleServices = () => {
		setIsServicesOpen(
			!isServicesOpen
		);
	};

	const handleLinkClick = () => {
		closeMenu();
		setIsServicesOpen(false);
	};
	return (
		<div
			className={`fixed inset-0 z-50 bg-white dark:bg-secondary-900 transform transition-transform duration-300 ease-in-out overflow-y-auto scrollbar-hide ${
				isOpen
					? "translate-x-0"
					: "translate-x-full"
			}`}
		>
			<div className="flex justify-between items-center p-6 border-b border-secondary-200 dark:border-secondary-800">
				<a
					href="#"
					className="text-2xl font-bold text-primary-600 dark:text-primary-400 font-poppins"
				>
					Rancangin
				</a>
				<button
					onClick={
						closeMenu
					}
					className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<nav className="p-6">
				<ul className="space-y-6 text-lg">
					<li>
						<a
							href="#home"
							onClick={
								handleLinkClick
							}
							className="block py-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
						>
							Beranda
						</a>
					</li>
					<li>
						<a
							href="#about"
							onClick={
								handleLinkClick
							}
							className="block py-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
						>
							Tentang
						</a>
					</li>
					<li className="relative">
						<button
							onClick={
								toggleServices
							}
							className="py-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none w-full text-left flex justify-between items-center"
						>
							Layanan
							<svg
								className={`h-4 w-4 inline-block transform transition-transform ${
									isServicesOpen
										? "rotate-180"
										: ""
								}`}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						<div
							className={`bg-secondary-100 dark:bg-secondary-800 rounded-md shadow-lg mt-2 py-2 transition-all duration-300 ${
								isServicesOpen
									? "block"
									: "hidden"
							}`}
						>
							<a
								href="#web-development"
								onClick={
									handleLinkClick
								}
								className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900/20"
							>
								Web
								Development
							</a>
							<a
								href="#mobile-app-development"
								onClick={
									handleLinkClick
								}
								className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900/20"
							>
								Mobile
								App
								Development
							</a>
							<a
								href="#ui-ux-design"
								onClick={
									handleLinkClick
								}
								className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900/20"
							>
								UI/UX
								Design
							</a>
							<a
								href="#digital-marketing"
								onClick={
									handleLinkClick
								}
								className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900/20"
							>
								Digital
								Marketing
							</a>
							<a
								href="#cybersecurity"
								onClick={
									handleLinkClick
								}
								className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900/20"
							>
								Cybersecurity
							</a>
							<a
								href="#cloud-solutions"
								onClick={
									handleLinkClick
								}
								className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-100 dark:hover:bg-primary-900/20"
							>
								Cloud
								Solutions
							</a>
						</div>
					</li>{" "}
					<li>
						<a
							href="#portfolio"
							onClick={
								handleLinkClick
							}
							className="block py-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
						>
							Portofolio
						</a>
					</li>
					<li>
						<a
							href="#pricing"
							onClick={
								handleLinkClick
							}
							className="block py-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
						>
							Harga
						</a>
					</li>
					<li>
						<a
							href="#blog"
							onClick={
								handleLinkClick
							}
							className="block py-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
						>
							Blog
						</a>
					</li>
					<li>
						<a
							href="#contact"
							onClick={
								handleLinkClick
							}
							className="block py-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
						>
							Kontak
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MobileMenu;
