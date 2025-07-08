import React, { useState, useEffect } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";

const Analytics = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [timeRange, setTimeRange] = useState("7d");
	const [analytics, setAnalytics] = useState({
		overview: {
			totalVisitors: 15420,
			pageViews: 45680,
			bounceRate: 32.5,
			avgSessionDuration: "03:24",
			conversionRate: 4.8,
			newUsers: 8240,
		},
		traffic: {
			organic: 45,
			direct: 23,
			referral: 18,
			social: 14,
		},
		topPages: [
			{
				page: "/",
				views: 12450,
				rate: 2.3,
			},
			{
				page: "/services",
				views: 8920,
				rate: 5.1,
			},
			{
				page: "/portfolio",
				views: 6780,
				rate: 3.8,
			},
			{
				page: "/about",
				views: 4560,
				rate: 1.9,
			},
			{
				page: "/contact",
				views: 3240,
				rate: 8.7,
			},
		],
		devices: {
			desktop: 52,
			mobile: 35,
			tablet: 13,
		},
		browsers: [
			{
				name: "Chrome",
				percentage: 68.5,
			},
			{
				name: "Safari",
				percentage: 16.2,
			},
			{
				name: "Firefox",
				percentage: 9.8,
			},
			{
				name: "Edge",
				percentage: 5.5,
			},
		],
		countries: [
			{
				name: "Indonesia",
				users: 12450,
				percentage: 80.8,
			},
			{
				name: "Malaysia",
				users: 1540,
				percentage: 10.0,
			},
			{
				name: "Singapore",
				users: 890,
				percentage: 5.8,
			},
			{
				name: "Thailand",
				users: 540,
				percentage: 3.5,
			},
		],
		realtimeData: {
			activeUsers: 127,
			currentPageViews: 45,
			topActivePages: [
				{
					page: "/",
					users: 23,
				},
				{
					page: "/services",
					users: 15,
				},
				{
					page: "/portfolio",
					users: 7,
				},
			],
		},
	});

	// Simulate real-time data updates
	useEffect(() => {
		const interval =
			setInterval(
				() => {
					setAnalytics(
						(
							prev
						) => ({
							...prev,
							realtimeData: {
								...prev.realtimeData,
								activeUsers:
									Math.floor(
										Math.random() *
											50
									) +
									100,
								currentPageViews:
									Math.floor(
										Math.random() *
											20
									) +
									35,
							},
						})
					);
				},
				5000
			);

		return () =>
			clearInterval(
				interval
			);
	}, []);

	const StatCard = ({
		title,
		value,
		change,
		icon,
		color = "blue",
	}) => (
		<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
			<div className="flex items-center justify-between">
				<div>
					<p className="text-sm font-medium text-gray-600 dark:text-gray-400">
						{
							title
						}
					</p>
					<p className="text-2xl font-bold text-gray-900 dark:text-white">
						{
							value
						}
					</p>
					{change && (
						<p
							className={`text-sm flex items-center mt-1 ${
								change >
								0
									? "text-green-600"
									: "text-red-600"
							}`}
						>
							{change >
							0 ? (
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
										d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
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
										d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
									/>
								</svg>
							)}
							{Math.abs(
								change
							)}
							%
							dari
							periode
							sebelumnya
						</p>
					)}
				</div>
				<div
					className={`p-3 bg-${color}-100 dark:bg-${color}-900/30 rounded-lg`}
				>
					{
						icon
					}
				</div>
			</div>
		</div>
	);

	const ProgressBar = ({
		label,
		value,
		color = "blue",
	}) => (
		<div className="mb-4">
			<div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
				<span>
					{
						label
					}
				</span>
				<span>
					{
						value
					}
					%
				</span>
			</div>
			<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
				<div
					className={`bg-${color}-600 h-2 rounded-full transition-all duration-300`}
					style={{
						width: `${value}%`,
					}}
				></div>
			</div>
		</div>
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

				<div className="p-4 sm:p-6 lg:p-8 max-w-full overflow-hidden">
					{/* Page Header */}
					<div className="mb-8">
						<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
							<div className="min-w-0 flex-1">
								<h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3 truncate">
									<div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
										<svg
											className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 dark:text-green-400"
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
									</div>
									Analytics
								</h1>
								<p className="text-gray-600 dark:text-gray-300">
									Monitor
									performa
									website
									dan
									perilaku
									pengguna
								</p>
							</div>
							<div className="flex gap-3">
								<select
									value={
										timeRange
									}
									onChange={(
										e
									) =>
										setTimeRange(
											e
												.target
												.value
										)
									}
									className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
								>
									<option value="24h">
										24
										Jam
										Terakhir
									</option>
									<option value="7d">
										7
										Hari
										Terakhir
									</option>
									<option value="30d">
										30
										Hari
										Terakhir
									</option>
									<option value="90d">
										90
										Hari
										Terakhir
									</option>
								</select>
							</div>
						</div>
					</div>

					{/* Real-time Data */}
					<div className="mb-8">
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
							<div className="flex items-center gap-2 mb-4">
								<div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
									Data
									Real-time
								</h3>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="text-center">
									<p className="text-3xl font-bold text-green-600">
										{
											analytics
												.realtimeData
												.activeUsers
										}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										Pengguna
										Aktif
									</p>
								</div>
								<div className="text-center">
									<p className="text-3xl font-bold text-blue-600">
										{
											analytics
												.realtimeData
												.currentPageViews
										}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										Page
										Views
										Saat
										Ini
									</p>
								</div>
								<div>
									<p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Halaman
										Paling
										Aktif
									</p>
									{analytics.realtimeData.topActivePages.map(
										(
											page,
											index
										) => (
											<div
												key={
													index
												}
												className="flex justify-between text-sm mb-1"
											>
												<span className="text-gray-600 dark:text-gray-400">
													{
														page.page
													}
												</span>
												<span className="font-medium text-gray-900 dark:text-white">
													{
														page.users
													}{" "}
													users
												</span>
											</div>
										)
									)}
								</div>
							</div>
						</div>
					</div>

					{/* Overview Stats */}
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
						<StatCard
							title="Total Pengunjung"
							value={analytics.overview.totalVisitors.toLocaleString()}
							change={
								12.5
							}
							icon={
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
										d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
									/>
								</svg>
							}
							color="blue"
						/>
						<StatCard
							title="Page Views"
							value={analytics.overview.pageViews.toLocaleString()}
							change={
								8.2
							}
							icon={
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
							}
							color="green"
						/>
						<StatCard
							title="Bounce Rate"
							value={`${analytics.overview.bounceRate}%`}
							change={
								-2.1
							}
							icon={
								<svg
									className="w-6 h-6 text-orange-600"
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
										d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
									/>
								</svg>
							}
							color="orange"
						/>
						<StatCard
							title="Avg. Session Duration"
							value={
								analytics
									.overview
									.avgSessionDuration
							}
							change={
								15.3
							}
							icon={
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
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							}
							color="purple"
						/>
						<StatCard
							title="Conversion Rate"
							value={`${analytics.overview.conversionRate}%`}
							change={
								3.7
							}
							icon={
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
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							}
							color="indigo"
						/>
						<StatCard
							title="New Users"
							value={analytics.overview.newUsers.toLocaleString()}
							change={
								18.9
							}
							icon={
								<svg
									className="w-6 h-6 text-pink-600"
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
										d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
									/>
								</svg>
							}
							color="pink"
						/>
					</div>

					{/* Charts and Tables */}
					<div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
						{/* Traffic Sources */}
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
								Sumber
								Traffic
							</h3>
							<div className="space-y-4">
								<ProgressBar
									label="Organic Search"
									value={
										analytics
											.traffic
											.organic
									}
									color="green"
								/>
								<ProgressBar
									label="Direct"
									value={
										analytics
											.traffic
											.direct
									}
									color="blue"
								/>
								<ProgressBar
									label="Referral"
									value={
										analytics
											.traffic
											.referral
									}
									color="purple"
								/>
								<ProgressBar
									label="Social Media"
									value={
										analytics
											.traffic
											.social
									}
									color="pink"
								/>
							</div>
						</div>

						{/* Device Types */}
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
								Jenis
								Device
							</h3>
							<div className="space-y-4">
								<ProgressBar
									label="Desktop"
									value={
										analytics
											.devices
											.desktop
									}
									color="blue"
								/>
								<ProgressBar
									label="Mobile"
									value={
										analytics
											.devices
											.mobile
									}
									color="green"
								/>
								<ProgressBar
									label="Tablet"
									value={
										analytics
											.devices
											.tablet
									}
									color="orange"
								/>
							</div>
						</div>

						{/* Top Countries */}
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
								Negara
								Teratas
							</h3>
							<div className="space-y-3">
								{analytics.countries.map(
									(
										country,
										index
									) => (
										<div
											key={
												index
											}
											className="flex items-center justify-between"
										>
											<div>
												<p className="font-medium text-gray-900 dark:text-white">
													{
														country.name
													}
												</p>
												<p className="text-sm text-gray-500 dark:text-gray-400">
													{country.users.toLocaleString()}{" "}
													users
												</p>
											</div>
											<span className="text-sm font-medium text-gray-600 dark:text-gray-400">
												{
													country.percentage
												}
												%
											</span>
										</div>
									)
								)}
							</div>
						</div>
					</div>

					{/* Top Pages and Browsers */}
					<div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
						{/* Top Pages */}
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
							<div className="p-6 border-b border-gray-200 dark:border-gray-700">
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
									Halaman
									Teratas
								</h3>
							</div>
							<div className="overflow-x-auto">
								<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
									<thead className="bg-gray-50 dark:bg-gray-700">
										<tr>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
												Halaman
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
												Views
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
												Conversion
											</th>
										</tr>
									</thead>
									<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
										{analytics.topPages.map(
											(
												page,
												index
											) => (
												<tr
													key={
														index
													}
													className="hover:bg-gray-50 dark:hover:bg-gray-700"
												>
													<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
														{
															page.page
														}
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
														{page.views.toLocaleString()}
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
														{
															page.rate
														}
														%
													</td>
												</tr>
											)
										)}
									</tbody>
								</table>
							</div>
						</div>

						{/* Browser Stats */}
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
								Browser
								Usage
							</h3>
							<div className="space-y-4">
								{analytics.browsers.map(
									(
										browser,
										index
									) => (
										<div
											key={
												index
											}
											className="flex items-center justify-between"
										>
											<div className="flex items-center">
												<div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
												<span className="font-medium text-gray-900 dark:text-white">
													{
														browser.name
													}
												</span>
											</div>
											<span className="text-sm font-medium text-gray-600 dark:text-gray-400">
												{
													browser.percentage
												}
												%
											</span>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
