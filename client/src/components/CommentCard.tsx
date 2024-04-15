import AvatarLogo from "../assets/Avatar.png";
import { IComment } from "../pages/Forum.js";

const CommentCard = ({ comment }: { comment: IComment }) => {
	const { username, commentMessage } = comment;
	return (
		<div className="flex flex-col gap-2">
			<div className="flex gap-2 items-center">
				<img src={AvatarLogo} alt="profile picture" />
				<h1>{username}</h1>
			</div>
			<p className="text-gray-600">{commentMessage}</p>
		</div>
	);
};

export default CommentCard;
