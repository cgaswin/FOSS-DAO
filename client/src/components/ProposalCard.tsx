import AvatarIcon from "../assets/Avatar.png";
import { ProgressNegative } from "./ProgressNegative";
import { IProposal } from "../pages/Dashboard.js";
import { ProgressPositive } from "./ProgressPositive";
import { useNavigate } from "react-router-dom";

const ProposalCard = ({ proposal }: { proposal: IProposal }) => {
	const navigate = useNavigate();
	const {
		title,
		proposalOwner,
		description,
		endDate,
		upVote,
		downVote,
		votedUsers,
	} = proposal;
	//find the time in minutes
	const timeDifference = Math.floor(
		(new Date(endDate).getTime() - new Date().getTime()) / 60000
	);

	const username = localStorage.getItem("username");

	let upVotePercentage = 0;
	let downVotePercentage = 0;
	if (upVote + downVote !== 0) {
		upVotePercentage = (upVote / (upVote + downVote)) * 100;
		downVotePercentage = (downVote / (upVote + downVote)) * 100;
	}
	const showProposal = () => {
		if (username) {
			if (votedUsers.includes(username)) {
				alert("you have already voted");
				return;
			}
		}
		navigate(`/proposal/${proposal.proposalId}`);
	};

	return (
		<div
			onClick={showProposal}
			className="bg-blue-900 w-full hover:cursor-pointer rounded-md px-4 py-2 h-full"
		>
			<div className="flex gap-2 items-center">
				<img src={AvatarIcon} className="h-8" />
				<h2 className="text-gray-100">{proposalOwner}</h2>
			</div>
			<h1 className="font-bold mt-2 text-xl">{title}</h1>
			<p className="text-slate-200">{description}</p>
			<div className="flex gap-6 mt-2 items-center">
				<p className="text-yellow-200">
					{timeDifference < 0 ? "Expired" : `${timeDifference} minutes left`}
				</p>
				<ProgressPositive value={upVotePercentage} />
				{upVote}
				<ProgressNegative value={downVotePercentage} />
				{downVote}
			</div>
		</div>
	);
};

export default ProposalCard;
