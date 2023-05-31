import CommunityPageNav from "@/components/organisms/community";
import ConnectProfileCard from "@/components/organisms/community/connect/ConnectProfileCard";
import React from "react";

const CommunnityPage = () => {
	return (
		<>
			<CommunityPageNav>
				<div className="grid md:grid-cols-2 gap-5">
					<ConnectProfileCard name="Josh Bass" jobTitle="Musician" />
					<ConnectProfileCard name="Josh Bass" jobTitle="Musician" />
					<ConnectProfileCard name="Josh Bass" jobTitle="Musician" />
					<ConnectProfileCard name="Josh Bass" jobTitle="Musician" />
				</div>
			</CommunityPageNav>
		</>
	);
};

export default CommunnityPage;
