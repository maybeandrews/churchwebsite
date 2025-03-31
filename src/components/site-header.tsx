"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Menu,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { NavigationMenu } from "./navigation-menu";

export function SiteHeader() {
    const [scrollY, setScrollY] = useState(0);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if we should show or hide the header
            if (currentScrollY > prevScrollY) {
                // Scrolling down - hide header
                setVisible(false);
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
    }, [prevScrollY]);

    // Determine header styling based on scroll position
    const isScrolled = scrollY > 50;

    return (
        <header
            className={`fixed w-full z-40 transition-all duration-300 ${
                visible ? "translate-y-0" : "-translate-y-full"
            } ${
                isScrolled
                    ? "bg-black bg-opacity-80 backdrop-blur-sm shadow-lg"
                    : "bg-transparent"
            }`}
        >
            {/* Top Section: Social Media Icons - now aligned above Contact Us button */}
            <div className="w-full flex justify-end px-6 py-1">
                <div className="flex space-x-3 sm:pr-12">
                    <Link
                        href="https://facebook.com"
                        target="_blank"
                        aria-label="Facebook"
                    >
                        <Facebook className="h-4 w-4 text-white hover:text-blue-500 transition-colors duration-200" />
                    </Link>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        aria-label="Instagram"
                    >
                        <Instagram className="h-4 w-4 text-white hover:text-pink-500 transition-colors duration-200" />
                    </Link>
                    <Link
                        href="https://twitter.com"
                        target="_blank"
                        aria-label="Twitter"
                    >
                        <Twitter className="h-4 w-4 text-white hover:text-blue-400 transition-colors duration-200" />
                    </Link>
                    <Link
                        href="https://youtube.com"
                        target="_blank"
                        aria-label="YouTube"
                    >
                        <Youtube className="h-4 w-4 text-white hover:text-red-500 transition-colors duration-200" />
                    </Link>
                    <Link
                        href="https://linkedin.com"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-4 w-4 text-white hover:text-blue-700 transition-colors duration-200" />
                    </Link>
                </div>
            </div>

            {/* Main Header Section */}
            <div className="container flex h-16 items-center justify-between">
                {/* Left Section: Logo */}
                <div className="flex items-center space-x-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/placeholder.svg"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="h-10 w-10"
                        />
                        <div className="hidden font-serif text-xl font-bold text-white sm:inline-block">
                            St. George Orthodox Church
                        </div>
                    </Link>
                </div>

                {/* Navigation Menu (Centered) */}
                <div className="hidden lg:flex lg:flex-1 justify-end">
                    <NavigationMenu />
                </div>

                {/* Right Section: Buttons and Hamburger */}
                <div className="flex items-center space-x-4">
                    <Button
                        variant="outline"
                        className="hidden sm:inline-flex bg-transparent border-[#c23b22] text-white hover:bg-[#fb6d4c] hover:text-white"
                    >
                        Donate Now
                    </Button>
                    <Button
                        variant="outline"
                        className="hidden sm:inline-flex bg-[#c23b22] border-[#c23b22] text-white hover:bg-[#fb6d4c] hover:text-white"
                    >
                        Contact Us
                    </Button>
                </div>
            </div>
        </header>
    );
}
