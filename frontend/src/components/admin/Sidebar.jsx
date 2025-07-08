import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

const Sidebar = ({ isOpen, onToggle }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [showLogoutModal, setShowLogoutModal] =
		useState(false);

	// Use prop or internal state for sidebar visibility
	const isSidebarOpen =
		isOpen !== undefined
			? isOpen
			: sidebarOpen;
	const toggleSidebar =
		onToggle ||
		(() =>
			setSidebarOpen(
				!sidebarOpen
			));

	// Handle Escape key for logout modal
	useEffect(() => {
		const handleKeyDown = (
			event
		) => {
			if (
				event.key ===
				"Escape"
			) {
				setShowLogoutModal(
					false
				);
			}
		};

		// Add event listener when modal is open
		if (showLogoutModal) {
			document.addEventListener(
				"keydown",
				handleKeyDown
			);
		}

		// Cleanup event listener
		return () => {
			document.removeEventListener(
				"keydown",
				handleKeyDown
			);
		};
	}, [showLogoutModal]);

	// Get active menu from current path
	const getActiveMenu = () => {
		const path =
			location.pathname;
		if (
			path.includes(
				"dashboard"
			)
		)
			return "dashboard";
		if (
			path.includes(
				"portfolio"
			)
		)
			return "portfolio";
		if (path.includes("blog"))
			return "blog";
		if (
			path.includes(
				"pricing"
			)
		)
			return "pricing";
		if (
			path.includes(
				"messages"
			)
		)
			return "messages";
		if (path.includes("orders"))
			return "orders";
		if (
			path.includes(
				"clients"
			)
		)
			return "clients";
		if (
			path.includes(
				"analytics"
			)
		)
			return "analytics";
		if (
			path.includes(
				"settings"
			)
		)
			return "settings";
		return "dashboard";
	};

	const activeMenu = getActiveMenu();

	const menuItems = [
		{
			id: "dashboard",
			name: "Dashboard",
			icon: (
				<svg
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={
							2
						}
						d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={
							2
						}
						d="M8 5a2 2 0 012-2h4a2 2 0 012 2v1H8V5z"
					/>
				</svg>
			),
			path: "/back/dashboard",
		},
		{
			id: "portfolio",
			name: "Portfolio",
			icon: (
				<svg
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
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
			),
			path: "/back/portfolio",
		},
		{
			id: "blog",
			name: "Blog",
			icon: (
				<svg
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={
							2
						}
						d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				</svg>
			),
			path: "/back/blog",
		},
		{
			id: "pricing",
			name: "Pricing",
			icon: (
				<svg
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
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
			),
			path: "/back/pricing",
		},
		{
			id: "messages",
			name: "Messages",
			icon: (
				<svg
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={
							2
						}
						d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			),
			path: "/back/messages",
			badge: "12",
		},
		{
			id: "orders",
			name: "Orders",
			icon: (
				<svg
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={
							2
						}
						d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
					/>
				</svg>
			),
			path: "/back/orders",
			badge: "5",
		},
		{
			id: "clients",
			name: "Clients",
			icon: (
				<svg
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={
							2
						}
						d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
					/>
				</svg>
			),
			path: "/back/clients",
		},
		{
			id: "analytics",
			name: "Analytics",
			icon: (
				<svg
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={
							2
						}
						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
					/>
				</svg>
			),
			path: "/back/analytics",
		},
		{
			id: "settings",
			name: "Settings",
			icon: (
				<svg
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={
							2
						}
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={
							2
						}
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			),
			path: "/back/settings",
		},
	];
	const handleMenuClick = (item) => {
		navigate(item.path);
		if (onToggle) {
			onToggle(); // Close mobile sidebar after navigation
		} else {
			setSidebarOpen(
				false
			);
		}
	};
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
	return (
		<>
			{/* Mobile backdrop */}
			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
					onClick={
						toggleSidebar
					}
				/>
			)}{" "}
			{/* Sidebar */}
			<div
				className={`fixed inset-y-0 left-0 z-50 w-60 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:shadow-none border-r border-gray-200 dark:border-gray-700 ${
					isSidebarOpen
						? "translate-x-0"
						: "-translate-x-full"
				}`}
			>
				{/* Sidebar Content Container */}
				<div className="flex flex-col h-full">
					{/* Header with Close Button */}
					<div className="relative">
						{" "}
						{/* Mobile Close Button */}
						<button
							onClick={
								toggleSidebar
							}
							className="lg:hidden absolute top-3 right-3 z-10 p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300 transition-colors"
						>
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
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
						{/* Logo */}
						<div className="h-16 px-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center">
							<div className="flex items-center">
								<div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-md">
									<svg
										className="w-5 h-5 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={
												2
											}
											d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
										/>
									</svg>
								</div>
								<span className="ml-3 text-lg font-bold text-white">
									Rancangin
								</span>
							</div>
						</div>
					</div>
					{/* Navigation */}
					<nav className="flex-1 px-4 py-6 overflow-y-auto">
						<div className="space-y-2">
							{menuItems.map(
								(
									item
								) => (
									<button
										key={
											item.id
										}
										onClick={() =>
											handleMenuClick(
												item
											)
										}
										className={`group flex items-center w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
											activeMenu ===
											item.id
												? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 shadow-sm border border-blue-200 dark:border-blue-700"
												: "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-sm"
										}`}
									>
										<span className="mr-3 flex-shrink-0">
											{
												item.icon
											}
										</span>
										<span className="flex-1 text-left">
											{
												item.name
											}
										</span>
										{item.badge && (
											<span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full min-w-[20px] text-center">
												{
													item.badge
												}
											</span>
										)}
									</button>
								)
							)}
						</div>
					</nav>
					{/* User Section */}
					<div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
						<div className="mb-3 px-4 py-2">
							<div className="flex items-center">
								<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
									<span className="text-white text-sm font-medium">
										A
									</span>
								</div>
								<div className="ml-3">
									<p className="text-sm font-medium text-gray-900 dark:text-white">
										Admin
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-400">
										Administrator
									</p>
								</div>
							</div>
						</div>{" "}
						<button
							onClick={() =>
								setShowLogoutModal(
									true
								)
							}
							className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 transition-all duration-200 hover:shadow-sm"
						>
							<svg
								className="w-5 h-5 mr-3"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
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
								Logout
							</span>
						</button>{" "}
					</div>{" "}
				</div>
			</div>
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

export default Sidebar;
