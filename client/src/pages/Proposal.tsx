import DashboardTopNav from "@/components/DashboardTopNav";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "../api/axios.js";

const Proposal = () => {
	const proposalId = window.location.pathname.split("/")[3];
	const [formData, setFormData] = useState({
		id: proposalId,
		title: "",
		description: "",
		projectLink: "",
		requiredFund: 0,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: name === "requiredFund" ? Number(value) : value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (isNaN(formData.requiredFund) || formData.requiredFund < 0) {
			alert("Required fund must be a positive number");
			return;
		}

		console.log(formData);
		const { data } = await axios.post("/", formData);
		console.log(data);
	};
	return (
		<div className="h-screen overflow-hidden">
			<DashboardTopNav />
			<div className="flex ">
				<Sidebar />
				<div className="flex flex-col overflow-y-scroll h-screen   items-center w-full mt-4 pb-20 ">
					<div className="">
						<h1>Create Proposal</h1>
					</div>
					<div className="bg-blue-950 rounded-md  px-20 mb-10 py-5">
						<h1>Proposal Details</h1>
						<form className="flex ">
							<div className="space-y-12">
								<div className="border-b border-gray-900/10 pb-12">
									<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
										<div className="sm:col-span-4">
											<label
												htmlFor="username"
												className="block  text-sm font-medium leading-6 text-white"
											>
												Title
											</label>
											<div className="mt-2">
												<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
													<input
														type="text"
														name="title"
														id="title"
														value={formData.title}
														onChange={handleChange}
														className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
														placeholder="Project Title"
													/>
												</div>
											</div>
										</div>

										<div className="col-span-full">
											<label
												htmlFor="about"
												className="block text-sm font-medium leading-6 text-white"
											>
												Description
											</label>
											<div className="mt-2">
												<textarea
													id="description"
													name="description"
													onChange={handleChange}
													value={formData.description}
													rows={3}
													placeholder="Enter description of the project"
													className="block bg-blue-950 px-4  w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
													defaultValue={""}
												/>
											</div>
										</div>

										<div className="sm:col-span-4">
											<label
												htmlFor="username"
												className="block text-sm font-medium leading-6 text-white"
											>
												Github Project Link
											</label>
											<div className="mt-2">
												<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
													<input
														type="text"
														name="projectLink"
														value={formData.projectLink}
														onChange={handleChange}
														id="projectLink"
														autoComplete="projectLink"
														className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
													/>
												</div>
											</div>
										</div>

										<div className="sm:col-span-4">
											<label
												htmlFor="username"
												className="block  text-sm font-medium leading-6 text-white"
											>
												Required Fund
											</label>
											<div className="mt-2">
												<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
													<input
														type="number"
														name="requiredFund"
														value={formData.requiredFund}
														onChange={handleChange}
														id="fund"
														autoComplete="fund"
														className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
													/>
												</div>
											</div>
										</div>
									</div>
									<Button className="mt-4" onClick={handleSubmit}>
										Submit
									</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Proposal;
