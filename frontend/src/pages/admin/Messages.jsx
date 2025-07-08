import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";

const Messages = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [messages, setMessages] = useState([]);
	const [selectedMessage, setSelectedMessage] =
		useState(null);
	const [filter, setFilter] = useState("all");
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		// Check authentication
		const token =
			localStorage.getItem(
				"adminToken"
			);
		const userData =
			localStorage.getItem(
				"adminUser"
			);

		if (!token || !userData) {
			navigate(
				"/back/login"
			);
			return;
		}

		setUser(
			JSON.parse(
				userData
			)
		);

		// Load messages data (mock)
		setMessages([
			{
				id: 1,
				name: "John Doe",
				email: "john@example.com",
				phone: "+62812345678",
				company: "Tech Startup",
				service: "web",
				message: "Saya tertarik untuk membuat website e-commerce untuk startup saya. Bisa kita diskusikan lebih lanjut?",
				status: "new",
				priority: "high",
				createdAt: "2024-07-08T10:30:00Z",
				readAt: null,
				repliedAt: null,
			},
			{
				id: 2,
				name: "Sarah Wilson",
				email: "sarah@company.com",
				phone: "+62812345679",
				company: "ABC Corp",
				service: "mobile",
				message: "Perusahaan kami membutuhkan aplikasi mobile untuk manajemen inventori. Berapa estimasi biaya dan timeline?",
				status: "replied",
				priority: "medium",
				createdAt: "2024-07-07T14:20:00Z",
				readAt: "2024-07-07T15:00:00Z",
				repliedAt: "2024-07-07T16:30:00Z",
			},
			{
				id: 3,
				name: "Michael Chen",
				email: "michael@design.co",
				phone: null,
				company: "Design Studio",
				service: "uiux",
				message: "Halo, saya perlu bantuan untuk redesign website portfolio kami. Apakah kalian menyediakan jasa UI/UX design?",
				status: "read",
				priority: "low",
				createdAt: "2024-07-06T09:15:00Z",
				readAt: "2024-07-06T11:00:00Z",
				repliedAt: null,
			},
			{
				id: 4,
				name: "Lisa Anderson",
				email: "lisa@marketing.com",
				phone: "+62812345680",
				company: "Marketing Agency",
				service: "digital",
				message: "Kami butuh partner untuk digital marketing campaign. Bisa tolong jelaskan layanan yang tersedia?",
				status: "new",
				priority: "medium",
				createdAt: "2024-07-08T08:45:00Z",
				readAt: null,
				repliedAt: null,
			},
		]);
	}, [navigate]);

	const serviceLabels = {
		web: "Web Development",
		mobile: "Mobile App",
		uiux: "UI/UX Design",
		digital: "Digital Marketing",
		security: "Cybersecurity",
		cloud: "Cloud Solutions",
	};

	const statusConfig = {
		new: {
			label: "Baru",
			color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
			icon: "🆕",
		},
		read: {
			label: "Dibaca",
			color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
			icon: "👁️",
		},
		replied: {
			label: "Dibalas",
			color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
			icon: "✅",
		},
	};

	const priorityConfig = {
		low: {
			label: "Rendah",
			color: "text-gray-500",
			icon: "⬇️",
		},
		medium: {
			label: "Sedang",
			color: "text-yellow-500",
			icon: "➡️",
		},
		high: {
			label: "Tinggi",
			color: "text-red-500",
			icon: "⬆️",
		},
	};

	const filteredMessages = messages.filter(
		(message) => {
			const matchesFilter =
				filter ===
					"all" ||
				message.status ===
					filter;
			const matchesSearch =
				message.name
					.toLowerCase()
					.includes(
						searchTerm.toLowerCase()
					) ||
				message.email
					.toLowerCase()
					.includes(
						searchTerm.toLowerCase()
					) ||
				message.company
					.toLowerCase()
					.includes(
						searchTerm.toLowerCase()
					) ||
				message.message
					.toLowerCase()
					.includes(
						searchTerm.toLowerCase()
					);

			return (
				matchesFilter &&
				matchesSearch
			);
		}
	);

	const handleMessageClick = (message) => {
		setSelectedMessage(message);

		// Mark as read if it's new
		if (
			message.status ===
			"new"
		) {
			setMessages(
				messages.map(
					(
						msg
					) =>
						msg.id ===
						message.id
							? {
									...msg,
									status: "read",
									readAt: new Date().toISOString(),
							  }
							: msg
				)
			);
		}
	};

	const handleReply = (messageId) => {
		setMessages(
			messages.map(
				(
					msg
				) =>
					msg.id ===
					messageId
						? {
								...msg,
								status: "replied",
								repliedAt: new Date().toISOString(),
						  }
						: msg
			)
		);
		setSelectedMessage(null);
	};

	const handleDelete = (messageId) => {
		if (
			confirm(
				"Apakah Anda yakin ingin menghapus pesan ini?"
			)
		) {
			setMessages(
				messages.filter(
					(
						msg
					) =>
						msg.id !==
						messageId
				)
			);
			if (
				selectedMessage?.id ===
				messageId
			) {
				setSelectedMessage(
					null
				);
			}
		}
	};

	const formatDate = (dateString) => {
		return new Date(
			dateString
		).toLocaleString("id-ID", {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	};
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
			<Sidebar
				isOpen={
					sidebarOpen
				}
				onToggle={() =>
					setSidebarOpen(
						!sidebarOpen
					)
				}
			/>

			<div className="flex-1">
				<Header
					user={
						user
					}
					onMenuToggle={() =>
						setSidebarOpen(
							!sidebarOpen
						)
					}
				/>

				<main className="p-4 sm:p-6 max-w-7xl mx-auto w-full overflow-hidden">
					<div className="mb-8">
						<h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
							Messages
							Management
						</h1>
						<p className="text-gray-600 dark:text-gray-300">
							Kelola
							pesan
							dari
							calon
							klien
							dan
							pelanggan
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						{/* Messages List */}
						<div className="lg:col-span-2">
							<div className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm border border-gray-200 dark:border-secondary-700">
								<div className="p-6 border-b border-gray-200 dark:border-secondary-700">
									<div className="flex flex-col sm:flex-row gap-4">
										<div className="flex-1">
											<input
												type="text"
												placeholder="Cari pesan..."
												value={
													searchTerm
												}
												onChange={(
													e
												) =>
													setSearchTerm(
														e
															.target
															.value
													)
												}
												className="w-full px-3 py-2 border border-gray-300 dark:border-secondary-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-gray-900 dark:text-white"
											/>
										</div>
										<select
											value={
												filter
											}
											onChange={(
												e
											) =>
												setFilter(
													e
														.target
														.value
												)
											}
											className="px-3 py-2 border border-gray-300 dark:border-secondary-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-gray-900 dark:text-white"
										>
											<option value="all">
												Semua
												Status
											</option>
											<option value="new">
												Pesan
												Baru
											</option>
											<option value="read">
												Sudah
												Dibaca
											</option>
											<option value="replied">
												Sudah
												Dibalas
											</option>
										</select>
									</div>
								</div>

								<div className="divide-y divide-gray-200 dark:divide-secondary-700">
									{filteredMessages.map(
										(
											message
										) => (
											<div
												key={
													message.id
												}
												onClick={() =>
													handleMessageClick(
														message
													)
												}
												className={`p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-secondary-700 transition-colors duration-150 ${
													selectedMessage?.id ===
													message.id
														? "bg-primary-50 dark:bg-primary-900/20"
														: ""
												}`}
											>
												<div className="flex items-start justify-between">
													<div className="flex-1 min-w-0">
														<div className="flex items-center space-x-3 mb-2">
															<h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
																{
																	message.name
																}
															</h3>
															<span
																className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
																	statusConfig[
																		message
																			.status
																	]
																		.color
																}`}
															>
																{
																	statusConfig[
																		message
																			.status
																	]
																		.label
																}
															</span>
															<span
																className={`text-xs ${
																	priorityConfig[
																		message
																			.priority
																	]
																		.color
																}`}
															>
																{
																	priorityConfig[
																		message
																			.priority
																	]
																		.icon
																}
															</span>
														</div>

														<div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mb-2">
															<span>
																{
																	message.email
																}
															</span>
															{message.company && (
																<span>
																	•{" "}
																	{
																		message.company
																	}
																</span>
															)}
															<span>
																•{" "}
																{
																	serviceLabels[
																		message
																			.service
																	]
																}
															</span>
														</div>

														<p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
															{
																message.message
															}
														</p>

														<div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
															{formatDate(
																message.createdAt
															)}
														</div>
													</div>

													<div className="ml-4 flex-shrink-0">
														<button
															onClick={(
																e
															) => {
																e.stopPropagation();
																handleDelete(
																	message.id
																);
															}}
															className="text-red-600 hover:text-red-800 text-sm"
														>
															🗑️
														</button>
													</div>
												</div>
											</div>
										)
									)}
								</div>

								{filteredMessages.length ===
									0 && (
									<div className="p-12 text-center">
										<div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">
											📧
										</div>
										<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
											Tidak
											ada
											pesan
										</h3>
										<p className="text-gray-500 dark:text-gray-400">
											{searchTerm ||
											filter !==
												"all"
												? "Tidak ada pesan yang sesuai dengan filter Anda"
												: "Belum ada pesan masuk"}
										</p>
									</div>
								)}
							</div>
						</div>

						{/* Message Detail */}
						<div className="lg:col-span-1">
							{selectedMessage ? (
								<div className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm border border-gray-200 dark:border-secondary-700">
									<div className="p-6 border-b border-gray-200 dark:border-secondary-700">
										<div className="flex items-center justify-between">
											<h3 className="text-lg font-medium text-gray-900 dark:text-white">
												Detail
												Pesan
											</h3>
											<button
												onClick={() =>
													setSelectedMessage(
														null
													)
												}
												className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
											>
												✕
											</button>
										</div>
									</div>

									<div className="p-6 space-y-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
												Nama
											</label>
											<p className="text-sm text-gray-900 dark:text-white">
												{
													selectedMessage.name
												}
											</p>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
												Email
											</label>
											<p className="text-sm text-gray-900 dark:text-white">
												{
													selectedMessage.email
												}
											</p>
										</div>

										{selectedMessage.phone && (
											<div>
												<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
													Telepon
												</label>
												<p className="text-sm text-gray-900 dark:text-white">
													{
														selectedMessage.phone
													}
												</p>
											</div>
										)}

										{selectedMessage.company && (
											<div>
												<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
													Perusahaan
												</label>
												<p className="text-sm text-gray-900 dark:text-white">
													{
														selectedMessage.company
													}
												</p>
											</div>
										)}

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
												Layanan
											</label>
											<p className="text-sm text-gray-900 dark:text-white">
												{
													serviceLabels[
														selectedMessage
															.service
													]
												}
											</p>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
												Pesan
											</label>
											<div className="bg-gray-50 dark:bg-secondary-700 rounded-lg p-3">
												<p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
													{
														selectedMessage.message
													}
												</p>
											</div>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
												Waktu
											</label>
											<p className="text-sm text-gray-500 dark:text-gray-400">
												Dikirim:{" "}
												{formatDate(
													selectedMessage.createdAt
												)}
											</p>
											{selectedMessage.readAt && (
												<p className="text-sm text-gray-500 dark:text-gray-400">
													Dibaca:{" "}
													{formatDate(
														selectedMessage.readAt
													)}
												</p>
											)}
											{selectedMessage.repliedAt && (
												<p className="text-sm text-gray-500 dark:text-gray-400">
													Dibalas:{" "}
													{formatDate(
														selectedMessage.repliedAt
													)}
												</p>
											)}
										</div>

										<div className="pt-4 space-y-2">
											<a
												href={`mailto:${
													selectedMessage.email
												}?subject=Re: Inquiry tentang ${
													serviceLabels[
														selectedMessage
															.service
													]
												}`}
												onClick={() =>
													handleReply(
														selectedMessage.id
													)
												}
												className="w-full bg-primary-600 text-white text-center py-2 px-4 rounded-md hover:bg-primary-700 transition-colors duration-150 block"
											>
												Balas
												via
												Email
											</a>

											{selectedMessage.phone && (
												<a
													href={`https://wa.me/${selectedMessage.phone.replace(
														/[^\d]/g,
														""
													)}?text=Halo ${
														selectedMessage.name
													}, terima kasih telah menghubungi Rancangin`}
													target="_blank"
													rel="noopener noreferrer"
													className="w-full bg-green-600 text-white text-center py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-150 block"
												>
													Balas
													via
													WhatsApp
												</a>
											)}

											<button
												onClick={() =>
													handleDelete(
														selectedMessage.id
													)
												}
												className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-150"
											>
												Hapus
												Pesan
											</button>
										</div>
									</div>
								</div>
							) : (
								<div className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm border border-gray-200 dark:border-secondary-700 p-12 text-center">
									<div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">
										💬
									</div>
									<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
										Pilih
										Pesan
									</h3>
									<p className="text-gray-500 dark:text-gray-400">
										Klik
										salah
										satu
										pesan
										untuk
										melihat
										detailnya
									</p>
								</div>
							)}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Messages;
