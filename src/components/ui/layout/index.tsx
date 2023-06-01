import React from "react";
import LayoutNavbar from "./nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<LayoutNavbar>
			{/* <div className="dark:bg-slate-800 rounded-lgv h-full overflow-y-auto"> */}
			<div className="dark:bg-slate-800 md:rounded-xl h-auto p-5 ">
				<div className="">{children}</div>
			</div>
		</LayoutNavbar>
	);
};

export default Layout;
