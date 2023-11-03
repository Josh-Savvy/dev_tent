import React from "react";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
	const location = useLocation();
	const excludedPaths: string[] = ["login", "register"];
	const hideNavSections: boolean = excludedPaths.some((path) =>
		location.pathname.split("/")[1].includes(path),
	);

	return !hideNavSections ? (
		<div className="min-h-screen sticky left-0 top-0 py-20 bg-black text-white xl:min-w-[25%] sm:min-w-[30%] duration-300 p-4 sm:px-10 lg:px-20 border-r-2 border-indigo-500/80">
			<div className="">Sidebar</div>
		</div>
	) : null;
};

export default Sidebar;
