import { HtmlHTMLAttributes } from "react";

export default interface ICustomButtonProps
	extends HtmlHTMLAttributes<HTMLButtonElement> {
	buttonText: string;
	icon?: JSX.Element;
	disabled?: boolean;
}
