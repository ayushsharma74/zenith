import type { Metadata } from "next";
import {  Geist_Mono } from "next/font/google";
import "../globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zenith",
  description: "UI lib on top of Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body
    //     className={` ${geistMono.variable} antialiased   `}
    //   >
        /* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */
           <> 
        <MaxWidthWrapper>
          <Navbar />
        {children}
        <Footer />
        </MaxWidthWrapper>
        </>
        /* </ThemeProvider> */
    /* //   </body> */
    /* // </html> */
  );
}
