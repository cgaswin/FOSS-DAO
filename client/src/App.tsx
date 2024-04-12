import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
		element: <NewThread/>
	},
	{
		path: "/thread/:id",
		element: <Thread/>
	}
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
