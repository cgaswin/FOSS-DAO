import DashboardIcon from "../assets/dashboardIcon.png";
import DepositIcon from "../assets/DepositIcon.png";
import ForumIcon from "../assets/ForumIcon.png";
import OverviewIcon from "../assets/OverviewIcon.png";
import ProfileIcon from "../assets/ProfileIcon.png";
import LogoutIcon from "../assets/LogoutIcon.png";

const Sidebar = () => {
	return (
		<div className="w-1/6 mt-3 h-[calc(100vh-4rem)]  pt-5  flex flex-col gap-6   bg-blue-950">
			<div className="rounded-md bg-blue-900  hover:bg-blue-800 hover:cursor-pointer flex gap-4 items-center text-white mx-3 px-4 py-2 text-center">
				<img src={DashboardIcon} />
				<p>Dashboard</p>
			</div>
			<div className="rounded-md bg-blue-900 hover:bg-blue-800 hover:cursor-pointer  flex gap-4 items-center text-white mx-3 px-4 py-2 text-center">
				<img src={ForumIcon} />
				<p>Forum</p>
			</div>
			{/* <div className="rounded-md bg-blue-900 hover:bg-blue-800 hover:cursor-pointer flex gap-4 items-center text-white mx-3 px-4 py-2 text-center">
				<img src={DepositIcon} />
				<p>Deposit</p>
			</div> */}
			<div className="rounded-md bg-blue-900  hover:bg-blue-800 hover:cursor-pointer flex gap-4 items-center text-white mx-3 px-4 py-2 text-center">
				<img src={OverviewIcon} />
				<p>Overview</p>
			</div>
			<div className="rounded-md bg-blue-900 hover:bg-blue-800 hover:cursor-pointer flex gap-4 items-center text-white mx-3 px-4 py-2 text-center">
				<img src={ProfileIcon} />
				<p>Profile</p>
			</div>
			<div className="rounded-md bg-blue-900 hover:bg-blue-800 hover:cursor-pointer flex gap-4 items-center text-white mx-3 px-4 py-2 text-center">
				<img src={LogoutIcon} />
				<p>Logout</p>
			</div>
		</div>
	);
};

export default Sidebar;
