import FooterWith from "./common/Footer/Footer";
import HeadNavbar from "./common/HeadNavbar";
import "./globals.css";
import "react-slideshow-image/dist/styles.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ak Jilani ",
  description: "Ak Jilani Cars company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <link rel="icon" href="favicon" sizes="any" />
        <HeadNavbar />
        {children}
        <FooterWith />
      </body>
    </html>
  );
}
