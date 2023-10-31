import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastOptions } from "react-toastify/dist/types";

type NotificationType = "error" | "success" | "warning" | "info";

interface NotificationProps {
	type: NotificationType;
	theme?: "dark" | "colored" | "light";
	message: string;
	options?: ToastOptions;
	timeout?: ToastOptions["autoClose"];
}

const useAlertNotification = () => {
	const [showAlert, setShowAlert] = useState<boolean>(false);

	const alert = (props: NotificationProps) => {
		const { type, message, options, theme, timeout = 5000 } = props;

		if (!message || !type) return;

		const toastProps: ToastOptions = {
			toastId: type,
			autoClose: timeout,
			hideProgressBar: true,
			theme: theme || "colored",
			...options,
		};

		switch (type) {
			case "error":
				toast.error(message, toastProps);
				break;
			case "success":
				toast.success(message, toastProps);
				break;
			case "warning":
				toast.warning(message, toastProps);
				break;
			case "info":
				toast.info(message, toastProps);
				break;
			default:
				toast(message, toastProps);
		}

		setShowAlert(true);

		setTimeout(
			() => {
				if (showAlert) setShowAlert(false);
			},
			typeof timeout === "number" ? timeout : 5000,
		);
	};

	useEffect(() => {
		return () => {
			toast.dismiss();
		};
	}, []);

	return { alert };
};

export default useAlertNotification;
