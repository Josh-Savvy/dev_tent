import Layout from "@/components/ui/layout";
import "./globals.css";
import "./nprogress.css";
import "animate.css/animate.css";
import "nprogress/nprogress.css";
import PageLoader from "./PageLoader";

export const metadata = {
	title: `${0} | DevTent`,
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-zinc-900 text-white" style={{ maxWidth: "100vw" }}>
				<PageLoader />
				<Layout>
					<div className="">{children}</div>
				</Layout>
			</body>
		</html>
	);
}
