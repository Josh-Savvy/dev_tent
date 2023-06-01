/* eslint-disable @next/next/no-img-element */
import React, { createContext } from "react";
import * as SideBar from "../sidebar";
import Link from "next/link";

const LayoutNavbar = ({ children }: { children: React.ReactNode }) => {
	return (
		// <div className="fixed top-0 w-full">
		<div className="md:px-7">
			<div className="bg-zinc-900 z-10 sticky top-0 h-full pt-5 pb-2">
				<div className="flex justify-between">
					<Link href="/">
						<div className="flex justify-center items-center cursor-pointer">
							<img
								src="/images/devtent_logo.png"
								alt="logo"
								className="rounded w-16 h-auto"
							/>
							<h1 className="font-bold text-xl">DevTent</h1>
						</div>
					</Link>
					<div className="rounded border border-cyan-900 px-4 top-4 w-1/3 md:flex hidden">
						<input
							className="p-1 bg-transparent placeholder:text-xs w-full focus:ring-0 outline-none"
							placeholder="Search for something here..."
						/>
					</div>
					<div className="bg-slate-700 pl-6 rounded flex items-center gap-4">
						<p>Username</p>
						<img
							src="/images/istockphoto.jpg"
							alt="no img"
							className="rounded w-12 h-auto"
						/>
					</div>
				</div>
			</div>
			<div className="flex">
				<SideBar.LeftSideBar />
				<div className="flex-grow relative">
					<div className="pt-7">{children}</div>
				</div>
				{/* <SideBar.RightSideBar /> */}
			</div>
		</div>
	);
};

export default LayoutNavbar;
