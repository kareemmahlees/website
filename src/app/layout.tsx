import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { Preahvihear } from "next/font/google";
import Providers from "./providers";

const preahvihear = Preahvihear({ subsets: ["latin"], weight: "400" });

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
    <html lang="en" className="scroll-smooth">
      <body className={preahvihear.className}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
