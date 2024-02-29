import AvatarIcon from "../assets/Avatar.png";
const ProposalCard = () => {
	return (
		<div className="bg-blue-900 w-full rounded-md px-4 py-2 h-full">
			<div className="flex gap-2 items-center">
				<img src={AvatarIcon} className="h-8" />
				<h2 className="text-gray-100">John</h2>
			</div>
			<h1 className="font-bold text-xl">
				Newbie Test Proposal for funding project
			</h1>
			<p className="text-slate-200">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
				nulla quibusdam eum nihil deleniti officiis amet recusandae enim ipsa
				repudiandae, obcaecati voluptas incidunt reprehenderit adipisci quod
				assumenda distinctio doloribus qui!
			</p>
			<div className="flex justify-between">
				<p>8 days left</p>
				<div className="bg-green-300 rounded-full w-32"></div>
				<div className="bg-red-300 rounded-full w-32"></div>
			</div>
		</div>
	);
};

export default ProposalCard;
