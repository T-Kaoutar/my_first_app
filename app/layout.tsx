import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My App",
  description: "My first app with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
