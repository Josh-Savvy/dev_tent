import React from "react";

const CommunityPageNav = ({ children }: { children: React.ReactNode }) => {
	const links = [
		{
			title: `${parseFloat("10440").toLocaleString().toLowerCase()} Followers`,
			link: "#followers",
		},
		{
			title: ` ${parseFloat("482").toLocaleString().toLowerCase()} Following`,
			link: "#following",
		},
		{ title: `Connect`, link: "#connect" },
	];
	return (
		<div>
			<div className="grid grid-cols-3 gap-5 items-center bg-zinc-900 p-1 rounded-lg">
				{links.map((link, i) => {
					return (
						<div
							key={i}
							className="flex font-medium items-center justify-center text-sm hover:bg-cyan-600 bg-transparent p-2 rounded-lg px-3 transition transition-all border border-[#111] duration-300 cursor-pointer"
						>
							{link.title}
						</div>
					);
				})}
			</div>
			<div className="mt-4">{children}</div>
		</div>
	);
};

export default CommunityPageNav;
