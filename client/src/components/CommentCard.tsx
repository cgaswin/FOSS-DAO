import AvatarLogo from "../assets/Avatar.png";

const CommentCard = () => {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex gap-2 items-center">
				<img src={AvatarLogo} alt="profile picture" />
				<h1>John Doe</h1>
			</div>
			<p className="text-gray-600">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facere
				veniam quibusdam alias mollitia libero ipsum ipsa distinctio ducimus
				ratione.
			</p>
		</div>
	);
};

export default CommentCard;
