import Logo from "../assets/Logo.png";
import Avatar from "../assets/Avatar.png";

const DashboardTopNav = () => {
	return (
		<div className="flex justify-between px-4  mt-3">
			<div className="flex flex-row items-center gap-2">
				<img className="h-10" src={Logo} alt="Logo" />
				<h1>FOSS DAO</h1>
			</div>
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
					<img src={Avatar} />
					<h4>cgaswin</h4>
				</div>
			</div>
		</div>
	);
};

export default DashboardTopNav;
