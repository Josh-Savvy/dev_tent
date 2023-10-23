import React, { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import ICustomInputProps from "../../../../interfaces/input.interface";
import classNames from "classnames";

const CustomInput = forwardRef(function Input(
	props: ICustomInputProps,
	ref: ForwardedRef<HTMLInputElement>,
) {
	const {
		containerProps,
		className,
		icon,
		disabled = false,
		placeholder = false,
		label,
		required,
		...inputRest
	} = props;

	return (
		<>
			<div
				className={classNames(
					"flex items-center relative border-indigo-600 border-b rounded p-2 custom-input-container",
					containerProps?.className,
					icon ? "" : "",
					disabled ? "cursor-not-allowed" : "",
				)}
				{...containerProps}>
				{label ? (
					<label
						htmlFor={props.id}
						className="block mb-2 text-sm bg-[#fff] px-3 p-1 -top-4 text-gray-600 text-sm absolute">
						{label}
					</label>
				) : null}
				<input
					ref={ref}
					placeholder={props.placeholder}
					{...inputRest}
					disabled={disabled}
					required={required}
					className={classNames(
						"flex-grow focus:outline-none focus:ring-0 bg-transparent placeholder:text-sm placeholder:text-indigo-500 placeholder:font-thin p-1 text-indigo-500 text-indigo-500",
						className,
						icon ? "w-[85%]" : "w-full",
						required ? "input_is_required" : "",
					)}
				/>
				{/* <div className="peer-[.input_is_required]:peer-required:block hidden text-[red] text-sm">
					This field is required.
				</div> */}
				{icon ? <div className="bg-white">{icon}</div> : null}
			</div>
		</>
	);
});

export default CustomInput;
