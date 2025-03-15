import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/app/_components/header";
import { Background } from "@/app/_components/background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: [ "latin" ],
});

export const metadata: Metadata = {
  title: "uniu.moe",
  description: "nya~n",
  openGraph: {
    title: "uniu.moe",
    description: "nya~n",
    images: [
      {
        url: "https://uniu.moe/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "uniu.moe",
      },
    ],
    locale: "ja_JP",
    type: "website",
    url: "https://uniu.moe",
  },
  twitter: {
    card: "summary_large_image",
    title: "uniu.moe",
    description: "nya~n",
    images: [ "https://uniu.moe/images/opengraph-image.png" ], // または別のOGP用画像パス
    creator: "@yuniuiui",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      <Background />
      <div className="container mx-auto pt-20 pb-20">
        {children}
      </div>
    </ThemeProvider>
    </body>
    </html>
  );
}
