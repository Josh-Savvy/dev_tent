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
	type?: HTMLInputTypeAttribute;
	labelClass?: string;
	accept?: string;
	label?: string;
	containerProps?: HTMLAttributes<HTMLDivElement>;
}
