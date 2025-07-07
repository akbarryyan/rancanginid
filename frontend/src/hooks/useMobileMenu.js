import { useContext } from "react";
import { MobileMenuContext } from "../context/mobileMenuContext";

export const useMobileMenu = () => {
	const context = useContext(MobileMenuContext);
	if (!context) {
		throw new Error(
			"useMobileMenu must be used within a MobileMenuProvider"
		);
	}
	return context;
};
