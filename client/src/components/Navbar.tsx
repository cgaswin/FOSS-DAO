import Logo from "../assets/Logo.png";
const Navbar = () => {
	return (
		<nav className="flex justify-around mt-3">
			<div className="flex flex-row items-center gap-2">
				<img className="h-10" src={Logo} alt="Logo" />
				<h1>FOSS DAO</h1>
			</div>
			<div className="flex gap-6  border-gray-400 bg-navBlue rounded-full items-center px-8 py-1">
				<div className="hover:bg-blue-800 hover:cursor-pointer px-5 rounded-full">
					<a href="#home">Home</a>
				</div>
				<div className="hover:bg-blue-800  hover:cursor-pointer px-5 rounded-full">
					<a href="#about">About</a>
				</div>
				<div className="hover:bg-blue-800 hover:cursor-pointer px-5 rounded-full">
					<a href="#features">Features</a>
				</div>
			</div>
			<button className="bg-blue-800 hover:bg-blue-500 px-3 rounded-xl hover:cursor-pointer">
				Connect Wallet
			</button>
		</nav>
	);
};

export default Navbar;
