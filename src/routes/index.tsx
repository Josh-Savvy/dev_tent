import IRouteProps from "../interfaces/route.interface";
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes: IRouteProps[] = [
	{
		name: "Home",
		path: "/",
		element: <Home />,
		protected: true,
	},
	{
		name: "Login",
		path: "/login",
		element: <Login />,
		index: true,
	},
];
export default routes;
