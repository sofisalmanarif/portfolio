import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Salman Arif",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="black" lang="en">
      <head ></head>
      <SmoothScrolling>
      <body
        className={`container mx-auto max-w-[900px] bg-black ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar/>
        {children}
        <Footer/>
      </body>
      </SmoothScrolling>
    </html>
  );
}
