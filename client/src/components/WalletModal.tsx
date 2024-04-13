import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import MetamaskImage from "../assets/metamask.png";
import { useConnect } from "wagmi";

export default function WalletModal() {
	const { connectors, connect } = useConnect();
	const actualConnector = connectors[0];
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="bg-blue-800 hover:bg-blue-500 px-3 rounded-xl hover:cursor-pointer">
					Connect Wallet
				</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Connect Wallet</DialogTitle>
				</DialogHeader>
				<div className="flex flex-col">
					<div
						onClick={() => connect({ connector: actualConnector })}
						className="bg-blue-950 hover:bg-slate-900 hover:cursor-pointer flex items-center gap-4 p-5 m-10 rounded-md"
					>
						<img src={MetamaskImage} alt="metamask logo" />
						<p className="text-xl">{actualConnector.name}</p>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
