/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as ReactIcons from "react-ionicons";
import NProgress from "nprogress";
import { usePathname } from "next/navigation";

export const LeftSideBar = () => {
	const pathname = usePathname();
	const [activeLink, setActiveLink] = useState(pathname);
	const [loading, setLoading] = useState<boolean>(false);

	// useEffect(() => {
	// 	NProgress.done();
	// 	NProgress.configure({ showSpinner: false });
	// 	if (loading) {
	// 		setActiveLink(pathname);
	// 		NProgress.start();
	// 	} else {
	// 		NProgress.done();
	// 	}
	// }, [loading]);
	// if (activeLink == pathname) NProgress.done();

	useEffect(() => {
		setActiveLink(pathname);
	}, [pathname]);

	const links = [
		{ icon: "GridOutline", link: "/", title: "Feed" },
		{ icon: "PeopleOutline", link: "/community", title: "My community" },
		{ icon: "ChatboxOutline", link: "#", title: "Messages" },
		{ icon: "NotificationsOutline", link: "#", title: "Notifications" },
		{ icon: "PersonOutline", link: "#", title: "Profile" },
		{ icon: "SettingsOutline", link: "#", title: "Settings" },
	];
	return (
		<div className="hidden md:flex sticky md:top-24 top-20 h-[90%] w-[23%] sm:w-[12%] lg:w-[23%] duration-300">
			<div className="group grid gap-8 text-sm pl-3 select-none">
				{links?.map((link, i) => {
					interface IconType {
						[key: string]: React.ElementType;
					}
					const IconComponent: IconType = ReactIcons;
					const Icon = IconComponent[link.icon];
					return (
						<Link href={link.link ? link.link : "#"} key={i}>
							<div
								onClick={() => setLoading(true)}
								className={`flex items-center gap-2 duration-300 ${
									link.link === activeLink ? "bg-gray-700 animate__fadeInUp" : "bg-none"
								}animate__animated transition-all transition relative duration-300 hover:bg-gray-700 cursor-pointer p-2 px-4 rounded-lg`}
							>
								{link.title == "Notifications" ? (
									<span className="transition-all transition duration-300 absolute left-3 top-1 animate-pulse bg-red-600 rounded-full p-1 lg:hidden"></span>
								) : (
									""
								)}
								<Icon color="white" />
								<span className="lg:flex hidden">{link.title}</span>
								{link.title == "Notifications" ? (
									<span className="transition-all transition duration-300 bg-red-600 p-1 px-2 rounded-full text-white lg:flex hidden">
										2
									</span>
								) : (
									""
								)}
							</div>
						</Link>
					);
				})}

				<Link href="#">
					<div className="flex items-center gap-2 duration-300 hover:bg-red-800 bg-red-700 cursor-pointer p-2 px-4 rounded-lg">
						<ReactIcons.LogOutOutline color="white" />
						<span className="lg:flex hidden">Logout</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export const RightSideBar = () => {
	return (
		<div className="sticky top-20 h-full w-[23%] pl-5 md:flex hidden pt-5">
			<div>RightSideBar</div>
		</div>
	);
};
