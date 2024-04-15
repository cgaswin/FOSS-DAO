import { useEffect, useState } from "react";
import DashboardTopNav from "@/components/DashboardTopNav";
import ProposalCard from "@/components/ProposalCard";
import Sidebar from "@/components/Sidebar";
import axios from "../api/axios.js";

export interface IProposal {
	_id: string;
	proposalOwner: string;
	proposalId: string;
	title: string;
	description: string;
	projectLink: string;
	requiredFund: number;
	upVote: number;
	downVote: number;
	totalVotes: number;
	isAccepted: boolean;
	isVerified: boolean;
	isFundSent: boolean;
	votedUsers: string[];
	startDate: string;
	endDate: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

const MyProposals = () => {
	const [proposals, setProposals] = useState<Array<IProposal>>([]);
	useEffect(() => {
		const username = localStorage.getItem("username");
		(async function getProposals() {
			const { data } = await axios.get(`/owner/${username}`);
			setProposals(data);
			console.log(data);
		})();
	}, []);

	return (
		<div>
			<DashboardTopNav />
			<div className="flex ">
				<Sidebar />
				<div className="flex max-h-screen overflow-y-auto flex-col w-full mt-4 h-[calc(100vh-4rem)]">
					<div>
						<div className="flex justify-between ml-4 px-4 mt-2">
							<h1 className="text-2xl ">Proposals</h1>
						</div>
					</div>
					{/* proposal cards */}
					<div className="mx-4 mt-2 flex flex-col gap-3">
						{proposals.map((proposal) => (
							<ProposalCard key={proposal._id} proposal={proposal} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProposals;
