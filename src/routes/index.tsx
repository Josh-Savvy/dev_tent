import IRouteProps from "../interfaces/route.interface";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
	{
		name: "Register",
		path: "/register",
		element: <Register />,
	},
];
export default routes;
