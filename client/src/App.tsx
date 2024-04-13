import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WagmiProvider } from "wagmi";
import { config } from "../config";
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
		path: "/proposal/create",
		element: <Proposal />,
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
		path: "/thread/create",
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
