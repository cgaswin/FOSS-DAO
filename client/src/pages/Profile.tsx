import DashboardTopNav from "@/components/DashboardTopNav";
import Sidebar from "@/components/Sidebar";

const Profile = () => {
	return (
		<div className="h-screen overflow-hidden">
			<DashboardTopNav />
			<div className="flex ">
				<Sidebar />
				<div className="flex flex-col overflow-y-scroll h-screen   items-center w-full mt-4 pb-20 ">
					<div className="">
						<h1>Profile</h1>
					</div>
					<div className="bg-blue-950  px-10 mb-10 py-10">
						<h1>Edit profile</h1>
						<form className="flex ">
							<div className="space-y-12">
								<div className="border-b border-gray-900/10 pb-12">
									<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
										<div className="sm:col-span-4">
											<label
												htmlFor="username"
												className="block  text-sm font-medium leading-6 text-white"
											>
												Username
											</label>
											<div className="mt-2">
												<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
													<input
														type="text"
														name="username"
														id="username"
														className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
														placeholder="username"
													/>
												</div>
											</div>
										</div>
										<div className="sm:col-span-4">
											<label
												htmlFor="githubId"
												className="block text-sm font-medium leading-6 text-white"
											>
												Github id
											</label>
											<div className="mt-2">
												<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
													<input
														type="text"
														name="githubId"
														id="githubId"
														placeholder="Github ID"
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

export default Profile;
