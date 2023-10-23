import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/ui/layout";
import routes from "./routes";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					{routes.map((route, index) =>
						route.protected ? (
							<Route
								key={index}
								path={route.path}
								element={
									<ProtectedRoute element={route.element} />
								}
							/>
						) : (
							<Route
								key={index}
								index={route.index}
								path={route.path}
								element={route.element}
							/>
						),
					)}
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Layout>
		</Router>
	);
};

export default App;
