import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";

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
				/>

				<main className="p-4 sm:p-6 max-w-7xl mx-auto w-full overflow-hidden">
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
								<div
									key={
										item.id
									}
									className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-200"
								>
									<div className="aspect-video bg-gray-200 dark:bg-gray-700">
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
												<span className="text-gray-400 dark:text-gray-500">
													No
													Image
												</span>
											</div>
										)}
									</div>

									<div className="p-6">
										<div className="flex justify-between items-start mb-3">
											<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
												{
													item.title
												}
											</h3>
											<span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full dark:bg-blue-900 dark:text-blue-300">
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

										<p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
											{
												item.description
											}
										</p>

										<div className="flex flex-wrap gap-1 mb-4">
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
															className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
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
												<span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
													+
													{item
														.technologies
														.length -
														3}
												</span>
											)}
										</div>

										<div className="flex justify-between items-center">
											<div className="flex space-x-2">
												{item.liveUrl && (
													<a
														href={
															item.liveUrl
														}
														target="_blank"
														rel="noopener noreferrer"
														className="text-blue-600 hover:text-blue-800 text-sm"
													>
														🔗
														Live
													</a>
												)}
												{item.githubUrl && (
													<a
														href={
															item.githubUrl
														}
														target="_blank"
														rel="noopener noreferrer"
														className="text-gray-600 hover:text-gray-800 text-sm"
													>
														📁
														Code
													</a>
												)}
											</div>

											<div className="flex space-x-2">
												<button
													onClick={() =>
														handleEdit(
															item
														)
													}
													className="text-blue-600 hover:text-blue-800 text-sm"
												>
													Edit
												</button>
												<button
													onClick={() =>
														handleDelete(
															item.id
														)
													}
													className="text-red-600 hover:text-red-800 text-sm"
												>
													Hapus
												</button>
											</div>
										</div>
									</div>
								</div>
							)
						)}
					</div>
					{portfolios.length ===
						0 && (
						<div className="text-center py-12">
							<div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">
								📁
							</div>
							<h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
								Belum
								ada
								portfolio
							</h3>
							<p className="text-gray-500 dark:text-gray-400 mb-4">
								Mulai
								tambahkan
								karya
								terbaik
								Anda
								ke
								portfolio
							</p>
							<button
								onClick={() =>
									setIsModalOpen(
										true
									)
								}
								className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-150"
							>
								Tambah
								Portfolio
								Pertama
							</button>
						</div>
					)}
				</main>
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
					<div className="bg-white dark:bg-secondary-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
						<div className="p-6">
							<div className="flex justify-between items-center mb-6">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									{editingItem
										? "Edit Portfolio"
										: "Tambah Portfolio"}
								</h2>
								<button
									onClick={
										resetForm
									}
									className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
								>
									✕
								</button>
							</div>

							<form
								onSubmit={
									handleSubmit
								}
								className="space-y-4"
							>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Judul
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
										className="w-full px-3 py-2 border border-gray-300 dark:border-secondary-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-gray-900 dark:text-white"
										required
									/>
								</div>

								<div>
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
										rows="3"
										className="w-full px-3 py-2 border border-gray-300 dark:border-secondary-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-gray-900 dark:text-white"
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
										className="w-full px-3 py-2 border border-gray-300 dark:border-secondary-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-gray-900 dark:text-white"
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
										(pisahkan
										dengan
										koma)
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
										className="w-full px-3 py-2 border border-gray-300 dark:border-secondary-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-gray-900 dark:text-white"
										required
									/>
								</div>

								<div>
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
										className="w-full px-3 py-2 border border-gray-300 dark:border-secondary-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-gray-900 dark:text-white"
									/>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Live
											URL
											(opsional)
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
											className="w-full px-3 py-2 border border-gray-300 dark:border-secondary-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-gray-900 dark:text-white"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											GitHub
											URL
											(opsional)
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
											className="w-full px-3 py-2 border border-gray-300 dark:border-secondary-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-gray-900 dark:text-white"
										/>
									</div>
								</div>

								<div className="flex justify-end space-x-3 pt-4">
									<button
										type="button"
										onClick={
											resetForm
										}
										className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-secondary-700 rounded-md hover:bg-gray-200 dark:hover:bg-secondary-600 transition-colors duration-150"
									>
										Batal
									</button>
									<button
										type="submit"
										className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-150"
									>
										{editingItem
											? "Update"
											: "Simpan"}
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

export default Portfolio;
