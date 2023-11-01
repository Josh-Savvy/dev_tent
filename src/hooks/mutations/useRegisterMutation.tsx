import React, { ChangeEvent, FormEvent, useState } from "react";
import useAlertNotification from "../useToast";
import { fileToDataURL } from "../../utils";

export interface IRegisterState {
	username: string;
	email: string;
	password: string;
	avatar?: File | null;
	avatarUploadText?: string;
	imagePreview?: string;
}

const useRegisterMutation = () => {
	const initialState: IRegisterState = {
		username: "",
		email: "",
		password: "",
		avatar: null,
		avatarUploadText: "Choose Profile Image",
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
			if (field === "avatar") {
				const selectedFile = e.target.files ? e.target.files[0] : null;
				if (selectedFile) {
					fileToDataURL(selectedFile, (dataURL: string) => {
						setState({
							...state,
							avatar: selectedFile,
							imagePreview: dataURL,
							avatarUploadText: selectedFile.name,
						});
					});
				} else {
					setState({
						...state,
						avatarUploadText: initialState.avatarUploadText,
					});
				}
			} else {
				setState({ ...state, [field]: e.target.value });
			}
		};

	return { state, register, setLoading, loading, handleChange };
};

export default useRegisterMutation;
