import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const scriptMTBold = localFont({
  src: "../public/fonts/ScriptMTBold.ttf",
  variable: "--font-script-mt-bold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "E-SRAMBAHAN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${scriptMTBold.variable} antialiased`}>{children}</body>
    </html>
  );
}
