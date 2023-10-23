import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { ToastOptions, ToastProps } from "react-toastify/dist/types";

type NotificationType = "error" | "success" | "warning" | "info";

interface NotificationProps {
	type: NotificationType;
	message: string;
	options?: ToastOptions;
}

const useAlertNotification = (props: NotificationProps) => {
	useEffect(() => {
		if (!props.message || !props.type) return;
		const { type, message, options } = props;
		const toastProps: ToastOptions = {
			toastId: type,
			autoClose: 5000,
			hideProgressBar: true,
			theme: "colored",
		};
		switch (type) {
			case "error":
				toast.error(message, { ...toastProps, ...options });
				break;
			case "success":
				toast.success(message, { ...toastProps, ...options });
				break;
			case "warning":
				toast.warning(message, { ...toastProps, ...options });
				break;
			case "info":
				toast.info(message, { ...toastProps, ...options });
				break;
			default:
				toast(message, { ...toastProps, ...options });
		}
	}, [props]);

	return null;
};

export default useAlertNotification;
