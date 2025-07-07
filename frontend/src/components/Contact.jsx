import { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
		service: "",
		message: "",
	});

	const handleInputChange = (e) => {
		const { name, value } =
			e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log(
			"Form submitted:",
			formData
		);
		// Reset form
		setFormData({
			name: "",
			email: "",
			phone: "",
			company: "",
			service: "",
			message: "",
		});
	};

	const contactInfo = [
		{
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			),
			title: "Alamat",
			details: [
				"Jl. Teknologi Digital No. 123",
				"Jakarta Selatan, 12345",
				"Indonesia",
			],
		},
		{
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg>
			),
			title: "Telepon",
			details: [
				"+62 21 1234 5678",
				"+62 812 3456 7890",
			],
		},
		{
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			),
			title: "Email",
			details: [
				"hello@rancangin.com",
				"info@rancangin.com",
			],
		},
		{
			icon: (
				<svg
					className="w-6 h-6"
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
			),
			title: "Jam Operasional",
			details: [
				"Senin - Jumat: 09:00 - 18:00",
				"Sabtu: 09:00 - 15:00",
				"Minggu: Tutup",
			],
		},
	];

	return (
		<section
			id="contact"
			className="py-20 md:py-32 bg-white dark:bg-secondary-900"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className="text-center mb-16"
					data-aos="fade-up"
					data-aos-duration="1200"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white font-poppins">
						Mari{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
							Berdiskusi
						</span>
					</h2>
					<p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
						Siap
						untuk
						memulai
						proyek
						digital
						Anda?
						Tim
						ahli
						kami
						siap
						membantu
						mewujudkan
						visi
						teknologi
						Anda
						menjadi
						kenyataan.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div
						data-aos="fade-right"
						data-aos-duration="1200"
					>
						<div className="bg-secondary-50 dark:bg-secondary-800 rounded-2xl p-8">
							<h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
								Kirim
								Pesan
							</h3>

							<form
								onSubmit={
									handleSubmit
								}
								className="space-y-6"
							>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
										>
											Nama
											Lengkap
											*
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={
												formData.name
											}
											onChange={
												handleInputChange
											}
											required
											className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white transition-colors"
											placeholder="Masukkan nama lengkap"
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
										>
											Email
											*
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={
												formData.email
											}
											onChange={
												handleInputChange
											}
											required
											className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white transition-colors"
											placeholder="nama@email.com"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="phone"
											className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
										>
											Nomor
											Telepon
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											value={
												formData.phone
											}
											onChange={
												handleInputChange
											}
											className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white transition-colors"
											placeholder="+62 812 3456 7890"
										/>
									</div>

									<div>
										<label
											htmlFor="company"
											className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
										>
											Perusahaan
										</label>
										<input
											type="text"
											id="company"
											name="company"
											value={
												formData.company
											}
											onChange={
												handleInputChange
											}
											className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white transition-colors"
											placeholder="Nama perusahaan"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="service"
										className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
									>
										Layanan
										yang
										Diminati
									</label>
									<select
										id="service"
										name="service"
										value={
											formData.service
										}
										onChange={
											handleInputChange
										}
										className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white transition-colors"
									>
										<option value="">
											Pilih
											layanan
										</option>
										<option value="web-development">
											Web
											Development
										</option>
										<option value="mobile-app">
											Mobile
											App
											Development
										</option>
										<option value="ui-ux-design">
											UI/UX
											Design
										</option>
										<option value="digital-marketing">
											Digital
											Marketing
										</option>
										<option value="cybersecurity">
											Cybersecurity
										</option>
										<option value="cloud-solutions">
											Cloud
											Solutions
										</option>
										<option value="konsultasi">
											Konsultasi
										</option>
									</select>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
									>
										Pesan
										*
									</label>
									<textarea
										id="message"
										name="message"
										value={
											formData.message
										}
										onChange={
											handleInputChange
										}
										required
										rows="5"
										className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white transition-colors resize-none"
										placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
									></textarea>
								</div>

								<button
									type="submit"
									className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
								>
									Kirim
									Pesan
								</button>
							</form>
						</div>
					</div>

					{/* Contact Information */}
					<div
						data-aos="fade-left"
						data-aos-duration="1200"
					>
						<div className="space-y-8">
							{contactInfo.map(
								(
									info,
									index
								) => (
									<div
										key={
											index
										}
										className="flex items-start space-x-4 p-6 bg-secondary-50 dark:bg-secondary-800 rounded-2xl"
									>
										<div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
											{
												info.icon
											}
										</div>
										<div>
											<h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
												{
													info.title
												}
											</h4>
											{info.details.map(
												(
													detail,
													detailIndex
												) => (
													<p
														key={
															detailIndex
														}
														className="text-secondary-600 dark:text-secondary-300"
													>
														{
															detail
														}
													</p>
												)
											)}
										</div>
									</div>
								)
							)}

							{/* Map */}
							<div className="bg-secondary-200 dark:bg-secondary-700 rounded-2xl overflow-hidden h-64">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sJl.%20Sudirman%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1647875959552!5m2!1sen!2sid"
									width="100%"
									height="100%"
									style={{
										border: 0,
									}}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
