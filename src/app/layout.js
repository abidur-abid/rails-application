import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata = {
  title: "Rails Application",
  description: "A simple rails application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <main>
            {children}
          </main>
        </body>
    </html>
  );
}
