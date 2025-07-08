import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";

const Clients = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [editingClient, setEditingClient] =
		useState(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [filterStatus, setFilterStatus] =
		useState("all");
	const [filterType, setFilterType] = useState("all");

	// Sample clients data
	const [clients, setClients] = useState([
		{
			id: 1,
			name: "PT. Maju Bersama",
			email: "info@majubersama.co.id",
			phone: "+62 21 1234 5678",
			company: "PT. Maju Bersama",
			type: "corporate",
			status: "active",
			industry: "Manufacturing",
			joinDate: "2023-01-15",
			lastContact: "2024-01-20",
			totalProjects: 5,
			totalValue: 850000000,
			avatar: "https://ui-avatars.com/api/?name=PT+Maju+Bersama&background=0ea5e9&color=fff",
			address: "Jakarta Pusat, DKI Jakarta",
			notes: "Klien yang sangat kooperatif dan selalu tepat waktu dalam pembayaran.",
		},
		{
			id: 2,
			name: "Sarah Wijaya",
			email: "sarah.wijaya@email.com",
			phone: "+62 812 3456 7890",
			company: "Freelancer",
			type: "individual",
			status: "active",
			industry: "Fashion",
			joinDate: "2023-06-20",
			lastContact: "2024-01-18",
			totalProjects: 3,
			totalValue: 125000000,
			avatar: "https://ui-avatars.com/api/?name=Sarah+Wijaya&background=16a34a&color=fff",
			address: "Bandung, Jawa Barat",
			notes: "Klien individual yang fokus pada e-commerce fashion.",
		},
		{
			id: 3,
			name: "CV. Digital Solution",
			email: "contact@digitalsolution.id",
			phone: "+62 31 9876 5432",
			company: "CV. Digital Solution",
			type: "startup",
			status: "inactive",
			industry: "Technology",
			joinDate: "2022-11-10",
			lastContact: "2023-12-05",
			totalProjects: 2,
			totalValue: 340000000,
			avatar: "https://ui-avatars.com/api/?name=CV+Digital+Solution&background=dc2626&color=fff",
			address: "Surabaya, Jawa Timur",
			notes: "Perlu follow up untuk proyek selanjutnya.",
		},
		{
			id: 4,
			name: "Bambang Kurniawan",
			email: "bambang.k@restaurant.co.id",
			phone: "+62 274 555 1234",
			company: "Restoran Nusantara",
			type: "sme",
			status: "prospect",
			industry: "Food & Beverage",
			joinDate: "2024-01-10",
			lastContact: "2024-01-22",
			totalProjects: 0,
			totalValue: 0,
			avatar: "https://ui-avatars.com/api/?name=Bambang+Kurniawan&background=7c3aed&color=fff",
			address: "Yogyakarta, DIY",
			notes: "Sedang dalam tahap negosiasi untuk website restoran.",
		},
		{
			id: 5,
			name: "PT. Edu Teknologi",
			email: "partnership@edutech.co.id",
			phone: "+62 22 7788 9900",
			company: "PT. Edu Teknologi",
			type: "corporate",
			status: "active",
			industry: "Education",
			joinDate: "2023-08-05",
			lastContact: "2024-01-21",
			totalProjects: 4,
			totalValue: 1200000000,
			avatar: "https://ui-avatars.com/api/?name=PT+Edu+Teknologi&background=ea580c&color=fff",
			address: "Bandung, Jawa Barat",
			notes: "Partner strategis untuk platform pembelajaran online.",
		},
	]);

	const getStatusBadge = (status) => {
		const statusConfig = {
			active: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
			inactive: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400",
			prospect: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
		};
		return (
			statusConfig[
				status
			] ||
			statusConfig.prospect
		);
	};

	const getTypeBadge = (type) => {
		const typeConfig = {
			corporate: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
			startup: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
			sme: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
			individual: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
		};
		return (
			typeConfig[
				type
			] ||
			typeConfig.individual
		);
	};

	const getTypeLabel = (type) => {
		const typeLabels = {
			corporate: "Corporate",
			startup: "Startup",
			sme: "UKM",
			individual: "Individual",
		};
		return (
			typeLabels[
				type
			] ||
			"Individual"
		);
	};

	const getStatusLabel = (status) => {
		const statusLabels = {
			active: "Aktif",
			inactive: "Tidak Aktif",
			prospect: "Prospek",
		};
		return (
			statusLabels[
				status
			] ||
			"Prospek"
		);
	};

	const formatCurrency = (amount) => {
		return new Intl.NumberFormat(
			"id-ID",
			{
				style: "currency",
				currency: "IDR",
				minimumFractionDigits: 0,
			}
		).format(amount);
	};

	// Filter clients based on search and filters
	const filteredClients = clients.filter((client) => {
		const matchesSearch =
			client.name
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase()
				) ||
			client.email
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase()
				) ||
			client.company
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase()
				) ||
			client.industry
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase()
				);

		const matchesStatus =
			filterStatus ===
				"all" ||
			client.status ===
				filterStatus;
		const matchesType =
			filterType ===
				"all" ||
			client.type ===
				filterType;

		return (
			matchesSearch &&
			matchesStatus &&
			matchesType
		);
	});

	const handleAddClient = () => {
		setEditingClient(null);
		setShowModal(true);
	};

	const handleEditClient = (client) => {
		setEditingClient(client);
		setShowModal(true);
	};

	const handleDeleteClient = (clientId) => {
		if (
			window.confirm(
				"Apakah Anda yakin ingin menghapus klien ini?"
			)
		) {
			setClients(
				clients.filter(
					(
						client
					) =>
						client.id !==
						clientId
				)
			);
		}
	};

	const handleSaveClient = (clientData) => {
		if (editingClient) {
			// Update existing client
			setClients(
				clients.map(
					(
						client
					) =>
						client.id ===
						editingClient.id
							? {
									...client,
									...clientData,
							  }
							: client
				)
			);
		} else {
			// Add new client
			const newClient =
				{
					...clientData,
					id:
						Math.max(
							...clients.map(
								(
									c
								) =>
									c.id
							)
						) +
						1,
					joinDate: new Date()
						.toISOString()
						.split(
							"T"
						)[0],
					lastContact: new Date()
						.toISOString()
						.split(
							"T"
						)[0],
					totalProjects: 0,
					totalValue: 0,
					avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
						clientData.name
					)}&background=0ea5e9&color=fff`,
				};
			setClients(
				[
					...clients,
					newClient,
				]
			);
		}
		setShowModal(false);
	};

	const ClientModal = () => {
		const [
			formData,
			setFormData,
		] = useState(
			editingClient || {
				name: "",
				email: "",
				phone: "",
				company: "",
				type: "individual",
				status: "prospect",
				industry: "",
				address: "",
				notes: "",
			}
		);

		const handleSubmit = (
			e
		) => {
			e.preventDefault();
			handleSaveClient(
				formData
			);
		};

		return (
			<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
				<div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
					<div className="p-6 border-b border-gray-200 dark:border-gray-700">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
							{editingClient
								? "Edit Klien"
								: "Tambah Klien Baru"}
						</h3>
					</div>

					<form
						onSubmit={
							handleSubmit
						}
						className="p-6 space-y-6"
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Nama
									Lengkap
								</label>
								<input
									type="text"
									value={
										formData.name
									}
									onChange={(
										e
									) =>
										setFormData(
											{
												...formData,
												name: e
													.target
													.value,
											}
										)
									}
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Email
								</label>
								<input
									type="email"
									value={
										formData.email
									}
									onChange={(
										e
									) =>
										setFormData(
											{
												...formData,
												email: e
													.target
													.value,
											}
										)
									}
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Nomor
									Telepon
								</label>
								<input
									type="tel"
									value={
										formData.phone
									}
									onChange={(
										e
									) =>
										setFormData(
											{
												...formData,
												phone: e
													.target
													.value,
											}
										)
									}
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Perusahaan
								</label>
								<input
									type="text"
									value={
										formData.company
									}
									onChange={(
										e
									) =>
										setFormData(
											{
												...formData,
												company: e
													.target
													.value,
											}
										)
									}
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Tipe
									Klien
								</label>
								<select
									value={
										formData.type
									}
									onChange={(
										e
									) =>
										setFormData(
											{
												...formData,
												type: e
													.target
													.value,
											}
										)
									}
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
								>
									<option value="individual">
										Individual
									</option>
									<option value="sme">
										UKM
									</option>
									<option value="startup">
										Startup
									</option>
									<option value="corporate">
										Corporate
									</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Status
								</label>
								<select
									value={
										formData.status
									}
									onChange={(
										e
									) =>
										setFormData(
											{
												...formData,
												status: e
													.target
													.value,
											}
										)
									}
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
								>
									<option value="prospect">
										Prospek
									</option>
									<option value="active">
										Aktif
									</option>
									<option value="inactive">
										Tidak
										Aktif
									</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Industri
								</label>
								<input
									type="text"
									value={
										formData.industry
									}
									onChange={(
										e
									) =>
										setFormData(
											{
												...formData,
												industry: e
													.target
													.value,
											}
										)
									}
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									placeholder="e.g., Technology, Manufacturing"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Alamat
								</label>
								<input
									type="text"
									value={
										formData.address
									}
									onChange={(
										e
									) =>
										setFormData(
											{
												...formData,
												address: e
													.target
													.value,
											}
										)
									}
									className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
								/>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Catatan
							</label>
							<textarea
								value={
									formData.notes
								}
								onChange={(
									e
								) =>
									setFormData(
										{
											...formData,
											notes: e
												.target
												.value,
										}
									)
								}
								rows={
									3
								}
								className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
								placeholder="Tambahkan catatan tentang klien..."
							/>
						</div>

						<div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
							<button
								type="button"
								onClick={() =>
									setShowModal(
										false
									)
								}
								className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
							>
								Batal
							</button>
							<button
								type="submit"
								className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
							>
								{editingClient
									? "Update"
									: "Simpan"}
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	};

	// Calculate stats
	const stats = {
		total: clients.length,
		active: clients.filter(
			(
				c
			) =>
				c.status ===
				"active"
		).length,
		prospects: clients.filter(
			(
				c
			) =>
				c.status ===
				"prospect"
		).length,
		totalValue: clients.reduce(
			(
				sum,
				c
			) =>
				sum +
				c.totalValue,
			0
		),
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
			/>			<div className="flex-1 min-w-0">
				<Header
					onMenuToggle={() =>
						setSidebarOpen(
							!sidebarOpen
						)
					}
				/>

				<main className="p-4 sm:p-6 max-w-7xl mx-auto w-full overflow-hidden">
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
												d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
											/>
										</svg>
									</div>
									Manajemen
									Klien
								</h1>
								<p className="text-gray-600 dark:text-gray-300">
									Kelola
									informasi
									dan
									hubungan
									dengan
									klien
									Anda
								</p>
							</div>
							<div className="flex gap-3">
								<button
									onClick={
										handleAddClient
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
											d="M12 6v6m0 0v6m0-6h6m-6 0H6"
										/>
									</svg>
									Tambah
									Klien
								</button>
							</div>
						</div>
					</div>

					{/* Stats Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
						<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-400">
										Total
										Klien
									</p>
									<p className="text-2xl font-bold text-gray-900 dark:text-white">
										{
											stats.total
										}
									</p>
								</div>
								<div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
									<svg
										className="w-6 h-6 text-blue-600"
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
											d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-400">
										Klien
										Aktif
									</p>
									<p className="text-2xl font-bold text-gray-900 dark:text-white">
										{
											stats.active
										}
									</p>
								</div>
								<div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
									<svg
										className="w-6 h-6 text-green-600"
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
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm font-medium text-gray-600 dark:text-gray-400">
										Prospek
									</p>
									<p className="text-2xl font-bold text-gray-900 dark:text-white">
										{
											stats.prospects
										}
									</p>
								</div>
								<div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
									<svg
										className="w-6 h-6 text-yellow-600"
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
											d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
										/>
									</svg>
								</div>
							</div>
						</div>						<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
							<div className="flex items-center justify-between">
								<div className="min-w-0 flex-1 mr-4">
									<p className="text-sm font-medium text-gray-600 dark:text-gray-400">
										Total
										Nilai
									</p>
									<p className="text-xl xl:text-2xl font-bold text-gray-900 dark:text-white break-words">
										{formatCurrency(
											stats.totalValue
										)}
									</p>
								</div>
								<div className="flex-shrink-0 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
									<svg
										className="w-6 h-6 text-purple-600"
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
								</div>
							</div>
						</div>
					</div>

					{/* Filters and Search */}
					<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
						<div className="flex flex-col sm:flex-row gap-4">
							<div className="flex-1">
								<div className="relative">
									<svg
										className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
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
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										/>
									</svg>
									<input
										type="text"
										placeholder="Cari klien berdasarkan nama, email, atau perusahaan..."
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
										className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									/>
								</div>
							</div>
							<div className="flex gap-4">
								<select
									value={
										filterStatus
									}
									onChange={(
										e
									) =>
										setFilterStatus(
											e
												.target
												.value
										)
									}
									className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
								>
									<option value="all">
										Semua
										Status
									</option>
									<option value="active">
										Aktif
									</option>
									<option value="inactive">
										Tidak
										Aktif
									</option>
									<option value="prospect">
										Prospek
									</option>
								</select>
								<select
									value={
										filterType
									}
									onChange={(
										e
									) =>
										setFilterType(
											e
												.target
												.value
										)
									}
									className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
								>
									<option value="all">
										Semua
										Tipe
									</option>
									<option value="individual">
										Individual
									</option>
									<option value="sme">
										UKM
									</option>
									<option value="startup">
										Startup
									</option>
									<option value="corporate">
										Corporate
									</option>
								</select>
							</div>
						</div>
					</div>

					{/* Clients Table */}
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
						<div className="overflow-x-auto">
							<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead className="bg-gray-50 dark:bg-gray-700">
									<tr>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Klien
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Kontak
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Tipe
											&
											Status
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Proyek
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Nilai
											Total
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Kontak
											Terakhir
										</th>
										<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Aksi
										</th>
									</tr>
								</thead>
								<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
									{filteredClients.map(
										(
											client
										) => (
											<tr
												key={
													client.id
												}
												className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
											>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<img
															src={
																client.avatar
															}
															alt={
																client.name
															}
															className="w-10 h-10 rounded-full mr-3"
														/>
														<div>
															<div className="text-sm font-medium text-gray-900 dark:text-white">
																{
																	client.name
																}
															</div>
															<div className="text-sm text-gray-500 dark:text-gray-400">
																{
																	client.company
																}
															</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900 dark:text-white">
														{
															client.email
														}
													</div>
													<div className="text-sm text-gray-500 dark:text-gray-400">
														{
															client.phone
														}
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex flex-col gap-1">
														<span
															className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeBadge(
																client.type
															)}`}
														>
															{getTypeLabel(
																client.type
															)}
														</span>
														<span
															className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(
																client.status
															)}`}
														>
															{getStatusLabel(
																client.status
															)}
														</span>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
													{
														client.totalProjects
													}{" "}
													proyek
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
													{formatCurrency(
														client.totalValue
													)}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
													{new Date(
														client.lastContact
													).toLocaleDateString(
														"id-ID"
													)}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
													<div className="flex justify-end gap-2">
														<button
															onClick={() =>
																handleEditClient(
																	client
																)
															}
															className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
														>
															<svg
																className="w-4 h-4"
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
																	d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
																/>
															</svg>
														</button>
														<button
															onClick={() =>
																handleDeleteClient(
																	client.id
																)
															}
															className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors"
														>
															<svg
																className="w-4 h-4"
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
																	d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
																/>
															</svg>
														</button>
													</div>
												</td>
											</tr>
										)
									)}
								</tbody>
							</table>
						</div>

						{filteredClients.length ===
							0 && (
							<div className="text-center py-12">
								<svg
									className="mx-auto h-12 w-12 text-gray-400"
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
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
								<h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
									Tidak
									ada
									klien
									ditemukan
								</h3>
								<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
									Coba
									ubah
									filter
									atau
									tambah
									klien
									baru.
								</p>							</div>
						)}
					</div>
				</main>
			</div>

			{/* Modal */}
			{showModal && (
				<ClientModal />
			)}
		</div>
	);
};

export default Clients;
