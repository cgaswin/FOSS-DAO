import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import Proposal from "./pages/Proposal";
import Overview from "./pages/Overview";
import Forum from "./pages/Forum";
import ProposalDetail from "./pages/ProposalDetail";
import NewThread from "./pages/NewThread";
import Thread from "./pages/Thread";
import Deposit from "./pages/Deposit";
import MyProposals from "./pages/MyProposals";
import GithubAuth from "./pages/GithubAuth";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/profile",
		element: <Profile />,
	},
	{
		path: "/github-auth",
		element:<GithubAuth/>,
	},
	{
		path: "/proposal/create/:proposalId",
		element: <Proposal />,
	},
	{
		path: "/myproposals",
		element: <MyProposals />,
	},
	{
		path: "/proposal/:proposalId",
		element: <ProposalDetail />,
	},
	{
		path: "/overview",
		element: <Overview />,
	},
	{
		path: "/forum",
		element: <Forum />,
	},
	{
		path: "/thread/create/:id",
		element: <NewThread />,
	},
	{
		path: "/thread/:id",
		element: <Thread />,
	},
	{
		path: "/deposit",
		element: <Deposit />,
	},
]);

const queryClient = new QueryClient();

const projectId = import.meta.env.VITE_PROJECT_ID;

// 2. Create wagmiConfig
const metadata = {
	name: "Web3Modal",
	description: "Web3Modal Example",
	url: "https://web3modal.com", // origin must match your domain & subdomain
	icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [sepolia] as const;
const config = defaultWagmiConfig({
	chains,
	projectId,
	metadata,
});

// 3. Create modal
createWeb3Modal({
	wagmiConfig: config,
	projectId,
	enableAnalytics: true, // Optional - defaults to your Cloud configuration
	enableOnramp: true, // Optional - false as default
});

const App = () => {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />;
			</QueryClientProvider>
		</WagmiProvider>
	);
};

export default App;
