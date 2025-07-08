import { useState } from "react";

const ProjectsTable = () => {
	const [filter, setFilter] = useState("all");

	const projects = [
		{
			id: "PRJ-001",
			name: "E-commerce Platform",
			client: "PT ABC Technology",
			status: "in_progress",
			priority: "high",
			progress: 75,
			deadline: "2024-08-15",
			value: 85000000,
			team: [
				"John",
				"Sarah",
				"Mike",
			],
		},
		{
			id: "PRJ-002",
			name: "Mobile Banking App",
			client: "Bank XYZ",
			status: "review",
			priority: "medium",
			progress: 90,
			deadline: "2024-07-20",
			value: 150000000,
			team: [
				"Alice",
				"Bob",
			],
		},
		{
			id: "PRJ-003",
			name: "Corporate Website",
			client: "CV Maju Jaya",
			status: "completed",
			priority: "low",
			progress: 100,
			deadline: "2024-06-30",
			value: 25000000,
			team: [
				"Diana",
				"Eve",
			],
		},
		{
			id: "PRJ-004",
			name: "Inventory System",
			client: "PT Logistik Indo",
			status: "planning",
			priority: "high",
			progress: 15,
			deadline: "2024-09-10",
			value: 75000000,
			team: [
				"Frank",
				"Grace",
			],
		},
		{
			id: "PRJ-005",
			name: "Learning Management",
			client: "Universitas Digital",
			status: "in_progress",
			priority: "medium",
			progress: 45,
			deadline: "2024-08-25",
			value: 95000000,
			team: [
				"Henry",
				"Ivy",
				"Jack",
			],
		},
	];

	const statusConfig = {
		planning: {
			label: "Perencanaan",
			color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
		},
		in_progress: {
			label: "Sedang Dikerjakan",
			color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
		},
		review: {
			label: "Review",
			color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
		},
		completed: {
			label: "Selesai",
			color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
		},
	};

	const priorityConfig = {
		low: {
			label: "Rendah",
			color: "text-gray-500",
		},
		medium: {
			label: "Sedang",
			color: "text-yellow-500",
		},
		high: {
			label: "Tinggi",
			color: "text-red-500",
		},
	};

	const filteredProjects =
		filter === "all"
			? projects
			: projects.filter(
					(
						p
					) =>
						p.status ===
						filter
			  );
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
			<div className="p-6">
				<div className="flex items-center justify-between mb-6">
					<div>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
							<svg
								className="w-5 h-5 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
								/>
							</svg>
							Active
							Projects
						</h3>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
							Kelola
							dan
							pantau
							progress
							proyek
						</p>
					</div>
					<div className="flex space-x-2">
						{" "}
						<select
							value={
								filter
							}
							onChange={(
								e
							) =>
								setFilter(
									e
										.target
										.value
								)
							}
							className="text-sm border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						>
							<option value="all">
								Semua
								Status
							</option>
							<option value="planning">
								Perencanaan
							</option>
							<option value="in_progress">
								Dikerjakan
							</option>
							<option value="review">
								Review
							</option>
							<option value="completed">
								Selesai
							</option>
						</select>{" "}
						<button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors duration-150 flex items-center gap-1">
							<svg
								className="w-4 h-4"
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
							Proyek
							Baru
						</button>
					</div>
				</div>

				<div className="overflow-x-auto">
					{" "}
					<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
						<thead className="bg-gray-50 dark:bg-gray-700">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									Proyek
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									Status
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									Progress
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									Deadline
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									Nilai
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
									Aksi
								</th>
							</tr>
						</thead>
						<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
							{filteredProjects.map(
								(
									project
								) => (
									<tr
										key={
											project.id
										}
										className="hover:bg-gray-50 dark:hover:bg-gray-700"
									>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center">
												<div className="flex-shrink-0 h-10 w-10">
													<div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
														<span className="text-white font-medium text-sm">
															{project.name
																.split(
																	" "
																)
																.map(
																	(
																		word
																	) =>
																		word[0]
																)
																.join(
																	""
																)
																.slice(
																	0,
																	2
																)}
														</span>
													</div>
												</div>
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900 dark:text-white">
														{
															project.name
														}
													</div>
													<div className="text-sm text-gray-500 dark:text-gray-400">
														{
															project.client
														}
													</div>
													<div className="flex items-center mt-1">
														<span
															className={`text-xs ${
																priorityConfig[
																	project
																		.priority
																]
																	.color
															}`}
														>
															●
														</span>
														<span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
															{
																priorityConfig[
																	project
																		.priority
																]
																	.label
															}
														</span>
													</div>
												</div>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span
												className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
													statusConfig[
														project
															.status
													]
														.color
												}`}
											>
												{
													statusConfig[
														project
															.status
													]
														.label
												}
											</span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center">
												<div className="flex-1">
													<div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
														<span>
															{
																project.progress
															}

															%
														</span>
													</div>{" "}
													<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
														<div
															className="bg-blue-600 h-2 rounded-full transition-all duration-300"
															style={{
																width: `${project.progress}%`,
															}}
														></div>
													</div>
												</div>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
											{new Date(
												project.deadline
											).toLocaleDateString(
												"id-ID"
											)}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
											Rp{" "}
											{(
												project.value /
												1000000
											).toFixed(
												0
											)}

											M
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<div className="flex space-x-2">
												<button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">
													Edit
												</button>
												<button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300">
													Lihat
												</button>
											</div>
										</td>
									</tr>
								)
							)}
						</tbody>
					</table>
				</div>

				{filteredProjects.length ===
					0 && (
					<div className="text-center py-8">
						<p className="text-gray-500 dark:text-gray-400">
							Tidak
							ada
							proyek
							dengan
							status
							yang
							dipilih.
						</p>
					</div>
				)}

				<div className="mt-6 flex items-center justify-between">
					<p className="text-sm text-gray-700 dark:text-gray-300">
						Menampilkan{" "}
						<span className="font-medium">
							{
								filteredProjects.length
							}
						</span>{" "}
						dari{" "}
						<span className="font-medium">
							{
								projects.length
							}
						</span>{" "}
						proyek
					</p>{" "}
					<div className="flex space-x-1">
						<button className="px-3 py-1 text-sm text-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
							Previous
						</button>
						<button className="px-3 py-1 text-sm text-white bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700">
							1
						</button>
						<button className="px-3 py-1 text-sm text-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
							2
						</button>
						<button className="px-3 py-1 text-sm text-gray-500 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsTable;
