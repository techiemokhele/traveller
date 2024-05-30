import type { Metadata } from "next";

import "./globals.css";
import NavbarComponent from "@/components/layout/NavbarComponent";
import FooterComponent from "@/components/layout/FooterComponent";
import ScrollToTopButtonComponent from "@/components/common/ScrollToTopButtonComponent";

export const metadata: Metadata = {
  title: "Neo Mokhele | Traveller App",
  description:
    "Unlock endless adventures with our traveller app! From flight bookings to personalised recommendations, plan your next journey effortlessly. Explore now the world with ease.",

  icons: {
    icon: "/camp.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarComponent />
        <main className="relative overflow-hidden">{children}</main>
        <ScrollToTopButtonComponent />
        <FooterComponent />
      </body>
    </html>
  );
}
