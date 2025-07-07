import { useTheme } from "../hooks/useTheme";
import { useMobileMenu } from "../hooks/useNavigation";

const Header = () => {
	const { isDark, toggleTheme } = useTheme();
	const { openMenu } = useMobileMenu();

	return (
		<header className="fixed top-0 left-0 right-0 z-40 bg-white bg-opacity-90 backdrop-blur-sm dark:bg-secondary-900 dark:bg-opacity-90 shadow-sm transition-theme">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16 md:h-20">
					<a
						href="#"
						className="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400 font-poppins"
					>
						Rancangin
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden md:block">
						<ul className="flex space-x-8">
							<li>
								<a
									href="#home"
									className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
								>
									Beranda
								</a>
							</li>
							<li>
								<a
									href="#about"
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

								{/* Dropdown Menu */}
								<div className="absolute left-0 mt-2 w-56 bg-white dark:bg-secondary-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
									<div className="py-2">
										<a
											href="#web-development"
											className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400"
										>
											Web
											Development
										</a>
										<a
											href="#mobile-app-development"
											className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400"
										>
											Mobile
											App
											Development
										</a>
										<a
											href="#ui-ux-design"
											className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400"
										>
											UI/UX
											Design
										</a>
										<a
											href="#digital-marketing"
											className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400"
										>
											Digital
											Marketing
										</a>
										<a
											href="#cybersecurity"
											className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400"
										>
											Cybersecurity
										</a>
										<a
											href="#cloud-solutions"
											className="block px-4 py-2 text-sm text-secondary-700 dark:text-secondary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400"
										>
											Cloud
											Solutions
										</a>
									</div>
								</div>
							</li>
							<li>
								<a
									href="#portfolio"
									className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
								>
									Portofolio
								</a>
							</li>
							<li>
								<a
									href="#blog"
									className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href="#contact"
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
							onClick={
								toggleTheme
							}
							className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
						>
							{isDark ? (
								// Sun icon (shown in dark mode)
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
								// Moon icon (shown in light mode)
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

						{/* Contact Button */}
						<a
							href="#contact"
							className="hidden sm:block px-4 py-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white transition-colors"
						>
							Mulai
							Konsultasi
						</a>

						{/* Mobile Menu Button */}
						<button
							onClick={
								openMenu
							}
							className="md:hidden p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
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
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
