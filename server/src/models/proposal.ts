import mongoose, { Document } from "mongoose";

export interface IProposal extends Document {
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
	startDate: Date;
	endDate: Date;
}

const ProposalModel = new mongoose.Schema<IProposal>(
	{
		proposalOwner: {
			type: String,
			required: [true, "Proposal owner is required"],
		},
		proposalId: {
			type: String,
			required: true,
			unique: true,
		},
		title: {
			type: String,
			required: [true, "Title is required for project proposal"],
			MaxLength: [40, "name should be under 40 characters"],
		},
		description: {
			type: String,
			required: [true, "Description is required for project proposal"],
			MaxLength: [800, "name should be under 40 characters"],
		},
		projectLink: {
			type: String,
			required: [true, "Project link is required for project proposal"],
			unique: true,
		},
		requiredFund: {
			type: Number,
			required: [true, "Required fund is required for project proposal"],
		},
		upVote: {
			type: Number,
			default: 0,
		},
		downVote: {
			type: Number,
			default: 0,
		},
		totalVotes: {
			type: Number,
			default: 0,
		},
		isAccepted: {
			type: Boolean,
			default: false,
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		isFundSent: {
			type: Boolean,
			default: false,
		},
		votedUsers: {
			type: [String],
			default: [],
		},
		startDate: {
			type: Date,
			default: Date.now,
		},
		endDate: {
			type: Date,
			default: function () {
				return new Date(Date.now() + 20 * 60 * 1000); // 20 minutes from start date
			},
		},
	},
	{ timestamps: true }
);

const Proposal = mongoose.model<IProposal>("Proposal", ProposalModel);
export default Proposal;
