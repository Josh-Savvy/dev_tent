import {
	HTMLAttributes,
	HTMLInputTypeAttribute,
	HtmlHTMLAttributes,
} from "react";

export default interface ICustomInputProps
	extends HtmlHTMLAttributes<HTMLInputElement> {
	icon?: JSX.Element;
	disabled?: boolean;
	required?: boolean;
	value?: string | number | readonly string[];
	label?: string;
	type?: HTMLInputTypeAttribute;
	containerProps?: HTMLAttributes<HTMLDivElement>;
}
