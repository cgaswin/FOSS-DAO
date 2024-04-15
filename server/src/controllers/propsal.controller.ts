import Proposal, { IProposal } from "../models/proposal.js";
import { ApiError } from "../utils/ApiError.js";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const proposalSchema = z.object({
	id: z.string().uuid(),
	title: z.string().max(40),
	description: z.string().max(200),
	projectLink: z.string().url(),
	requiredFund: z.number().positive(),
});

const voteSchema = z.object({
	id: z.string().uuid(),
	vote: z.string().regex(/^(up|down)$/),
});

export const createProposal = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const proposalOwner = req.cookies.username;

		if (!proposalOwner) {
			throw new ApiError(400, "Proposal owner is required");
		}
		const parsedInput = proposalSchema.safeParse(req.body);
		if (!parsedInput.success) {
			throw new ApiError(400, parsedInput.error.message);
		}
		const { id, title, description, projectLink, requiredFund } =
			parsedInput.data;

		const proposal = await Proposal.create({
			proposalOwner,
			proposalId: id,
			title,
			description,
			projectLink,
			requiredFund,
		});
		res.status(201).json(proposal);
	} catch (error) {
		next(error);
	}
};

export const getAllUnvotedProposals = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const Owner = req.cookies.username;
		if (!Owner) {
			throw new ApiError(400, "owner username is required");
		}

		const proposals = await Proposal.find();

		const filteredProposals = proposals.filter((proposal) => {
			return (
				!proposal.votedUsers?.includes(Owner) && new Date() < proposal.endDate
			);
		});

		res.status(200).json(filteredProposals);
	} catch (error) {
		next(error);
	}
};
export const voteProposal = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const Owner = req.cookies.username;
		if (!Owner) {
			throw new ApiError(400, "owner is required");
		}

		const parsedInput = voteSchema.safeParse(req.body);
		if (!parsedInput.success) {
			throw new ApiError(400, parsedInput.error.message);
		}
		const { id: proposalId, vote } = parsedInput.data;
		const proposal = await Proposal.findOne({ proposalId });

		if (!proposal) {
			throw new ApiError(404, "Proposal not found");
		}

		if (new Date() > proposal.endDate) {
			throw new ApiError(400, "Voting is closed for this proposal");
		}

		const alreadyVoted = proposal.votedUsers?.includes(Owner);
		if (alreadyVoted) {
			throw new ApiError(400, "You have already voted for this proposal");
		}

		if (vote === "up") {
			proposal.upVote += 1;
		} else if (vote === "down") {
			proposal.downVote += 1;
		} else {
			throw new ApiError(400, "Invalid vote type");
		}
		proposal.votedUsers?.push(Owner);
		proposal.totalVotes += 1;
		await proposal.save();
		res.status(200).json(proposal);
	} catch (error) {
		next(error);
	}
};

export const getProposalById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const Owner = req.cookies.username;
		if (!Owner) {
			throw new ApiError(400, "owner is required");
		}
		const proposal = await Proposal.findOne({ proposalId: req.params.id });
		if (!proposal) {
			throw new ApiError(404, "Proposal not found");
		}
		res.status(200).json(proposal);
	} catch (error) {
		next(error);
	}
};

export const getOverview = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const Owner = req.cookies.username;
		if (!Owner) {
			throw new ApiError(400, "owner is required");
		}
		const totalProposals = await Proposal.countDocuments();
		const acceptedProposals = await Proposal.countDocuments({
			isAccepted: true,
		});
		
		//in total fund sent , only calculate funds where isFundSent is true
		const totalFundSent = await Proposal.aggregate([
			{
				$match: {
					isFundSent: true,
				},
			},
			{
				$group: {
					_id: null,
					total: {
						$sum: "$requiredFund",
					},
				},
			},
		]);
		const stats = {
			totalProposals,
			totalFundSent: totalFundSent[0]?.total || 0,
			acceptedProposals: acceptedProposals,
		};

		res.status(200).json(stats);
	} catch (error) {
		next(error);
	}
};

export const getProposalsByOwner = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const Owner = req.cookies.username;
		if (!Owner) {
			throw new ApiError(400, "owner is required");
		}
		const proposals = await Proposal.find({ proposalOwner: Owner });
		res.status(200).json(proposals);
	} catch (error) {
		next(error);
	}
};


export const verifyProposal = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const Owner = req.cookies.username;
		if (!Owner) {
			throw new ApiError(400, "owner is required");
		}

		const proposalId = req.body.proposalId

		const proposal = await Proposal.findOne({ proposalId });

		if (!proposal) {
			throw new ApiError(404, "Proposal not found");
		}

		if (new Date() < proposal.endDate) {
			throw new ApiError(400, "Voting is still open for this proposal");
		}

		if (proposal.upVote - proposal.downVote >= 1) {
			proposal.isAccepted = true;
		}
		proposal.isVerified = true;
		await proposal.save();
		res.status(200).json(proposal);
	} catch (error) {
		next(error);
	}
};


//write a controller to find all the proposals whose end Date have passed and isVerified is false

export const findUnverifiedProposals = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const Owner = req.cookies.username;
		if (!Owner) {
			throw new ApiError(400, "owner is required");
		}
		const proposals = await Proposal.find({
			endDate: { $lt: new Date() },
			isVerified: false,
		});
		res.status(200).json(proposals);
	} catch (error) {
		next(error);
	}
};