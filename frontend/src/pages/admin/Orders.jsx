import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";

const Orders = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [editingOrder, setEditingOrder] =
		useState(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [filterStatus, setFilterStatus] =
		useState("all");
	const [filterPayment, setFilterPayment] =
		useState("all");

	// Sample orders data
	const [orders, setOrders] = useState([
		{
			id: "ORD-001",
			clientName: "PT. Digital Solutions",
			clientEmail: "contact@digitalsolutions.co.id",
			clientPhone: "081234567890",
			package: "Professional",
			service: "Website + CMS",
			amount: 35000000,
			status: "in_progress",
			paymentStatus: "partial",
			paymentMethod: "bank_transfer",
			createdAt: "2024-01-15",
			deadline: "2024-02-29",
			progress: 60,
			notes: "Website sudah 60% selesai, tinggal integrasi CMS",
			requirements: "E-commerce website dengan custom CMS untuk manage produk dan order",
		},
		{
			id: "ORD-002",
			clientName: "CV. Kreatif Nusantara",
			clientEmail: "info@kreatifnusantara.com",
			clientPhone: "082345678901",
			package: "Starter",
			service: "Landing Page",
			amount: 15000000,
			status: "completed",
			paymentStatus: "paid",
			paymentMethod: "bank_transfer",
			createdAt: "2024-01-10",
			deadline: "2024-01-31",
			progress: 100,
			notes: "Project selesai, website sudah live dan training sudah dilakukan",
			requirements: "Landing page untuk company profile dengan design modern",
		},
		{
			id: "ORD-003",
			clientName: "Startup InnoTech",
			clientEmail: "hello@innotech.id",
			clientPhone: "083456789012",
			package: "Enterprise",
			service: "Custom Solution",
			amount: 150000000,
			status: "pending",
			paymentStatus: "unpaid",
			paymentMethod: "bank_transfer",
			createdAt: "2024-01-20",
			deadline: "2024-04-30",
			progress: 0,
			notes: "Menunggu approval final requirements dan down payment",
			requirements: "Platform marketplace dengan mobile app, payment gateway, dan admin dashboard",
		},
		{
			id: "ORD-004",
			clientName: "Toko Online Berkah",
			clientEmail: "admin@berkah-store.com",
			clientPhone: "084567890123",
			package: "Professional",
			service: "E-commerce",
			amount: 45000000,
			status: "cancelled",
			paymentStatus: "refunded",
			paymentMethod: "bank_transfer",
			createdAt: "2024-01-08",
			deadline: "2024-02-15",
			progress: 20,
			notes: "Project dibatalkan karena perubahan strategi bisnis klien",
			requirements: "Online store dengan inventory management dan payment gateway",
		},
	]);

	const [formData, setFormData] = useState({
		clientName: "",
		clientEmail: "",
		clientPhone: "",
		package: "",
		service: "",
		amount: "",
		status: "pending",
		paymentStatus: "unpaid",
		paymentMethod: "bank_transfer",
		deadline: "",
		notes: "",
		requirements: "",
	});

	const packages = [
		"Starter",
		"Professional",
		"Enterprise",
		"Custom",
	];

	// Filter orders
	const filteredOrders = orders.filter((order) => {
		const matchesSearch =
			order.clientName
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase()
				) ||
			order.id
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase()
				) ||
			order.clientEmail
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase()
				);
		const matchesStatus =
			filterStatus ===
				"all" ||
			order.status ===
				filterStatus;
		const matchesPayment =
			filterPayment ===
				"all" ||
			order.paymentStatus ===
				filterPayment;
		return (
			matchesSearch &&
			matchesStatus &&
			matchesPayment
		);
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

		if (editingOrder) {
			setOrders(
				(
					prev
				) =>
					prev.map(
						(
							order
						) =>
							order.id ===
							editingOrder.id
								? {
										...order,
										...formData,
										amount: parseInt(
											formData.amount
										),
										updatedAt: new Date()
											.toISOString()
											.split(
												"T"
											)[0],
								  }
								: order
					)
			);
		} else {
			const newOrder =
				{
					...formData,
					id: `ORD-${String(
						orders.length +
							1
					).padStart(
						3,
						"0"
					)}`,
					amount: parseInt(
						formData.amount
					),
					progress: 0,
					createdAt: new Date()
						.toISOString()
						.split(
							"T"
						)[0],
				};
			setOrders(
				(
					prev
				) => [
					newOrder,
					...prev,
				]
			);
		}

		setFormData({
			clientName: "",
			clientEmail: "",
			clientPhone: "",
			package: "",
			service: "",
			amount: "",
			status: "pending",
			paymentStatus: "unpaid",
			paymentMethod: "bank_transfer",
			deadline: "",
			notes: "",
			requirements: "",
		});
		setEditingOrder(null);
		setShowModal(false);
	};

	const handleEdit = (order) => {
		setEditingOrder(order);
		setFormData({
			clientName: order.clientName,
			clientEmail: order.clientEmail,
			clientPhone: order.clientPhone,
			package: order.package,
			service: order.service,
			amount: order.amount,
			status: order.status,
			paymentStatus: order.paymentStatus,
			paymentMethod: order.paymentMethod,
			deadline: order.deadline,
			notes: order.notes,
			requirements: order.requirements,
		});
		setShowModal(true);
	};

	const handleDelete = (id) => {
		if (
			window.confirm(
				"Yakin ingin menghapus order ini?"
			)
		) {
			setOrders(
				(
					prev
				) =>
					prev.filter(
						(
							order
						) =>
							order.id !==
							id
					)
			);
		}
	};

	const getStatusBadge = (status) => {
		const statusStyles = {
			pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300",
			in_progress: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
			completed: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
			cancelled: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300",
			on_hold: "bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300",
		};
		return (
			statusStyles[
				status
			] ||
			statusStyles.pending
		);
	};

	const getPaymentBadge = (paymentStatus) => {
		const paymentStyles = {
			unpaid: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300",
			partial: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300",
			paid: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
			refunded: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
		};
		return (
			paymentStyles[
				paymentStatus
			] ||
			paymentStyles.unpaid
		);
	};

	const closeModal = () => {
		setShowModal(false);
		setEditingOrder(null);
		setFormData({
			clientName: "",
			clientEmail: "",
			clientPhone: "",
			package: "",
			service: "",
			amount: "",
			status: "pending",
			paymentStatus: "unpaid",
			paymentMethod: "bank_transfer",
			deadline: "",
			notes: "",
			requirements: "",
		});
	};

	// Calculate statistics
	const totalRevenue = orders
		.filter(
			(
				order
			) =>
				order.paymentStatus ===
				"paid"
		)
		.reduce(
			(
				sum,
				order
			) =>
				sum +
				order.amount,
			0
		);

	const inProgressCount = orders.filter(
		(order) =>
			order.status ===
			"in_progress"
	).length;
	const completedCount = orders.filter(
		(order) =>
			order.status ===
			"completed"
	).length;
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
			/>{" "}
			{/* Main Content */}
			<div className="flex-1 min-w-0">
				<Header
					onMenuToggle={() =>
						setSidebarOpen(
							!sidebarOpen
						)
					}
				/>

				<main className="p-4 sm:p-6 max-w-full mx-auto w-full overflow-hidden">
					{/* Page Header */}
					<div className="mb-8">
						<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
							<div className="flex-1">
								<h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
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
												strokeWidth="2"
												d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
											/>
										</svg>
									</div>
									Orders
									Management
								</h1>
								<p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
									Kelola
									pesanan
									dan
									project
									dari
									klien
									dengan
									mudah
								</p>
							</div>
							<div className="flex-shrink-0">
								<button
									onClick={() =>
										setShowModal(
											true
										)
									}
									className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
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
									<span className="hidden sm:inline">
										Tambah
										Order
										Baru
									</span>
									<span className="sm:hidden">
										Tambah
										Order
									</span>
								</button>
							</div>
						</div>
					</div>

					{/* Stats Cards */}
					<div className="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
						<div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
							<div className="flex items-center">
								<div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
									<svg
										className="w-6 h-6 text-blue-600 dark:text-blue-400"
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
									<h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
										{
											orders.length
										}
									</h3>
									<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
										Total
										Orders
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
							<div className="flex items-center">
								<div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
									<svg
										className="w-6 h-6 text-yellow-600 dark:text-yellow-400"
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
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div className="ml-4">
									<h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
										{
											inProgressCount
										}
									</h3>
									<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
										In
										Progress
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
							<div className="flex items-center">
								<div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
									<svg
										className="w-6 h-6 text-green-600 dark:text-green-400"
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
									<h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
										{
											completedCount
										}
									</h3>
									<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
										Completed
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200 col-span-2 xl:col-span-1">
							<div className="flex items-center">
								<div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
									<svg
										className="w-6 h-6 text-purple-600 dark:text-purple-400"
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
									<h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
										Rp{" "}
										{(
											totalRevenue /
											1000000
										).toFixed(
											0
										)}

										M
									</h3>
									<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
										Total
										Revenue
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Filters Section */}
					<div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
						<div className="flex flex-col space-y-4">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Filters
								&
								Search
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div className="relative">
									<input
										type="text"
										placeholder="Cari order, client, atau email..."
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
										className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
									/>
									<svg
										className="w-5 h-5 text-gray-400 absolute left-3 top-4"
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
									className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
								>
									<option value="all">
										Semua
										Status
									</option>
									<option value="pending">
										Pending
									</option>
									<option value="in_progress">
										In
										Progress
									</option>
									<option value="completed">
										Completed
									</option>
									<option value="cancelled">
										Cancelled
									</option>
									<option value="on_hold">
										On
										Hold
									</option>
								</select>

								<select
									value={
										filterPayment
									}
									onChange={(
										e
									) =>
										setFilterPayment(
											e
												.target
												.value
										)
									}
									className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
								>
									<option value="all">
										Semua
										Payment
									</option>
									<option value="unpaid">
										Unpaid
									</option>
									<option value="partial">
										Partial
									</option>
									<option value="paid">
										Paid
									</option>
									<option value="refunded">
										Refunded
									</option>
								</select>
							</div>
						</div>
					</div>

					{/* Desktop Table View */}
					<div className="hidden lg:block bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
						<div className="overflow-x-auto">
							<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead className="bg-gray-50 dark:bg-gray-700/50">
									<tr>
										<th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Order
										</th>
										<th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Client
										</th>
										<th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Package
										</th>
										<th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Amount
										</th>
										<th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Status
										</th>
										<th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Payment
										</th>
										<th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Progress
										</th>
										<th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Actions
										</th>
									</tr>
								</thead>
								<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
									{filteredOrders.map(
										(
											order
										) => (
											<tr
												key={
													order.id
												}
												className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-150"
											>
												<td className="px-6 py-4">
													<div>
														<div className="text-sm font-semibold text-gray-900 dark:text-white">
															{
																order.id
															}
														</div>
														<div className="text-sm text-gray-500 dark:text-gray-400">
															{new Date(
																order.createdAt
															).toLocaleDateString(
																"id-ID"
															)}
														</div>
														<div className="text-xs text-gray-400 dark:text-gray-500">
															Deadline:{" "}
															{new Date(
																order.deadline
															).toLocaleDateString(
																"id-ID"
															)}
														</div>
													</div>
												</td>
												<td className="px-6 py-4">
													<div>
														<div className="text-sm font-medium text-gray-900 dark:text-white">
															{
																order.clientName
															}
														</div>
														<div className="text-sm text-gray-500 dark:text-gray-400">
															{
																order.clientEmail
															}
														</div>
														<div className="text-xs text-gray-400 dark:text-gray-500">
															{
																order.clientPhone
															}
														</div>
													</div>
												</td>
												<td className="px-6 py-4">
													<div>
														<div className="text-sm font-medium text-gray-900 dark:text-white">
															{
																order.package
															}
														</div>
														<div className="text-sm text-gray-500 dark:text-gray-400">
															{
																order.service
															}
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm font-semibold text-gray-900 dark:text-white">
														Rp{" "}
														{(
															order.amount /
															1000000
														).toFixed(
															0
														)}

														M
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<span
														className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusBadge(
															order.status
														)}`}
													>
														{order.status
															.replace(
																"_",
																" "
															)
															.toUpperCase()}
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<span
														className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getPaymentBadge(
															order.paymentStatus
														)}`}
													>
														{order.paymentStatus.toUpperCase()}
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 max-w-[120px]">
															<div
																className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
																style={{
																	width: `${order.progress}%`,
																}}
															></div>
														</div>
														<span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-400">
															{
																order.progress
															}

															%
														</span>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
													<div className="flex items-center justify-end space-x-2">
														<button
															onClick={() =>
																handleEdit(
																	order
																)
															}
															className="text-blue-600 hover:text-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-all duration-200"
															title="Edit Order"
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
																	order.id
																)
															}
															className="text-red-600 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900/20 p-2 rounded-lg transition-all duration-200"
															title="Delete Order"
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

						{filteredOrders.length ===
							0 && (
							<div className="text-center py-16">
								<svg
									className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={
											1.5
										}
										d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
									/>
								</svg>
								<h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
									Tidak
									ada
									order
									ditemukan
								</h3>
								<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
									Tidak
									ada
									order
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

					{/* Mobile Card View */}
					<div className="lg:hidden space-y-4">
						{filteredOrders.map(
							(
								order
							) => (
								<div
									key={
										order.id
									}
									className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5"
								>
									<div className="flex items-start justify-between mb-4">
										<div className="flex-1">
											<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
												{
													order.id
												}
											</h3>
											<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
												{
													order.clientName
												}
											</p>
											<p className="text-xs text-gray-500 dark:text-gray-400">
												{
													order.clientEmail
												}
											</p>
										</div>
										<div className="flex space-x-2 ml-4">
											<button
												onClick={() =>
													handleEdit(
														order
													)
												}
												className="text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-colors duration-200"
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
														order.id
													)
												}
												className="text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 p-2 rounded-lg transition-colors duration-200"
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
									</div>

									<div className="grid grid-cols-2 gap-3 mb-4">
										<div>
											<span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
												Package
											</span>
											<p className="text-sm font-semibold text-gray-900 dark:text-white">
												{
													order.package
												}
											</p>
										</div>
										<div>
											<span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
												Amount
											</span>
											<p className="text-sm font-semibold text-gray-900 dark:text-white">
												Rp{" "}
												{(
													order.amount /
													1000000
												).toFixed(
													0
												)}

												M
											</p>
										</div>
									</div>

									<div className="flex flex-wrap gap-2 mb-4">
										<span
											className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusBadge(
												order.status
											)}`}
										>
											{order.status
												.replace(
													"_",
													" "
												)
												.toUpperCase()}
										</span>
										<span
											className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getPaymentBadge(
												order.paymentStatus
											)}`}
										>
											{order.paymentStatus.toUpperCase()}
										</span>
									</div>

									<div>
										<div className="flex items-center justify-between mb-2">
											<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
												Progress
											</span>
											<span className="text-sm font-semibold text-gray-900 dark:text-white">
												{
													order.progress
												}

												%
											</span>
										</div>
										<div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
											<div
												className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
												style={{
													width: `${order.progress}%`,
												}}
											></div>
										</div>
									</div>

									{order.notes && (
										<div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
											<p className="text-xs text-gray-600 dark:text-gray-400">
												{
													order.notes
												}
											</p>
										</div>
									)}
								</div>
							)
						)}

						{filteredOrders.length ===
							0 && (
							<div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
								<svg
									className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={
											1.5
										}
										d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
									/>
								</svg>
								<h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
									Tidak
									ada
									order
									ditemukan
								</h3>
								<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
									Tidak
									ada
									order
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
				<div className="fixed inset-0 bg-black/50 backdrop-blur-sm overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4">
					<div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
						<div className="p-6 sm:p-8">
							<div className="flex items-center justify-between mb-8">
								<h3 className="text-2xl font-bold text-gray-900 dark:text-white">
									{editingOrder
										? "Edit Order"
										: "Tambah Order Baru"}
								</h3>
								<button
									onClick={
										closeModal
									}
									className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-200"
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
										<label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
											Nama
											Client
											*
										</label>
										<input
											type="text"
											name="clientName"
											value={
												formData.clientName
											}
											onChange={
												handleInputChange
											}
											required
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
											placeholder="Masukkan nama client"
										/>
									</div>

									<div>
										<label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
											Email
											Client
											*
										</label>
										<input
											type="email"
											name="clientEmail"
											value={
												formData.clientEmail
											}
											onChange={
												handleInputChange
											}
											required
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
											placeholder="client@example.com"
										/>
									</div>

									<div>
										<label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
											Telepon
											Client
										</label>
										<input
											type="text"
											name="clientPhone"
											value={
												formData.clientPhone
											}
											onChange={
												handleInputChange
											}
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
											placeholder="081234567890"
										/>
									</div>

									<div>
										<label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
											Package
											*
										</label>
										<select
											name="package"
											value={
												formData.package
											}
											onChange={
												handleInputChange
											}
											required
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
										>
											<option value="">
												Pilih
												package
											</option>
											{packages.map(
												(
													pkg
												) => (
													<option
														key={
															pkg
														}
														value={
															pkg
														}
													>
														{
															pkg
														}
													</option>
												)
											)}
										</select>
									</div>

									<div>
										<label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
											Service
										</label>
										<input
											type="text"
											name="service"
											value={
												formData.service
											}
											onChange={
												handleInputChange
											}
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
											placeholder="Website Development"
										/>
									</div>

									<div>
										<label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
											Amount
											(Rp)
											*
										</label>
										<input
											type="number"
											name="amount"
											value={
												formData.amount
											}
											onChange={
												handleInputChange
											}
											required
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
											placeholder="15000000"
										/>
									</div>

									<div>
										<label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
											Status
										</label>
										<select
											name="status"
											value={
												formData.status
											}
											onChange={
												handleInputChange
											}
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
										>
											<option value="pending">
												Pending
											</option>
											<option value="in_progress">
												In
												Progress
											</option>
											<option value="completed">
												Completed
											</option>
											<option value="cancelled">
												Cancelled
											</option>
											<option value="on_hold">
												On
												Hold
											</option>
										</select>
									</div>

									<div>
										<label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
											Payment
											Status
										</label>
										<select
											name="paymentStatus"
											value={
												formData.paymentStatus
											}
											onChange={
												handleInputChange
											}
											className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
										>
											<option value="unpaid">
												Unpaid
											</option>
											<option value="partial">
												Partial
											</option>
											<option value="paid">
												Paid
											</option>
											<option value="refunded">
												Refunded
											</option>
										</select>
									</div>
								</div>

								<div>
									<label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
										Deadline
									</label>
									<input
										type="date"
										name="deadline"
										value={
											formData.deadline
										}
										onChange={
											handleInputChange
										}
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
									/>
								</div>

								<div>
									<label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
										Notes
									</label>
									<textarea
										name="notes"
										value={
											formData.notes
										}
										onChange={
											handleInputChange
										}
										rows={
											3
										}
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
										placeholder="Catatan tambahan..."
									/>
								</div>

								<div>
									<label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
										Requirements
									</label>
									<textarea
										name="requirements"
										value={
											formData.requirements
										}
										onChange={
											handleInputChange
										}
										rows={
											3
										}
										className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
										placeholder="Deskripsi requirements project..."
									/>
								</div>

								<div className="flex items-center justify-end space-x-4 pt-8 border-t border-gray-200 dark:border-gray-700">
									<button
										type="button"
										onClick={
											closeModal
										}
										className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-all duration-200"
									>
										Batal
									</button>
									<button
										type="submit"
										className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
									>
										{editingOrder
											? "Update Order"
											: "Simpan Order"}
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

export default Orders;
