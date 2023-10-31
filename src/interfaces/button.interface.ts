import { HtmlHTMLAttributes } from "react";

export default interface ICustomButtonProps
	extends HtmlHTMLAttributes<HTMLButtonElement> {
	buttonText: string;
	icon?: JSX.Element | null;
	disabled?: boolean;
	type?: "submit" | "reset" | "button";
}
