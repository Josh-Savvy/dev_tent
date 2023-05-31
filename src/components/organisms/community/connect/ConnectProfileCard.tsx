/* eslint-disable @next/next/no-img-element */
import React from "react";

const ConnectProfileCard = ({
	name,
	jobTitle,
	socialLinks,
}: {
	name: string;
	jobTitle: string;
	socialLinks?: {
		facebookUrl?: string;
		twitterUrl?: string;
		linkedInUrl?: string;
	}[];
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
					<div className="flex w-full items-center">
						{socialLinks?.map((link, i) => {
							return link.facebookUrl ? (
								<span key={i} className="w-1/3 flex items-center">
									<>facebook</>
								</span>
							) : link.twitterUrl ? (
								<span key={i} className="w-1/3 flex items-center">
									<>twitter</>
								</span>
							) : (
								<span key={i} className="w-1/3 flex items-center">
									<>linkedin</>
								</span>
							);
						})}
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
					className="flex w-full items-center justify-center text-sm bg-green-600 
               p-1 rounded-lg px-4 transition transition-all duration-300 cursor-pointer"
				>
					Follow back
				</div>
			</div>
		</div>
	);
};

export default ConnectProfileCard;
