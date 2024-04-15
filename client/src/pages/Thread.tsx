import DashboardTopNav from "@/components/DashboardTopNav";
import Sidebar from "@/components/Sidebar";
import AvatarLogo from "../assets/Avatar.png";
import UpArrow from "../assets/upArrow.png";
import DownArrow from "../assets/downArrow.png";
import CommentCard from "@/components/CommentCard";
import NewCommentModal from "@/components/NewCommentModal";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IThread } from "./Forum.js";
import axios from "@/api/axios.js";

const Thread = () => {
	const { id } = useParams();
	console.log(id);
	const [thread, setThread] = useState<IThread>({} as IThread);
	const [render,setRender] = useState<boolean>(false)
	const { comments, createdAt, downvote, upvote, title, creator, message } =
		thread;

	const createdDate = new Date(createdAt);

	const options = {
		year: "numeric" as const,
		month: "long" as const,
		day: "numeric" as const,
	};
	const formattedCreatedDate = createdDate.toLocaleString("en-US", options);

	useEffect(() => {
		
		(async function getThread() {
			const { data } = await axios.get(`/thread/${id}`);
			console.log(data);
			setThread(data);
		})();
	}, [id]);

	async function handleUpVote() {
		const vote = "up";
		const { data } = await axios.post("/thread/vote", { id, vote });
		console.log(data);
		setRender(!render)
	}

	async function handleDownVote() {
		const vote = "down";
		const { data } = await axios.post("/thread/vote", { id, vote });
		console.log(data);
		setRender(!render)
	}

	return (
		<div>
			<DashboardTopNav />
			<div className="flex overflow-hidden ">
				<Sidebar />
				<div className=" overflow-y-auto flex flex-col pl-5 gap-4 w-4/5 mt-4 h-[calc(100vh-4rem)]">
					<div className="flex items-center gap-2">
						<img src={AvatarLogo} width={30} alt="profile picture" />
						<h1>{creator}</h1>
					</div>
					<p className="text-gray-400">{formattedCreatedDate}</p>
					<h1 className="text-2xl">{title}</h1>
					<p className="text-gray-400">{message}</p>
					<div className="flex gap-2 justify-around p-2  bg-slate-950 w-1/6 rounded-full">
						<div
							onClick={handleUpVote}
							className="flex rounded-full hover:bg-green-400 p-2 hover:cursor-pointer gap-1"
						>
							<img src={UpArrow} alt="upvote" />
							<p>{upvote}</p>
						</div>
						<div
							onClick={handleDownVote}
							className="flex rounded-full hover:bg-red-600 p-2 hover:cursor-pointer gap-1"
						>
							<img src={DownArrow} alt="downvote" />
							<p>{downvote}</p>
						</div>
					</div>
					<hr />
					<NewCommentModal />
					{comments?.map((comment) => (
						<CommentCard key={comment._id} comment={comment} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Thread;
