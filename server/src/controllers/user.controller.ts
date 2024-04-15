import user, { IUser } from "../models/user.js";
import { ApiError } from "../utils/ApiError.js";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const userSchema = z.object({
	username: z.string(),
	walletAddress: z.string(),
});

export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const parsedInput = userSchema.safeParse(req.body);
		if (!parsedInput.success) {
			throw new ApiError(400, parsedInput.error.message);
		}
		const { username, walletAddress } = parsedInput.data;

		const newUser = await user.create({
			username,
			walletAddress,
		});
		res.status(201).json(newUser);
	} catch (error) {
		next(error);
	}
};

export const getUserByUsername = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const username = req.params.username;
		const foundUser = await user.findOne({ username });
		if (!foundUser) {
			throw new ApiError(404, "User not found");
		}
		res.status(200).json(foundUser);
	} catch (error) {
		next(error);
	}
};

export const getUserByWalletAddress = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const walletAddress = req.params.walletAddress;
		const foundUser = await user.findOne({ walletAddress });
		if (!foundUser) {
			throw new ApiError(404, "User not found");
		}
		res.status(200).json(foundUser);
	} catch (error) {
		next(error);
	}
};

export const getAccessToken = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
		const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
		const codeParam = req.query.code;
		if (!codeParam) {
			throw new ApiError(
				400,
				"Code parameter for generating access token not found"
			);
		}
		const params =
			"?client_id=" +
			CLIENT_ID +
			"&client_secret=" +
			CLIENT_SECRET +
			"&code=" +
			codeParam;
		
        const response = await fetch(
					"https://github.com/login/oauth/access_token" + params,
					{
						method: "POST",
						headers: {
							Accept: "application/json",
						},
					}
				);

				if (response.ok) {
					const data = await response.json();
					res.status(200).json(data);
				} else {
					console.error(`HTTP error! status: ${response.status}`);
				}
	} catch (error) {
		next(error);
	}
};

export const getGithubUserData = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const accessToken = req.headers.authorization
		if (!accessToken) {
			throw new ApiError(400, "Access token not found in headers");
		}
        await fetch("https://api.github.com/user", {
            method: "GET",
			headers: {
				Authorization: accessToken,
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				res.status(200).json(data);
			});
	} catch (error) {
		next(error);
	}
};
