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
	label?: string;
	type?: HTMLInputTypeAttribute;
	containerProps?: HTMLAttributes<HTMLDivElement>;
}
