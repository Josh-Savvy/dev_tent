import React, { FormEvent, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PatternIcon from "@mui/icons-material/Pattern";
import CustomButton from "../common/button";
import CustomInput from "../common/input";
import useLoginMutation from "../../../../hooks/mutations/useLoginMutation";
import { Link } from "react-router-dom";

const LoginForm = () => {
	const { state, login, handleChange, loading } = useLoginMutation();
	const [showPassword, setShowPassword] = useState<boolean>(false);
	return (
		<form
			onSubmit={login}
			className="container mx-auto p-3 md:p-8 flex mt-10 animate__animated animate__fadeIn">
			<div className="max-w-lg w-full mx-auto">
				<h1 className="text-4xl text-center mb-4 flex font-bold items-center gap-4">
					<PatternIcon fontSize="inherit" /> Login
				</h1>
				<div className="bg-white rounded-lg overflow-hidden shadow-2xl">
					<div className="p-8">
						<>
							<div className="mb-5">
								<CustomInput
									id="email"
									onChange={handleChange("email")}
									type="email"
									placeholder="Email/Username"
									required
									value={state.email}
								/>
							</div>
							<div className="mb-5">
								<CustomInput
									id="password"
									onChange={handleChange("password")}
									type={showPassword ? "text" : "password"}
									placeholder="Password"
									required
									value={state.password}
									icon={
										<div
											className="text-indigo-500 cursor-pointer duration-300"
											onClick={() =>
												setShowPassword(!showPassword)
											}>
											{showPassword ? (
												<VisibilityOffIcon fontSize="medium" />
											) : (
												<VisibilityIcon fontSize="medium" />
											)}
										</div>
									}
								/>
							</div>
							<CustomButton
								buttonText={loading ? "" : "Login"}
								className="text-lg"
								icon={loading ? <ActivityIndicator /> : null}
							/>
						</>
					</div>

					<div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
						<Link
							to="/register"
							className="font-medium text-indigo-500 cursor-pointer">
							Create account
						</Link>

						<a
							href="#"
							className="text-gray-600  hover:text-red-500 duration-300 cursor-pointer">
							Forgot password?
						</a>
					</div>
				</div>
			</div>
		</form>
	);
};

export default LoginForm;
