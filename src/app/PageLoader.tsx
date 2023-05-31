/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";

const PageLoader = () => {
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);
	return loading ? (
		<div
			className={`z-30 h-[100vh] w-[100vw] bg-slate-800 flex justify-center fixed ${
				!loading ? "animate__animated animate__fadeOutDown" : ""
			}`}
		>
			<div className="relative top-0 left-0 flex justify-center animate__animated animate__slideInRight animate__slow">
				<img
					src="/images/devtent_logo.png"
					className="w-full h-full object-contain"
					alt="Dev Tent Logo"
				/>
			</div>
			<div className="relative right-0 top-0 left-0 w-full h-full">
				<div className="absolute right-0 w-[60%] bg-cyan-400 h-full animate__animated animate__slideInLeft animate__slower"></div>
				<div className="absolute right-0 w-[40%] bg-cyan-600 h-full animate__animated animate__slideInLeft animate__slow"></div>
				<div className="absolute right-0 w-[20%] bg-cyan-800 h-full animate__animated animate__slideInLeft"></div>
			</div>
		</div>
	) : (
		<></>
	);
};

export default PageLoader;
