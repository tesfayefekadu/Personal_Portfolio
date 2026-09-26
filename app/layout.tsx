import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Tesfaye Fekadu | Full-Stack Developer",
    template: "%s | Tesfaye Fekadu",
  },
  description:
    "Portfolio of Tesfaye Fekadu, a full-stack developer building modern websites and web applications.",
  keywords: [
    "Tesfaye Fekadu",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Tesfaye Fekadu" }],
  creator: "Tesfaye Fekadu",

  verification: {
    google: "_04e5aZxwgbGnF1hzLYlQfHqoBr3i3EZL0pdJWhSUHQ",
  },

  openGraph: {
    title: "Tesfaye Fekadu | Full-Stack Developer",
    description:
      "Portfolio of Tesfaye Fekadu, a full-stack developer building modern websites and web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" >
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
