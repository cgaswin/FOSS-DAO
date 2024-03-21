import DashboardTopNav from "@/components/DashboardTopNav";
import Sidebar from "@/components/Sidebar";

import { PhotoIcon } from "@heroicons/react/24/solid";

const Proposal = () => {
	return (
		<div className="h-screen overflow-hidden">
			<DashboardTopNav />
			<div className="flex ">
				<Sidebar />
				<div className="flex flex-col overflow-y-scroll h-screen   items-center w-full mt-4 pb-20 ">
					<div className="">
						<h1>Create Proposal</h1>
					</div>
					<div className="bg-blue-950  px-10 mb-10 py-10">
						<h1>Proposal Description</h1>
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
													rows={3}
													className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
													defaultValue={""}
												/>
											</div>
										</div>

										<div className="col-span-full px-10 py-4 border-dashed border-[1px] ">
											<label
												htmlFor="cover-photo"
												className="block text-sm font-medium leading-6 text-white"
											>
												Upload Image
											</label>
											<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
												<div className="text-center">
													<PhotoIcon
														className="mx-auto h-12 w-12 text-gray-300"
														aria-hidden="true"
													/>
													<div className="mt-4 flex text-sm leading-6 text-white-600">
														<label
															htmlFor="file-upload"
															className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
														>
															<span>Upload a file</span>
															<input
																id="file-upload"
																name="file-upload"
																type="file"
																className="sr-only"
															/>
														</label>
														<p className="pl-1">or drag and drop</p>
													</div>
													<p className="text-xs leading-5 text-white">
														PNG, JPG, GIF up to 10MB
													</p>
												</div>
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
														type="text"
														name="fund"
														id="fund"
														autoComplete="fund"
														className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
													/>
												</div>
											</div>
										</div>
									</div>
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
