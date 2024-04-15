import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import GithubLogo from "../assets/github-mark-white.png";

export default function GithubWalletModal() {
	return (
		<Dialog defaultOpen={true}>
			<DialogContent>
				<DialogHeader>
					<div className="flex flex-col">
						<div className="bg-blue-950 hover:bg-slate-900 hover:cursor-pointer flex items-center gap-4 p-5 m-10 rounded-md">
							<img src={GithubLogo} width={40} alt="Github Logo" />
							<p className="text-xl">Connect with Github</p>
						</div>
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
