import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import GitHubOAuth from "./GithubOAuth";

export default function GithubWalletModal() {
	console.log("hii");
	return (
		<Dialog defaultOpen={true}>
			<DialogContent>
				<DialogHeader>
					<div className="flex flex-col">
						<div className="bg-blue-950 hover:bg-slate-900 hover:cursor-pointer flex items-center gap-4 p-5 m-10 rounded-md">
							<GitHubOAuth />
						</div>
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
