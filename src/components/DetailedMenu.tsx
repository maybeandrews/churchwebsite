"use client";

import { SheetContent, SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DetailedMenu() {
  return (
    <SheetContent 
      side="left" 
      className="!w-screen !h-screen !max-w-none !max-h-none !p-0 !m-0 !inset-0 !fixed !z-50 !overflow-y-auto"
      style={{ width: '100vw', height: '100vh', maxWidth: '100vw', left: 0, top: 0, right: 0, bottom: 0 }}
    >
      <div className="flex flex-col h-full w-full">
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4 border-b w-full">
          <div className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg"
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-serif font-bold">St. George Orthodox Church</span>
          </div>
          <SheetClose asChild>
            <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Close">
              <X className="h-4 w-4" />
            </Button>
          </SheetClose>
        </div>

        {/* Menu content */}
        <div className="flex-1 p-4 overflow-y-auto bg-white w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Our Parish */}
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <div className="text-red-500 h-10 w-10 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path d="M9 22V12h6v10" />
                  </svg>
                </div>
                <h3 className="font-semibold text-red-500 text-center">Our Parish</h3>
              </div>
              <ul className="space-y-1 text-center">
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Patron Saint</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Church History</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Metropolitan</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Kalpanas</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Administration</Link></li>
              </ul>
            </div>

            {/* Directory */}
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <div className="text-red-500 h-10 w-10 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm0-12a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-red-500 text-center">Directory</h3>
              </div>
              <ul className="space-y-1 text-center">
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Vicars</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Parish Committee</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Parish Office</Link></li>
              </ul>
            </div>

            {/* Worship Schedule */}
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <div className="text-red-500 h-10 w-10 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <h3 className="font-semibold text-red-500 text-center">Worship Schedule</h3>
              </div>
              <ul className="space-y-1 text-center">
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Holy Mass</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Prayers</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Feasts</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Calendar</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Offerings</Link></li>
              </ul>
            </div>

            {/* Lectionary */}
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <div className="text-red-500 h-10 w-10 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                    <path d="M8 6h8M8 10h8M8 14h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-red-500 text-center">Lectionary</h3>
              </div>
            </div>

            {/* Activities */}
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <div className="text-red-500 h-10 w-10 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <h3 className="font-semibold text-red-500 text-center">Activities</h3>
              </div>
              <ul className="space-y-1 text-center">
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Sunday School</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Youth Association</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Martha Mariyam Vanitha Samajam</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Elders' Forum</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Prayer Meetings</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Friday Prayer Meetings</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Area Prayer Meetings</Link></li>
              </ul>
            </div>

            {/* News & Events */}
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <div className="text-red-500 h-10 w-10 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M15 7h6a2 2 0 012 2v9a2 2 0 01-2 2h-6a2 2 0 01-2-2V9a2 2 0 012-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-red-500 text-center">News & Events</h3>
              </div>
              <ul className="space-y-1 text-center">
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Latest News</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Circulars</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Gallery</Link></li>
                <li><Link href="#" className="hover:text-red-500 text-sm transition-colors">Watch Live</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <div className="text-red-500 h-10 w-10 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="font-semibold text-red-500 text-center">Resources</h3>
              </div>
            </div>

            {/* Contact Us */}
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <div className="text-red-500 h-10 w-10 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-red-500 text-center">Contact Us</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Banner area with custom logos/links (optional) */}
        <div className="p-4 bg-gray-50 flex justify-center w-full">
          <div className="flex space-x-4">
            <Image src="/placeholder.svg" alt="Banner 1" width={120} height={40} className="h-10 w-32" />
            <Image src="/placeholder.svg" alt="Banner 2" width={120} height={40} className="h-10 w-32" />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t w-full">
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="flex-1 bg-transparent border-[#c23b22] text-[#c23b22] hover:bg-[#fb6d4c] hover:text-white">
              Contact Us
            </Button>
            <Button variant="outline" className="flex-1 bg-[#c23b22] border-[#c23b22] text-white hover:bg-[#fb6d4c]">
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </SheetContent>
  );
}

export default DetailedMenu;