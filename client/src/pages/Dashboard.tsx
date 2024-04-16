import { useEffect, useState } from "react";
import DashboardTopNav from "@/components/DashboardTopNav";
import ProposalCard from "@/components/ProposalCard";
import Sidebar from "@/components/Sidebar";
import { PlusIcon } from "lucide-react";
import axios from "../api/axios.js";
import { v4 as uuidv4 } from "uuid";
import {useNavigate} from "react-router-dom";

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

const Dashboard = () => {
	const navigate = useNavigate()
	const [proposals, setProposals] = useState<Array<IProposal>>([]);
	useEffect(() => {
		(async function getProposals() {
			const { data } = await axios.get("/");
			setProposals(data);
		})();
	}, []);

	function createNewProposal() {
		const uniqueId = uuidv4();
		navigate(`/proposal/create/${uniqueId}`)
	}

	return (
		<div>
			<DashboardTopNav />
			<div className="flex ">
				<Sidebar />
				<div className="flex flex-col w-full mt-4 h-[calc(100vh-4rem)]">
					<div>
						<div className="flex justify-between ml-4 px-4 mt-2">
							<h1 className="text-2xl ">Proposals</h1>
							<div className="bg-blue-900 rounded-lg flex gap-2 items-center px-4 py-2">
								<PlusIcon />
								<button onClick={createNewProposal}>New Proposal</button>
							</div>
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

export default Dashboard;
