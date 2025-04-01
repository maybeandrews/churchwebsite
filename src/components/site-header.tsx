"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
    const pathname = usePathname();

    // Check if we're on the home page
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if we should show or hide the header
            if (currentScrollY > prevScrollY) {
                // Scrolling down - hide header only on home page
                if (isHomePage) {
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
    }, [prevScrollY, isHomePage]);

    // Determine header styling based on scroll position and route
    const isScrolled = scrollY > 50;

    const getHeaderStyle = () => {
        if (isHomePage) {
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

                {/* Navigation Menu (Centered) */}
                <div className="hidden lg:flex lg:flex-1 justify-end">
                    <NavigationMenu />
                </div>

                {/* Right Section: Buttons and Hamburger */}
                <div className="flex items-center space-x-4">
                    <Link href="/donations">
                        <Button
                            variant="outline"
                            className="hidden sm:inline-flex bg-transparent border-[#c23b22] text-white hover:bg-[#fb6d4c] hover:text-white"
                        >
                            Donate Now
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button
                            variant="outline"
                            className="hidden sm:inline-flex bg-[#c23b22] border-[#c23b22] text-white hover:bg-[#fb6d4c] hover:text-white"
                        >
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
