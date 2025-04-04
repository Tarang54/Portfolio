import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tarang Sultania",
  description: "Discover the portfolio of Tarang Sultania, a skilled web developer specializing in modern, high-performance websites and applications. Explore projects showcasing expertise in React.js, Next.js, Tailwind CSS, and innovative web design. Let's build something amazing together!",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico", 
    apple: "/apple-touch-icon.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Winky+Sans:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
