import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import ChatAssistant from "./components/chat/ChatAssistant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dharmik Joshi - Senior Java Backend Developer",
  description:
    "Portfolio website showcasing the skills, projects, and experience of Dharmik Joshi, a Senior Java Backend Developer specializing in Spring Boot, Redis, MongoDB, and microservices architecture.",
  keywords:
    "Java Developer, Spring Boot, Senior Software Engineer, Backend Developer, Microservices, Redis, MongoDB, AWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <ChatAssistant />
      </body>
    </html>
  );
}
