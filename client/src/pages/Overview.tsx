import DashboardTopNav from "@/components/DashboardTopNav";
import Sidebar from "@/components/Sidebar";

function Overview() {
	return (
		<div className="h-screen overflow-hidden">
			<DashboardTopNav />
			<div className="flex ">
				<Sidebar />
				<div className="flex justify-around flex-col overflow-y-scroll h-screen   items-center w-full mt-4 pb-20 ">
					<div className="flex gap-10">
						<div className="bg-blue-950 p-10 rounded-md">
							<h1 className="text-green-200 font-bold">
								Total Proposals Created
							</h1>
							<h2>100,000</h2>
						</div>
						<div className="bg-blue-950 p-10 rounded-md">
							<h1 className="text-green-200 font-bold">
								Total Proposals Accepted
							</h1>
							<h2>100,000</h2>
						</div>
					</div>
					<div className="bg-blue-950 p-10 rounded-md">
						<h1 className="text-green-200 font-bold">
							Total Tokens Transferred
						</h1>
						<h2>100,000</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Overview;
