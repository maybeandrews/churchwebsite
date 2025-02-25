import type React from "react";
import "./globals.css";
import { Inter, Crimson_Text } from "next/font/google";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

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

// Social media icons
const FacebookIcon =(props: React.SVGProps<SVGSVGElement>)  => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon =(props: React.SVGProps<SVGSVGElement>)  => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const LinkedInIcon =(props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const DiscordIcon =(props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 9a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V9z" />
    <path d="M12 12v.01" />
    <path d="M8 12v.01" />
    <path d="M16 12v.01" />
  </svg>
);

const SoundCloudIcon =(props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 17h4.7c2 0 3.3-1.3 3.3-3.3 0-2-1.3-3.7-3.3-3.7H4" />
    <path d="M4 10.3V14" />
    <path d="M15 4c4 0 5 3.7 5 9s-1 9-5 9" />
    <path d="M15 22V4" />
  </svg>
);

const SnapchatIcon =(props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2a7 7 0 0 1 5.5 11.3v.7l2 2v1h-3c0 1.5-1.5 3-4.5 3S7 17.5 7 16H4v-1l2-2v-.7A7 7 0 0 1 12 2Z" />
  </svg>
);

// Location pin icon
const LocationPinIcon =(props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2a6.5 6.5 0 0 1 6.5 6.5c0 2.5-1.5 4.5-3.5 6.5L12 18l-3-3c-2-2-3.5-4-3.5-6.5A6.5 6.5 0 0 1 12 2z" />
    <circle cx="12" cy="8.5" r="2" />
  </svg>
);

// Phone icon
const PhoneIcon =(props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

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
          <main className="flex-1">{children}</main>
          
          {/* Church Footer */}
          <footer className="bg-[#0e2648] text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Church Info */}
                <div className="md:col-span-4">
                  <div className="flex items-center mb-4">
                    <img 
                      src="/church-logo.svg" 
                      alt="Church Logo" 
                      className="w-16 h-16 mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-medium"> St. George Orthodox Church</h3>
                      <h2 className="text-xl font-bold">Muvattupuzha</h2>
                    </div>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-start">
                      <LocationPinIcon className="w-5 h-5 mt-1 mr-2 text-blue-300" />
                      <div>
                        <p className="font-medium">Diocesan Chancery</p>
                        <p>2158 Route 106</p>
                        <p>Muttontown, NY 11791</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>internet.ministries@neamericandiocese.org</span>
                    </div>
                    
                    <div className="flex items-center">
                      <PhoneIcon className="w-5 h-5 mr-2 text-blue-300" />
                      <span>718-470-9844</span>
                    </div>
                  </div>
                  
                  {/* Social Icons */}
                  <div className="flex mt-6 space-x-4">
                    <Link href="#" className="text-white hover:text-blue-300">
                      <FacebookIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="text-white hover:text-blue-300">
                      <InstagramIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="text-white hover:text-blue-300">
                      <TwitterIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="text-white hover:text-blue-300">
                      <YouTubeIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="text-white hover:text-blue-300">
                      <LinkedInIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="text-white hover:text-blue-300">
                      <DiscordIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="text-white hover:text-blue-300">
                      <SoundCloudIcon className="w-5 h-5" />
                    </Link>
                    <Link href="#" className="text-white hover:text-blue-300">
                      <SnapchatIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                
                {/* Quick Links Section */}
                <div className="md:col-span-8">
                  <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {/* Left Column */}
                    <div className="space-y-2">
                      <Link href="/church-history" className="block hover:text-blue-300">Church History</Link>
                      <Link href="/catholicos" className="block hover:text-blue-300">Catholicos of the East</Link>
                      <Link href="/about-diocese" className="block hover:text-blue-300">About our Diocese</Link>
                      <Link href="/parish-directory" className="block hover:text-blue-300">Parish Directory</Link>
                      <Link href="/clergy-directory" className="block hover:text-blue-300">Clergy Directory</Link>
                      <Link href="/donate" className="block hover:text-blue-300">Donate Now</Link>
                      <Link href="/news" className="block hover:text-blue-300">News & Events</Link>
                      <Link href="/documents" className="block hover:text-blue-300">Official Documents</Link>
                      <Link href="/contact" className="block hover:text-blue-300">Contact Us</Link>
                    </div>
                    
                    {/* Right Column */}
                    <div className="space-y-2">
                      <Link href="/metropolitan" className="block hover:text-blue-300">Metropolitan Orders</Link>
                      <Link href="/videos" className="block hover:text-blue-300">Video Album</Link>
                      <Link href="/about-metropolitan" className="block hover:text-blue-300">About our Metropolitan</Link>
                      <Link href="/ministries" className="block hover:text-blue-300">Ministries</Link>
                      <Link href="/orthodoxy" className="block hover:text-blue-300">Orthodoxy</Link>
                      <Link href="/resources" className="block hover:text-blue-300">Resources</Link>
                      <Link href="/liturgical" className="block hover:text-blue-300">Liturgical Resource Development</Link>
                      <Link href="/feasts" className="block hover:text-blue-300">Feasts & Memorials Article</Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Copyright */}
              <div className="mt-12 pt-4 border-t border-gray-700 text-sm text-center">
                <p>© 2025 Northeast American Diocese. All Rights Reserved. Created by: Dom Technolabs</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}