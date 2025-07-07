const Services = () => {
	const services = [
		{
			icon: (
				<svg
					className="w-8 h-8"
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
			),
			title: "Web Development",
			description: "Membangun website modern, responsif, dan performant dengan teknologi terdepan seperti React, Next.js, dan Node.js",
			features: [
				"Responsive Design",
				"SEO Optimized",
				"Fast Loading",
				"Modern UI/UX",
			],
		},
		{
			icon: (
				<svg
					className="w-8 h-8"
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
			),
			title: "Mobile App Development",
			description: "Aplikasi mobile native dan cross-platform untuk iOS dan Android dengan performa optimal dan user experience terbaik",
			features: [
				"Native & Cross-platform",
				"iOS & Android",
				"Real-time Features",
				"Offline Support",
			],
		},
		{
			icon: (
				<svg
					className="w-8 h-8"
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
			),
			title: "UI/UX Design",
			description: "Desain antarmuka yang intuitif dan pengalaman pengguna yang memorable dengan pendekatan user-centered design",
			features: [
				"User Research",
				"Wireframing",
				"Prototyping",
				"Usability Testing",
			],
		},
		{
			icon: (
				<svg
					className="w-8 h-8"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			),
			title: "Digital Marketing",
			description: "Strategi pemasaran digital komprehensif untuk meningkatkan brand awareness dan konversi bisnis Anda",
			features: [
				"SEO/SEM",
				"Social Media",
				"Content Marketing",
				"Analytics",
			],
		},
		{
			icon: (
				<svg
					className="w-8 h-8"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
					/>
				</svg>
			),
			title: "Cybersecurity",
			description: "Solusi keamanan digital untuk melindungi data dan sistem bisnis dari ancaman cyber yang terus berkembang",
			features: [
				"Security Audit",
				"Penetration Testing",
				"Data Protection",
				"Compliance",
			],
		},
		{
			icon: (
				<svg
					className="w-8 h-8"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
					/>
				</svg>
			),
			title: "Cloud Solutions",
			description: "Implementasi solusi cloud untuk skalabilitas, keamanan, dan efisiensi operasional bisnis modern",
			features: [
				"AWS/Azure/GCP",
				"Migration",
				"DevOps",
				"Auto Scaling",
			],
		},
	];

	return (
		<section
			id="services"
			className="py-20 md:py-32 bg-secondary-50 dark:bg-secondary-800/30"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2
						className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white font-poppins"
						data-aos="fade-up"
						data-aos-duration="1200"
					>
						Layanan{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
							Kami
						</span>
					</h2>
					<p
						className="text-lg text-secondary-600 dark:text-secondary-300"
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-duration="1200"
					>
						Kami
						menyediakan
						berbagai
						layanan
						digital
						yang
						komprehensif
						untuk
						membantu
						bisnis
						Anda
						bertransformasi
						dan
						berkembang
						di
						era
						digital
					</p>
				</div>

				<div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					data-aos="fade-up"
					data-aos-duration="1200"
				>
					{services.map(
						(
							service,
							index
						) => (
							<div
								key={
									index
								}
								className="bg-white dark:bg-secondary-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
								data-aos="fade-up"
								data-aos-delay={
									100 *
									(index %
										3)
								}
								data-aos-duration="1200"
							>
								<div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
									{
										service.icon
									}
								</div>

								<h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">
									{
										service.title
									}
								</h3>

								<p className="text-secondary-600 dark:text-secondary-300 mb-6">
									{
										service.description
									}
								</p>

								<ul className="space-y-2">
									{service.features.map(
										(
											feature,
											featureIndex
										) => (
											<li
												key={
													featureIndex
												}
												className="flex items-center text-sm text-secondary-600 dark:text-secondary-400"
											>
												<svg
													className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M5 13l4 4L19 7"
													/>
												</svg>
												{
													feature
												}
											</li>
										)
									)}
								</ul>

								<div className="mt-6">
									<a
										href="#contact"
										className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-300"
									>
										Pelajari
										Lebih
										Lanjut
										<svg
											className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</a>
								</div>
							</div>
						)
					)}
				</div>

				<div
					className="text-center mt-12"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="300"
				>
					<p className="text-secondary-600 dark:text-secondary-300 mb-6">
						Tidak
						menemukan
						layanan
						yang
						Anda
						cari?
					</p>
					<a
						href="#contact"
						className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
					>
						Konsultasi
						Gratis
						<svg
							className="w-5 h-5 ml-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Services;
