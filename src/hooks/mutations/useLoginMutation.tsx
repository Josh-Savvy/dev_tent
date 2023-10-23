import React, { ChangeEvent, FormEvent, useState } from "react";

export interface ILoginState {
	email: string;
	password: string;
}

const useLoginMutation = () => {
	const initialState: ILoginState = {
		email: "",
		password: "",
	};
	const [state, setState] = useState<ILoginState>(initialState);
	const [loading, setLoading] = useState<boolean>(false);
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log();
	};
	const handleChange =
		(field: keyof ILoginState) => (e: ChangeEvent<HTMLInputElement>) => {
			setLoading(false);
			setState({ ...state, [field]: e.target.value });
		};
	return { state, handleSubmit, setLoading, loading, handleChange };
};

export default useLoginMutation;
