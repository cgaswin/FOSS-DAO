import DashboardIcon from "../assets/dashboardIcon.png";
import DepositIcon from "../assets/DepositIcon.png";
import ForumIcon from "../assets/ForumIcon.png";
import OverviewIcon from "../assets/OverviewIcon.png";
import ProfileIcon from "../assets/ProfileIcon.png";
import LogoutIcon from "../assets/LogoutIcon.png";
import { NotebookPen } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useDisconnect } from "wagmi";

const Sidebar = () => {
	const { disconnect } = useDisconnect();

	function handleLogout() {
		disconnect();
		localStorage.clear();
		document.cookie =
			"username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie =
			"avatarUrl=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		window.location.href = "/";
	}

	return (
		<div className="w-80 mt-3 rounded-md overflow-hidden h-[calc(100vh-4rem)]  pt-5  flex flex-col gap-6   bg-blue-950">
			<NavLink to="/dashboard">
				<div className="rounded-md bg-blue-900  hover:bg-blue-800 hover:cursor-pointer flex gap-4 items-center text-white mx-3 px-4 py-2 text-center">
					<img src={DashboardIcon} />
					<p>Dashboard</p>
				</div>
			</NavLink>
			<NavLink to="/myproposals">
				<div className="rounded-md bg-blue-900 hover:bg-blue-800 hover:cursor-pointer flex gap-4 items-center text-white mx-3 px-4 py-2 text-center">
					<NotebookPen />
					<p>My Proposals</p>
				</div>
			</NavLink>

			<NavLink to="/forum">
				<div className="rounded-md bg-blue-900 hover:bg-blue-800 hover:cursor-pointer  flex gap-4 items-center text-white mx-3 px-4 py-2 text-center">
					<img src={ForumIcon} />
					<p>Forum</p>
				</div>
			</NavLink>

			<NavLink to="/deposit">
				<div className="rounded-md bg-blue-900 hover:bg-blue-800 hover:cursor-pointer flex gap-4 items-center text-white mx-3 px-4 py-2 text-center">
					<img src={DepositIcon} />
					<p>Deposit</p>
				</div>
			</NavLink>

			<NavLink to="/overview">
				<div className="rounded-md bg-blue-900  hover:bg-blue-800 hover:cursor-pointer flex gap-4 items-center text-white mx-3 px-4 py-2 text-center">
					<img src={OverviewIcon} />
					<p>Overview</p>
				</div>
			</NavLink>

			<NavLink to="/profile">
				<div className="rounded-md bg-blue-900 hover:bg-blue-800 hover:cursor-pointer flex gap-4 items-center text-white mx-3 px-4 py-2 text-center">
					<img src={ProfileIcon} />
					<p>Profile</p>
				</div>
			</NavLink>

			<div
				onClick={handleLogout}
				className="rounded-md bg-blue-900 hover:bg-blue-800 hover:cursor-pointer flex gap-4 items-center text-white mx-3 px-4 py-2 text-center"
			>
				<img src={LogoutIcon} />
				<p>Logout</p>
			</div>
		</div>
	);
};

export default Sidebar;
