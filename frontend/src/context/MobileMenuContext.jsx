import { useState } from "react";
import { MobileMenuContext } from "./mobileMenuContext";

export const MobileMenuProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openMenu = () => setIsOpen(true);
	const closeMenu = () => setIsOpen(false);
	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<MobileMenuContext.Provider
			value={{
				isOpen,
				openMenu,
				closeMenu,
				toggleMenu,
			}}
		>
			{
				children
			}
		</MobileMenuContext.Provider>
	);
};
