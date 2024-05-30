import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neo Mokhele | Traveller App",
  description:
    "Unlock endless adventures with our traveller app! From flight bookings to personalized recommendations, plan your next journey effortlessly. Download now and explore the world with ease.",

  icons: {
    icon: "/favicon.ico",
  },
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
