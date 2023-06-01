import CommunityPageNav from "@/components/organisms/community";
import ConnectProfileCard from "@/components/organisms/community/connect/ConnectProfileCard";
import CommunityPageTemplate from "@/templates/community";
import CommunityPage from "@/templates/community";
import React from "react";

const CommunnityPage = () => {
	const followers = parseFloat("10440").toLocaleString().toLowerCase();
	const following = parseFloat("482").toLocaleString().toLowerCase();
	return (
		<>
			<CommunityPageTemplate followers={followers} following={following} />
		</>
	);
};

export default CommunnityPage;
