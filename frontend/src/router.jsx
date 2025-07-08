import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
