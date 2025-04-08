"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NavigationMenu } from "./navigation-menu";
import { Menu, X } from "lucide-react"; // Import icons

export function SiteHeader() {
    const [scrollY, setScrollY] = useState(0);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [visible, setVisible] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Check if we're on the home page
    const isHomePage = pathname === "/";

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if we should show or hide the header
            if (currentScrollY > prevScrollY) {
                // Scrolling down - hide header only on home page
                if (isHomePage && !mobileMenuOpen) {
                    setVisible(false);
                }
            } else {
                // Scrolling up - show header
                setVisible(true);
            }

            // Update scroll positions
            setPrevScrollY(currentScrollY);
            setScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY, isHomePage, mobileMenuOpen]);

    // Determine header styling based on scroll position and route
    const isScrolled = scrollY > 50;

    const getHeaderStyle = () => {
        if (mobileMenuOpen) {
            return "bg-black shadow-lg"; // Always solid when mobile menu is open
        } else if (isHomePage) {
            return isScrolled
                ? "bg-black bg-opacity-80 backdrop-blur-sm shadow-lg"
                : "bg-transparent";
        } else {
            return "bg-black shadow-lg"; // Always black background on other pages
        }
    };

    return (
        <header
            className={`fixed w-full z-40 transition-all duration-300 ${
                visible ? "translate-y-0" : "-translate-y-full"
            } ${getHeaderStyle()}`}
        >
            {/* Main Header Section */}
            <div className="container flex h-16 items-center justify-between">
                {/* Left Section: Logo */}
                <div className="flex items-center space-x-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/churchlogotransparent.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="h-10 w-10"
                        />
                        <div className="hidden font-serif text-xl font-bold text-white sm:inline-block">
                            St. Thomas Orthodox Cathedral
                        </div>
                    </Link>
                </div>

                {/* Navigation Menu (Centered) - Desktop Only */}
                <div className="hidden lg:flex lg:flex-1 justify-end">
                    <NavigationMenu />
                </div>

                {/* Right Section: Buttons and Hamburger */}
                <div className="flex items-center space-x-4">
                    <Link href="/donations" className="hidden sm:block">
                        <Button
                            variant="outline"
                            className="bg-transparent border-[#c23b22] text-white hover:bg-[#fb6d4c] hover:text-white focus:bg-[#c23b22]/30 focus:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                        >
                            Donate Now
                        </Button>
                    </Link>
                    <Link href="/contact" className="hidden sm:block">
                        <Button
                            variant="outline"
                            className="bg-[#c23b22] border-[#c23b22] text-white hover:bg-[#fb6d4c] hover:text-white focus:bg-[#fb6d4c] focus:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                        >
                            Contact Us
                        </Button>
                    </Link>

                    {/* Mobile Menu Toggle with improved focus styles */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-white focus:outline-none focus:bg-white/20 focus:rounded-md"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-black text-white overflow-y-auto max-h-[calc(100vh-4rem)]">
                    <div className="container py-6">
                        <NavigationMenu mobile={true} />

                        <div className="flex flex-col space-y-4 mt-6 pt-6 border-t border-gray-700">
                            <Link href="/donations">
                                <Button
                                    variant="outline"
                                    className="w-full bg-transparent border-[#c23b22] text-white hover:bg-[#fb6d4c] hover:text-white"
                                >
                                    Donate Now
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    variant="outline"
                                    className="w-full bg-[#c23b22] border-[#c23b22] text-white hover:bg-[#fb6d4c] hover:text-white"
                                >
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
