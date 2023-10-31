import React, { ChangeEvent, FormEvent, useState } from "react";

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
	const register = (e: FormEvent) => {
		e.preventDefault();
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
