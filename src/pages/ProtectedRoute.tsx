import React, { Fragment } from "react";
import {
	Navigate,
	RouteProps,
	useLocation,
	useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element, ...rest }: RouteProps) => {
	// const isAuth = useSelector(isLoggedIn);
	const isAuth = false;
	const location = useLocation();
	const previousUrl = encodeURIComponent(location.pathname);
	if (!isAuth) {
		if (previousUrl) {
			return (
				<Fragment>
					<Navigate
						to="/login"
						state={{ ...location.state, previousUrl }}
						replace
					/>
				</Fragment>
			);
		}
		return (
			<Fragment>
				<Navigate to="/login" state={{ ...location.state }} replace />
			</Fragment>
		);
	}
	return <Fragment>{element}</Fragment>;
};

export default ProtectedRoute;
