import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function WalletModal() {
	const { open } = useWeb3Modal();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<button
					onClick={() => open()}
					className="bg-blue-800 hover:bg-blue-500 px-3 rounded-xl hover:cursor-pointer"
				>
					Connect Wallet
				</button>
			</DialogTrigger>
			<DialogContent
				onClick={() => open({ view: "Networks" })}
				className="sm:max-w-[425px]"
			>
				<DialogHeader>
					<DialogTitle>Connect Wallet</DialogTitle>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
