import { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import Avatar from "../assets/Avatar.png";
import { NavLink } from "react-router-dom";
import { Web3 } from "web3";
import { useAccount } from "wagmi";

const web3 = new Web3(
	`https://mainnet.infura.io/v3/${import.meta.env.VITE_INFURA_API_KEY}`
);

const balanceOfABI = [
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				name: "balance",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
];

const tokenContract = import.meta.env.VITE_TOKEN_CONTRACT;

const DashboardTopNav = () => {
	const [balance, setBalance] = useState<number>(0);

	const { address } = useAccount();

	useEffect(() => {
		const contract = new web3.eth.Contract(balanceOfABI, tokenContract);
		(async function getTokenBalance() {
			if (address) {
				const result = await contract.methods.balanceOf(address).call();
				if (!result) {
					console.log("error");
				}
				console.log(result);
				if (typeof result === "number") {
					const formattedResult = web3.utils.fromWei(result, "ether");
					console.log(formattedResult);
					setBalance(parseInt(formattedResult));
				}
			}
		})();
	}, [address]);

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
					<h2 className="flex items-center gap-2">
						<h4>{balance}</h4>
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
