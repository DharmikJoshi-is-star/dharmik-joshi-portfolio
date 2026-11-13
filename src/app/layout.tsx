import type { Metadata } from "next";
import {
  Instrument_Serif,
  JetBrains_Mono,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Dharmik Joshi — Senior Backend Engineer",
  description:
    "Senior SDE building Spring Boot microservices, real-time SSE gateways, MCP tooling, and event-driven systems at Newfold Digital and ShopSe.",
  keywords: [
    "Java",
    "Spring Boot",
    "WebFlux",
    "Microservices",
    "Redis",
    "Kubernetes",
    "Oracle AQ",
    "MCP",
    "Senior Software Engineer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${sourceSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased bg-surface text-ink">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
