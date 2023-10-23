import React, { Fragment, ReactNode } from "react";
import Navbar from "./nav";
import { ToastContainer } from "react-toastify";

const Layout = (props: { children: ReactNode }) => {
	return (
		<Fragment>
			<Navbar />
			<div className="">{props.children}</div>
		</Fragment>
	);
};

export default Layout;
