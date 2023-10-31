import React, { ChangeEvent, FormEvent, useState } from "react";
import useAlertNotification from "../useToast";

export interface IRegisterState {
	username: string;
	email: string;
	password: string;
	avatar?: File | null;
}

const useRegisterMutation = () => {
	const initialState: IRegisterState = {
		username: "",
		email: "",
		password: "",
		avatar: null,
	};
	const [state, setState] = useState<IRegisterState>(initialState);
	const [loading, setLoading] = useState<boolean>(false);
	const { alert } = useAlertNotification();

	const register = (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		if (!state.username || !state.email || !state.password) {
			setLoading(false);
			alert({
				message: "Please fill all fields",
				type: "error",
			});
			// &&
			return;
		}
		console.log(state);
	};

	const handleChange =
		(field: keyof IRegisterState) => (e: ChangeEvent<HTMLInputElement>) => {
			setLoading(false);
			setState({ ...state, [field]: e.target.value });
		};
	return { state, register, setLoading, loading, handleChange };
};

export default useRegisterMutation;
