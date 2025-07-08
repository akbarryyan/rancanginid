import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useTheme } from "../../hooks/useTheme";

const Header = ({ user, onMenuToggle }) => {
	const navigate = useNavigate();
	const { isDark, toggleTheme } = useTheme();
	const [notificationsOpen, setNotificationsOpen] =
		useState(false);
	const [profileOpen, setProfileOpen] = useState(false);
	const [
		showAllNotifications,
		setShowAllNotifications,
	] = useState(false);
	const [notificationsList, setNotificationsList] =
		useState([]);
	const [filterUnread, setFilterUnread] =
		useState(false);
	const [showLogoutModal, setShowLogoutModal] =
		useState(false);
	const [searchFocused, setSearchFocused] =
		useState(false);
	// Refs untuk dropdown elements dan search input
	const notificationsRef = useRef(null);
	const profileRef = useRef(null);
	const searchInputRef = useRef(null); // Effect untuk menangani klik di luar dropdown
	useEffect(() => {
		const handleClickOutside = (
			event
		) => {
			// Tutup notifications dropdown jika klik di luar
			if (
				notificationsRef.current &&
				!notificationsRef.current.contains(
					event.target
				)
			) {
				setNotificationsOpen(
					false
				);
			}
			// Tutup profile dropdown jika klik di luar
			if (
				profileRef.current &&
				!profileRef.current.contains(
					event.target
				)
			) {
				setProfileOpen(
					false
				);
			}
		};
		const handleKeyDown = (
			event
		) => {
			if (
				event.key ===
				"Escape"
			) {
				setNotificationsOpen(
					false
				);
				setProfileOpen(
					false
				);
				setShowAllNotifications(
					false
				);
				setShowLogoutModal(
					false
				);
			}
			// Ctrl+K untuk fokus ke search input
			if (
				event.ctrlKey &&
				event.key ===
					"k"
			) {
				event.preventDefault();
				if (
					searchInputRef.current
				) {
					searchInputRef.current.focus();
				}
			}
		};

		// Tambahkan event listener
		document.addEventListener(
			"mousedown",
			handleClickOutside
		);
		document.addEventListener(
			"keydown",
			handleKeyDown
		);

		// Cleanup event listener
		return () => {
			document.removeEventListener(
				"mousedown",
				handleClickOutside
			);
			document.removeEventListener(
				"keydown",
				handleKeyDown
			);
		};
	}, []);
	// Initialize notifications data
	useEffect(() => {
		const initialNotifications =
			[
				{
					id: 1,
					title: "Proyek baru diterima",
					message: "Website e-commerce dari PT ABC",
					time: "2 menit yang lalu",
					unread: true,
					type: "project",
					timestamp: new Date(
						Date.now() -
							2 *
								60 *
								1000
					),
				},
				{
					id: 2,
					title: "Pembayaran diterima",
					message: "Rp 25.000.000 dari klien XYZ",
					time: "1 jam yang lalu",
					unread: true,
					type: "payment",
					timestamp: new Date(
						Date.now() -
							60 *
								60 *
								1000
					),
				},
				{
					id: 3,
					title: "Review positif",
					message: "Rating 5 bintang dari Sarah W.",
					time: "3 jam yang lalu",
					unread: false,
					type: "review",
					timestamp: new Date(
						Date.now() -
							3 *
								60 *
								60 *
								1000
					),
				},
				{
					id: 4,
					title: "Proyek selesai",
					message: "Website portfolio untuk John Doe telah diselesaikan",
					time: "5 jam yang lalu",
					unread: false,
					type: "project",
					timestamp: new Date(
						Date.now() -
							5 *
								60 *
								60 *
								1000
					),
				},
				{
					id: 5,
					title: "Konsultasi baru",
					message: "Permintaan konsultasi dari startup teknologi",
					time: "1 hari yang lalu",
					unread: false,
					type: "consultation",
					timestamp: new Date(
						Date.now() -
							24 *
								60 *
								60 *
								1000
					),
				},
				{
					id: 6,
					title: "Pembayaran pending",
					message: "Invoice #INV-2024-001 menunggu pembayaran",
					time: "2 hari yang lalu",
					unread: false,
					type: "payment",
					timestamp: new Date(
						Date.now() -
							2 *
								24 *
								60 *
								60 *
								1000
					),
				},
			];
		setNotificationsList(
			initialNotifications
		);

		// Simulasi notifikasi baru setiap 30 detik
		const newNotificationTypes =
			[
				"project",
				"payment",
				"review",
				"consultation",
			];
		const newNotificationTitles =
			{
				project: [
					"Proyek baru",
					"Update proyek",
					"Proyek selesai",
				],
				payment: [
					"Pembayaran diterima",
					"Invoice baru",
					"Pembayaran pending",
				],
				review: [
					"Review baru",
					"Rating positif",
					"Feedback klien",
				],
				consultation: [
					"Konsultasi baru",
					"Meeting request",
					"Follow up",
				],
			};

		const interval =
			setInterval(
				() => {
					const randomType =
						newNotificationTypes[
							Math.floor(
								Math.random() *
									newNotificationTypes.length
							)
						];
					const randomTitle =
						newNotificationTitles[
							randomType
						][
							Math.floor(
								Math.random() *
									newNotificationTitles[
										randomType
									]
										.length
							)
						];

					const newNotification =
						{
							id: Date.now(),
							title: randomTitle,
							message: `Notifikasi otomatis - ${randomTitle.toLowerCase()}`,
							time: "Baru saja",
							unread: true,
							type: randomType,
							timestamp: new Date(),
						};

					setNotificationsList(
						(
							prev
						) => [
							newNotification,
							...prev,
						]
					);
				},
				30000
			); // 30 seconds

		return () =>
			clearInterval(
				interval
			);
	}, []);
	const handleLogout = () => {
		localStorage.removeItem(
			"adminToken"
		);
		localStorage.removeItem(
			"adminUser"
		);
		navigate("/back/login");
	};

	const confirmLogout = () => {
		setShowLogoutModal(false);
		handleLogout();
	};

	// Fungsi untuk menandai notifikasi sebagai sudah dibaca
	const markAsRead = (notificationId) => {
		setNotificationsList(
			(
				prev
			) =>
				prev.map(
					(
						notification
					) =>
						notification.id ===
						notificationId
							? {
									...notification,
									unread: false,
							  }
							: notification
				)
		);
	};

	// Fungsi untuk menandai semua notifikasi sebagai sudah dibaca
	const markAllAsRead = () => {
		setNotificationsList(
			(
				prev
			) =>
				prev.map(
					(
						notification
					) => ({
						...notification,
						unread: false,
					})
				)
		);
	};

	// Fungsi untuk menghapus notifikasi
	const deleteNotification = (notificationId) => {
		setNotificationsList(
			(
				prev
			) =>
				prev.filter(
					(
						notification
					) =>
						notification.id !==
						notificationId
				)
		);
	};
	// Get filtered notifications
	const getFilteredNotifications = () => {
		let filtered = filterUnread
			? notificationsList.filter(
					(
						n
					) =>
						n.unread
			  )
			: notificationsList;

		// Sort by timestamp (newest first)
		return filtered.sort(
			(
				a,
				b
			) =>
				new Date(
					b.timestamp
				) -
				new Date(
					a.timestamp
				)
		);
	};

	// Get unread count
	const unreadCount = notificationsList.filter(
		(n) => n.unread
	).length;

	// Fungsi untuk mendapatkan icon berdasarkan type notifikasi
	const getNotificationIcon = (type) => {
		switch (type) {
			case "project":
				return (
					<svg
						className="w-4 h-4 text-blue-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={
								2
							}
							d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
						/>
					</svg>
				);
			case "payment":
				return (
					<svg
						className="w-4 h-4 text-green-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={
								2
							}
							d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
						/>
					</svg>
				);
			case "review":
				return (
					<svg
						className="w-4 h-4 text-yellow-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={
								2
							}
							d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
						/>
					</svg>
				);
			case "consultation":
				return (
					<svg
						className="w-4 h-4 text-purple-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={
								2
							}
							d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
						/>
					</svg>
				);
			default:
				return (
					<svg
						className="w-4 h-4 text-gray-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={
								2
							}
							d="M15 17h5l-5-5V9a4 4 0 00-8 0v3l-5 5h5a2 2 0 104 0z"
						/>
					</svg>
				);
		}
	};
	return (
		<>
			<header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
				<div className="flex items-center justify-between h-16 px-4 sm:px-6">
					{/* Left side - Mobile menu button & Search */}
					<div className="flex items-center flex-1">
						{/* Mobile menu toggle button */}
						<button
							onClick={
								onMenuToggle
							}
							className="lg:hidden p-2 mr-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={
										2
									}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>

						{/* Search bar */}
						<div className="flex-1 max-w-lg">
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<svg
										className="h-5 w-5 text-gray-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={
												2
											}
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										/>
									</svg>
								</div>{" "}
								<input
									ref={
										searchInputRef
									}
									type="text"
									placeholder="Cari proyek, klien, atau pesan..."
									onFocus={() =>
										setSearchFocused(
											true
										)
									}
									onBlur={() =>
										setSearchFocused(
											false
										)
									}
									className="block w-full pl-10 pr-16 py-2 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
								/>
								{/* Keyboard shortcut indicator */}
								<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
									<kbd
										className={`hidden sm:inline-flex items-center px-2 py-1 text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded transition-opacity duration-200 ${
											searchFocused
												? "opacity-0"
												: "opacity-100"
										}`}
									>
										Ctrl
										K
									</kbd>
								</div>
							</div>
						</div>
					</div>{" "}
					{/* Right side - Actions */}
					<div className="flex items-center space-x-2 sm:space-x-3 ml-3">
						{" "}
						{/* Theme Toggle */}
						<button
							onClick={
								toggleTheme
							}
							className="p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
							title={
								isDark
									? "Switch to Light Mode"
									: "Switch to Dark Mode"
							}
						>
							{isDark ? (
								// Sun icon for light mode
								<svg
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={
											2
										}
										d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								</svg>
							) : (
								// Moon icon for dark mode
								<svg
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={
											2
										}
										d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
									/>
								</svg>
							)}
						</button>{" "}
						{/* Notifications */}
						<div
							className="relative"
							ref={
								notificationsRef
							}
						>
							{" "}
							<button
								onClick={() =>
									setNotificationsOpen(
										!notificationsOpen
									)
								}
								className="p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 relative transition-colors"
							>
								<svg
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={
											2
										}
										d="M15 17h5l-5-5V9a4 4 0 00-8 0v3l-5 5h5a2 2 0 104 0z"
									/>
								</svg>{" "}
								{unreadCount >
									0 && (
									<span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs font-medium flex items-center justify-center ring-2 ring-white dark:ring-gray-800">
										{unreadCount >
										9
											? "9+"
											: unreadCount}
									</span>
								)}
							</button>{" "}
							{/* Notifications Dropdown */}
							{notificationsOpen && (
								<div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
									<div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
										<h3 className="text-sm font-semibold text-gray-900 dark:text-white">
											Notifikasi
										</h3>
										{unreadCount >
											0 && (
											<button
												onClick={
													markAllAsRead
												}
												className="text-xs text-blue-600 hover:text-blue-500 font-medium transition-colors"
											>
												Tandai
												semua
												dibaca
											</button>
										)}
									</div>

									{/* Filter Toggle */}
									<div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
										<button
											onClick={() =>
												setFilterUnread(
													!filterUnread
												)
											}
											className={`text-xs px-3 py-1 rounded-full transition-colors ${
												filterUnread
													? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
													: "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
											}`}
										>
											{filterUnread
												? "Semua notifikasi"
												: "Hanya yang belum dibaca"}
										</button>
									</div>

									<div className="max-h-64 overflow-y-auto">
										{" "}
										{getFilteredNotifications()
											.slice(
												0,
												3
											)
											.map(
												(
													notification
												) => (
													<div
														key={
															notification.id
														}
														onClick={() =>
															markAsRead(
																notification.id
															)
														}
														className={`group px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors ${
															notification.unread
																? "bg-blue-50 dark:bg-blue-900/20"
																: ""
														}`}
													>
														<div className="flex items-start space-x-3">
															<div className="flex-shrink-0 mt-1">
																{getNotificationIcon(
																	notification.type
																)}
															</div>
															<div className="flex-1 min-w-0">
																<p className="text-sm font-medium text-gray-900 dark:text-white truncate">
																	{
																		notification.title
																	}
																</p>
																<p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
																	{
																		notification.message
																	}
																</p>
																<p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
																	{
																		notification.time
																	}
																</p>
															</div>
															<div className="flex items-center space-x-2">
																{notification.unread && (
																	<div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
																)}
																<button
																	onClick={(
																		e
																	) => {
																		e.stopPropagation();
																		deleteNotification(
																			notification.id
																		);
																	}}
																	className="p-1 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
																>
																	<svg
																		className="w-3 h-3"
																		fill="none"
																		viewBox="0 0 24 24"
																		stroke="currentColor"
																	>
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			strokeWidth={
																				2
																			}
																			d="M6 18L18 6M6 6l12 12"
																		/>
																	</svg>
																</button>
															</div>
														</div>
													</div>
												)
											)}
										{getFilteredNotifications()
											.length ===
											0 && (
											<div className="px-4 py-8 text-center">
												<svg
													className="w-8 h-8 text-gray-400 mx-auto mb-2"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={
															2
														}
														d="M15 17h5l-5-5V9a4 4 0 00-8 0v3l-5 5h5a2 2 0 104 0z"
													/>
												</svg>
												<p className="text-sm text-gray-500 dark:text-gray-400">
													{filterUnread
														? "Tidak ada notifikasi belum dibaca"
														: "Tidak ada notifikasi"}
												</p>
											</div>
										)}
									</div>
									<div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
										<button
											onClick={() => {
												setShowAllNotifications(
													true
												);
												setNotificationsOpen(
													false
												);
											}}
											className="text-sm text-blue-600 hover:text-blue-500 font-medium transition-colors"
										>
											Lihat
											semua
											notifikasi
										</button>
									</div>
								</div>
							)}
						</div>{" "}
						{/* Profile Dropdown */}
						<div
							className="relative"
							ref={
								profileRef
							}
						>
							<button
								onClick={() =>
									setProfileOpen(
										!profileOpen
									)
								}
								className="flex items-center space-x-2 p-2 pr-0.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
							>
								<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-sm">
									<span className="text-white font-semibold text-sm">
										{user?.name?.charAt(
											0
										)}
									</span>
								</div>
								<div className="hidden sm:block text-left">
									<p className="text-sm font-medium text-gray-900 dark:text-white">
										{
											user?.name
										}
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-400">
										{user?.role ||
											"Administrator"}
									</p>
								</div>
								<svg
									className="hidden sm:block w-4 h-4 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={
											2
										}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>

							{/* Profile Dropdown Menu */}
							{profileOpen && (
								<div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
									<button
										onClick={() =>
											setProfileOpen(
												false
											)
										}
										className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
									>
										Profil
										Saya
									</button>
									<button
										onClick={() =>
											setProfileOpen(
												false
											)
										}
										className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
									>
										Pengaturan
									</button>
									<button
										onClick={() =>
											setProfileOpen(
												false
											)
										}
										className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
									>
										Bantuan
									</button>
									<div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>{" "}
									<button
										onClick={() => {
											setShowLogoutModal(
												true
											);
											setProfileOpen(
												false
											);
										}}
										className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
									>
										Keluar
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</header>{" "}
			{/* Modal untuk Semua Notifikasi */}
			{showAllNotifications && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col">
						{/* Header Modal */}
						<div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
							<h2 className="text-lg font-semibold text-gray-900 dark:text-white">
								Semua
								Notifikasi
							</h2>
							<button
								onClick={() =>
									setShowAllNotifications(
										false
									)
								}
								className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
							>
								<svg
									className="w-5 h-5 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={
											2
										}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>{" "}
						{/* Content Modal */}
						<div className="flex-1 overflow-y-auto px-6 py-4">
							<div className="space-y-4">
								{" "}
								{notificationsList.map(
									(
										notification
									) => (
										<div
											key={
												notification.id
											}
											onClick={() =>
												markAsRead(
													notification.id
												)
											}
											className={`p-4 rounded-lg border transition-colors cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
												notification.unread
													? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
													: "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
											}`}
										>
											<div className="flex items-start space-x-4">
												<div className="flex-shrink-0 mt-1">
													{getNotificationIcon(
														notification.type
													)}
												</div>
												<div className="flex-1 min-w-0">
													<div className="flex items-center justify-between">
														<h3 className="text-sm font-medium text-gray-900 dark:text-white">
															{
																notification.title
															}
														</h3>
														{notification.unread && (
															<div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
														)}
													</div>
													<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
														{
															notification.message
														}
													</p>
													<p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
														{
															notification.time
														}
													</p>
												</div>
											</div>
										</div>
									)
								)}
							</div>
						</div>
						{/* Footer Modal */}
						<div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">
							<button
								className="text-sm text-blue-600 hover:text-blue-500 font-medium transition-colors"
								onClick={
									markAllAsRead
								}
							>
								Tandai
								semua
								sudah
								dibaca
							</button>
							<button
								onClick={() =>
									setShowAllNotifications(
										false
									)
								}
								className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
							>
								Tutup
							</button>
						</div>
					</div>
				</div>
			)}
			{/* Modal Konfirmasi Logout */}
			{showLogoutModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full animate-in zoom-in-95 duration-200">
						{/* Header Modal */}
						<div className="flex items-center space-x-4 px-6 pt-6 pb-4">
							<div className="flex-shrink-0">
								<div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
									<svg
										className="w-6 h-6 text-red-600 dark:text-red-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={
												2
											}
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
										/>
									</svg>
								</div>
							</div>
							<div className="flex-1 min-w-0">
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
									Konfirmasi
									Logout
								</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
									Apakah
									Anda
									yakin
									ingin
									keluar
									dari
									sistem?
								</p>
							</div>
						</div>

						{/* Content */}
						<div className="px-6 pb-4">
							<div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
								<div className="flex items-start space-x-3">
									<svg
										className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={
												2
											}
											d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<div className="text-sm">
										<p className="text-yellow-800 dark:text-yellow-200 font-medium">
											Informasi
											Penting
										</p>
										<p className="text-yellow-700 dark:text-yellow-300 mt-1">
											Pastikan
											semua
											pekerjaan
											Anda
											telah
											disimpan
											sebelum
											logout.
											Anda
											akan
											diarahkan
											ke
											halaman
											login
											setelah
											logout.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Footer */}
						<div className="flex items-center justify-end space-x-3 px-6 py-4 bg-gray-50 dark:bg-gray-700/50 rounded-b-lg">
							<button
								onClick={() =>
									setShowLogoutModal(
										false
									)
								}
								className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
							>
								Batal
							</button>
							<button
								onClick={
									confirmLogout
								}
								className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors flex items-center space-x-2"
							>
								<svg
									className="w-4 h-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={
											2
										}
										d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
									/>
								</svg>
								<span>
									Ya,
									Logout
								</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
