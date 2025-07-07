import { useEffect, useState } from "react";

const About = () => {
	const [counters, setCounters] = useState({
		projects: 0,
		clients: 0,
		experience: 0,
	});

	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		const observer =
			new IntersectionObserver(
				(
					entries
				) => {
					entries.forEach(
						(
							entry
						) => {
							if (
								entry.isIntersecting &&
								!hasAnimated
							) {
								setHasAnimated(
									true
								);
								animateCounters();
							}
						}
					);
				},
				{
					threshold: 0.5,
				}
			);

		const aboutSection =
			document.getElementById(
				"about"
			);
		if (aboutSection) {
			observer.observe(
				aboutSection
			);
		}

		return () =>
			observer.disconnect();
	}, [hasAnimated]);

	const animateCounters = () => {
		const targets = {
			projects: 150,
			clients: 80,
			experience: 5,
		};
		const duration = 2000;
		const steps = 60;
		const stepDuration =
			duration /
			steps;

		Object.keys(
			targets
		).forEach((key) => {
			const target =
				targets[
					key
				];
			const increment =
				target /
				steps;
			let current = 0;

			const timer =
				setInterval(
					() => {
						current +=
							increment;
						if (
							current >=
							target
						) {
							current =
								target;
							clearInterval(
								timer
							);
						}
						setCounters(
							(
								prev
							) => ({
								...prev,
								[key]: Math.floor(
									current
								),
							})
						);
					},
					stepDuration
				);
		});
	};

	return (
		<section
			id="about"
			className="py-20 md:py-32 bg-white dark:bg-secondary-900"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="order-2 md:order-1">
						<div
							className="relative"
							data-aos="fade-right"
							data-aos-offset="200"
							data-aos-duration="1200"
						>
							<div className="w-full h-96 bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 rounded-2xl overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
									alt="Tim Rancangin"
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Stats Overlay */}
							<div className="absolute -bottom-8 right-4 bg-white dark:bg-secondary-800 p-6 rounded-2xl shadow-xl">
								<div className="grid grid-cols-3 gap-4 text-center">
									<div>
										<div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
											{
												counters.projects
											}

											+
										</div>
										<div className="text-sm text-secondary-600 dark:text-secondary-400">
											Proyek
										</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
											{
												counters.clients
											}

											+
										</div>
										<div className="text-sm text-secondary-600 dark:text-secondary-400">
											Klien
										</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
											{
												counters.experience
											}

											+
										</div>
										<div className="text-sm text-secondary-600 dark:text-secondary-400">
											Tahun
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						className="order-1 md:order-2"
						data-aos="fade-left"
						data-aos-duration="1200"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white font-poppins">
							Tentang{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
								Rancangin
							</span>
						</h2>

						<p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6">
							Rancangin
							adalah
							digital
							innovation
							studio
							yang
							berdedikasi
							untuk
							menghadirkan
							solusi
							teknologi
							terdepan
							bagi
							bisnis
							di
							era
							digital.
							Kami
							percaya
							bahwa
							setiap
							bisnis
							memiliki
							potensi
							untuk
							bertransformasi
							dan
							berkembang
							melalui
							inovasi
							digital.
						</p>

						<p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
							Dengan
							tim
							yang
							berpengalaman
							dan
							passionate
							dalam
							teknologi,
							kami
							siap
							membantu
							mewujudkan
							visi
							digital
							Anda
							dengan
							solusi
							yang
							custom,
							scalable,
							dan
							future-ready.
						</p>

						<div className="space-y-4">
							<div className="flex items-center">
								<div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
								<span className="text-secondary-700 dark:text-secondary-300">
									Tim
									ahli
									dengan
									pengalaman
									5+
									tahun
								</span>
							</div>
							<div className="flex items-center">
								<div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
								<span className="text-secondary-700 dark:text-secondary-300">
									Menggunakan
									teknologi
									terbaru
									dan
									terbaik
								</span>
							</div>
							<div className="flex items-center">
								<div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
								<span className="text-secondary-700 dark:text-secondary-300">
									Fokus
									pada
									hasil
									dan
									kepuasan
									klien
								</span>
							</div>
							<div className="flex items-center">
								<div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
								<span className="text-secondary-700 dark:text-secondary-300">
									Support
									berkelanjutan
									dan
									maintenance
								</span>
							</div>
						</div>

						<div className="mt-8">
							<a
								href="#contact"
								className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
							>
								Mari
								Berkolaborasi
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
			</div>
		</section>
	);
};

export default About;
