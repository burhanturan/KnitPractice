import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/common/Footer";




export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ marginTop: "-100px" }}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
