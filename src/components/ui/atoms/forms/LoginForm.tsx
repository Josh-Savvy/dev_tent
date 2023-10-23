import React, { FormEvent } from "react";
import PatternIcon from "@mui/icons-material/Pattern";
import CustomButton from "../common/button";
import CustomInput from "../common/input";
import useLoginMutation, {
	ILoginState,
} from "../../../../hooks/mutations/useLoginMutation";

const LoginForm = () => {
	const { state, handleSubmit, handleChange } = useLoginMutation();

	return (
		<form
			onSubmit={handleSubmit}
			className="container mx-auto p-8 flex mt-10 animate__animated animate__fadeIn">
			<div className="max-w-lg w-full mx-auto">
				<h1 className="text-4xl text-center mb-4 flex font-bold items-center gap-4">
					<PatternIcon fontSize="inherit" /> Login
				</h1>
				<div className="bg-white rounded-lg overflow-hidden shadow-2xl">
					<div className="p-8">
						<form method="POST" className="" action="#">
							<div className="mb-5">
								<CustomInput
									onChange={handleChange("email")}
									type="email"
									placeholder="Email/Username"
									required
									value={state.email}
								/>
							</div>
							<div className="mb-5">
								<CustomInput
									onChange={handleChange("password")}
									type="password"
									placeholder="Password"
									required
									value={state.password}
								/>
							</div>

							<CustomButton
								buttonText="Login"
								className="text-lg"
							/>
						</form>
					</div>

					<div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
						<a href="#" className="font-medium text-indigo-500">
							Create account
						</a>

						<a href="#" className="text-gray-600">
							Forgot password?
						</a>
					</div>
				</div>
			</div>
		</form>
	);
};

export default LoginForm;
