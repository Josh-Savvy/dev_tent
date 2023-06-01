"use client";
import CommunityPageNav from "@/components/organisms/community";
import ConnectProfileCard from "@/components/organisms/community/connect/ConnectProfileCard";
import React, { useState } from "react";

const CommunityPageTemplate = ({
	followers,
	following,
}: {
	followers?: string;
	following?: string;
}) => {
	const [activeLink, setActiveLink] = useState<string>("");
	const links = [
		{ title: `Followers`, href: "#followers" },
		{ title: `Following`, href: "#following" },
		{ title: `Connect`, href: "#connect" },
	];

	return (
		<CommunityPageNav
			links={links}
			activeLink={activeLink}
			setActiveLink={(val: string) => {
				setActiveLink(val);
			}}
			followers={followers}
			following={following}
		>
			{activeLink.toLowerCase() == "followers" ? (
				<div className="grid grid-cols-2 gap-5">
					<ConnectProfileCard
						name="Josh Bass"
						jobTitle="Musician"
						facebookUrl="kasjhv"
					/>
					<ConnectProfileCard name="Josh Bass" jobTitle="Musician" />
					<ConnectProfileCard name="Josh Bass" jobTitle="Musician" />
					<ConnectProfileCard name="Josh Bass" jobTitle="Musician" />
					<ConnectProfileCard name="Josh Bass" jobTitle="Musician" />
					<ConnectProfileCard name="Josh Bass" jobTitle="Musician" />
					<ConnectProfileCard name="Josh Bass" jobTitle="Musician" />
					<ConnectProfileCard name="Josh Bass" jobTitle="Musician" />
					<ConnectProfileCard name="Josh Bass" jobTitle="Musician" />
				</div>
			) : (
				<>{activeLink.toLowerCase()}</>
			)}
		</CommunityPageNav>
	);
};

export default CommunityPageTemplate;
