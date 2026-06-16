import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compass — Personal Financial Analysis for Foreigners in Japan",
  description:
    "Compass is a personalised financial analysis report for foreigners living in Japan. Answer a few questions and receive a clear, actionable report tailored to your situation.",
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
