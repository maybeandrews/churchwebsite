import type React from "react";
import { Inter, Crimson_Text } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

// Font configurations
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const crimson = Crimson_Text({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-serif",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${crimson.variable}`}>
            <body className="min-h-screen bg-white font-sans antialiased">
                <div className="relative flex min-h-screen flex-col">
                    <SiteHeader />
                    <main className="flex-1">{children}</main>
                    <SiteFooter />
                </div>
            </body>
        </html>
    );
}
