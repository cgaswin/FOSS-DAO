import { useEffect, useState } from "react";
import DashboardTopNav from "@/components/DashboardTopNav";
import ForumCard from "@/components/ForumCard";
import Sidebar from "@/components/Sidebar";
import { PlusIcon } from "lucide-react";
import axios from "../api/axios.js";
import { v4 as uuidv4 } from "uuid";
import {useNavigate} from "react-router-dom";

export interface IComment {
	username: string;
	commentMessage: string;
	_id: string;
}

export interface IThread {
	_id: string;
	thread_id: string;
	creator: string;
	title: string;
	message: string;
	upvote: number;
	downvote: number;
	comments: IComment[];
	createdAt: string;
	updatedAt: string;
	__v: number;
}

const Forum = () => {
	const navigate = useNavigate();
	const [threads, setThreads] = useState<Array<IThread>>([])
	
	useEffect(() => {
		(
			async function getChats() {
				const { data } = await axios.get("/thread");
				setThreads(data)
				
				console.log(data);
			}
		)()
	},[])

	function createNewThread() {
		const uniqueId = uuidv4();
		console.log(uniqueId);
		navigate(`/thread/create/${uniqueId}`);
	}

	return (
		<div>
			<DashboardTopNav />
			<div className="flex ">
				<Sidebar />
				<div className="flex flex-col w-full mt-4 h-[calc(100vh-4rem)]">
					<div>
						<div className="flex justify-between ml-4 px-4 mt-2">
							<h1 className="text-2xl ">Forum</h1>
							<div onClick={createNewThread} className="bg-blue-900 rounded-lg flex gap-2 items-center px-4 py-2">
								<PlusIcon />
								<button className="">New Thread</button>
							</div>
						</div>
					</div>
					{/* Forum cards */}
					<div className="mx-4 mt-2 flex flex-col gap-3">
						{threads.map((thread) => (
							<ForumCard key={thread._id} thread={thread} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Forum;
