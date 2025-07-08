import { useState } from "react";

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const faqs = [
		{
			question: "Berapa lama waktu pengerjaan proyek biasanya?",
			answer: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Website sederhana biasanya 2-4 minggu, aplikasi mobile 6-12 minggu, dan sistem enterprise 3-6 bulan. Kami akan memberikan timeline yang jelas setelah assessment awal.",
		},
		{
			question: "Apakah ada garansi untuk produk yang dikembangkan?",
			answer: "Ya, kami memberikan garansi 3 bulan untuk bug fixing dan 1 tahun untuk support teknis. Selain itu, kami juga menyediakan paket maintenance berkelanjutan untuk update dan optimisasi.",
		},
		{
			question: "Bagaimana sistem pembayaran yang tersedia?",
			answer: "Kami menerima berbagai metode pembayaran termasuk transfer bank, e-wallet, dan cryptocurrency. Pembayaran dapat dilakukan secara bertahap (milestone-based) atau full payment dengan diskon khusus.",
		},
		{
			question: "Apakah bisa request perubahan di tengah pengerjaan?",
			answer: "Tentu saja! Kami memahami bahwa kebutuhan bisnis dapat berubah. Kami menggunakan metodologi Agile yang memungkinkan fleksibilitas perubahan. Namun, perubahan mayor mungkin mempengaruhi timeline dan budget.",
		},
		{
			question: "Teknologi apa saja yang digunakan?",
			answer: "Kami menggunakan teknologi terdepan seperti React, Next.js, Node.js, React Native, Flutter, AWS, dan banyak lagi. Pemilihan teknologi disesuaikan dengan kebutuhan spesifik proyek Anda.",
		},
		{
			question: "Apakah menyediakan layanan maintenance setelah project selesai?",
			answer: "Ya, kami menyediakan berbagai paket maintenance mulai dari basic monitoring hingga full managed service. Ini termasuk update security, backup, performance optimization, dan technical support.",
		},
		{
			question: "Bagaimana proses konsultasi awal dilakukan?",
			answer: "Konsultasi awal dapat dilakukan secara online (video call) atau offline di kantor kami. Sesi ini gratis dan biasanya berlangsung 30-60 menit untuk memahami kebutuhan Anda secara mendalam.",
		},
		{
			question: "Apakah bisa bekerja dengan tim internal kami?",
			answer: "Absolutely! Kami berpengalaman dalam kolaborasi dengan tim internal klien. Tim kami dapat bekerja sebagai extension dari tim Anda atau dalam model hybrid sesuai kebutuhan.",
		},
		{
			question: "Bagaimana dengan keamanan data dan confidentiality?",
			answer: "Keamanan data adalah prioritas utama kami. Kami menandatangani NDA (Non-Disclosure Agreement) dan mengimplementasikan standar keamanan industri dalam setiap proyek. Data Anda 100% aman bersama kami.",
		},
		{
			question: "Apakah menyediakan training untuk menggunakan sistem yang dibuat?",
			answer: "Ya, kami menyediakan comprehensive training untuk semua stakeholder. Ini termasuk user manual, video tutorial, hands-on training session, dan ongoing support untuk memastikan tim Anda dapat menggunakan sistem dengan optimal.",
		},
	];

	const toggleFAQ = (index) => {
		setOpenIndex(
			openIndex ===
				index
				? null
				: index
		);
	};

	return (
		<section className="py-20 md:py-32 bg-secondary-50 dark:bg-secondary-800/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
				<div className="text-center mb-16">
					<h2
						className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white font-poppins"
						data-aos="fade-up"
						data-aos-duration="1200"
					>
						Frequently{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
							Asked
							Questions
						</span>
					</h2>
					<p
						className="text-lg text-secondary-600 dark:text-secondary-300"
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-duration="1200"
					>
						Temukan
						jawaban
						untuk
						pertanyaan
						yang
						sering
						diajukan
						tentang
						layanan
						dan
						proses
						kerja
						kami.
					</p>
				</div>

				<div
					className="space-y-4"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="200"
				>
					{faqs.map(
						(
							faq,
							index
						) => (
							<div
								key={
									index
								}
								className="bg-white dark:bg-secondary-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
							>
								<button
									onClick={() =>
										toggleFAQ(
											index
										)
									}
									className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-xl"
								>
									<div className="flex justify-between items-center">
										<h3 className="text-lg font-semibold text-secondary-900 dark:text-white pr-4">
											{
												faq.question
											}
										</h3>
										<div className="flex-shrink-0">
											<svg
												className={`w-6 h-6 text-primary-600 dark:text-primary-400 transform transition-transform duration-300 ${
													openIndex ===
													index
														? "rotate-180"
														: ""
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
										</div>
									</div>
								</button>

								<div
									className={`overflow-hidden transition-all duration-300 ${
										openIndex ===
										index
											? "max-h-96 opacity-100"
											: "max-h-0 opacity-0"
									}`}
								>
									<div className="px-6 pb-5">
										<div className="border-t border-secondary-200 dark:border-secondary-700 pt-4">
											<p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
												{
													faq.answer
												}
											</p>
										</div>
									</div>
								</div>
							</div>
						)
					)}
				</div>

				{/* Contact CTA */}
				<div
					className="text-center mt-12"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="300"
				>
					<div className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg">
						<h3 className="text-xl font-bold mb-4 text-secondary-900 dark:text-white">
							Masih
							Ada
							Pertanyaan?
						</h3>
						<p className="text-secondary-600 dark:text-secondary-300 mb-6">
							Tim
							kami
							siap
							membantu
							menjawab
							pertanyaan
							spesifik
							tentang
							proyek
							Anda.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="#contact"
								className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
							>
								Hubungi
								Kami
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
								href="https://wa.me/6281234567890?text=Halo%20Rancangin,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white rounded-full font-semibold transition-all duration-300"
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
				</div>
			</div>
		</section>
	);
};

export default FAQ;
