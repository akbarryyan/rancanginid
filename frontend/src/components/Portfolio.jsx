import { useState } from "react";

const Portfolio = () => {
	const [activeFilter, setActiveFilter] =
		useState("semua");

	const projects = [
		{
			id: 1,
			title: "E-Commerce Platform",
			category: "web",
			image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			description: "Platform e-commerce modern dengan fitur lengkap untuk UMKM",
			tech: [
				"React",
				"Node.js",
				"MongoDB",
			],
			link: "#",
		},
		{
			id: 2,
			title: "Banking Mobile App",
			category: "mobile",
			image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			description: "Aplikasi mobile banking dengan keamanan tinggi dan UX yang intuitif",
			tech: [
				"React Native",
				"Firebase",
				"Biometric",
			],
			link: "#",
		},
		{
			id: 3,
			title: "Restaurant Brand Identity",
			category: "design",
			image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			description: "Redesign brand identity untuk chain restaurant premium",
			tech: [
				"Figma",
				"Adobe CC",
				"Prototyping",
			],
			link: "#",
		},
		{
			id: 4,
			title: "Learning Management System",
			category: "web",
			image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			description: "Platform pembelajaran online untuk institusi pendidikan",
			tech: [
				"Vue.js",
				"Laravel",
				"MySQL",
			],
			link: "#",
		},
		{
			id: 5,
			title: "Fitness Tracking App",
			category: "mobile",
			image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			description: "Aplikasi tracking fitness dengan AI personal trainer",
			tech: [
				"Flutter",
				"TensorFlow",
				"Cloud",
			],
			link: "#",
		},
		{
			id: 6,
			title: "Corporate Website",
			category: "web",
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			description: "Website corporate dengan CMS dan dashboard analytics",
			tech: [
				"Next.js",
				"Strapi",
				"PostgreSQL",
			],
			link: "#",
		},
	];

	const filters = [
		{
			key: "semua",
			label: "Semua",
		},
		{
			key: "web",
			label: "Web",
		},
		{
			key: "mobile",
			label: "Mobile",
		},
		{
			key: "design",
			label: "Design",
		},
	];

	const filteredProjects =
		activeFilter === "semua"
			? projects
			: projects.filter(
					(
						project
					) =>
						project.category ===
						activeFilter
			  );

	return (
		<section
			id="portfolio"
			className="py-20 md:py-32 bg-white dark:bg-secondary-900"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2
						className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white font-poppins"
						data-aos="fade-up"
						data-aos-duration="1200"
					>
						Portfolio{" "}
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
						Lihat
						beberapa
						proyek
						terbaik
						yang
						telah
						kami
						kerjakan
						untuk
						berbagai
						klien
						di
						berbagai
						industri
					</p>
				</div>

				{/* Portfolio Filter */}
				<div
					className="flex flex-wrap justify-center gap-4 mb-12"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="200"
				>
					{filters.map(
						(
							filter
						) => (
							<button
								key={
									filter.key
								}
								onClick={() =>
									setActiveFilter(
										filter.key
									)
								}
								className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
									activeFilter ===
									filter.key
										? "bg-primary-600 text-white shadow-lg transform scale-105"
										: "bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700"
								}`}
							>
								{
									filter.label
								}
							</button>
						)
					)}
				</div>

				{/* Portfolio Grid */}
				<div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="300"
				>
					{filteredProjects.map(
						(
							project,
							index
						) => (
							<div
								key={
									project.id
								}
								className="group bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
								data-aos="fade-up"
								data-aos-delay={
									100 *
									(index %
										3)
								}
								data-aos-duration="1200"
							>
								<div className="relative overflow-hidden">
									<img
										src={
											project.image
										}
										alt={
											project.title
										}
										className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-primary-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
										<a
											href={
												project.link
											}
											className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
										>
											Lihat
											Detail
										</a>
									</div>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">
										{
											project.title
										}
									</h3>

									<p className="text-secondary-600 dark:text-secondary-300 mb-4">
										{
											project.description
										}
									</p>

									<div className="flex flex-wrap gap-2">
										{project.tech.map(
											(
												tech,
												techIndex
											) => (
												<span
													key={
														techIndex
													}
													className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
												>
													{
														tech
													}
												</span>
											)
										)}
									</div>
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
					<a
						href="#contact"
						className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
					>
						Lihat
						Semua
						Portfolio
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

export default Portfolio;
