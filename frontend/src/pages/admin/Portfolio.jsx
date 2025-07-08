import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";

// PortfolioCard Component
const PortfolioCard = ({ item, categoryOptions, onEdit, onDelete }) => {
	const [showActions, setShowActions] = useState(false);
	const [showDeleteModal, setShowDeleteModal] =
		useState(false);

	const handleDeleteClick = () => {
		setShowDeleteModal(true);
		setShowActions(false);
	};

	const confirmDelete = () => {
		onDelete(item.id);
		setShowDeleteModal(false);
	};

	return (
		<>
			<div className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
				{/* Image Section */}
				<div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
					{item.image ? (
						<img
							src={
								item.image
							}
							alt={
								item.title
							}
							className="w-full h-full object-cover"
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center">
							<div className="text-center">
								<svg
									className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={
											1.5
										}
										d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								<span className="text-sm text-gray-500 dark:text-gray-400">
									No
									Image
								</span>
							</div>
						</div>
					)}

					{/* Category Badge */}
					<div className="absolute top-3 left-3">
						<span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600">
							{
								categoryOptions.find(
									(
										cat
									) =>
										cat.value ===
										item.category
								)
									?.label
							}
						</span>
					</div>

					{/* Actions Menu */}
					<div className="absolute top-3 right-3">
						<div className="relative">
							<button
								onClick={() =>
									setShowActions(
										!showActions
									)
								}
								className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-800 transition-colors"
							>
								<svg
									className="w-4 h-4 text-gray-600 dark:text-gray-400"
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
										d="M12 5v.01M12 12v.01M12 19v.01"
									/>
								</svg>
							</button>

							{/* Dropdown Menu */}
							{showActions && (
								<div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
									<button
										onClick={() => {
											onEdit(
												item
											);
											setShowActions(
												false
											);
										}}
										className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2 rounded-t-lg"
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
												d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
											/>
										</svg>
										Edit
									</button>
									<button
										onClick={
											handleDeleteClick
										}
										className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2 rounded-b-lg"
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
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
											/>
										</svg>
										Hapus
									</button>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Content Section */}
				<div className="p-6">
					{/* Title */}
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
						{
							item.title
						}
					</h3>
					{/* Description */}
					<p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
						{
							item.description
						}
					</p>
					{/* Technologies */}
					<div className="flex flex-wrap gap-2 mb-4">
						{item.technologies
							.slice(
								0,
								3
							)
							.map(
								(
									tech,
									index
								) => (
									<span
										key={
											index
										}
										className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-md border border-blue-200 dark:border-blue-800"
									>
										{
											tech
										}
									</span>
								)
							)}
						{item
							.technologies
							.length >
							3 && (
							<span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-md">
								+
								{item
									.technologies
									.length -
									3}{" "}
								more
							</span>
						)}{" "}
					</div>

					{/* Project Links - Compact Icons */}
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							{item.liveUrl && (
								<a
									href={
										item.liveUrl
									}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors group"
									title="Live Demo"
								>
									<div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
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
												d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											/>
										</svg>
									</div>
									<span className="text-sm font-medium">
										Live
										Demo
									</span>
								</a>
							)}

							{item.githubUrl && (
								<a
									href={
										item.githubUrl
									}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors group"
									title="Source Code"
								>
									<div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors">
										<svg
											className="w-4 h-4"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
										</svg>
									</div>
									<span className="text-sm font-medium">
										Source
										Code
									</span>
								</a>
							)}

							{!item.liveUrl &&
								!item.githubUrl && (
									<div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
										<div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
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
													d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
												/>
											</svg>
										</div>
										<span className="text-sm">
											No
											links
											available
										</span>
									</div>
								)}
						</div>{" "}
					</div>
				</div>
			</div>

			{/* Delete Confirmation Modal */}
			{showDeleteModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
						<div className="p-6">
							<div className="flex items-center space-x-4 mb-4">
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
								<div>
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										Hapus
										Portfolio
									</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										Tindakan
										ini
										tidak
										dapat
										dibatalkan
									</p>
								</div>
							</div>

							<div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
								<p className="text-sm text-red-800 dark:text-red-200">
									Apakah
									Anda
									yakin
									ingin
									menghapus
									portfolio{" "}
									<strong>
										"
										{
											item.title
										}

										"
									</strong>

									?
									Data
									yang
									sudah
									dihapus
									tidak
									dapat
									dikembalikan.
								</p>
							</div>

							<div className="flex items-center justify-end space-x-3">
								<button
									onClick={() =>
										setShowDeleteModal(
											false
										)
									}
									className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors"
								>
									Batal
								</button>
								<button
									onClick={
										confirmDelete
									}
									className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
								>
									Ya,
									Hapus
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Click outside handler */}
			{showActions && (
				<div
					className="fixed inset-0 z-0"
					onClick={() =>
						setShowActions(
							false
						)
					}
				/>
			)}
		</>
	);
};

const Portfolio = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [portfolios, setPortfolios] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingItem, setEditingItem] = useState(null);
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		category: "",
		technologies: "",
		image: "",
		liveUrl: "",
		githubUrl: "",
	});

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

		// Load portfolio data (mock)
		setPortfolios([
			{
				id: 1,
				title: "E-commerce Platform",
				description: "Full-stack e-commerce solution dengan React dan Node.js",
				category: "web",
				technologies: [
					"React",
					"Node.js",
					"MongoDB",
				],
				image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
				liveUrl: "https://example.com",
				githubUrl: "https://github.com/example",
				status: "active",
				createdAt: "2024-01-15",
			},
			{
				id: 2,
				title: "Mobile Banking App",
				description: "Aplikasi mobile banking dengan React Native",
				category: "mobile",
				technologies: [
					"React Native",
					"Firebase",
				],
				image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
				liveUrl: "",
				githubUrl: "https://github.com/example2",
				status: "active",
				createdAt: "2024-02-10",
			},
		]);
	}, [navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const portfolioData = {
			...formData,
			technologies: formData.technologies
				.split(
					","
				)
				.map(
					(
						tech
					) =>
						tech.trim()
				),
			id: editingItem
				? editingItem.id
				: Date.now(),
			status: "active",
			createdAt: editingItem
				? editingItem.createdAt
				: new Date()
						.toISOString()
						.split(
							"T"
						)[0],
		};

		if (editingItem) {
			setPortfolios(
				portfolios.map(
					(
						item
					) =>
						item.id ===
						editingItem.id
							? portfolioData
							: item
				)
			);
		} else {
			setPortfolios(
				[
					...portfolios,
					portfolioData,
				]
			);
		}

		resetForm();
	};

	const resetForm = () => {
		setFormData({
			title: "",
			description: "",
			category: "",
			technologies: "",
			image: "",
			liveUrl: "",
			githubUrl: "",
		});
		setEditingItem(null);
		setIsModalOpen(false);
	};

	const handleEdit = (item) => {
		setEditingItem(item);
		setFormData({
			...item,
			technologies: item.technologies.join(
				", "
			),
		});
		setIsModalOpen(true);
	};

	const handleDelete = (id) => {
		if (
			confirm(
				"Apakah Anda yakin ingin menghapus portfolio ini?"
			)
		) {
			setPortfolios(
				portfolios.filter(
					(
						item
					) =>
						item.id !==
						id
				)
			);
		}
	};

	const categoryOptions = [
		{
			value: "web",
			label: "Web Development",
		},
		{
			value: "mobile",
			label: "Mobile App",
		},
		{
			value: "design",
			label: "UI/UX Design",
		},
		{
			value: "other",
			label: "Lainnya",
		},
	];
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
				/>{" "}
				<main className="flex-1 min-w-0 p-4 sm:p-6">
					<div className="max-w-7xl mx-auto w-full">
						<div className="mb-8">
							<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
								<div>
									<h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
										Portfolio
										Management
									</h1>
									<p className="text-gray-600 dark:text-gray-300">
										Kelola
										portfolio
										dan
										showcase
										karya
										Anda
									</p>
								</div>
								<button
									onClick={() =>
										setIsModalOpen(
											true
										)
									}
									className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-150 flex items-center gap-2"
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
											d="M12 4v16m8-8H4"
										/>{" "}
									</svg>
									Tambah
									Portfolio
								</button>
							</div>
						</div>{" "}
						{/* Portfolio Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
							{portfolios.map(
								(
									item
								) => (
									<PortfolioCard
										key={
											item.id
										}
										item={
											item
										}
										categoryOptions={
											categoryOptions
										}
										onEdit={
											handleEdit
										}
										onDelete={
											handleDelete
										}
									/>
								)
							)}
						</div>{" "}
						{portfolios.length ===
							0 && (
							<div className="col-span-full">
								<div className="text-center py-16 px-4">
									<div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
										<svg
											className="w-12 h-12 text-gray-400 dark:text-gray-500"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={
													1.5
												}
												d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
										Belum
										ada
										portfolio
									</h3>
									<p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm mx-auto">
										Mulai
										tambahkan
										karya
										terbaik
										Anda
										ke
										portfolio
										untuk
										menunjukkan
										keahlian
										dan
										pengalaman
									</p>
									<button
										onClick={() =>
											setIsModalOpen(
												true
											)
										}
										className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-150 font-medium inline-flex items-center gap-2"
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
												d="M12 4v16m8-8H4"
											/>
										</svg>
										Tambah
										Portfolio
										Pertama
									</button>{" "}
								</div>
							</div>
						)}
					</div>
				</main>
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
					<div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
						<div className="overflow-y-auto max-h-[90vh]">
							<div className="p-6 border-b border-gray-200 dark:border-gray-700">
								<div className="flex justify-between items-center">
									<h2 className="text-xl font-bold text-gray-900 dark:text-white">
										{editingItem
											? "Edit Portfolio"
											: "Tambah Portfolio"}
									</h2>
									<button
										onClick={
											resetForm
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
								</div>
							</div>{" "}
							<div className="p-6">
								<form
									onSubmit={
										handleSubmit
									}
									className="space-y-6"
								>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="md:col-span-2">
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												Judul
												Portfolio
											</label>
											<input
												type="text"
												value={
													formData.title
												}
												onChange={(
													e
												) =>
													setFormData(
														{
															...formData,
															title: e
																.target
																.value,
														}
													)
												}
												className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
												placeholder="Masukkan judul portfolio"
												required
											/>
										</div>

										<div className="md:col-span-2">
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												Deskripsi
											</label>
											<textarea
												value={
													formData.description
												}
												onChange={(
													e
												) =>
													setFormData(
														{
															...formData,
															description: e
																.target
																.value,
														}
													)
												}
												rows="4"
												className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
												placeholder="Jelaskan tentang portfolio ini"
												required
											/>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												Kategori
											</label>
											<select
												value={
													formData.category
												}
												onChange={(
													e
												) =>
													setFormData(
														{
															...formData,
															category: e
																.target
																.value,
														}
													)
												}
												className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
												required
											>
												<option value="">
													Pilih
													Kategori
												</option>
												{categoryOptions.map(
													(
														option
													) => (
														<option
															key={
																option.value
															}
															value={
																option.value
															}
														>
															{
																option.label
															}
														</option>
													)
												)}
											</select>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												Teknologi
											</label>
											<input
												type="text"
												value={
													formData.technologies
												}
												onChange={(
													e
												) =>
													setFormData(
														{
															...formData,
															technologies: e
																.target
																.value,
														}
													)
												}
												placeholder="React, Node.js, MongoDB"
												className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
												required
											/>
											<p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
												Pisahkan
												dengan
												koma
												untuk
												teknologi
												yang
												berbeda
											</p>
										</div>

										<div className="md:col-span-2">
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												URL
												Gambar
											</label>
											<input
												type="url"
												value={
													formData.image
												}
												onChange={(
													e
												) =>
													setFormData(
														{
															...formData,
															image: e
																.target
																.value,
														}
													)
												}
												placeholder="https://example.com/image.jpg"
												className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
											/>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												Live
												Demo
												URL
											</label>
											<input
												type="url"
												value={
													formData.liveUrl
												}
												onChange={(
													e
												) =>
													setFormData(
														{
															...formData,
															liveUrl: e
																.target
																.value,
														}
													)
												}
												placeholder="https://example.com"
												className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
											/>
										</div>

										<div>
											<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
												GitHub
												URL
											</label>
											<input
												type="url"
												value={
													formData.githubUrl
												}
												onChange={(
													e
												) =>
													setFormData(
														{
															...formData,
															githubUrl: e
																.target
																.value,
														}
													)
												}
												placeholder="https://github.com/username/repo"
												className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
											/>
										</div>
									</div>

									<div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700">
										<button
											type="button"
											onClick={
												resetForm
											}
											className="px-6 py-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-150 font-medium"
										>
											Batal
										</button>
										<button
											type="submit"
											className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-150 font-medium"
										>
											{editingItem
												? "Update Portfolio"
												: "Simpan Portfolio"}
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Portfolio;
