import { useEffect, useState } from "react";
import DashboardTopNav from "@/components/DashboardTopNav";
import Sidebar from "@/components/Sidebar";
import AvatarIcon from "../assets/Avatar.png";
import { ProgressPositive } from "@/components/ProgressPositive";
import { ProgressNegative } from "@/components/ProgressNegative";
import { useParams } from "react-router-dom";
import axios from "../api/axios.js";
import { IProposal } from "./Dashboard.js";
import { Button } from "@/components/ui/button.js";

const Forum = () => {
	const { proposalId } = useParams();
	console.log(proposalId);

	const [proposal, setProposal] = useState<IProposal>({} as IProposal);
	const [isActive, setIsActive] = useState<boolean>(false);
	let color = "";
	if (isActive) {
		color = "green";
	} else {
		color = "red";
	}

	if (new Date(proposal.endDate) > new Date()) {
		setIsActive(true);
	}

	let upVotePercentage = 0;
	let downVotePercentage = 0;
	if (proposal.upVote + proposal.downVote !== 0) {
		upVotePercentage =
			(proposal.upVote / (proposal.upVote + proposal.downVote)) * 100;
		downVotePercentage =
			(proposal.downVote / (proposal.upVote + proposal.downVote)) * 100;
	}

	useEffect(() => {
		(async function getProposal() {
			const { data } = await axios.get(`/proposal/${proposalId}`);
			console.log(data);
			setProposal(data);
		})();
	}, [proposalId]);

	const startDateNew = new Date(proposal.startDate);

	const options = {
		year: "numeric" as const,
		month: "long" as const,
		day: "numeric" as const,
		hour: "2-digit" as const,
		minute: "2-digit" as const,
		hour12: true,
	};
	const formattedStartDate = startDateNew.toLocaleString("en-US", options);

	const endDateNew = new Date(proposal.endDate);

	const formattedEndDate = endDateNew.toLocaleString("en-US", options);

	function goToProject() {
		const url = proposal.projectLink;
		// I want to go to the project link
		window.open(url, "_blank");
	}

	return (
		<div>
			<DashboardTopNav />
			<div className="flex ">
				<Sidebar />
				<div className="flex flex-col justify-between  w-full mt-4 h-[calc(100vh-4rem)] px-10">
					<div className="flex gap-2 ">
						<div className="bg-blue-950  rounded-md flex flex-col gap-2 p-4 ml-4">
							<h1 className="font-extrabold">{proposal.title}</h1>
							<div className="flex gap-4 items-center">
								<img src={AvatarIcon} alt="Avatar Icon" />
								<p>{proposal.proposalOwner}</p>
								<button className={`bg-${color}-600 rounded-2xl px-3 py-1`}>
									{isActive ? "Active" : "Inactive"}
								</button>
							</div>
							<h1 className="font-bold text-xl">Required Fund:</h1>
							<h2 className="text-xl text-teal-200">{proposal.requiredFund}</h2>
							<h1 className="font-bold text-xl">Summary</h1>
							<p className="max-w-[800px]">{proposal.description}</p>
							<Button className="self-start" onClick={goToProject}>
								View Project
							</Button>
						</div>

						<div className="bg-blue-950 flex flex-col gap-4 rounded-md p-4 pr-8 ml-4">
							<h2 className="text-xl font-extrabold">Results so far</h2>
							<div>
								<h2>Vote for</h2>
								<div className="flex gap-2">
									<ProgressPositive value={upVotePercentage} />
									<p>{proposal.upVote}</p>
								</div>
							</div>
							<div>
								<h2>Vote Against</h2>
								<div className="flex gap-2">
									<ProgressNegative value={downVotePercentage} />
									<p>{proposal.downVote}</p>
								</div>
							</div>
							<p className="text-gray-500">Total Votes cast:</p>
							<p>{proposal.upVote + proposal.downVote}</p>
						</div>
					</div>
					{isActive ? (
						<div className="flex justify-around items-center mb-6 bg-blue-950 rounded-md ">
							<div className="rounded-md  p-4 ml-4">
								<h2 className="text-xl font-extrabold">Cast your vote</h2>
								<div className="flex flex-col gap-2">
									<div className="p-4 flex gap-2 border-cyan-800 rounded-md pr-96 border-2">
										<input type="radio" />
										<label>Yes, Vote for</label>
									</div>
									<div className="p-4 flex gap-2 border-cyan-800 rounded-md border-2">
										<input type="radio" />
										<label>No, Vote Against</label>
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<div className="flex gap-4">
									<p>Start Date</p>

									<p className="text-gray-500">{formattedStartDate}</p>
								</div>
								<div className="flex gap-4">
									<p>End Date</p>
									<p className="text-gray-500">{formattedEndDate}</p>
								</div>
							</div>
						</div>
					) : (
						<div></div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Forum;
