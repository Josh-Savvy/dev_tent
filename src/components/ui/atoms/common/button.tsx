import React from "react";
import classNames from "classnames";
import ICustomButtonProps from "../../../../interfaces/button.interface";

const CustomButton = (props: ICustomButtonProps) => {
	const { className, buttonText, disabled, icon, ...rest } = props;
	return (
		<button
			type="button"
			{...rest}
			disabled={disabled}
			className={classNames(
				"text-white bg-indigo-600 p-2 px-6 rounded w-full text-center",
				icon ? "flex gap-4 items-center" : "",
				disabled ? "cursor-not-allowed" : "",
				className,
			)}>
			{icon ? icon : null} {buttonText}
		</button>
	);
};

export default CustomButton;
