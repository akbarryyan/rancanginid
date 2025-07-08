import { useState } from "react";
import { useNavigate } from "react-router";

const Header = ({ user, onMenuToggle }) => {
	const navigate = useNavigate();
	const [notificationsOpen, setNotificationsOpen] =
		useState(false);
	const [profileOpen, setProfileOpen] = useState(false);

	const handleLogout = () => {
		localStorage.removeItem(
			"adminToken"
		);
		localStorage.removeItem(
			"adminUser"
		);
		navigate("/back/login");
	};

	const notifications = [
		{
			id: 1,
			title: "Proyek baru diterima",
			message: "Website e-commerce dari PT ABC",
			time: "2 menit yang lalu",
			unread: true,
		},
		{
			id: 2,
			title: "Pembayaran diterima",
			message: "Rp 25.000.000 dari klien XYZ",
			time: "1 jam yang lalu",
			unread: true,
		},
		{
			id: 3,
			title: "Review positif",
			message: "Rating 5 bintang dari Sarah W.",
			time: "3 jam yang lalu",
			unread: false,
		},
	];

	return (
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
							</div>
							<input
								type="text"
								placeholder="Cari proyek, klien, atau pesan..."
								className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
							/>
						</div>
					</div>
				</div>{" "}
				{/* Right side - Actions */}
				<div className="flex items-center space-x-2 sm:space-x-3 ml-3">
					{/* Theme Toggle */}
					<button className="p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors">
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
					</button>{" "}
					{/* Notifications */}
					<div className="relative">
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
							</svg>
							<span className="absolute -top-1 -right-1 block h-3 w-3 rounded-full bg-red-400 ring-2 ring-white dark:ring-gray-800"></span>
						</button>

						{/* Notifications Dropdown */}
						{notificationsOpen && (
							<div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
								<div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
									<h3 className="text-sm font-semibold text-gray-900 dark:text-white">
										Notifikasi
									</h3>
								</div>
								<div className="max-h-64 overflow-y-auto">
									{notifications.map(
										(
											notification
										) => (
											<div
												key={
													notification.id
												}
												className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors ${
													notification.unread
														? "bg-blue-50 dark:bg-blue-900/20"
														: ""
												}`}
											>
												<div className="flex justify-between items-start">
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
													{notification.unread && (
														<div className="w-2 h-2 bg-blue-600 rounded-full mt-1 flex-shrink-0"></div>
													)}
												</div>
											</div>
										)
									)}
								</div>
								<div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
									<button className="text-sm text-blue-600 hover:text-blue-500 font-medium transition-colors">
										Lihat
										semua
										notifikasi
									</button>
								</div>
							</div>
						)}
					</div>{" "}
					{/* Profile Dropdown */}
					<div className="relative">
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
								<div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
								<button
									onClick={
										handleLogout
									}
									className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
								>
									Keluar
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
