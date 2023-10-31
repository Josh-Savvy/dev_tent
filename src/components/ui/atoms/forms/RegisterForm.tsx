import HowToRegIcon from "@mui/icons-material/HowToReg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CustomButton from "../common/button";
import CustomInput from "../common/input";
import useRegisterMutation from "../../../../hooks/mutations/useRegisterMutation";
import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterForm = () => {
	const { state, handleChange, register, loading, setLoading } =
		useRegisterMutation();
	const [showPassword, setShowPassword] = useState<boolean>(false);

	return (
		<form
			onSubmit={register}
			className="container mx-auto p-3 md:p-8 flex mt-10 animate__animated animate__fadeIn">
			<div className="max-w-lg w-full mx-auto">
				<h1 className="text-4xl text-center mb-4 flex font-bold items-center gap-4">
					<HowToRegIcon fontSize="inherit" /> Signup
				</h1>
				<div className="bg-white rounded-lg overflow-hidden shadow-2xl">
					<div className="p-8">
						<form method="POST" className="" action="#">
							<div className="mb-5">
								<CustomInput
									id="username"
									onChange={handleChange("username")}
									type="text"
									placeholder="Username"
									required
									value={state.email}
								/>
							</div>
							<div className="mb-5">
								<CustomInput
									id="email"
									onChange={handleChange("email")}
									type="email"
									placeholder="Email"
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
							<div className="mb-5">
								<CustomInput
									id="avatar"
									onChange={handleChange("avatar")}
									type="file"
									placeholder="Avatar Image"
									label="Avatar Image"
									labelClass="text-indigo-500 bg-transparent font-thin"
									value={state?.avatar?.name}
									className="mt-2"
								/>
							</div>
							<CustomButton
								buttonText="Login"
								className="text-lg"
							/>
						</form>
					</div>

					<div className="flex flex-wrap gap-2 justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
						<p className="font-medium text-gray-600">
							Already a user?{" "}
							<Link
								to="/login"
								className="cursor-pointer text-indigo-500">
								Login here
							</Link>
						</p>

						<a
							href="#"
							className="text-gray-600 hover:text-red-500 duration-300 cursor-pointer">
							Forgot password?
						</a>
					</div>
				</div>
			</div>
		</form>
	);
};

export default RegisterForm;
