import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import Proposal from "./pages/Proposal";

const router = createBrowserRouter([
	{
		path: "/",
    element: <Home />,
    errorElement:<Error/>
  },
  {
    path: "/dashboard",
    element:<Dashboard/>
  }, {
    path: "/profile",
    element: <Profile/>
  }, {
    path: "/proposal/create",
    element: <Proposal/>
  }
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
