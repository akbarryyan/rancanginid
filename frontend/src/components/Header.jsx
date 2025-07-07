import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
	const { isDark, toggleTheme } = useTheme();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isServicesOpen, setIsServicesOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
		setIsServicesOpen(false);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
		setIsServicesOpen(false);
	};

	const toggleServices = () => {
		setIsServicesOpen(!isServicesOpen);
	};

	const handleLinkClick = (href) => {
		closeMobileMenu();
		
		if (href && href.startsWith('#')) {
			const targetId = href.substring(1);
			const target = document.getElementById(targetId);
			if (target) {
				setTimeout(() => {
					target.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});
				}, 150);
			}
		}
	};

	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-40 bg-white bg-opacity-90 backdrop-blur-sm dark:bg-secondary-900 dark:bg-opacity-90 shadow-sm transition-theme">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16 md:h-20">
						<a
							href="#"
							className="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400 font-poppins"
							onClick={(e) => {
								e.preventDefault();
								handleLinkClick('#home');
							}}
						>
							Rancangin
						</a>

						{/* Desktop Navigation */}
						<nav className="hidden lg:block">
							<ul className="flex space-x-8">
								<li>
									<a
										href="#home"
										onClick={(e) => {
											e.preventDefault();
											handleLinkClick('#home');
										}}
										className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
									>
										Beranda
									</a>
								</li>
								<li>
									<a
										href="#about"
										onClick={(e) => {
											e.preventDefault();
											handleLinkClick('#about');
										}}
										className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
									>
										Tentang
									</a>
								</li>
								<li className="relative group">
									<button className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none">
										Layanan
										<svg
											className="h-4 w-4 inline-block ml-1"
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

									{/* Desktop Dropdown Menu */}
									<div className="absolute left-0 mt-2 w-56 bg-white dark:bg-secondary-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
										<div className="py-2">
											<a
												href="#services"
												onClick={(e) => {
													e.preventDefault();
													handleLinkClick('#services');
												}}
												className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400"
											>
												Web Development
											</a>
											<a
												href="#services"
												onClick={(e) => {
													e.preventDefault();
													handleLinkClick('#services');
												}}
												className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400"
											>
												Mobile App Development
											</a>
											<a
												href="#services"
												onClick={(e) => {
													e.preventDefault();
													handleLinkClick('#services');
												}}
												className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400"
											>
												UI/UX Design
											</a>
											<a
												href="#services"
												onClick={(e) => {
													e.preventDefault();
													handleLinkClick('#services');
												}}
												className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400"
											>
												Digital Marketing
											</a>
											<a
												href="#services"
												onClick={(e) => {
													e.preventDefault();
													handleLinkClick('#services');
												}}
												className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400"
											>
												Cybersecurity
											</a>
											<a
												href="#services"
												onClick={(e) => {
													e.preventDefault();
													handleLinkClick('#services');
												}}
												className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400"
											>
												Cloud Solutions
											</a>
										</div>
									</div>
								</li>
								<li>
									<a
										href="#portfolio"
										onClick={(e) => {
											e.preventDefault();
											handleLinkClick('#portfolio');
										}}
										className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
									>
										Portofolio
									</a>
								</li>
								<li>
									<a
										href="#blog"
										onClick={(e) => {
											e.preventDefault();
											handleLinkClick('#blog');
										}}
										className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href="#contact"
										onClick={(e) => {
											e.preventDefault();
											handleLinkClick('#contact');
										}}
										className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
									>
										Kontak
									</a>
								</li>
							</ul>
						</nav>

						<div className="flex items-center space-x-4">
							{/* Theme Toggle */}
							<button
								onClick={toggleTheme}
								className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
							>
								{isDark ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
										/>
									</svg>
								)}
							</button>

							{/* Contact Button - Hidden on small screens */}
							<a
								href="#contact"
								onClick={(e) => {
									e.preventDefault();
									handleLinkClick('#contact');
								}}
								className="hidden sm:block px-4 py-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white transition-colors"
							>
								Mulai Konsultasi
							</a>

							{/* Mobile Menu Button */}
							<button
								onClick={toggleMobileMenu}
								className="lg:hidden p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
							>
								{isMobileMenuOpen ? (
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
								) : (
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
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Menu - Responsive dropdown */}
				<div
					className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
						isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
					}`}
				>
					<div className="px-4 py-6 bg-white dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-800">
						<nav>
							<ul className="space-y-4">
								<li>
									<a
										href="#home"
										onClick={(e) => {
											e.preventDefault();
											handleLinkClick('#home');
										}}
										className="block py-2 text-lg font-medium text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
									>
										Beranda
									</a>
								</li>
								<li>
									<a
										href="#about"
										onClick={(e) => {
											e.preventDefault();
											handleLinkClick('#about');
										}}
										className="block py-2 text-lg font-medium text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
									>
										Tentang
									</a>
								</li>
								<li>
									<button
										onClick={toggleServices}
										className="flex justify-between items-center w-full py-2 text-lg font-medium text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-left"
									>
										Layanan
										<svg
											className={`h-5 w-5 transform transition-transform ${
												isServicesOpen ? 'rotate-180' : ''
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
									
									{/* Mobile Services Submenu */}
									<div
										className={`ml-4 mt-2 space-y-2 transition-all duration-300 overflow-hidden ${
											isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
										}`}
									>
										<a
											href="#services"
											onClick={(e) => {
												e.preventDefault();
												handleLinkClick('#services');
											}}
											className="block py-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
										>
											Web Development
										</a>
										<a
											href="#services"
											onClick={(e) => {
												e.preventDefault();
												handleLinkClick('#services');
											}}
											className="block py-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
										>
											Mobile App Development
										</a>
										<a
											href="#services"
											onClick={(e) => {
												e.preventDefault();
												handleLinkClick('#services');
											}}
											className="block py-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
										>
											UI/UX Design
										</a>
										<a
											href="#services"
											onClick={(e) => {
												e.preventDefault();
												handleLinkClick('#services');
											}}
											className="block py-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
										>
											Digital Marketing
										</a>
										<a
											href="#services"
											onClick={(e) => {
												e.preventDefault();
												handleLinkClick('#services');
											}}
											className="block py-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
										>
											Cybersecurity
										</a>
										<a
											href="#services"
											onClick={(e) => {
												e.preventDefault();
												handleLinkClick('#services');
											}}
											className="block py-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
										>
											Cloud Solutions
										</a>
									</div>
								</li>
								<li>
									<a
										href="#portfolio"
										onClick={(e) => {
											e.preventDefault();
											handleLinkClick('#portfolio');
										}}
										className="block py-2 text-lg font-medium text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
									>
										Portofolio
									</a>
								</li>
								<li>
									<a
										href="#blog"
										onClick={(e) => {
											e.preventDefault();
											handleLinkClick('#blog');
										}}
										className="block py-2 text-lg font-medium text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href="#contact"
										onClick={(e) => {
											e.preventDefault();
											handleLinkClick('#contact');
										}}
										className="block py-2 text-lg font-medium text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
									>
										Kontak
									</a>
								</li>
							</ul>

							{/* Mobile CTA Button */}
							<div className="mt-6 pt-6 border-t border-secondary-200 dark:border-secondary-800">
								<a
									href="#contact"
									onClick={(e) => {
										e.preventDefault();
										handleLinkClick('#contact');
									}}
									className="block w-full text-center py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-colors"
								>
									Mulai Konsultasi
								</a>
							</div>
						</nav>
					</div>
				</div>
			</header>

			{/* Mobile Menu Backdrop */}
			<div
				className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-300 ${
					isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}
				onClick={closeMobileMenu}
			></div>
		</>
	);
};

export default Header;
