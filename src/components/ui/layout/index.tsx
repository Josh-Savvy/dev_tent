import React, { ReactNode } from "react";

const Layout = (props: { children: ReactNode }) => {
	return (
		<div>
			<div className="">{props.children}</div>
		</div>
	);
};

export default Layout;
