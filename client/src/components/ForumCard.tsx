import upArrow from "../assets/upArrow.png";
import downArrow from "../assets/downArrow.png";

const ForumCard = () => {
	return (
		<div className="bg-sky-950 p-2 rounded-md mt-2 flex justify-between">
			<div>
				<h2>Lorem ipsum doler met</h2>
				<div className="flex gap-4 mt-2 text-gray-400">
					<p>cgaswin</p>
					<p>Nov 2,2023</p>
				</div>
			</div>
			<div className="flex gap-4 items-center px-10">
				<div className="flex gap-2">
					<img src={upArrow} alt="upvotes" />
					<p>421</p>
				</div>
				<div className="flex gap-2">
					<img src={downArrow} alt="upvotes" />
					<p>421</p>
				</div>
			</div>
		</div>
	);
};

export default ForumCard;
