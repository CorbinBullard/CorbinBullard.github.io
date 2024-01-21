import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navigation/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Corbin Bullard",
  description: "Corbin Bullard Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
