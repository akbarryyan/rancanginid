const Testimonials = () => {
	const testimonials = [
		{
			id: 1,
			name: "Sarah Wijaya",
			position: "CEO",
			company: "TechStart Indonesia",
			rating: 5,
			text: "Rancangin benar-benar mengubah bisnis kami. Website e-commerce yang mereka buat meningkatkan penjualan online kami hingga 300%. Tim yang sangat profesional dan responsif!",
			image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
			project: "E-commerce Platform",
		},
		{
			id: 2,
			name: "Ahmad Rizki",
			position: "Founder",
			company: "EduLearn",
			rating: 5,
			text: "Aplikasi mobile learning yang dikembangkan Rancangin sangat user-friendly. Siswa kami jadi lebih engaged dan completion rate naik 85%. Highly recommended!",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
			project: "Mobile Learning App",
		},
		{
			id: 3,
			name: "Lisa Chen",
			position: "Marketing Director",
			company: "BeautyBox",
			rating: 5,
			text: "UI/UX design dari Rancangin luar biasa! Brand identity baru kami terlihat modern dan elegant. Customer feedback sangat positif sejak rebranding.",
			image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
			project: "Brand Identity & Website",
		},
		{
			id: 4,
			name: "Budi Santoso",
			position: "Operations Manager",
			company: "LogisticPro",
			rating: 5,
			text: "Sistem management yang dibuat Rancangin sangat membantu operasional kami. Efisiensi meningkat 40% dan real-time tracking memberikan kontrol penuh.",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
			project: "Management System",
		},
		{
			id: 5,
			name: "Diana Putri",
			position: "Co-founder",
			company: "HealthCare+",
			rating: 5,
			text: "Aplikasi telemedicine yang dikembangkan Rancangin membantu kami reach lebih banyak pasien. Security dan compliance-nya top-notch!",
			image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
			project: "Telemedicine App",
		},
		{
			id: 6,
			name: "Michael Tan",
			position: "CTO",
			company: "FinanceFlow",
			rating: 5,
			text: "Cloud migration dan cybersecurity solution dari Rancangin memberikan peace of mind. Infrastructure kami jadi lebih scalable dan secure.",
			image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
			project: "Cloud & Security Solutions",
		},
	];

	const renderStars = (rating) => {
		return [...Array(5)].map(
			(
				_,
				index
			) => (
				<svg
					key={
						index
					}
					className={`w-5 h-5 ${
						index <
						rating
							? "text-yellow-400"
							: "text-gray-300"
					}`}
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
			)
		);
	};
	return (
		<section
			id="testimonials"
			className="py-20 md:py-32 bg-secondary-50 dark:bg-secondary-800/30"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2
						className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white font-poppins"
						data-aos="fade-up"
						data-aos-duration="1200"
					>
						Apa
						Kata{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
							Klien
							Kami
						</span>
					</h2>
					<p
						className="text-lg text-secondary-600 dark:text-secondary-300"
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-duration="1200"
					>
						Kepercayaan
						dan
						kepuasan
						klien
						adalah
						prioritas
						utama
						kami.
						Lihat
						bagaimana
						kami
						telah
						membantu
						berbagai
						bisnis
						mencapai
						tujuan
						digital
						mereka.
					</p>
				</div>

				{/* Statistics */}
				<div
					className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="200"
				>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
							98%
						</div>
						<div className="text-secondary-600 dark:text-secondary-300 text-sm">
							Client
							Satisfaction
						</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
							150+
						</div>
						<div className="text-secondary-600 dark:text-secondary-300 text-sm">
							Projects
							Completed
						</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
							80+
						</div>
						<div className="text-secondary-600 dark:text-secondary-300 text-sm">
							Happy
							Clients
						</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
							5.0
						</div>
						<div className="text-secondary-600 dark:text-secondary-300 text-sm">
							Average
							Rating
						</div>
					</div>
				</div>

				{/* Testimonials Grid */}
				<div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="300"
				>
					{testimonials.map(
						(
							testimonial,
							index
						) => (
							<div
								key={
									testimonial.id
								}
								className="bg-white dark:bg-secondary-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
								data-aos="fade-up"
								data-aos-delay={
									100 *
									(index %
										3)
								}
								data-aos-duration="1200"
							>
								{/* Rating */}
								<div className="flex mb-4">
									{renderStars(
										testimonial.rating
									)}
								</div>

								{/* Testimonial Text */}
								<p className="text-secondary-600 dark:text-secondary-300 mb-6 italic">
									"
									{
										testimonial.text
									}
									"
								</p>

								{/* Project Type */}
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
										{
											testimonial.project
										}
									</span>
								</div>

								{/* Client Info */}
								<div className="flex items-center">
									<img
										src={
											testimonial.image
										}
										alt={
											testimonial.name
										}
										className="w-12 h-12 rounded-full object-cover mr-4"
									/>
									<div>
										<h4 className="font-semibold text-secondary-900 dark:text-white">
											{
												testimonial.name
											}
										</h4>
										<p className="text-sm text-secondary-500 dark:text-secondary-400">
											{
												testimonial.position
											}
											,{" "}
											{
												testimonial.company
											}
										</p>
									</div>
								</div>
							</div>
						)
					)}
				</div>

				{/* CTA */}
				<div
					className="text-center mt-12"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="400"
				>
					<p className="text-secondary-600 dark:text-secondary-300 mb-6">
						Siap
						bergabung
						dengan
						klien-klien
						yang
						sudah
						merasakan
						manfaatnya?
					</p>
					<a
						href="#contact"
						className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
					>
						Mulai
						Proyek
						Anda
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
		</section>
	);
};

export default Testimonials;
