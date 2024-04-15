import upArrow from "../assets/upArrow.png";
import downArrow from "../assets/downArrow.png";
import { IThread } from "../pages/Forum.jsx";
import { useNavigate } from "react-router-dom";

const ForumCard = ({ thread }: { thread: IThread }) => {
	const { creator, title, upvote, createdAt, downvote, thread_id } = thread;
	const navigate = useNavigate();

	const createdDate = new Date(createdAt);

	const options = {
		year: "numeric" as const,
		month: "long" as const,
		day: "numeric" as const,
	};
	const formattedCreatedDate = createdDate.toLocaleString("en-US", options);

	function goToThread() {
		navigate(`/thread/${thread_id}`);
	}

	return (
		<div
			onClick={goToThread}
			className="bg-sky-950 hover:cursor-pointer p-2 rounded-md mt-2 flex justify-between"
		>
			<div>
				<h2>{title}</h2>
				<div className="flex gap-4 mt-2 text-gray-400">
					<p>{creator}</p>
					<p>{formattedCreatedDate}</p>
				</div>
			</div>
			<div className="flex gap-4 items-center px-10">
				<div className="flex gap-2">
					<img src={upArrow} alt="upvotes" />
					<p>{upvote}</p>
				</div>
				<div className="flex gap-2">
					<img src={downArrow} alt="upvotes" />
					<p>{downvote}</p>
				</div>
			</div>
		</div>
	);
};

export default ForumCard;
