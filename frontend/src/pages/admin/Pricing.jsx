import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";

const Pricing = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [editingPlan, setEditingPlan] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [filterCategory, setFilterCategory] =
		useState("all");
	const [filterStatus, setFilterStatus] =
		useState("all");

	// Sample pricing data
	const [pricingPlans, setPricingPlans] = useState([
		{
			id: 1,
			name: "Starter",
			category: "Website",
			price: "15",
			period: "juta",
			description: "Perfect untuk UMKM dan startup yang ingin memulai presence digital",
			features: [
				"Landing Page Responsive",
				"Domain & Hosting 1 Tahun",
				"SEO Basic Setup",
				"Contact Form Integration",
				"Google Analytics Setup",
				"SSL Certificate",
				"2x Revisi Design",
				"3 Bulan Support",
			],
			timeline: "2-3 minggu",
			status: "active",
			popular: false,
			cta: "Mulai Sekarang",
			orders: 15,
			revenue: 225000000,
		},
		{
			id: 2,
			name: "Professional",
			category: "Website + CMS",
			price: "35",
			period: "juta",
			description: "Solusi lengkap untuk bisnis yang butuh website profesional dengan content management",
			features: [
				"Multi-page Website",
				"Custom CMS Dashboard",
				"Blog/News System",
				"SEO Advanced",
				"Payment Gateway",
				"Admin Training",
				"5x Revisi Design",
				"6 Bulan Support",
				"Performance Optimization",
			],
			timeline: "4-6 minggu",
			status: "active",
			popular: true,
			cta: "Pilih Plan Ini",
			orders: 28,
			revenue: 980000000,
		},
		{
			id: 3,
			name: "Enterprise",
			category: "Custom Solution",
			price: "Custom",
			period: "quote",
			description: "Solusi enterprise dengan fitur advanced dan sistem yang complex",
			features: [
				"Web Application Custom",
				"Mobile App (iOS + Android)",
				"Advanced Dashboard",
				"Third-party Integration",
				"Cloud Infrastructure",
				"DevOps Setup",
				"Unlimited Revisi",
				"1 Tahun Full Support",
				"24/7 Monitoring",
			],
			timeline: "8-16 minggu",
			status: "active",
			popular: false,
			cta: "Konsultasi",
			orders: 5,
			revenue: 750000000,
		},
	]);

	const [formData, setFormData] = useState({
		name: "",
		category: "",
		price: "",
		period: "",
		description: "",
		features: "",
		timeline: "",
		status: "active",
		popular: false,
		cta: "",
	});

	const categories = [
		"Website",
		"Website + CMS",
		"Custom Solution",
		"Mobile App",
		"E-commerce",
		"Maintenance",
	];

	// Filter plans based on search and filters
	const filteredPlans = pricingPlans.filter((plan) => {
		const matchesSearch =
			plan.name
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase()
				) ||
			plan.description
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase()
				) ||
			plan.category
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase()
				);
		const matchesCategory =
			filterCategory ===
				"all" ||
			plan.category ===
				filterCategory;
		const matchesStatus =
			filterStatus ===
				"all" ||
			plan.status ===
				filterStatus;

		return (
			matchesSearch &&
			matchesCategory &&
			matchesStatus
		);
	});

	const handleInputChange = (e) => {
		const {
			name,
			value,
			type,
			checked,
		} = e.target;
		setFormData((prev) => ({
			...prev,
			[name]:
				type ===
				"checkbox"
					? checked
					: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (editingPlan) {
			// Update existing plan
			setPricingPlans(
				(
					prev
				) =>
					prev.map(
						(
							plan
						) =>
							plan.id ===
							editingPlan.id
								? {
										...plan,
										...formData,
										features: formData.features
											.split(
												"\n"
											)
											.filter(
												(
													f
												) =>
													f.trim()
											),
										updatedAt: new Date()
											.toISOString()
											.split(
												"T"
											)[0],
								  }
								: plan
					)
			);
		} else {
			// Create new plan
			const newPlan =
				{
					...formData,
					id: Date.now(),
					features: formData.features
						.split(
							"\n"
						)
						.filter(
							(
								f
							) =>
								f.trim()
						),
					orders: 0,
					revenue: 0,
					createdAt: new Date()
						.toISOString()
						.split(
							"T"
						)[0],
				};
			setPricingPlans(
				(
					prev
				) => [
					newPlan,
					...prev,
				]
			);
		}

		// Reset form and close modal
		setFormData({
			name: "",
			category: "",
			price: "",
			period: "",
			description: "",
			features: "",
			timeline: "",
			status: "active",
			popular: false,
			cta: "",
		});
		setEditingPlan(null);
		setShowModal(false);
	};

	const handleEdit = (plan) => {
		setEditingPlan(plan);
		setFormData({
			name: plan.name,
			category: plan.category,
			price: plan.price,
			period: plan.period,
			description: plan.description,
			features: plan.features.join(
				"\n"
			),
			timeline: plan.timeline,
			status: plan.status,
			popular: plan.popular,
			cta: plan.cta,
		});
		setShowModal(true);
	};

	const handleDelete = (id) => {
		if (
			window.confirm(
				"Yakin ingin menghapus paket ini?"
			)
		) {
			setPricingPlans(
				(
					prev
				) =>
					prev.filter(
						(
							plan
						) =>
							plan.id !==
							id
					)
			);
		}
	};

	const closeModal = () => {
		setShowModal(false);
		setEditingPlan(null);
		setFormData({
			name: "",
			category: "",
			price: "",
			period: "",
			description: "",
			features: "",
			timeline: "",
			status: "active",
			popular: false,
			cta: "",
		});
	};

	const totalRevenue = pricingPlans.reduce(
		(sum, plan) =>
			sum +
			plan.revenue,
		0
	);
	const totalOrders = pricingPlans.reduce(
		(sum, plan) =>
			sum +
			plan.orders,
		0
	);

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

				<main className="p-4 sm:p-6 max-w-7xl mx-auto w-full overflow-hidden">
					{/* Page Header */}
					<div className="mb-6">
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
							<div className="min-w-0 flex-1">
								<h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
									<svg
										className="w-8 h-8 text-indigo-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
										/>
									</svg>
									Manajemen
									Pricing
								</h1>
								<p className="text-gray-600 dark:text-gray-400">
									Kelola
									paket
									layanan
									dan
									harga
									untuk
									klien
								</p>
							</div>
							<div className="mt-4 sm:mt-0">
								<button
									onClick={() =>
										setShowModal(
											true
										)
									}
									className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
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
											strokeWidth="2"
											d="M12 6v6m0 0v6m0-6h6m-6 0H6"
										/>
									</svg>
									Tambah
									Paket
									Baru
								</button>
							</div>
						</div>
					</div>

					{/* Stats Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
						<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
							<div className="flex items-center">
								<div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
									<svg
										className="w-6 h-6 text-indigo-600"
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
								</div>
								<div className="ml-4">
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										{
											pricingPlans.length
										}
									</h3>
									<p className="text-gray-600 dark:text-gray-400 text-sm">
										Total
										Paket
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
							<div className="flex items-center">
								<div className="p-2 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg">
									<svg
										className="w-6 h-6 text-emerald-600"
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
								<div className="ml-4">
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										{
											pricingPlans.filter(
												(
													plan
												) =>
													plan.status ===
													"active"
											)
												.length
										}
									</h3>
									<p className="text-gray-600 dark:text-gray-400 text-sm">
										Paket
										Aktif
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
							<div className="flex items-center">
								<div className="p-2 bg-violet-100 dark:bg-violet-900/20 rounded-lg">
									<svg
										className="w-6 h-6 text-violet-600"
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
								</div>
								<div className="ml-4">
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										{
											totalOrders
										}
									</h3>
									<p className="text-gray-600 dark:text-gray-400 text-sm">
										Total
										Orders
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
							<div className="flex items-center">
								<div className="p-2 bg-amber-100 dark:bg-amber-900/20 rounded-lg">
									<svg
										className="w-6 h-6 text-amber-600"
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
								<div className="ml-4">
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										Rp{" "}
										{(
											totalRevenue /
											1000000000
										).toFixed(
											1
										)}

										M
									</h3>
									<p className="text-gray-600 dark:text-gray-400 text-sm">
										Total
										Revenue
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Controls */}
					<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
						<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
							<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
								<div className="relative">
									<input
										type="text"
										placeholder="Cari paket..."
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
										className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									/>
									<svg
										className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
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
								</div>

								<select
									value={
										filterCategory
									}
									onChange={(
										e
									) =>
										setFilterCategory(
											e
												.target
												.value
										)
									}
									className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
								>
									<option value="all">
										Semua
										Kategori
									</option>
									{categories.map(
										(
											category
										) => (
											<option
												key={
													category
												}
												value={
													category
												}
											>
												{
													category
												}
											</option>
										)
									)}
								</select>

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
									className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
								>
									<option value="all">
										Semua
										Status
									</option>
									<option value="active">
										Aktif
									</option>
									<option value="inactive">
										Nonaktif
									</option>
								</select>
							</div>
						</div>
					</div>

					{/* Pricing Plans Table */}
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
						<div className="p-6 border-b border-gray-200 dark:border-gray-700">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Paket
								Pricing
							</h3>
						</div>
						<div className="overflow-x-auto">
							<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead className="bg-gray-50 dark:bg-gray-700">
									<tr>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Paket
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Harga
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Timeline
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Orders
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Status
										</th>
										<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Aksi
										</th>
									</tr>
								</thead>
								<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
									{filteredPlans.map(
										(
											plan
										) => (
											<tr
												key={
													plan.id
												}
												className="hover:bg-gray-50 dark:hover:bg-gray-700"
											>
												<td className="px-6 py-4">
													<div className="flex items-center">
														<div>
															<div className="flex items-center">
																<div className="text-sm font-medium text-gray-900 dark:text-white">
																	{
																		plan.name
																	}
																</div>
																{plan.popular && (
																	<span className="ml-2 px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400 rounded-full">
																		Popular
																	</span>
																)}
															</div>
															<div className="text-sm text-gray-500 dark:text-gray-400">
																{
																	plan.category
																}
															</div>
															<div className="text-xs text-gray-400 dark:text-gray-500 mt-1 max-w-xs truncate">
																{
																	plan.description
																}
															</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm font-medium text-gray-900 dark:text-white">
														{plan.price ===
														"Custom"
															? "Custom"
															: `Rp ${plan.price} ${plan.period}`}
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
													{
														plan.timeline
													}
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900 dark:text-white">
														{
															plan.orders
														}
													</div>
													<div className="text-xs text-gray-500 dark:text-gray-400">
														{plan.revenue >
															0 &&
															`Rp ${(
																plan.revenue /
																1000000
															).toFixed(
																0
															)}M`}
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<span
														className={`px-2 py-1 text-xs font-medium rounded-full ${
															plan.status ===
															"active"
																? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400"
																: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
														}`}
													>
														{
															plan.status
														}
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
													<div className="flex items-center justify-end space-x-2">
														<button
															onClick={() =>
																handleEdit(
																	plan
																)
															}
															className="text-indigo-600 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 p-2 rounded-lg transition-colors"
															title="Edit"
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
																handleDelete(
																	plan.id
																)
															}
															className="text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 p-2 rounded-lg transition-colors"
															title="Hapus"
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

						{filteredPlans.length ===
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
										d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
									/>
								</svg>
								<h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
									Tidak
									ada
									paket
									ditemukan
								</h3>
								<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
									Belum
									ada
									paket
									yang
									sesuai
									dengan
									filter
									yang
									dipilih.
								</p>
							</div>
						)}
					</div>
				</main>
			</div>

			{/* Modal Form */}
			{showModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
						<div className="p-6">
							<div className="flex items-center justify-between mb-6">
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
									{editingPlan
										? "Edit Paket"
										: "Tambah Paket Baru"}
								</h3>
								<button
									onClick={
										closeModal
									}
									className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
								>
									<svg
										className="w-6 h-6"
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
							</div>

							<form
								onSubmit={
									handleSubmit
								}
								className="space-y-6"
							>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Nama
											Paket
											*
										</label>
										<input
											type="text"
											name="name"
											value={
												formData.name
											}
											onChange={
												handleInputChange
											}
											required
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
											placeholder="Masukkan nama paket"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Kategori
											*
										</label>
										<select
											name="category"
											value={
												formData.category
											}
											onChange={
												handleInputChange
											}
											required
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
										>
											<option value="">
												Pilih
												kategori
											</option>
											{categories.map(
												(
													category
												) => (
													<option
														key={
															category
														}
														value={
															category
														}
													>
														{
															category
														}
													</option>
												)
											)}
										</select>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Harga
											*
										</label>
										<input
											type="text"
											name="price"
											value={
												formData.price
											}
											onChange={
												handleInputChange
											}
											required
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
											placeholder="15 atau Custom"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Timeline
										</label>
										<input
											type="text"
											name="timeline"
											value={
												formData.timeline
											}
											onChange={
												handleInputChange
											}
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
											placeholder="2-3 minggu"
										/>
									</div>

									<div className="md:col-span-2">
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Deskripsi
											*
										</label>
										<textarea
											name="description"
											value={
												formData.description
											}
											onChange={
												handleInputChange
											}
											required
											rows="3"
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
											placeholder="Deskripsi singkat paket"
										/>
									</div>

									<div className="md:col-span-2">
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Fitur
											*
										</label>
										<textarea
											name="features"
											value={
												formData.features
											}
											onChange={
												handleInputChange
											}
											required
											rows="8"
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
											placeholder="Masukkan satu fitur per baris&#10;Landing Page Responsive&#10;Domain & Hosting 1 Tahun&#10;SEO Basic Setup"
										/>
									</div>
								</div>

								<div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
									<button
										type="button"
										onClick={
											closeModal
										}
										className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
									>
										Batal
									</button>
									<button
										type="submit"
										className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
									>
										{editingPlan
											? "Update Paket"
											: "Simpan Paket"}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Pricing;
