import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehul - Full-Stack Developer",
  description:
    "Portfolio of Mehul, a dedicated full-stack developer specializing in Next.js, TypeScript, NestJS, PostgreSQL, and microservices architecture.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Kafka",
    "Microservices",
    "React",
    "Web Development",
  ],
  authors: [{ name: "Mehul" }],
  openGraph: {
    title: "Mehul - Full-Stack Developer",
    description:
      "Portfolio showcasing full-stack projects built with Next.js, TypeScript, NestJS, and PostgreSQL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
