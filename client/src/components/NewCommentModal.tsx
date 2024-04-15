import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios.js";

export default function NewCommentModal() {
	const [comment, setComment] = useState("");
	const { id } = useParams();
	async function handleSubmit() {
		const { data } = await axios.post(`/thread/${id}`, {
			commentMessage: comment,
		});
		console.log(data);
		if (data.success) {
			alert("comment added");
			window.location.reload();
		}
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-1/5 hover:bg-slate-700">
					<Plus className="mr-2 h-5 w-6" /> New Comment
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Comment</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<textarea
						id="comment"
						name="comment"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						placeholder="Type your comment here.."
						className="col-span-3 p-2 bg-slate-800"
					/>
				</div>
				<DialogFooter>
					<Button
						onClick={handleSubmit}
						className="hover:bg-slate-600"
						type="submit"
					>
						Send
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
