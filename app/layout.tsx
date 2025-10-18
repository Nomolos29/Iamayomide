import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components"
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";
import { Lora, Bricolage_Grotesque, Poppins } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Lora (your existing serif font)
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});
 
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],  
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ayomide Arowolo-Ayodeji | EdTech Innovator & AI Literacy Advocate",
  description: "EdTech innovator, AI literacy advocate, and blockchain educator dedicated to expanding access to emerging technologies for underserved communities. Founder of Know the Blocks Maven (KBM).",
  keywords: "EdTech, AI literacy, blockchain education, KBM, Ayomide Arowolo-Ayodeji, Know the Blocks Maven, Web3 education, DKG alumnus, educational technology",
  authors: [{ name: "Ayomide Arowolo-Ayodeji" }],
  creator: "Ayomide Arowolo-Ayodeji",
  openGraph: {
    title: "Ayomide Arowolo-Ayodeji | EdTech Innovator & AI Literacy Advocate",
    description: "EdTech innovator, AI literacy advocate, and blockchain educator dedicated to expanding access to emerging technologies for underserved communities.",
    url: "https://iamtheayomide.com",
    siteName: "Ayomide Arowolo-Ayodeji Portfolio",
    images: [
      {
        url: "/personalImage2.jpeg",
        width: 1200,
        height: 630,
        alt: "Ayomide Arowolo-Ayodeji - EdTech Innovator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayomide Arowolo-Ayodeji | EdTech Innovator & AI Literacy Advocate",
    description: "EdTech innovator, AI literacy advocate, and blockchain educator dedicated to expanding access to emerging technologies for underserved communities.",
    creator: "@knowtheblocks_",
    images: ["/personalImage2.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${bricolage.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-between min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider>
          <Header />
          <main className="min-h-[40vh] flex flex-col justify-center overflow-hidden">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
