import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChaMP — Chat-enabled Multi-Agentic Mission Platform",
  description:
    "Machine-speed mission planning and C2 through multi-agent AI orchestration. Battle-tested COAs via rapid simulation iteration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
