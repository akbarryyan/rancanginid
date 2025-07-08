import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";

const Settings = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("general");
	const [settings, setSettings] = useState({
		// General Settings
		siteName: "Rancangin",
		siteDescription: "Digital Agency & IT Solutions",
		contactEmail: "hello@rancangin.id",
		contactPhone: "+62 812 3456 7890",
		address: "Jakarta, Indonesia",

		// Appearance Settings
		theme: "light",
		primaryColor: "#0284c7",
		secondaryColor: "#64748b",

		// Notification Settings
		emailNotifications: true,
		smsNotifications: false,
		pushNotifications: true,
		marketingEmails: false,

		// Security Settings
		twoFactorAuth: false,
		loginAttempts: 5,
		sessionTimeout: 30,

		// Integration Settings
		googleAnalytics: "",
		facebookPixel: "",
		whatsappNumber: "+62 812 3456 7890",

		// Business Settings
		currency: "IDR",
		timezone: "Asia/Jakarta",
		dateFormat: "DD/MM/YYYY",
		language: "id",
	});

	const handleSettingChange = (section, key, value) => {
		setSettings((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	const handleSave = () => {
		// Simulate saving settings
		console.log(
			"Saving settings:",
			settings
		);
		// Show success message
		alert(
			"Pengaturan berhasil disimpan!"
		);
	};

	const tabs = [
		{
			id: "general",
			name: "Umum",
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
		},
		{
			id: "appearance",
			name: "Tampilan",
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
						d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
					/>
				</svg>
			),
		},
		{
			id: "notifications",
			name: "Notifikasi",
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
						d="M15 17h5l-5-5V9a4 4 0 00-8 0v3l-5 5h5a2 2 0 104 0z"
					/>
				</svg>
			),
		},
		{
			id: "security",
			name: "Keamanan",
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
						d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
					/>
				</svg>
			),
		},
		{
			id: "integrations",
			name: "Integrasi",
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
						d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
					/>
				</svg>
			),
		},
		{
			id: "business",
			name: "Bisnis",
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
						d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
					/>
				</svg>
			),
		},
	];

	const renderTabContent = () => {
		switch (activeTab) {
			case "general":
				return (
					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
								Informasi
								Umum
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Nama
										Situs
									</label>
									<input
										type="text"
										value={
											settings.siteName
										}
										onChange={(
											e
										) =>
											handleSettingChange(
												"general",
												"siteName",
												e
													.target
													.value
											)
										}
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Email
										Kontak
									</label>
									<input
										type="email"
										value={
											settings.contactEmail
										}
										onChange={(
											e
										) =>
											handleSettingChange(
												"general",
												"contactEmail",
												e
													.target
													.value
											)
										}
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Nomor
										Telepon
									</label>
									<input
										type="text"
										value={
											settings.contactPhone
										}
										onChange={(
											e
										) =>
											handleSettingChange(
												"general",
												"contactPhone",
												e
													.target
													.value
											)
										}
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Alamat
									</label>
									<input
										type="text"
										value={
											settings.address
										}
										onChange={(
											e
										) =>
											handleSettingChange(
												"general",
												"address",
												e
													.target
													.value
											)
										}
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									/>
								</div>
								<div className="md:col-span-2">
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Deskripsi
										Situs
									</label>
									<textarea
										value={
											settings.siteDescription
										}
										onChange={(
											e
										) =>
											handleSettingChange(
												"general",
												"siteDescription",
												e
													.target
													.value
											)
										}
										rows="3"
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
									/>
								</div>
							</div>
						</div>
					</div>
				);

			case "appearance":
				return (
					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
								Pengaturan
								Tampilan
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Tema
									</label>
									<select
										value={
											settings.theme
										}
										onChange={(
											e
										) =>
											handleSettingChange(
												"appearance",
												"theme",
												e
													.target
													.value
											)
										}
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									>
										<option value="light">
											Terang
										</option>
										<option value="dark">
											Gelap
										</option>
										<option value="auto">
											Otomatis
										</option>
									</select>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Warna
										Primer
									</label>
									<input
										type="color"
										value={
											settings.primaryColor
										}
										onChange={(
											e
										) =>
											handleSettingChange(
												"appearance",
												"primaryColor",
												e
													.target
													.value
											)
										}
										className="w-full h-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									/>
								</div>
							</div>
						</div>
					</div>
				);

			case "notifications":
				return (
					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
								Pengaturan
								Notifikasi
							</h3>
							<div className="space-y-4">
								{[
									{
										key: "emailNotifications",
										label: "Notifikasi Email",
										desc: "Terima notifikasi melalui email",
									},
									{
										key: "smsNotifications",
										label: "Notifikasi SMS",
										desc: "Terima notifikasi melalui SMS",
									},
									{
										key: "pushNotifications",
										label: "Push Notifications",
										desc: "Terima notifikasi push browser",
									},
									{
										key: "marketingEmails",
										label: "Email Marketing",
										desc: "Terima email promosi dan penawaran",
									},
								].map(
									(
										item
									) => (
										<div
											key={
												item.key
											}
											className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
										>
											<div>
												<h4 className="text-sm font-medium text-gray-900 dark:text-white">
													{
														item.label
													}
												</h4>
												<p className="text-sm text-gray-500 dark:text-gray-400">
													{
														item.desc
													}
												</p>
											</div>
											<button
												onClick={() =>
													handleSettingChange(
														"notifications",
														item.key,
														!settings[
															item
																.key
														]
													)
												}
												className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
													settings[
														item
															.key
													]
														? "bg-blue-600"
														: "bg-gray-200 dark:bg-gray-600"
												}`}
											>
												<span
													className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
														settings[
															item
																.key
														]
															? "translate-x-6"
															: "translate-x-1"
													}`}
												/>
											</button>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				);

			case "security":
				return (
					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
								Pengaturan
								Keamanan
							</h3>
							<div className="space-y-6">
								<div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
									<div>
										<h4 className="text-sm font-medium text-gray-900 dark:text-white">
											Two-Factor
											Authentication
										</h4>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Tambahan
											keamanan
											dengan
											verifikasi
											2
											langkah
										</p>
									</div>
									<button
										onClick={() =>
											handleSettingChange(
												"security",
												"twoFactorAuth",
												!settings.twoFactorAuth
											)
										}
										className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
											settings.twoFactorAuth
												? "bg-blue-600"
												: "bg-gray-200 dark:bg-gray-600"
										}`}
									>
										<span
											className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
												settings.twoFactorAuth
													? "translate-x-6"
													: "translate-x-1"
											}`}
										/>
									</button>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Maksimal
											Percobaan
											Login
										</label>
										<input
											type="number"
											value={
												settings.loginAttempts
											}
											onChange={(
												e
											) =>
												handleSettingChange(
													"security",
													"loginAttempts",
													parseInt(
														e
															.target
															.value
													)
												)
											}
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Session
											Timeout
											(menit)
										</label>
										<input
											type="number"
											value={
												settings.sessionTimeout
											}
											onChange={(
												e
											) =>
												handleSettingChange(
													"security",
													"sessionTimeout",
													parseInt(
														e
															.target
															.value
													)
												)
											}
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				);

			case "integrations":
				return (
					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
								Pengaturan
								Integrasi
							</h3>
							<div className="space-y-6">
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Google
										Analytics
										ID
									</label>
									<input
										type="text"
										value={
											settings.googleAnalytics
										}
										onChange={(
											e
										) =>
											handleSettingChange(
												"integrations",
												"googleAnalytics",
												e
													.target
													.value
											)
										}
										placeholder="G-XXXXXXXXXX"
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Facebook
										Pixel
										ID
									</label>
									<input
										type="text"
										value={
											settings.facebookPixel
										}
										onChange={(
											e
										) =>
											handleSettingChange(
												"integrations",
												"facebookPixel",
												e
													.target
													.value
											)
										}
										placeholder="123456789012345"
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										WhatsApp
										Business
										Number
									</label>
									<input
										type="text"
										value={
											settings.whatsappNumber
										}
										onChange={(
											e
										) =>
											handleSettingChange(
												"integrations",
												"whatsappNumber",
												e
													.target
													.value
											)
										}
										placeholder="+62 812 3456 7890"
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									/>
								</div>
							</div>
						</div>
					</div>
				);

			case "business":
				return (
					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
								Pengaturan
								Bisnis
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Mata
										Uang
									</label>
									<select
										value={
											settings.currency
										}
										onChange={(
											e
										) =>
											handleSettingChange(
												"business",
												"currency",
												e
													.target
													.value
											)
										}
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									>
										<option value="IDR">
											IDR
											-
											Rupiah
										</option>
										<option value="USD">
											USD
											-
											US
											Dollar
										</option>
										<option value="EUR">
											EUR
											-
											Euro
										</option>
									</select>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Zona
										Waktu
									</label>
									<select
										value={
											settings.timezone
										}
										onChange={(
											e
										) =>
											handleSettingChange(
												"business",
												"timezone",
												e
													.target
													.value
											)
										}
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									>
										<option value="Asia/Jakarta">
											Asia/Jakarta
											(WIB)
										</option>
										<option value="Asia/Makassar">
											Asia/Makassar
											(WITA)
										</option>
										<option value="Asia/Jayapura">
											Asia/Jayapura
											(WIT)
										</option>
									</select>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Format
										Tanggal
									</label>
									<select
										value={
											settings.dateFormat
										}
										onChange={(
											e
										) =>
											handleSettingChange(
												"business",
												"dateFormat",
												e
													.target
													.value
											)
										}
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									>
										<option value="DD/MM/YYYY">
											DD/MM/YYYY
										</option>
										<option value="MM/DD/YYYY">
											MM/DD/YYYY
										</option>
										<option value="YYYY-MM-DD">
											YYYY-MM-DD
										</option>
									</select>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Bahasa
									</label>
									<select
										value={
											settings.language
										}
										onChange={(
											e
										) =>
											handleSettingChange(
												"business",
												"language",
												e
													.target
													.value
											)
										}
										className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									>
										<option value="id">
											Bahasa
											Indonesia
										</option>
										<option value="en">
											English
										</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				);

			default:
				return null;
		}
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
					onMenuToggle={() =>
						setSidebarOpen(
							!sidebarOpen
						)
					}
				/>

				<div className="p-4 sm:p-6 lg:p-8 max-w-full overflow-hidden">
					{/* Page Header */}
					<div className="mb-8">
						<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
							<div className="min-w-0 flex-1">
								<h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3 truncate">
									<div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
										<svg
											className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400"
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
									</div>
									Pengaturan
								</h1>
								<p className="text-gray-600 dark:text-gray-300">
									Kelola
									pengaturan
									aplikasi
									dan
									konfigurasi
									sistem
								</p>
							</div>
							<div className="flex gap-3">
								<button
									onClick={
										handleSave
									}
									className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
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
											d="M5 13l4 4L19 7"
										/>
									</svg>
									Simpan
									Perubahan
								</button>
							</div>
						</div>
					</div>

					{/* Settings Content */}
					<div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
						{/* Settings Navigation */}
						<div className="xl:col-span-1">
							<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-1">
								<nav className="space-y-1">
									{tabs.map(
										(
											tab
										) => (
											<button
												key={
													tab.id
												}
												onClick={() =>
													setActiveTab(
														tab.id
													)
												}
												className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
													activeTab ===
													tab.id
														? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
														: "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
												}`}
											>
												<span className="mr-3">
													{
														tab.icon
													}
												</span>
												{
													tab.name
												}
											</button>
										)
									)}
								</nav>
							</div>
						</div>

						{/* Settings Content */}
						<div className="xl:col-span-3">
							<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
								{renderTabContent()}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
