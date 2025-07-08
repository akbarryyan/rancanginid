const Pricing = () => {
	const pricingPlans = [
		{
			name: "Starter",
			category: "Website",
			price: "15",
			period: "juta",
			description: "Perfect untuk UMKM dan startup yang ingin memulai presence digital",
			features: [
				"Landing Page Responsive",
				"Domain & Hosting 1 Tahun",
				"SEO Basic Setup",
				"Contact Form Integration",
				"Google Analytics Setup",
				"SSL Certificate",
				"2x Revisi Design",
				"3 Bulan Support",
			],
			timeline: "2-3 minggu",
			popular: false,
			cta: "Mulai Sekarang",
		},
		{
			name: "Professional",
			category: "Website + CMS",
			price: "35",
			period: "juta",
			description: "Solusi lengkap untuk bisnis yang butuh website profesional dengan content management",
			features: [
				"Multi-page Website",
				"Custom CMS Dashboard",
				"Blog/News System",
				"SEO Advanced",
				"Payment Gateway",
				"Admin Training",
				"5x Revisi Design",
				"6 Bulan Support",
				"Performance Optimization",
			],
			timeline: "4-6 minggu",
			popular: true,
			cta: "Pilih Plan Ini",
		},
		{
			name: "Enterprise",
			category: "Custom Solution",
			price: "Custom",
			period: "quote",
			description: "Solusi enterprise dengan fitur advanced dan sistem yang complex",
			features: [
				"Web Application Custom",
				"Mobile App (iOS + Android)",
				"Advanced Dashboard",
				"Third-party Integration",
				"Cloud Infrastructure",
				"DevOps Setup",
				"Unlimited Revisi",
				"1 Tahun Full Support",
				"24/7 Monitoring",
			],
			timeline: "8-16 minggu",
			popular: false,
			cta: "Konsultasi",
		},
	];

	const additionalServices = [
		{
			service: "UI/UX Design Only",
			startingPrice: "8 juta",
			description: "Design mockup dan prototype tanpa development",
		},
		{
			service: "Mobile App Development",
			startingPrice: "50 juta",
			description: "Native atau cross-platform mobile application",
		},
		{
			service: "E-commerce Solution",
			startingPrice: "45 juta",
			description: "Online store dengan payment gateway dan inventory management",
		},
		{
			service: "Maintenance Package",
			startingPrice: "2 juta/bulan",
			description: "Regular updates, backup, dan technical support",
		},
	];
	return (
		<section
			id="pricing"
			className="py-20 md:py-32 bg-white dark:bg-secondary-900"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2
						className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white font-poppins"
						data-aos="fade-up"
						data-aos-duration="1200"
					>
						Paket{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
							Harga
						</span>
					</h2>
					<p
						className="text-lg text-secondary-600 dark:text-secondary-300"
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-duration="1200"
					>
						Pilih
						paket
						yang
						sesuai
						dengan
						kebutuhan
						dan
						budget
						bisnis
						Anda.
						Semua
						paket
						sudah
						termasuk
						konsultasi
						gratis.
					</p>
				</div>

				{/* Pricing Cards */}
				<div
					className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="200"
				>
					{pricingPlans.map(
						(
							plan,
							index
						) => (
							<div
								key={
									index
								}
								className={`relative bg-white dark:bg-secondary-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
									plan.popular
										? "ring-2 ring-primary-500 scale-105"
										: ""
								}`}
								data-aos="fade-up"
								data-aos-delay={
									100 *
									index
								}
								data-aos-duration="1200"
							>
								{plan.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
										<span className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
											Most
											Popular
										</span>
									</div>
								)}

								<div className="p-8">
									{/* Plan Header */}
									<div className="text-center mb-8">
										<h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
											{
												plan.name
											}
										</h3>
										<p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-4">
											{
												plan.category
											}
										</p>
										<div className="mb-4">
											<span className="text-4xl font-bold text-secondary-900 dark:text-white">
												{plan.price ===
												"Custom"
													? "Custom"
													: `${plan.price}`}
											</span>
											{plan.price !==
												"Custom" && (
												<span className="text-secondary-600 dark:text-secondary-300 ml-2">
													{
														plan.period
													}
												</span>
											)}
										</div>
										<p className="text-secondary-600 dark:text-secondary-300 text-sm">
											{
												plan.description
											}
										</p>
									</div>

									{/* Features */}
									<ul className="space-y-3 mb-8">
										{plan.features.map(
											(
												feature,
												featureIndex
											) => (
												<li
													key={
														featureIndex
													}
													className="flex items-start"
												>
													<svg
														className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0"
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
													<span className="text-secondary-600 dark:text-secondary-300 text-sm">
														{
															feature
														}
													</span>
												</li>
											)
										)}
									</ul>

									{/* Timeline */}
									<div className="mb-6 p-3 bg-secondary-50 dark:bg-secondary-700 rounded-lg">
										<div className="flex items-center justify-center">
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
													d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
											<span className="text-sm text-secondary-600 dark:text-secondary-300">
												Timeline:{" "}
												{
													plan.timeline
												}
											</span>
										</div>
									</div>

									{/* CTA Button */}
									<a
										href="#contact"
										className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
											plan.popular
												? "bg-primary-600 hover:bg-primary-700 text-white"
												: "border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white"
										}`}
									>
										{
											plan.cta
										}
									</a>
								</div>
							</div>
						)
					)}
				</div>

				{/* Additional Services */}
				<div
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="300"
				>
					<h3 className="text-2xl font-bold text-center mb-8 text-secondary-900 dark:text-white">
						Layanan
						Tambahan
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
						{additionalServices.map(
							(
								service,
								index
							) => (
								<div
									key={
										index
									}
									className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-xl hover:shadow-md transition-all duration-300"
								>
									<div className="flex justify-between items-start mb-3">
										<h4 className="font-semibold text-secondary-900 dark:text-white">
											{
												service.service
											}
										</h4>
										<span className="text-primary-600 dark:text-primary-400 font-bold text-sm">
											Mulai{" "}
											{
												service.startingPrice
											}
										</span>
									</div>
									<p className="text-secondary-600 dark:text-secondary-300 text-sm">
										{
											service.description
										}
									</p>
								</div>
							)
						)}
					</div>
				</div>

				{/* Custom Quote CTA */}
				<div
					className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="400"
				>
					<h3 className="text-2xl font-bold mb-4">
						Butuh
						Solusi
						Custom?
					</h3>
					<p className="text-primary-100 mb-6 max-w-2xl mx-auto">
						Setiap
						bisnis
						memiliki
						kebutuhan
						yang
						unik.
						Konsultasikan
						kebutuhan
						spesifik
						Anda
						dengan
						tim
						expert
						kami
						untuk
						mendapatkan
						solusi
						dan
						penawaran
						harga
						yang
						tepat.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="#contact"
							className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
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
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</a>
						<a
							href="https://wa.me/6281234567890?text=Halo%20Rancangin,%20saya%20ingin%20mendiskusikan%20kebutuhan%20custom%20solution"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-full font-semibold transition-all duration-300"
						>
							WhatsApp
							Kami
							<svg
								className="w-5 h-5 ml-2"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
							</svg>
						</a>
					</div>
				</div>

				{/* Disclaimer */}
				<div className="text-center mt-8">
					<p className="text-sm text-secondary-500 dark:text-secondary-400">
						*
						Harga
						dapat
						berubah
						sewaktu-waktu.
						Harga
						final
						akan
						ditentukan
						setelah
						assessment
						kebutuhan
						detail.
						<br />
						**
						Semua
						paket
						sudah
						termasuk
						konsultasi
						gratis
						dan
						project
						management.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
