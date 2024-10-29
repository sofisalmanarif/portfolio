import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png?v=4'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="black" lang="en">
      <head ></head>
      
      <body
        className={`container px-4 mx-auto max-w-[900px] bg-black ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar/>
        {children}
        <Footer/>
      </body>
    
    </html>
  );
}
