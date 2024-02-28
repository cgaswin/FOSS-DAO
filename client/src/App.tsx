import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
  },
  {
    path: "/dashboard",
    element:<Dashboard/>
  }, {
    path: "/profile",
    element: <Profile/>
  }
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
