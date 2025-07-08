import { useState } from "react";

const RevenueChart = () => {
	const [timeRange, setTimeRange] = useState("monthly");

	// Mock data for chart
	const monthlyData = [
		{
			month: "Jan",
			revenue: 180000000,
			target: 200000000,
		},
		{
			month: "Feb",
			revenue: 220000000,
			target: 200000000,
		},
		{
			month: "Mar",
			revenue: 170000000,
			target: 200000000,
		},
		{
			month: "Apr",
			revenue: 280000000,
			target: 250000000,
		},
		{
			month: "Mei",
			revenue: 320000000,
			target: 300000000,
		},
		{
			month: "Jun",
			revenue: 290000000,
			target: 300000000,
		},
	];

	const maxValue = Math.max(
		...monthlyData.map((d) =>
			Math.max(
				d.revenue,
				d.target
			)
		)
	);
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
			<div className="p-6">
				{" "}
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
									d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
								/>
							</svg>
							Revenue
							Overview
						</h3>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
							Perbandingan
							pendapatan
							vs
							target
						</p>
					</div>
					<div className="flex space-x-2">
						<button
							onClick={() =>
								setTimeRange(
									"weekly"
								)
							}
							className={`px-3 py-1 text-xs font-medium rounded-md transition-colors duration-150 ${
								timeRange ===
								"weekly"
									? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
									: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
							}`}
						>
							Mingguan
						</button>
						<button
							onClick={() =>
								setTimeRange(
									"monthly"
								)
							}
							className={`px-3 py-1 text-xs font-medium rounded-md transition-colors duration-150 ${
								timeRange ===
								"monthly"
									? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
									: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
							}`}
						>
							Bulanan
						</button>
						<button
							onClick={() =>
								setTimeRange(
									"yearly"
								)
							}
							className={`px-3 py-1 text-xs font-medium rounded-md transition-colors duration-150 ${
								timeRange ===
								"yearly"
									? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
									: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
							}`}
						>
							Tahunan
						</button>
					</div>
				</div>
				{/* Chart Legend */}
				<div className="flex items-center space-x-6 mb-6">
					<div className="flex items-center space-x-2">
						<div className="w-3 h-3 bg-primary-600 rounded-full"></div>
						<span className="text-sm text-gray-600 dark:text-gray-400">
							Pendapatan
							Aktual
						</span>
					</div>
					<div className="flex items-center space-x-2">
						<div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
						<span className="text-sm text-gray-600 dark:text-gray-400">
							Target
						</span>
					</div>
				</div>
				{/* Simple Bar Chart */}
				<div className="space-y-4">
					{monthlyData.map(
						(
							data,
							index
						) => (
							<div
								key={
									index
								}
								className="space-y-2"
							>
								<div className="flex justify-between items-center">
									<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
										{
											data.month
										}
									</span>
									<div className="text-right">
										<div className="text-sm font-medium text-gray-900 dark:text-white">
											Rp{" "}
											{(
												data.revenue /
												1000000
											).toFixed(
												0
											)}

											M
										</div>
										<div className="text-xs text-gray-500 dark:text-gray-400">
											Target:
											Rp{" "}
											{(
												data.target /
												1000000
											).toFixed(
												0
											)}

											M
										</div>
									</div>
								</div>

								<div className="relative">
									{/* Target bar (background) */}{" "}
									<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
										<div
											className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
											style={{
												width: `${
													(data.revenue /
														maxValue) *
													100
												}%`,
											}}
										></div>
									</div>
									{/* Target indicator */}
									<div
										className="absolute top-0 h-3 w-1 bg-gray-500 dark:bg-gray-400 rounded-full"
										style={{
											left: `${
												(data.target /
													maxValue) *
												100
											}%`,
										}}
									></div>
								</div>
							</div>
						)
					)}
				</div>
				{/* Summary Stats */}
				<div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
					<div className="grid grid-cols-3 gap-4">
						<div className="text-center">
							<p className="text-2xl font-bold text-gray-900 dark:text-white">
								Rp{" "}
								{(
									monthlyData.reduce(
										(
											acc,
											curr
										) =>
											acc +
											curr.revenue,
										0
									) /
									1000000000
								).toFixed(
									1
								)}

								M
							</p>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								Total
								Revenue
							</p>
						</div>
						<div className="text-center">
							<p className="text-2xl font-bold text-green-600">
								+18%
							</p>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								Growth
								Rate
							</p>
						</div>
						<div className="text-center">
							<p className="text-2xl font-bold text-blue-600">
								92%
							</p>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								Target
								Achievement
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RevenueChart;
