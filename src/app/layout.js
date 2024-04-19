import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/shared components/Header";
import Footer from "@/shared components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata = {
  title: "Makerble",
  description: "A simple rails application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Header/>
          <main className="max-w-5xl mx-auto min-h-[270px]   px-10 lg:px-0">{children}</main>
      <Footer/>
        </body>
    </html>
  );
}
