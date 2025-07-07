const Blog = () => {
	const blogPosts = [
		{
			id: 1,
			title: "Tren Teknologi 2024: Yang Perlu Diketahui Bisnis",
			excerpt: "Eksplorasi tren teknologi terbaru yang akan membentuk lanskap bisnis digital di tahun 2024 dan cara memanfaatkannya.",
			image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			date: "15 Januari 2024",
			author: "Tim Rancangin",
			category: "Teknologi",
			readTime: "5 menit baca",
		},
		{
			id: 2,
			title: "Panduan Lengkap Transformasi Digital untuk UKM",
			excerpt: "Langkah-langkah praktis yang dapat diterapkan UKM untuk memulai perjalanan transformasi digital mereka.",
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			date: "10 Januari 2024",
			author: "Tim Rancangin",
			category: "Bisnis Digital",
			readTime: "7 menit baca",
		},
		{
			id: 3,
			title: "Mengoptimalkan Performance Website untuk SEO",
			excerpt: "Tips dan trik untuk meningkatkan kecepatan website dan performa SEO yang akan meningkatkan ranking di mesin pencari.",
			image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			date: "5 Januari 2024",
			author: "Tim Rancangin",
			category: "SEO & Marketing",
			readTime: "6 menit baca",
		},
	];

	return (
		<section
			id="blog"
			className="py-20 md:py-32 bg-secondary-50 dark:bg-secondary-800"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className="text-center mb-16"
					data-aos="fade-up"
					data-aos-duration="1200"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white font-poppins">
						Blog
						&{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
							Insights
						</span>
					</h2>
					<p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
						Temukan
						wawasan
						terbaru
						tentang
						teknologi,
						strategi
						digital,
						dan
						tips
						pengembangan
						bisnis
						dari
						para
						ahli
						kami.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{blogPosts.map(
						(
							post,
							index
						) => (
							<article
								key={
									post.id
								}
								className="bg-white dark:bg-secondary-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
								data-aos="fade-up"
								data-aos-duration="1200"
								data-aos-delay={
									index *
									200
								}
							>
								<div className="relative overflow-hidden">
									<img
										src={
											post.image
										}
										alt={
											post.title
										}
										className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
									/>
									<div className="absolute top-4 left-4">
										<span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
											{
												post.category
											}
										</span>
									</div>
								</div>

								<div className="p-6">
									<div className="flex items-center text-sm text-secondary-500 dark:text-secondary-400 mb-3">
										<span>
											{
												post.date
											}
										</span>
										<span className="mx-2">
											•
										</span>
										<span>
											{
												post.readTime
											}
										</span>
									</div>

									<h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
										<a href="#">
											{
												post.title
											}
										</a>
									</h3>

									<p className="text-secondary-600 dark:text-secondary-300 mb-4 line-clamp-3">
										{
											post.excerpt
										}
									</p>

									<div className="flex items-center justify-between">
										<div className="flex items-center">
											<div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-3">
												<span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
													{post.author.charAt(
														0
													)}
												</span>
											</div>
											<span className="text-sm text-secondary-600 dark:text-secondary-400">
												{
													post.author
												}
											</span>
										</div>

										<a
											href="#"
											className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-sm transition-colors"
										>
											Baca
											Selengkapnya
											→
										</a>
									</div>
								</div>
							</article>
						)
					)}
				</div>

				<div
					className="text-center mt-12"
					data-aos="fade-up"
					data-aos-duration="1200"
				>
					<a
						href="#"
						className="inline-flex items-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
					>
						Lihat
						Semua
						Artikel
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

export default Blog;
