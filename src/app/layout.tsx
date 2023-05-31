import Layout from "@/components/ui/layout";
import "./globals.css";

export const metadata = {
  title: `${0} | MeetMaxx`,
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
        className="dark:bg-zinc-900 dark:text-white md:px-7"
        style={{ maxWidth: "100vw" }}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
