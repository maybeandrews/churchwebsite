import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu } from "./navigation-menu";

export function SiteHeader() {
  return (
    <header className="absolute top-0 z-50 w-full border-b border-white/20 bg-transparent">
      <div className="container flex h-16 items-center">
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
        <div className="hidden flex-1 justify-center lg:flex">
          <NavigationMenu />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden items-center space-x-4 sm:flex">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 hover:text-white"
            >
              Contact Us
            </Button>
            <Button className="bg-white/20 text-white hover:bg-white/30">
              Donate Now
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                className="px-2 text-white hover:bg-white/10 hover:text-white lg:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <NavigationMenu mobile />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}