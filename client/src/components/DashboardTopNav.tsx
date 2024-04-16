import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import Avatar from "../assets/Avatar.png";
import { NavLink } from "react-router-dom";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
// import { Web3 } from "web3";
// import { ERC20_ABI } from "../lib/abi.js";

// const tokenContract = import.meta.env.VITE_TOKEN_CONTRACT;
const DAO_WALLET_ADDRESS = import.meta.env.VITE_DAO_WALLET_ADDRESS;

const network = "sepolia";
const provider = new ethers.InfuraProvider(
	network,
	import.meta.env.VITE_INFURA_API_KEY
);

//web3.js

const DashboardTopNav = () => {
	const [balance, setBalance] = useState<number>(0);
	const [daoBalance, setDaoBalance] = useState<number>(0);

	const { address } = useAccount();

	useEffect(() => {
		(async function getBalance() {
			const balance = await provider.getBalance(DAO_WALLET_ADDRESS);
			const balanceFormatted = ethers.formatEther(balance);

			const balanceTrimmed = balanceFormatted.slice(0, 6);
			setDaoBalance(Number(balanceTrimmed));
			localStorage.setItem("daoBalance", balanceTrimmed);
			if (address) {
				const balance = await provider.getBalance(address);
				const balanceFormatted = ethers.formatEther(balance);
				const balanceTrimmed = balanceFormatted.slice(0, 6);
				setBalance(Number(balanceTrimmed));
				//set in local Storage
				localStorage.setItem("userBalance", balanceTrimmed);
			}
		})();
	}, [address]);

	const username = localStorage.getItem("username");
	const avatar = localStorage.getItem("avatarUrl");
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
				<h4 className="text-gray-600">Total Fund</h4>
				<p>{daoBalance} Tokens</p>
			</div>

			<div className="flex  ">
				<div className="rounded-md bg-blue-900 px-4 flex gap-1 items-center">
					<h2 className="flex items-center gap-2">
						<span>{balance}</span>
						<p>Tokens</p>
					</h2>
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
