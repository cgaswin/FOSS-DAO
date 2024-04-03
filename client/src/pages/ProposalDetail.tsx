import DashboardTopNav from "@/components/DashboardTopNav";
import Sidebar from "@/components/Sidebar";
import AvatarIcon from "../assets/Avatar.png";
import { ProgressPositive } from "@/components/ProgressPositive";
import { ProgressNegative } from "@/components/ProgressNegative";

const Forum = () => {
	return (
		<div>
			<DashboardTopNav />
			<div className="flex ">
				<Sidebar />
				<div className="flex flex-col justify-between  w-full mt-4 h-[calc(100vh-4rem)] px-10">
					<div className="flex gap-2 ">
						<div className="bg-blue-950  rounded-md flex flex-col gap-2 p-4 ml-4">
							<h1 className="font-extrabold">
								Newbie Test proposal for funding project
							</h1>
							<div className="flex gap-4 items-center">
								<img src={AvatarIcon} alt="Avatar Icon" />
								<p>John</p>
								<button className="bg-green-600 rounded-2xl px-3 py-1">
									Active
								</button>
							</div>
							<h1 className="font-bold text-xl">Summary</h1>
							<p className="max-w-[800px]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
								tempora sint distinctio perspiciatis sapiente provident,
								assumenda alias accusamus quisquam ex hic eius omnis,
								consectetur laudantium! Ipsa reprehenderit consectetur earum
								culpa, incidunt ut possimus dicta quod optio. Ea cum maxime
								culpa officia voluptate quasi, velit obcaecati optio atque
								error, soluta doloribus odio, assumenda pariatur? Dolores
								praesentium, quisquam suscipit aspernatur hic quo corrupti sint!
								Nam provident et quam doloribus, magni explicabo quos architecto
								rem eligendi, illum quod sequi fugiat adipisci! Alias iste dolor
								placeat? Dolor officiis adipisci dolorem cum eligendi dolore
								minima eos nemo. Possimus perspiciatis voluptatibus,
								necessitatibus labore ipsam aliquam neque.
							</p>
						</div>
						<div className="bg-blue-950 flex flex-col gap-4 rounded-md p-4 pr-8 ml-4">
							<h2 className="text-xl font-extrabold">Results so far</h2>
							<div>
								<h2>Vote for</h2>
								<div className="flex gap-2">
									<ProgressPositive value={20} />
									<p>20</p>
								</div>
							</div>
							<div>
								<h2>Vote for</h2>
								<div className="flex gap-2">
									<ProgressNegative value={80} />
									<p>80</p>
								</div>
							</div>
							<p className="text-gray-500">Total Votes cast:</p>
							<p>32,761</p>
						</div>
					</div>
					<div className="flex justify-around items-center mb-6 bg-blue-950 rounded-md ">
						<div className="rounded-md  p-4 ml-4">
							<h2 className="text-xl font-extrabold">Cast your vote</h2>
							<div className="flex flex-col gap-2">
								<div className="p-4 flex gap-2 border-cyan-800 rounded-md pr-96 border-2">
									<input type="radio" />
									<label>Yes, Vote for</label>
								</div>
								<div className="p-4 flex gap-2 border-cyan-800 rounded-md border-2">
									<input type="radio" />
									<label>No, Vote Against</label>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<div className="flex gap-4">
								<p>Start Date</p>
								<p className="text-gray-500">November 10,2023,8:00 AM</p>
							</div>
							<div className="flex gap-4">
								<p>End Date</p>
								<p className="text-gray-500">November 10,2023,8:00 AM</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Forum;
