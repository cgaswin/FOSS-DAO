import user, { IUser } from "../models/user.js";
import { ApiError } from "../utils/ApiError.js";
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const userSchema = z.object({
    username: z.string(),
    walletAddress: z.string()
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