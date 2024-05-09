import DashboardTopNav from "@/components/DashboardTopNav";
import Sidebar from "@/components/Sidebar";
import TokenLogo from "../assets/Logo.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import { useNavigate } from "react-router-dom";

const walletAddress = import.meta.env.VITE_DAO_WALLET_ADDRESS;

const Deposit = () => {
	const { sendTransactionAsync } = useSendTransaction();
	const navigate = useNavigate();
	const [depositAmount, setDepositAmount] = useState("");
	async function handleSubmit() {
		console.log(depositAmount);
		if (walletAddress) {
			const result = await sendTransactionAsync({
				to: "0xd2135CfB216b74109775236E36d4b433F1DF507B",
				value: parseEther(depositAmount),
			});
			if (result) {
				alert("Tokens Transferred");
				navigate("/Dashboard");
			}
		}
	}

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setDepositAmount(event.target.value);
	}
	return (
		<div>
			<DashboardTopNav />
			<div className="flex ">
				<Sidebar />
				<div className="flex flex-col items-center justify-center  w-full mt-4 h-[calc(100vh-4rem)]">
					<div className="bg-blue-950 rounded-md p-10 w-4/6">
						<div className="bg-slate-900 rounded-md p-10">
							<h2 className="mb-2">You pay</h2>
							<div className="flex justify-between ">
								<input
									type="number"
									value={depositAmount}
									onChange={handleChange}
									className="outline-none rounded-md text-black px-2"
								/>
								<div className="flex gap-2 p-2 items-center px-2 bg-slate-950 rounded-lg">
									<img
										src={TokenLogo}
										width={20}
										height={20}
										alt="token logo"
									/>
									<h2>Token</h2>
								</div>
							</div>
						</div>
						<Button
							className="bg-cyan-600 hover:bg-cyan-500 mt-2"
							onClick={handleSubmit}
						>
							Deposit
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Deposit;
