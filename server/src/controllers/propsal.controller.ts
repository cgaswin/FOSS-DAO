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
		const parsedInput = proposalSchema.safeParse(req.body);
		if (!parsedInput.success) {
			throw new ApiError(400, parsedInput.error.message);
		}
		const { id, title, description, projectLink, requiredFund } =
			parsedInput.data;
		const proposal = await Proposal.create({
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

export const getAllProposals = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const proposals = await Proposal.find();
		res.status(200).json(proposals);
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

		if (vote === "up") {
            proposal.upVote += 1;
            proposal.totalVotes += 1;
		} else if (vote === "down") {
            proposal.downVote += 1;
            proposal.totalVotes += 1;
		} else {
			throw new ApiError(400, "Invalid vote type");
		}
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
		const proposal = await Proposal.findOne({ proposalId: req.params.id });
		if (!proposal) {
			throw new ApiError(404, "Proposal not found");
		}
		res.status(200).json(proposal);
	} catch (error) {
		next(error);
	}
};
