import Logo from "../assets/Logo.png";
import Avatar from "../assets/Avatar.png";
import { NavLink } from "react-router-dom";

const DashboardTopNav = () => {
	const username = localStorage.getItem("username");
	const avatar = localStorage.getItem("avatar_url");
	let avatarImage = Avatar;

	if (avatar) {
		avatarImage = avatar;
	}
	return (
		<div className="flex justify-between px-4  mt-3">
			<NavLink to="/dashboard">
				<div className="flex flex-row items-center gap-2">
					<img className="h-10" src={Logo} alt="Logo" />
					<h1>FOSS DAO</h1>
				</div>
			</NavLink>
			<div className="rounded-md px-4 bg-amber-200 text-black text-center">
				<h4 className="text-gray-600">Total Balance</h4>
				<p>123456 Tokens</p>
			</div>

			<div className="flex  ">
				<div className="rounded-md bg-blue-900 px-4 flex gap-1 items-center">
					<h4>
						3200
						<br />
						Tokens
					</h4>
					<img className="h-5" src={Logo} alt="Logo" />
				</div>
				<div className="rounded-md bg-blue-950 px-4 flex gap-2 items-center">
					<img src={avatarImage} className="rounded-full" width={40} />
					<h4>{username}</h4>
				</div>
			</div>
		</div>
	);
};

export default DashboardTopNav;
