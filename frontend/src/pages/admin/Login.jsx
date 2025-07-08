import { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Login = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] =
		useState(false);

	const handleInputChange = (e) => {
		const {
			name,
			value,
			type,
			checked,
		} = e.target;
		setFormData((prev) => ({
			...prev,
			[name]:
				type ===
				"checkbox"
					? checked
					: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			// Simulasi login - ganti dengan API call yang sebenarnya
			await new Promise(
				(
					resolve
				) =>
					setTimeout(
						resolve,
						2000
					)
			);

			// Mock validation
			if (
				formData.email ===
					"admin@rancangin.com" &&
				formData.password ===
					"admin123"
			) {
				localStorage.setItem(
					"adminToken",
					"mock-jwt-token"
				);
				localStorage.setItem(
					"adminUser",
					JSON.stringify(
						{
							email: formData.email,
							name: "Admin Rancangin",
							role: "super_admin",
						}
					)
				);

				toast.success(
					"Login berhasil! Selamat datang Admin."
				);
				navigate(
					"/back/dashboard"
				);
			} else {
				toast.error(
					"Email atau password salah!"
				);
			}
		} catch {
			toast.error(
				"Login gagal. Silakan coba lagi."
			);
		} finally {
			setIsLoading(
				false
			);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-900 flex items-center justify-center p-4">
			<div className="w-full max-w-md">
				{/* Logo & Header */}
				<div className="text-center mb-8">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-2xl mb-4">
						<svg
							className="w-8 h-8 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
							/>
						</svg>
					</div>
					<h1 className="text-3xl font-bold text-secondary-900 dark:text-white font-poppins">
						Admin
						Portal
					</h1>
					<p className="text-secondary-600 dark:text-secondary-300 mt-2">
						Masuk
						ke
						dashboard
						admin
						Rancangin
					</p>
				</div>

				{/* Login Form */}
				<div className="bg-white dark:bg-secondary-800 rounded-2xl shadow-xl p-8 border border-secondary-100 dark:border-secondary-700">
					<form
						onSubmit={
							handleSubmit
						}
						className="space-y-6"
					>
						{/* Email Field */}
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
							>
								Email
								Address
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<svg
										className="h-5 w-5 text-secondary-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
										/>
									</svg>
								</div>
								<input
									type="email"
									id="email"
									name="email"
									value={
										formData.email
									}
									onChange={
										handleInputChange
									}
									required
									className="w-full pl-10 pr-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white placeholder-secondary-400 dark:placeholder-secondary-500 transition-colors"
									placeholder="admin@rancangin.com"
								/>
							</div>
						</div>

						{/* Password Field */}
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
							>
								Password
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<svg
										className="h-5 w-5 text-secondary-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
										/>
									</svg>
								</div>
								<input
									type={
										showPassword
											? "text"
											: "password"
									}
									id="password"
									name="password"
									value={
										formData.password
									}
									onChange={
										handleInputChange
									}
									required
									className="w-full pl-10 pr-12 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white placeholder-secondary-400 dark:placeholder-secondary-500 transition-colors"
									placeholder="••••••••"
								/>
								<button
									type="button"
									onClick={() =>
										setShowPassword(
											!showPassword
										)
									}
									className="absolute inset-y-0 right-0 pr-3 flex items-center text-secondary-400 hover:text-secondary-600"
								>
									{showPassword ? (
										<svg
											className="h-5 w-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
											/>
										</svg>
									) : (
										<svg
											className="h-5 w-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
											/>
										</svg>
									)}
								</button>
							</div>
						</div>

						{/* Remember Me & Forgot Password */}
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="rememberMe"
									name="rememberMe"
									type="checkbox"
									checked={
										formData.rememberMe
									}
									onChange={
										handleInputChange
									}
									className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
								/>
								<label
									htmlFor="rememberMe"
									className="ml-2 block text-sm text-secondary-700 dark:text-secondary-300"
								>
									Remember
									me
								</label>
							</div>
							<a
								href="#"
								className="text-sm text-primary-600 hover:text-primary-500 font-medium"
							>
								Forgot
								password?
							</a>
						</div>

						{/* Login Button */}
						<button
							type="submit"
							disabled={
								isLoading
							}
							className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 ${
								isLoading
									? "opacity-50 cursor-not-allowed"
									: "transform hover:scale-[1.02]"
							}`}
						>
							{isLoading ? (
								<div className="flex items-center">
									<svg
										className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8v8z"
										></path>
									</svg>
									Signing
									in...
								</div>
							) : (
								"Sign in to Dashboard"
							)}
						</button>
					</form>

					{/* Demo Credentials */}
					<div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
						<p className="text-sm text-amber-800 dark:text-amber-200 font-medium mb-2">
							Demo
							Credentials:
						</p>
						<p className="text-xs text-amber-700 dark:text-amber-300">
							Email:
							admin@rancangin.com
							<br />
							Password:
							admin123
						</p>
					</div>
				</div>

				{/* Footer */}
				<div className="text-center mt-8">
					<p className="text-sm text-secondary-500 dark:text-secondary-400">
						©
						2024
						Rancangin.
						All
						rights
						reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
