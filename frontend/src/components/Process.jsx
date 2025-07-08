const Process = () => {
	const processes = [
		{
			step: "01",
			title: "Discovery & Konsultasi",
			description: "Kami memulai dengan sesi konsultasi mendalam untuk memahami kebutuhan, tujuan bisnis, dan target audience Anda.",
			duration: "1-2 hari",
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
						d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
					/>
				</svg>
			),
			deliverables: [
				"Project Brief",
				"Technical Requirements",
				"Timeline & Budget",
			],
		},
		{
			step: "02",
			title: "Planning & Strategy",
			description: "Tim kami merancang strategi komprehensif, wireframe, dan architecture yang sesuai dengan kebutuhan Anda.",
			duration: "3-5 hari",
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
						d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
					/>
				</svg>
			),
			deliverables: [
				"Project Roadmap",
				"Wireframes",
				"System Architecture",
				"Design System",
			],
		},
		{
			step: "03",
			title: "Design & Prototyping",
			description: "Kami membuat desain visual yang menarik dan prototype interaktif untuk validasi sebelum development.",
			duration: "1-2 minggu",
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
			deliverables: [
				"UI/UX Design",
				"Interactive Prototype",
				"Style Guide",
				"Asset Library",
			],
		},
		{
			step: "04",
			title: "Development & Testing",
			description: "Tim developer kami mengembangkan solusi dengan kualitas tinggi, diikuti testing menyeluruh untuk memastikan performa optimal.",
			duration: "2-8 minggu",
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
						d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
					/>
				</svg>
			),
			deliverables: [
				"Clean Code",
				"Testing Results",
				"Performance Report",
				"Documentation",
			],
		},
		{
			step: "05",
			title: "Launch & Deployment",
			description: "Kami melakukan deployment yang smooth ke production environment dengan monitoring ketat untuk memastikan stabilitas.",
			duration: "1-3 hari",
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
						d="M5 3l14 9-14 9V3z"
					/>
				</svg>
			),
			deliverables: [
				"Live Application",
				"Deployment Guide",
				"Admin Training",
				"Go-Live Support",
			],
		},
		{
			step: "06",
			title: "Support & Maintenance",
			description: "Kami memberikan support berkelanjutan, maintenance, dan update untuk memastikan sistem Anda selalu optimal.",
			duration: "Ongoing",
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
						d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			),
			deliverables: [
				"24/7 Monitoring",
				"Regular Updates",
				"Performance Optimization",
				"Technical Support",
			],
		},
	];
	return (
		<section
			id="process"
			className="py-20 md:py-32 bg-white dark:bg-secondary-900"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2
						className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white font-poppins"
						data-aos="fade-up"
						data-aos-duration="1200"
					>
						Bagaimana
						Kami{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
							Bekerja
						</span>
					</h2>
					<p
						className="text-lg text-secondary-600 dark:text-secondary-300"
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-duration="1200"
					>
						Proses
						kerja
						yang
						terstruktur
						dan
						transparan
						untuk
						memastikan
						hasil
						yang
						optimal
						dan
						sesuai
						dengan
						ekspektasi
						Anda.
					</p>
				</div>

				{/* Process Timeline */}
				<div className="relative">
					{/* Timeline Line */}
					<div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-primary-400 rounded-full"></div>

					{/* Process Steps */}
					<div className="space-y-12 lg:space-y-16">
						{processes.map(
							(
								process,
								index
							) => (
								<div
									key={
										process.step
									}
									className={`flex flex-col lg:flex-row items-center gap-8 ${
										index %
											2 ===
										0
											? "lg:flex-row"
											: "lg:flex-row-reverse"
									}`}
									data-aos="fade-up"
									data-aos-delay={
										index *
										100
									}
									data-aos-duration="1200"
								>
									{/* Content */}
									<div className="flex-1">
										<div
											className={`bg-white dark:bg-secondary-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
												index %
													2 ===
												0
													? "lg:mr-8"
													: "lg:ml-8"
											}`}
										>
											{/* Step Number */}
											<div className="flex items-center mb-4">
												<span className="text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full mr-4">
													{
														process.step
													}
												</span>
												<span className="text-sm text-secondary-500 dark:text-secondary-400">
													{
														process.duration
													}
												</span>
											</div>

											{/* Title */}
											<h3 className="text-xl font-bold mb-4 text-secondary-900 dark:text-white">
												{
													process.title
												}
											</h3>

											{/* Description */}
											<p className="text-secondary-600 dark:text-secondary-300 mb-6">
												{
													process.description
												}
											</p>

											{/* Deliverables */}
											<div>
												<h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-3">
													Deliverables:
												</h4>
												<div className="flex flex-wrap gap-2">
													{process.deliverables.map(
														(
															deliverable,
															delIndex
														) => (
															<span
																key={
																	delIndex
																}
																className="text-xs px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300 rounded-full"
															>
																{
																	deliverable
																}
															</span>
														)
													)}
												</div>
											</div>
										</div>
									</div>

									{/* Icon */}
									<div className="relative">
										<div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg lg:relative lg:z-10">
											{
												process.icon
											}
										</div>
										{/* Timeline dot for mobile */}
										<div className="lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-600 rounded-full"></div>
									</div>

									{/* Spacer for alternating layout */}
									<div className="flex-1 hidden lg:block"></div>
								</div>
							)
						)}
					</div>
				</div>

				{/* CTA */}
				<div
					className="text-center mt-16"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="300"
				>
					<div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
						<h3 className="text-2xl font-bold mb-4">
							Siap
							Memulai
							Proyek
							Anda?
						</h3>
						<p className="text-primary-100 mb-6">
							Konsultasi
							gratis
							untuk
							membahas
							kebutuhan
							dan
							solusi
							terbaik
							untuk
							bisnis
							Anda.
						</p>
						<a
							href="#contact"
							className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
						>
							Mulai
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
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process;
