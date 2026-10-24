// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "English With Lilian | Online English Tutor",
    template: "%s | English With Lilian",
  },
  description:
    "15 years teaching English as a foreign language to students across Asia, Europe, South America, and Africa. Personalized online lessons for speaking, listening, reading, writing, grammar, vocabulary, IELTS, and TOEFL.",
  keywords: [
    "English tutor",
    "online English lessons",
    "IELTS preparation",
    "TOEFL preparation",
    "English speaking practice",
    "learn English online",
    "British English tutor",
  ],
  openGraph: {
    title: "English With Lilian | English Tutor",
    description:
      "15+ years helping learners speak English with confidence. Personalized 1:1 online lessons.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}