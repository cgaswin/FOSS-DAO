import DashboardTopNav from "@/components/DashboardTopNav";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const NewThread = () => {
	return (
		<div>
			<DashboardTopNav />
			<div className="flex ">
				<Sidebar />
				<div className="flex flex-col items-center  w-full mt-4 h-[calc(100vh-4rem)]">
					<div className="flex flex-col w-4/6 items-center gap-4  p-10">
						<Input type="text" placeholder="Enter Title" />
						<Textarea placeholder="Type your Content here." />
						<Button className="mt-5 bg-green-600 hover:bg-green-800">
							Post Thread
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewThread;
