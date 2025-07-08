import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import AppRouter from "./router.jsx";
import ThemeProvider from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AppRouter />
      <ToastContainer position="top-right" />
    </ThemeProvider>
  </StrictMode>
);
