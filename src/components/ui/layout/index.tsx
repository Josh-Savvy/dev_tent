import { Fragment, ReactNode } from "react";
import Navbar from "./nav";
import Sidebar from "./sidebar";

const Layout = (props: { children: ReactNode }) => {
	return (
		<Fragment>
			<Navbar />
			<div className="flex items-start">
				<Sidebar />
				<div className="flex-grow">{props.children}</div>
			</div>
		</Fragment>
	);
};

export default Layout;
