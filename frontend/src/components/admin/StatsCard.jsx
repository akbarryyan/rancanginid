const StatsCard = ({ title, value, icon, trend, trendUp, color }) => {
	const bgColorClasses = {
		blue: "bg-blue-50 dark:bg-blue-900/20",
		green: "bg-green-50 dark:bg-green-900/20",
		yellow: "bg-yellow-50 dark:bg-yellow-900/20",
		red: "bg-red-50 dark:bg-red-900/20",
		purple: "bg-purple-50 dark:bg-purple-900/20",
		indigo: "bg-indigo-50 dark:bg-indigo-900/20",
	};
	return (
		<div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
			<div className="p-6">
				<div className="flex items-center">
					<div
						className={`flex-shrink-0 w-10 h-10 ${bgColorClasses[color]} rounded-lg flex items-center justify-center`}
					>
						<span className="text-lg">
							{
								icon
							}
						</span>
					</div>
					<div className="ml-4 flex-1">
						<div className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
							{
								title
							}
						</div>
						<div className="text-2xl font-bold text-gray-900 dark:text-white">
							{typeof value ===
								"number" &&
							value >
								1000
								? value.toLocaleString()
								: value}
						</div>
					</div>
				</div>
				<div className="mt-4">
					<div className="flex items-center">
						<div
							className={`flex items-center text-sm ${
								trendUp
									? "text-green-600"
									: "text-red-600"
							}`}
						>
							{trendUp ? (
								<svg
									className="w-4 h-4 mr-1"
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
										d="M7 17l9.2-9.2M17 17V7H7"
									/>
								</svg>
							) : (
								<svg
									className="w-4 h-4 mr-1"
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
										d="M17 7l-9.2 9.2M7 7v10h10"
									/>
								</svg>
							)}
							<span className="font-medium">
								{
									trend
								}
							</span>
						</div>
						<span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
							vs
							bulan
							lalu
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatsCard;
