import Layout from "@/components/ui/layout";
import "./globals.css";
import "animate.css/animate.css";

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
      <body
        className="bg-zinc-900 text-white md:px-7"
        style={{ maxWidth: "100vw" }}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
