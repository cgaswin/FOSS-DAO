import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
	username: string;
	walletAddress: string;
	avatarUrl: string;
}

const UserModel = new mongoose.Schema<IUser>(
	{
		username: {
			type: String,
			required: [true, "Username is required"],
			unique: true,
		},
		walletAddress: {
			type: String,
			required: [true, "Wallet address is required"],
			unique: true,
		},
		avatarUrl: {
            type: String,
            required:[true,"avatar url is required"]
		},
	},
	{ timestamps: true }
);

export default mongoose.model<IUser>("User", UserModel);
