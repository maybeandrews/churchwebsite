import type React from "react";
import "./globals.css";
import { Inter, Crimson_Text } from "next/font/google";
import Link from "next/link"; // Import Link component

import { SiteHeader } from "@/components/site-header";

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
            <body className="min-h-screen bg-background font-sans antialiased">
                <div className="relative flex min-h-screen flex-col">
                    <SiteHeader />
                    {children}
                    <footer className="border-t py-6 md:py-0">
                        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                                © {new Date().getFullYear()} St. George Orthodox
                                Church. All rights reserved.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/privacy"
                                    className="text-sm text-muted-foreground hover:underline"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-sm text-muted-foreground hover:underline"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
