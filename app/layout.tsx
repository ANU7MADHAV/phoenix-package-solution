import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TwoNavbar from "@/components/navbar/TwoNavbar";
import { Providers } from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "phoenix packaging solutions",
  description: "Machine website",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <nav>
            <TwoNavbar />
          </nav>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
