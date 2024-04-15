import exp from "constants";
import mongoose, { Document } from "mongoose";



export interface IThread extends Document {
    thread_id: string;
	creator: string;
	title: string;
    message: string;
    upvote: number;
    downvote: number;
	comments: [{ username: string; commentMessage: string }];
}

const ThreadModel = new mongoose.Schema<IThread>(
    {   
        thread_id: {
            type: String,
            required: [true, "Thread ID is required"],
            unique: true,
        },
        creator: {
            type: String,
            required: [true, "Sender is required"],
        },
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        message: {
            type: String,
            required: [true, "Message is required"],
        },
        upvote: {
            type: Number,
            default: 0,
        },
        downvote: {
            type: Number,
            default: 0,
        },
        comments: {
            type: [
                {
                    username: {
                        type: String,
                        required: [true, "Username is required"],
                    },
                    commentMessage: {
                        type: String,
                        required: [true, "Comment message is required"],
                    },
                },
            ],
            default: [],
        },
    },
    { timestamps: true }
);

export default mongoose.model<IThread>("Thread", ThreadModel);