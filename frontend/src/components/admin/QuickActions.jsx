import { useNavigate } from "react-router";

const QuickActions = () => {
	const navigate = useNavigate();
	const actions = [
		{
			title: "Tambah Portfolio",
			description: "Upload karya terbaru",
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
			color: "bg-purple-600 hover:bg-purple-700",
			action: () =>
				navigate(
					"/back/portfolio"
				),
		},
		{
			title: "Tulis Blog",
			description: "Publikasikan artikel baru",
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
			color: "bg-green-600 hover:bg-green-700",
			action: () =>
				navigate(
					"/back/blog"
				),
		},
		{
			title: "Lihat Pesan",
			description: "Balas pesan dari klien",
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
			color: "bg-yellow-600 hover:bg-yellow-700",
			action: () =>
				navigate(
					"/back/messages"
				),
		},
		{
			title: "Update Harga",
			description: "Perbarui paket layanan",
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
			color: "bg-indigo-600 hover:bg-indigo-700",
			action: () =>
				navigate(
					"/back/pricing"
				),
		},
		{
			title: "Kelola Orders",
			description: "Pantau pesanan klien",
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
			color: "bg-blue-600 hover:bg-blue-700",
			action: () =>
				navigate(
					"/back/orders"
				),
		},
		{
			title: "Analisis Data",
			description: "Lihat laporan performa",
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
			color: "bg-red-600 hover:bg-red-700",
			action: () =>
				console.log(
					"View analytics"
				),
		},
	];
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
			<div className="p-6">
				<div className="flex items-center justify-between mb-6">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
						Aksi
						Cepat
					</h3>
				</div>

				<div className="grid grid-cols-1 gap-3">
					{actions.map(
						(
							action,
							index
						) => (
							<button
								key={
									index
								}
								onClick={
									action.action
								}
								className={`${action.color} text-white p-4 rounded-lg text-left transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500`}
							>
								<div className="flex items-center space-x-3">
									{
										action.icon
									}
									<div className="flex-1">
										<h4 className="font-medium text-sm">
											{
												action.title
											}
										</h4>
										<p className="text-xs opacity-90 mt-1">
											{
												action.description
											}
										</p>
									</div>
									<svg
										className="w-4 h-4 opacity-70"
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
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</div>
							</button>
						)
					)}
				</div>

				<div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
					<button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-150 text-sm font-medium">
						Kustomisasi
						Aksi
					</button>
				</div>
			</div>
		</div>
	);
};

export default QuickActions;
