import type { Metadata } from "next";
import { Kanit } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar/page"
import Footer from "@/components/Footer/page";
import SmoothScroll from "@/components/SmoothScroll/page";

const kanit = Kanit({
  weight: '300', 
  subsets: ['latin', 'thai'],
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={kanit.className}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
