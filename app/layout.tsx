import "@/styles/globals.css";

export const metadata = {
  title: "Cashkr Admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-secondaryBackground h-max">{children}</body>
    </html>
  );
}
