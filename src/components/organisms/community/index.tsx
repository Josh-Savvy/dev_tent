"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const CommunityPageNav = ({
	links,
	children,
	setActiveLink = (val: string) => {
		return val;
	},
	followers,
	following,
}: {
	children: React.ReactNode;
	links: any[];
	activeLink: string;
	setActiveLink: Function;
	followers?: string;
	following?: string;
}) => {
	const router = useRouter();
	const pathname = usePathname();
	return (
		<div>
			<div className="grid grid-cols-3 gap-5 items-center bg-zinc-900 p-1 rounded-lg mt-4">
				{links.map((link: { title: string; href: string }, i) => {
					const { title, href } = link;
					return (
						<div
							onClick={(e) => {
								e.preventDefault();
								router.push(`${pathname}${href.split(" ").join("-")}`, {
									forceOptimisticNavigation: true,
								});
								setActiveLink(title);
							}}
							key={i}
							className="flex font-medium items-center justify-center text-sm hover:bg-cyan-600 bg-transparent p-2 rounded-lg px-3 transition transition-all border border-[#111] duration-300 cursor-pointer"
						>
							{href == "#followers"
								? `${followers ? followers : 0} ${title}`
								: href == "#following"
								? `${following ? following : 0} ${title}`
								: title}
						</div>
					);
				})}
			</div>
			<div className="mt-8">{children}</div>
		</div>
	);
};

export default CommunityPageNav;
