import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { CustomScrollbar } from "@/components/motion/CustomScrollbar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muhammad Furqan Arshad — Software Developer",
  description:
    "Full-stack developer specializing in MERN, backend systems, and database-driven applications. Currently building Affinity Hub.",
  keywords: [
    "Muhammad Furqan Arshad",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Backend Developer Pakistan",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Muhammad Furqan Arshad" }],
  openGraph: {
    title: "Muhammad Furqan Arshad — Software Developer",
    description:
      "Full-stack developer specializing in MERN, backend systems, and database-driven applications.",
    url: siteUrl,
    siteName: "Muhammad Furqan Arshad",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Furqan Arshad — Software Developer",
    description:
      "Full-stack developer specializing in MERN, backend systems, and database-driven applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SmoothScrollProvider>
          <Header />
          <CustomScrollbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}