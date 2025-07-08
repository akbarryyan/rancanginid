import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";

const Blog = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [editingPost, setEditingPost] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [filterCategory, setFilterCategory] =
		useState("all");
	const [filterStatus, setFilterStatus] =
		useState("all");

	// Sample blog data
	const [blogPosts, setBlogPosts] = useState([
		{
			id: 1,
			title: "Tren Teknologi 2024: Yang Perlu Diketahui Bisnis",
			excerpt: "Eksplorasi tren teknologi terbaru yang akan membentuk lanskap bisnis digital di tahun 2024 dan cara memanfaatkannya.",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
			image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			category: "Teknologi",
			status: "published",
			author: "Tim Rancangin",
			createdAt: "2024-01-15",
			readTime: "5 menit baca",
			views: 1250,
			tags: [
				"teknologi",
				"AI",
				"automation",
				"business",
			],
		},
		{
			id: 2,
			title: "Panduan Lengkap Transformasi Digital untuk UKM",
			excerpt: "Langkah-langkah praktis yang dapat diterapkan UKM untuk memulai perjalanan transformasi digital mereka.",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			category: "Bisnis Digital",
			status: "draft",
			author: "Tim Rancangin",
			createdAt: "2024-01-10",
			readTime: "7 menit baca",
			views: 890,
			tags: [
				"digital transformation",
				"UKM",
				"business strategy",
			],
		},
		{
			id: 3,
			title: "Mengoptimalkan Performance Website untuk SEO",
			excerpt: "Tips dan trik untuk meningkatkan kecepatan website dan performa SEO yang akan meningkatkan ranking di mesin pencari.",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
			image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
			category: "SEO & Marketing",
			status: "published",
			author: "Tim Rancangin",
			createdAt: "2024-01-05",
			readTime: "6 menit baca",
			views: 2150,
			tags: [
				"SEO",
				"website optimization",
				"marketing",
			],
		},
	]);

	const [formData, setFormData] = useState({
		title: "",
		excerpt: "",
		content: "",
		category: "",
		status: "draft",
		image: "",
		tags: "",
		readTime: "",
	});

	const categories = [
		"Teknologi",
		"Bisnis Digital",
		"SEO & Marketing",
		"Development",
		"Design",
		"AI & Machine Learning",
	];

	// Filter posts based on search and filters
	const filteredPosts = blogPosts.filter((post) => {
		const matchesSearch =
			post.title
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase()
				) ||
			post.excerpt
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase()
				) ||
			post.author
				.toLowerCase()
				.includes(
					searchTerm.toLowerCase()
				);
		const matchesCategory =
			filterCategory ===
				"all" ||
			post.category ===
				filterCategory;
		const matchesStatus =
			filterStatus ===
				"all" ||
			post.status ===
				filterStatus;

		return (
			matchesSearch &&
			matchesCategory &&
			matchesStatus
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

		if (editingPost) {
			// Update existing post
			setBlogPosts(
				(
					prev
				) =>
					prev.map(
						(
							post
						) =>
							post.id ===
							editingPost.id
								? {
										...post,
										...formData,
										tags: formData.tags
											.split(
												","
											)
											.map(
												(
													tag
												) =>
													tag.trim()
											),
										updatedAt: new Date()
											.toISOString()
											.split(
												"T"
											)[0],
								  }
								: post
					)
			);
		} else {
			// Create new post
			const newPost =
				{
					...formData,
					id: Date.now(),
					author: "Tim Rancangin",
					createdAt: new Date()
						.toISOString()
						.split(
							"T"
						)[0],
					views: 0,
					tags: formData.tags
						.split(
							","
						)
						.map(
							(
								tag
							) =>
								tag.trim()
						),
				};
			setBlogPosts(
				(
					prev
				) => [
					newPost,
					...prev,
				]
			);
		}

		// Reset form and close modal
		setFormData({
			title: "",
			excerpt: "",
			content: "",
			category: "",
			status: "draft",
			image: "",
			tags: "",
			readTime: "",
		});
		setEditingPost(null);
		setShowModal(false);
	};

	const handleEdit = (post) => {
		setEditingPost(post);
		setFormData({
			title: post.title,
			excerpt: post.excerpt,
			content: post.content,
			category: post.category,
			status: post.status,
			image: post.image,
			tags: post.tags.join(
				", "
			),
			readTime: post.readTime,
		});
		setShowModal(true);
	};

	const handleDelete = (id) => {
		if (
			window.confirm(
				"Yakin ingin menghapus artikel ini?"
			)
		) {
			setBlogPosts(
				(
					prev
				) =>
					prev.filter(
						(
							post
						) =>
							post.id !==
							id
					)
			);
		}
	};

	const handleStatusToggle = (id) => {
		setBlogPosts((prev) =>
			prev.map(
				(
					post
				) =>
					post.id ===
					id
						? {
								...post,
								status:
									post.status ===
									"published"
										? "draft"
										: "published",
						  }
						: post
			)
		);
	};

	const getStatusBadge = (status) => {
		return status ===
			"published"
			? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
			: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
	};

	const closeModal = () => {
		setShowModal(false);
		setEditingPost(null);
		setFormData({
			title: "",
			excerpt: "",
			content: "",
			category: "",
			status: "draft",
			image: "",
			tags: "",
			readTime: "",
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
			/>{" "}
			<div className="flex-1 min-w-0">
				<Header
					user={{
						name: "Admin",
					}}
					onMenuToggle={() =>
						setSidebarOpen(
							!sidebarOpen
						)
					}
				/>

				<main className="p-4 sm:p-6 max-w-full mx-auto w-full overflow-hidden">
					{/* Header Section */}
					<div className="mb-6">
						<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
							<div className="min-w-0 flex-1">
								<h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
									Manajemen
									Blog
								</h1>
								<p className="text-gray-600 dark:text-gray-400 mt-1">
									Kelola
									artikel
									dan
									konten
									blog
									Anda
								</p>
							</div>
							<button
								onClick={() =>
									setShowModal(
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
									/>
								</svg>
								Tambah
								Artikel
							</button>
						</div>
					</div>

					{/* Stats Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
						<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
							<div className="flex items-center">
								<div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
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
											d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
								</div>
								<div className="ml-4">
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										{
											blogPosts.length
										}
									</h3>
									<p className="text-gray-600 dark:text-gray-400 text-sm">
										Total
										Artikel
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
							<div className="flex items-center">
								<div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
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
								<div className="ml-4">
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										{
											blogPosts.filter(
												(
													post
												) =>
													post.status ===
													"published"
											)
												.length
										}
									</h3>
									<p className="text-gray-600 dark:text-gray-400 text-sm">
										Dipublikasi
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
							<div className="flex items-center">
								<div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
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
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
										/>
									</svg>
								</div>
								<div className="ml-4">
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										{
											blogPosts.filter(
												(
													post
												) =>
													post.status ===
													"draft"
											)
												.length
										}
									</h3>
									<p className="text-gray-600 dark:text-gray-400 text-sm">
										Draft
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
							<div className="flex items-center">
								<div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
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
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={
												2
											}
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										/>
									</svg>
								</div>
								<div className="ml-4">
									<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
										{blogPosts
											.reduce(
												(
													sum,
													post
												) =>
													sum +
													post.views,
												0
											)
											.toLocaleString()}
									</h3>
									<p className="text-gray-600 dark:text-gray-400 text-sm">
										Total
										Views
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
										placeholder="Cari artikel..."
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
										className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
									className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
									className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
								>
									<option value="all">
										Semua
										Status
									</option>
									<option value="published">
										Published
									</option>
									<option value="draft">
										Draft
									</option>
								</select>
							</div>
						</div>
					</div>

					{/* Blog Posts Table */}
					<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
						<div className="overflow-x-auto">
							<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead className="bg-gray-50 dark:bg-gray-700">
									<tr>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Artikel
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Kategori
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Status
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Views
										</th>
										<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Tanggal
										</th>
										<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
											Aksi
										</th>
									</tr>
								</thead>
								<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
									{filteredPosts.map(
										(
											post
										) => (
											<tr
												key={
													post.id
												}
												className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
											>
												<td className="px-6 py-4">
													<div className="flex items-center">
														<img
															src={
																post.image
															}
															alt={
																post.title
															}
															className="w-12 h-12 rounded-lg object-cover mr-4"
														/>
														<div className="min-w-0 flex-1">
															<div className="text-sm font-medium text-gray-900 dark:text-white truncate">
																{
																	post.title
																}
															</div>
															<div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 max-w-xs">
																{
																	post.excerpt
																}
															</div>
															<div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
																{
																	post.readTime
																}
															</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 rounded-full">
														{
															post.category
														}
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<span
														className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(
															post.status
														)}`}
													>
														{
															post.status
														}
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
													{post.views.toLocaleString()}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
													{new Date(
														post.createdAt
													).toLocaleDateString(
														"id-ID"
													)}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
													<div className="flex items-center justify-end space-x-2">
														<button
															onClick={() =>
																handleStatusToggle(
																	post.id
																)
															}
															className={`p-2 rounded-lg transition-colors ${
																post.status ===
																"published"
																	? "text-yellow-600 hover:bg-yellow-100 dark:hover:bg-yellow-900/20"
																	: "text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20"
															}`}
															title={
																post.status ===
																"published"
																	? "Set sebagai Draft"
																	: "Publikasikan"
															}
														>
															{post.status ===
															"published" ? (
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
																		d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
																	/>
																</svg>
															) : (
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
																		d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
																	/>
																	<path
																		strokeLinecap="round"
																		strokeLinejoin="round"
																		strokeWidth={
																			2
																		}
																		d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
																	/>
																</svg>
															)}
														</button>
														<button
															onClick={() =>
																handleEdit(
																	post
																)
															}
															className="text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-colors"
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
																	post.id
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

						{filteredPosts.length ===
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
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								<h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
									Tidak
									ada
									artikel
								</h3>
								<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
									Belum
									ada
									artikel
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
									{editingPost
										? "Edit Artikel"
										: "Tambah Artikel Baru"}
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
									<div className="md:col-span-2">
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Judul
											Artikel
											*
										</label>
										<input
											type="text"
											name="title"
											value={
												formData.title
											}
											onChange={
												handleInputChange
											}
											required
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
											placeholder="Masukkan judul artikel"
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
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
										>
											<option value="draft">
												Draft
											</option>
											<option value="published">
												Published
											</option>
										</select>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											URL
											Gambar
										</label>
										<input
											type="url"
											name="image"
											value={
												formData.image
											}
											onChange={
												handleInputChange
											}
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
											placeholder="https://example.com/image.jpg"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Waktu
											Baca
										</label>
										<input
											type="text"
											name="readTime"
											value={
												formData.readTime
											}
											onChange={
												handleInputChange
											}
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
											placeholder="5 menit baca"
										/>
									</div>

									<div className="md:col-span-2">
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Excerpt
											*
										</label>
										<textarea
											name="excerpt"
											value={
												formData.excerpt
											}
											onChange={
												handleInputChange
											}
											required
											rows="3"
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
											placeholder="Ringkasan singkat artikel"
										/>
									</div>

									<div className="md:col-span-2">
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Konten
											Artikel
											*
										</label>
										<textarea
											name="content"
											value={
												formData.content
											}
											onChange={
												handleInputChange
											}
											required
											rows="10"
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
											placeholder="Tulis konten artikel lengkap di sini..."
										/>
									</div>

									<div className="md:col-span-2">
										<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
											Tags
										</label>
										<input
											type="text"
											name="tags"
											value={
												formData.tags
											}
											onChange={
												handleInputChange
											}
											className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
											placeholder="Pisahkan dengan koma (contoh: teknologi, AI, business)"
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
										className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
									>
										{editingPost
											? "Update Artikel"
											: "Simpan Artikel"}
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

export default Blog;
