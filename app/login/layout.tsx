import "@/styles/globals.css";

export const metadata = {
  title: "Admin Login - Cashkr ",
  description: "Login to Cashkr Admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-secondaryBackground text-primaryText">
        {children}
      </body>
    </html>
  );
}
