const Hero = () => {
	return (
		<section
			id="home"
			className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-secondary-900 dark:to-secondary-800 -z-10"></div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h1
						className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 text-secondary-900 dark:text-white animate-fade-in"
						data-aos="fade-up"
						data-aos-duration="1200"
					>
						Digital
						Innovation{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
							Studio
						</span>
					</h1>

					<p
						className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-200"
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-duration="1200"
					>
						Kami
						menciptakan
						solusi
						digital
						inovatif
						yang
						mengubah
						cara
						bisnis
						beroperasi.
						Dari
						website
						hingga
						aplikasi
						mobile,
						kami
						siap
						mewujudkan
						visi
						digital
						Anda.
					</p>

					<div
						className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-400"
						data-aos="fade-up"
						data-aos-delay="400"
						data-aos-duration="1200"
					>
						<a
							href="#contact"
							className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
						>
							Mulai
							Proyek
							Anda
						</a>
						<a
							href="#portfolio"
							className="px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
						>
							Lihat
							Portfolio
						</a>
					</div>
				</div>

				{/* Preview Cards */}
				<div
					className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in animate-delay-500"
					data-aos="fade-up"
					data-aos-delay="600"
					data-aos-duration="1200"
				>
					<div className="bg-white dark:bg-secondary-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
							<svg
								className="w-6 h-6 text-primary-600 dark:text-primary-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">
							Web
							Development
						</h3>
						<p className="text-secondary-600 dark:text-secondary-300">
							Website
							responsif
							dan
							modern
							dengan
							teknologi
							terdepan
						</p>
					</div>

					<div className="bg-white dark:bg-secondary-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
							<svg
								className="w-6 h-6 text-primary-600 dark:text-primary-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">
							Mobile
							Apps
						</h3>
						<p className="text-secondary-600 dark:text-secondary-300">
							Aplikasi
							mobile
							native
							dan
							cross-platform
							untuk
							iOS
							&
							Android
						</p>
					</div>

					<div className="bg-white dark:bg-secondary-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
						<div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
							<svg
								className="w-6 h-6 text-primary-600 dark:text-primary-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
								/>
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">
							UI/UX
							Design
						</h3>
						<p className="text-secondary-600 dark:text-secondary-300">
							Desain
							antarmuka
							yang
							intuitif
							dan
							pengalaman
							pengguna
							terbaik
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
