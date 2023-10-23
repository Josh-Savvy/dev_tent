import React from "react";
import useAlertNotification from "../../../../hooks/useToast";
import FestivalIcon from "@mui/icons-material/Festival";
import { useLocation } from "react-router-dom";

const Navbar = () => {
	const location = useLocation();
	// useAlertNotification({
	// 	message: "Hello World",
	// 	type: "warning",
	// });
	const excludedPaths: string[] = [];
	const hideNavSections: boolean = excludedPaths.some((path) =>
		location.pathname.includes(path),
	);
	return (
		<div className="flex sticky top-0 z-40 w-full p-4 bg-black/50 backdrop-blur-lg lg:px-20">
			<h1 className="text-xl text-center flex justify-center font-bold items-center gap-4">
				<FestivalIcon fontSize="inherit" /> DevTent
			</h1>
			<div className=""></div>
		</div>
	);
};

export default Navbar;
