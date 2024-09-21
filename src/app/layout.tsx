import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kanbananza",
  description: "Unleash a Bonanza of Productivity!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
