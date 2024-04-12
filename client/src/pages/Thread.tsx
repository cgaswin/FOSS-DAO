import DashboardTopNav from "@/components/DashboardTopNav";
import Sidebar from "@/components/Sidebar";
import AvatarLogo from "../assets/Avatar.png";
import UpArrow from "../assets/upArrow.png";
import DownArrow from "../assets/downArrow.png";
import CommentCard from "@/components/CommentCard";
import NewCommentModal from "@/components/NewCommentModal";

const Thread = () => {
	return (
		<div>
			<DashboardTopNav />
			<div className="flex overflow-hidden ">
				<Sidebar />
				<div className=" overflow-y-auto flex flex-col pl-5 gap-4 w-4/5 mt-4 h-[calc(100vh-4rem)]">
					<div className="flex items-center gap-2">
						<img src={AvatarLogo} width={30} alt="profile picture" />
						<h1>John</h1>
					</div>
					<h1 className="text-2xl">Newbie Test for Forum</h1>
					<p className="text-gray-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
						magnam id sapiente vitae cupiditate nisi quam provident, quisquam
						distinctio suscipit consectetur non architecto eum, corporis
						aperiam. Amet consectetur quis molestias modi dolor, nostrum
						inventore ex asperiores error. Ipsam illum eveniet, ab explicabo
						voluptatum rem voluptas quod et optio est fuga?
					</p>
					<div className="flex gap-2 justify-around p-2 bg-slate-950 w-1/6 rounded-full">
						<div className="flex gap-1">
							<img src={UpArrow} alt="upvote" />
							<p>24</p>
						</div>
						<div className="flex gap-1">
							<img src={DownArrow} alt="downvote" />
							<p>43</p>
						</div>
					</div>
					<hr />
					<NewCommentModal/>
					<CommentCard />
					<CommentCard />
					<CommentCard />
					<CommentCard />
					<CommentCard />
				</div>
			</div>
		</div>
	);
};

export default Thread;
