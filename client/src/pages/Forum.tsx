import DashboardTopNav from "@/components/DashboardTopNav";
import ForumCard from "@/components/ForumCard";
import Sidebar from "@/components/Sidebar";
import { PlusIcon } from "lucide-react";

const Forum = () => {
	return (
		<div>
			<DashboardTopNav />
			<div className="flex ">
				<Sidebar />
				<div className="flex flex-col w-full mt-4 h-[calc(100vh-4rem)]">
					<div>
						<div className="flex justify-between ml-4 px-4 mt-2">
							<h1 className="text-2xl ">Forum</h1>
							<div className="bg-blue-900 rounded-lg flex gap-2 items-center px-4 py-2">
								<PlusIcon />
								<button className="">New Thread</button>
							</div>
						</div>
					</div>
					{/* Forum cards */}
					<div className="mx-4 mt-2 flex flex-col gap-3">
						<ForumCard />
						<ForumCard />
						<ForumCard />
						<ForumCard />
						<ForumCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Forum;
