import Thread, { IThread } from "../models/thread.js";
import { ApiError } from "../utils/ApiError.js";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const threadSchema = z.object({
	thread_id: z.string().uuid(),
	title: z.string(),
	message: z.string(),
});

const commentSchema = z.object({
	comment: z.object({
		username: z.string(),
		commentMessage: z.string(),
	}),
});

const voteSchema = z.object({
	id: z.string().uuid(),
	vote: z.string().regex(/^(up|down)$/),
});

export const createThread = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const creator = req.cookies.username;
		if (!creator) {
			throw new ApiError(400, "Creator of the thread is required");
		}
		const parsedInput = threadSchema.safeParse(req.body);
		if (!parsedInput.success) {
			throw new ApiError(400, parsedInput.error.message);
		}
		const { title, message } = parsedInput.data;
		console.log(title, message);

		const newThread = await Thread.create({
			creator,
			thread_id: parsedInput.data.thread_id,
			title,
			message,
		});
		res.status(201).json(newThread);
	} catch (error) {
		next(error);
	}
};

export const getAllThreads = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const Owner = req.cookies.username;
		if (!Owner) {
			throw new ApiError(400, "owner is required");
		}
		const threads = await Thread.find();
		res.status(200).json(threads);
	} catch (error) {
		next(error);
	}
};

export const getThreadById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const Owner = req.cookies.username;
		if (!Owner) {
			throw new ApiError(400, "owner is required");
		}
		const thread_id = req.params.thread_id;
		const foundThread = await Thread.findOne({ thread_id });
		if (!foundThread) {
			throw new ApiError(404, "Thread not found");
		}
		res.status(200).json(foundThread);
	} catch (error) {
		next(error);
	}
};

export const addComment = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const Owner = req.cookies.username;
		if (!Owner) {
			throw new ApiError(400, "owner is required");
		}
		const parsedInput = commentSchema.safeParse(req.body);
		if (!parsedInput.success) {
			throw new ApiError(400, parsedInput.error.message);
		}
		const { username, commentMessage } = parsedInput.data.comment;
		const thread_id = req.params.thread_id;
		const foundThread = await Thread.findOne({ thread_id });
		if (!foundThread) {
			throw new ApiError(404, "Thread not found");
		}
		foundThread.comments.push({ username, commentMessage });
		await foundThread.save();
		res.status(200).json(foundThread);
	} catch (error) {
		next(error);
	}
};

export const voteThread = async (
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
		const { id: thread_id, vote } = parsedInput.data;
		const thread = await Thread.findOne({ thread_id });

		if (!thread) {
			throw new ApiError(404, "Thread not found");
		}

		if (vote === "up") {
			thread.upvote += 1;
		} else if (vote === "down") {
			thread.downvote += 1;
		} else {
			throw new ApiError(400, "Invalid vote type");
		}
		await thread.save();
		res.status(200).json(thread);
	} catch (error) {
		next(error);
	}
};
