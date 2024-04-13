import DashboardTopNav from "@/components/DashboardTopNav";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const NewThread = () => {
	const [thread, setThread] = useState({ title: "", content: "" });

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setThread((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const submitThread = () => {
		console.log(thread);
	};

	return (
		<div>
			<DashboardTopNav />
			<div className="flex ">
				<Sidebar />
				<div className="flex flex-col items-center  w-full mt-4 h-[calc(100vh-4rem)]">
					<div className="flex flex-col w-4/6 items-center gap-4  p-10">
						<Input
							name="title"
							onChange={handleChange}
							value={thread.title}
							type="text"
							placeholder="Enter Title"
						/>
						<Textarea
							name="content"
							onChange={handleChange}
							value={thread.content}
							placeholder="Type your Content here."
						/>
						<Button
							onClick={submitThread}
							className="mt-5 bg-green-600 hover:bg-green-800"
						>
							Post Thread
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewThread;
