import "../../globals.css";
import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/context/cart-context";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StyleNL | Premium Casual & Sports Clothing",
  description:
    "High quality, affordable casual and sports clothing for the modern Dutch lifestyle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="font-lato">
        <ThemeProvider attribute="class" forcedTheme="light">
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
