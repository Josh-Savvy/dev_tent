export default interface IRouteProps {
	name: string;
	path: string;
	index?: boolean;
	element: JSX.Element;
	protected?: boolean;
}
