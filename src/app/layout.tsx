import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amirul | Software Engineer",
  description: "Senior Product Design & Software Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrains.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground tracking-tight flex flex-col antialiased relative overflow-x-hidden">
        {/* Grainy Noise Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none bg-noise mix-blend-overlay" />
        
        {/* Liquid Glass Background Elements */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-ethereal-purple/20 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-liquid-cyan/15 rounded-full blur-[120px] animate-float-reverse" />
          <div className="absolute top-[30%] right-[10%] w-[30%] h-[40%] bg-pink-500/10 rounded-full blur-[100px] animate-float-slow" style={{ animationDelay: '-7s' }} />
        </div>

        <ThemeProvider>
          <Navigation />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
