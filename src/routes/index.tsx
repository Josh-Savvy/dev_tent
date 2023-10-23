import IRouteProps from "../interfaces/route.interface";
import Home from "../pages/Home";

const routes: IRouteProps[] = [
	{
		name: "Home",
		path: "/",
		element: <Home />,
	},
];
export default routes;
