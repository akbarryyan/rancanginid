const RecentActivity = () => {
	const activities = [
		{
			id: 1,
			type: "project",
			title: "Proyek website baru",
			description: "E-commerce untuk PT ABC dimulai",
			time: "2 jam yang lalu",
			icon: (
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
						d="M13 10V3L4 14h7v7l9-11h-7z"
					/>
				</svg>
			),
			color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
		},
		{
			id: 2,
			type: "payment",
			title: "Pembayaran diterima",
			description: "Rp 25.000.000 dari klien XYZ",
			time: "4 jam yang lalu",
			icon: (
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
						d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
					/>
				</svg>
			),
			color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
		},
		{
			id: 3,
			type: "message",
			title: "Pesan baru",
			description: "Inquiry dari calon klien baru",
			time: "6 jam yang lalu",
			icon: (
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
						d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			),
			color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
		},
		{
			id: 4,
			type: "review",
			title: "Review positif",
			description: "Rating 5 bintang dari Sarah W.",
			time: "1 hari yang lalu",
			icon: (
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
						d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
					/>
				</svg>
			),
			color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400",
		},
		{
			id: 5,
			type: "completion",
			title: "Proyek selesai",
			description: "Mobile app untuk startup DEF",
			time: "2 hari yang lalu",
			icon: (
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
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
			color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
		},
	];
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
			<div className="p-6">
				<div className="flex items-center justify-between mb-6">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
						Aktivitas
						Terbaru
					</h3>
					<button className="text-sm text-blue-600 hover:text-blue-500 font-medium">
						Lihat
						Semua
					</button>
				</div>

				<div className="space-y-4">
					{activities.map(
						(
							activity
						) => (
							<div
								key={
									activity.id
								}
								className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
							>
								<div
									className={`flex-shrink-0 w-8 h-8 ${activity.color} rounded-full flex items-center justify-center`}
								>
									{
										activity.icon
									}
								</div>
								<div className="flex-1 min-w-0">
									<p className="text-sm font-medium text-gray-900 dark:text-white">
										{
											activity.title
										}
									</p>
									<p className="text-sm text-gray-500 dark:text-gray-400 truncate">
										{
											activity.description
										}
									</p>
									<p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
										{
											activity.time
										}
									</p>
								</div>
							</div>
						)
					)}
				</div>

				<div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
					<button className="w-full text-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium">
						Muat
						Lebih
						Banyak
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecentActivity;
