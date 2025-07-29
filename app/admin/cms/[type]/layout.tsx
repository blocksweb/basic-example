import { CartProvider } from "@/context/cart-context";
import "@blocksweb/core/style.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bw-dark dark">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
