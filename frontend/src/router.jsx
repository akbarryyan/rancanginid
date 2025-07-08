import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Portfolio from "./pages/admin/Portfolio";
import Messages from "./pages/admin/Messages";
import Blog from "./pages/admin/Blog";
import Pricing from "./pages/admin/Pricing";
import Orders from "./pages/admin/Orders";
import Settings from "./pages/admin/Settings";
import Analytics from "./pages/admin/Analytics";
import Clients from "./pages/admin/Clients";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/back/login",
		element: <Login />,
	},
	{
		path: "/back/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/back/portfolio",
		element: <Portfolio />,
	},
	{
		path: "/back/messages",
		element: <Messages />,
	},
	{
		path: "/back/blog",
		element: <Blog />,
	},
	{
		path: "/back/pricing",
		element: <Pricing />,
	},	{
		path: "/back/orders",
		element: <Orders />,
	},
	{
		path: "/back/settings",
		element: <Settings />,
	},
	{
		path: "/back/analytics",
		element: <Analytics />,
	},
	{
		path: "/back/clients",
		element: <Clients />,
	},
]);

export default function AppRouter() {
	return <RouterProvider router={router} />;
}
