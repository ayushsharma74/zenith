import type { Metadata } from "next";
import "../globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
