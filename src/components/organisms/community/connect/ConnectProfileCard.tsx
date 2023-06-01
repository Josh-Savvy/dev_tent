/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { LogoFacebook, LogoLinkedin, LogoTwitter } from "react-ionicons";

const ConnectProfileCard = ({
	name,
	jobTitle,
	facebookUrl,
	twitterUrl,
	linkedInUrl,
}: {
	name: string;
	jobTitle: string;
	facebookUrl?: string;
	twitterUrl?: string;
	linkedInUrl?: string;
}) => {
	return (
		<div className="grid gap-4 bg-zinc-900 p-2 rounded-lg">
			<div className="flex gap-4 items-center text-sm">
				<div className="w-16 h-16 flex rounded-full items-center justify-center">
					<img
						src="/images/istockphoto.jpg"
						alt="img"
						className="h-full w-full rounded-full object-center"
					/>
				</div>
				<div className="grid gap-4">
					<div className="grid gap-1">
						<h1>{name}</h1>
						<p>{jobTitle}</p>
					</div>
					<div className="flex gap-5 w-full items-center">
						<span className="flex items-center cursor-pointer">
							<LogoFacebook color="dodgerblue" />
						</span>
						<span className="flex items-center cursor-pointer">
							<LogoTwitter color="lightblue" />
						</span>
						<span className="flex items-center cursor-pointer">
							<LogoLinkedin color="blue" />
						</span>
					</div>
				</div>
			</div>
			<div className="flex w-full justify-center">
				{/* <div
					className="w-1/2 flex items-center justify-center text-sm bg-red-600 p-1 
                    rounded-lg px-4 transition transition-all duration-300 cursor-pointer"
				>
					Ignore
				</div> */}
				<div
					className="flex w-full items-center justify-center text-sm bg-green-600 hover:bg-green-800 
               p-1 rounded-lg px-4 transition transition-all duration-300 cursor-pointer"
				>
					Follow back
				</div>
			</div>
		</div>
	);
};

export default ConnectProfileCard;
