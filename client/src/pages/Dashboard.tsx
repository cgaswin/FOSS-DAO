import DashboardTopNav from "@/components/DashboardTopNav";
import ProposalCard from "@/components/ProposalCard";
import Sidebar from "@/components/Sidebar";
import { PlusIcon } from "lucide-react";
import { useAccount } from "wagmi";

const Dashboard = () => {
	const { address } = useAccount();
	console.log(address)

	return (
		<div>
			<DashboardTopNav />
			<div className="flex ">
				<Sidebar />
				<div className="flex flex-col w-full mt-4 h-[calc(100vh-4rem)]">
					<div>
						<div className="flex justify-between ml-4 px-4 mt-2">
							<h1 className="text-2xl ">Proposals</h1>
							<div className="bg-blue-900 rounded-lg flex gap-2 items-center px-4 py-2">
								<PlusIcon />
								<button className="">New Proposal</button>
							</div>
						</div>
					</div>
					{/* proposal cards */}
					<div className="mx-4 mt-2 flex flex-col gap-3">
						<ProposalCard />
						<ProposalCard />
						<ProposalCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
