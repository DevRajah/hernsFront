import { Inter } from "next/font/google";
import "./globals.css";
import Head from "./componnet/head";
import Footer from "./componnet/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Herns Medical",
  description: "Medical Equipment supply",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head />
        <div className="py-6">
        {children}
        </div>
        <Footer/> 
      </body>
    </html>
  );
}
