import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import StatsCard from "../../components/admin/StatsCard";
import RecentActivity from "../../components/admin/RecentActivity";
import QuickActions from "../../components/admin/QuickActions";
import RevenueChart from "../../components/admin/RevenueChart";
import ProjectsTable from "../../components/admin/ProjectsTable";

const Dashboard = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [stats, setStats] = useState({
		totalProjects: 0,
		activeProjects: 0,
		totalRevenue: 0,
		newMessages: 0,
		totalClients: 0,
		completedProjects: 0,
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
			toast.error(
				"Please login to access dashboard"
			);
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

		// Fetch dashboard data (mock data)
		const fetchDashboardData =
			async () => {
				try {
					// Simulate API call
					await new Promise(
						(
							resolve
						) =>
							setTimeout(
								resolve,
								1000
							)
					);

					setStats(
						{
							totalProjects: 156,
							activeProjects: 23,
							totalRevenue: 2850000000, // 2.85 Miliar
							newMessages: 12,
							totalClients: 89,
							completedProjects: 133,
						}
					);
				} catch {
					toast.error(
						"Failed to load dashboard data"
					);
				}
			};

		fetchDashboardData();
	}, [navigate]);
	const statsData = [
		{
			title: "Total Proyek",
			value: stats.totalProjects,
			icon: (
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
						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
					/>
				</svg>
			),
			trend: "+12%",
			trendUp: true,
			color: "blue",
		},
		{
			title: "Proyek Aktif",
			value: stats.activeProjects,
			icon: (
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
						d="M13 10V3L4 14h7v7l9-11h-7z"
					/>
				</svg>
			),
			trend: "+5%",
			trendUp: true,
			color: "green",
		},
		{
			title: "Total Revenue",
			value: `Rp ${(
				stats.totalRevenue /
				1000000000
			).toFixed(
				1
			)}M`,
			icon: (
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
						d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
					/>
				</svg>
			),
			trend: "+18%",
			trendUp: true,
			color: "yellow",
		},
		{
			title: "Pesan Baru",
			value: stats.newMessages,
			icon: (
				<svg
					className="w-6 h-6 text-red-600"
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
			trend: "-2%",
			trendUp: false,
			color: "red",
		},
		{
			title: "Total Klien",
			value: stats.totalClients,
			icon: (
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
						d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
					/>
				</svg>
			),
			trend: "+8%",
			trendUp: true,
			color: "purple",
		},
		{
			title: "Proyek Selesai",
			value: stats.completedProjects,
			icon: (
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
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
			trend: "+15%",
			trendUp: true,
			color: "indigo",
		},
	];
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
			{/* Sidebar */}
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

			{/* Main content */}
			<div className="flex-1">
				{/* Header */}
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
				{/* Dashboard Content */}
				<main className="p-4 sm:p-6 max-w-7xl mx-auto w-full overflow-hidden">
					{/* Welcome Section */}
					<div className="mb-8">
						<div className="flex items-center mb-2">
							<h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
								Selamat
								Datang,{" "}
								{
									user?.name
								}

								!
							</h1>
							<span className="ml-2 text-2xl">
								👋
							</span>
						</div>
						<p className="text-gray-600 dark:text-gray-300">
							Berikut
							adalah
							ringkasan
							aktivitas
							bisnis
							Anda
							hari
							ini.
						</p>
					</div>

					{/* Stats Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
						{statsData.map(
							(
								stat,
								index
							) => (
								<StatsCard
									key={
										index
									}
									{...stat}
								/>
							)
						)}{" "}
					</div>

					{/* Charts and Tables Row */}
					<div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 mb-8">
						{/* Revenue Chart */}
						<div className="xl:col-span-2">
							<RevenueChart />
						</div>

						{/* Quick Actions */}
						<div>
							<QuickActions />
						</div>
					</div>

					{/* Bottom Row */}
					<div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
						{/* Recent Projects Table */}
						<div className="xl:col-span-2">
							<ProjectsTable />
						</div>

						{/* Recent Activity */}
						<div>
							<RecentActivity />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Dashboard;
