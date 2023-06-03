import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kareem Ebrahim",
  description: "Kareem Ebrahim's website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
