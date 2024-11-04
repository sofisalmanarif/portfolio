import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script"; // Import Script component from next/script
import { ThemeProvider } from "@/components/theme-provider";

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
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png?v=4"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <head></head>

      <body
        className={`container px-4 mx-auto max-w-[900px] dark:bg-[#030712]  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        <Footer />

          </ThemeProvider>
        {/* Embed chatbot config */}
        <Script id="chatbot-config" strategy="afterInteractive">
          {`
            window.embeddedChatbotConfig = {
              chatbotId: "LOpnoerhDpaYPk7PqR2gv",
              domain: "www.chatbase.co"
            }
          `}
        </Script>

        {/* Load chatbot script */}
        <Script
          src="https://www.chatbase.co/embed.min.js"
          strategy="afterInteractive"
          chatbotId="LOpnoerhDpaYPk7PqR2gv"
          domain="www.chatbase.co"
        />
      </body>
    </html>
  );
}
