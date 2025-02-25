import Link from "next/link";
import Image from "next/image";
import { Menu, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu } from "./navigation-menu";

export function SiteHeader() {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      
      {/* Top Section: Social Media Icons */}
      <div className="w-full flex justify-end bg-transparent px-6 py-1">
        <div className="flex space-x-3">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Facebook className="h-4 w-4 text-white hover:text-blue-500 transition-colors duration-200" />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <Instagram className="h-4 w-4 text-white hover:text-pink-500 transition-colors duration-200" />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Twitter className="h-4 w-4 text-white hover:text-blue-400 transition-colors duration-200" />
          </Link>
          <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
            <Youtube className="h-4 w-4 text-white hover:text-red-500 transition-colors duration-200" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
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

        {/* Right Section: Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          <Button variant="outline" className="bg-transparent border-[#c23b22] text-white hover:bg-[#fb6d4c] hover:text-white">
            Donate Now
          </Button>
          <Button variant="outline" className="bg-[#c23b22] border-[#c23b22] text-white hover:bg-[#fb6d4c] hover:text-white">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="px-2 text-black hover:bg-gray-100 lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <NavigationMenu mobile />
          </SheetContent>
        </Sheet>
      </div>
      
    </header>
  );
}
