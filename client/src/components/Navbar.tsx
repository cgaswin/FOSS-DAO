import Logo from "../assets/Logo.png";
const Navbar = () => {
	return (
		<nav className="flex justify-around mt-6">
			<div className="flex flex-row items-center gap-2">
				<img className="h-10" src={Logo} alt="Logo" />
				<h1>FOSS DAO</h1>
			</div>
			<div className="flex gap-6  bg-navBlue rounded-full  px-8 py-1">
				<div className="hover:bg-blue-800 hover:cursor-pointer px-5 py-1 rounded-full">
					Home
				</div>
				<div className="hover:bg-blue-800 hover:cursor-pointer px-5 py-1 rounded-full">
					About
				</div>
				<div className="hover:bg-blue-800 hover:cursor-pointer px-5 py-1 rounded-full">
					Features
				</div>
			</div>
			<button className="bg-blue-800 hover:bg-blue-500 px-3 rounded-xl hover:cursor-pointer">
				Connect Wallet
			</button>
		</nav>
	);
};

export default Navbar;
