import type { Metadata } from "next";
import "./globals.css";
import { 
  // Montserrat, Roboto,
   Smooch_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";

// const smooch = Roboto({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

const smooch = Smooch_Sans({
  subsets : ["latin"],
})

// const smooch = Montserrat({
//   subsets:['latin']
// })

export const metadata: Metadata = {
  title: "Abhishek Engg Works",
  description: "One stop Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${smooch.className} antialiased`}>
        <Cursor/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
