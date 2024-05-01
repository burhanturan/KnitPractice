import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/common/Footer2";

export const metadata = {
  title: "KNIT Software",
  description: "KNIT Software",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=2"],
    shortcut: ["/apple-touch-icon.png"],
  },
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
