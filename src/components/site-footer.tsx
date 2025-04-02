import Link from "next/link";
import Image from "next/image";
import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YouTubeIcon,
    LocationPinIcon,
    PhoneIcon,
} from "@/components/icons";

export function SiteFooter() {
    return (
        <footer className="bg-[#800000] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Church Info */}
                    <div className="md:col-span-4">
                        <div className="flex items-center mb-4">
                            <Image
                                src="/churchlogo.png"
                                alt="Church Logo"
                                width={64}
                                height={64}
                                className="mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-medium">
                                    St. Thomas Orthodox Church
                                </h3>
                                <h2 className="text-xl font-bold">
                                    Muvattupuzha
                                </h2>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-6 space-y-3">
                            <div className="flex items-start">
                                <LocationPinIcon className="w-5 h-5 mt-1 mr-2 text-pink-300" />
                                <div>
                                    <p className="font-medium">
                                        Thottumkalpeedika
                                    </p>
                                    <p>Muvattupuzah</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2 text-pink-300"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>
                                    internet.ministries@neamericandiocese.org
                                </span>
                            </div>

                            <div className="flex items-center">
                                <PhoneIcon className="w-5 h-5 mr-2 text-pink-300" />
                                <span>718-470-9844</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex mt-6 space-x-4">
                            {[
                                { Icon: FacebookIcon, href: "#" },
                                { Icon: InstagramIcon, href: "#" },
                                { Icon: TwitterIcon, href: "#" },
                                { Icon: YouTubeIcon, href: "#" },
                            ].map(({ Icon, href }, index) => (
                                <Link
                                    key={index}
                                    href={href}
                                    className="text-white hover:text-pink-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="md:col-span-8 md:flex md:justify-end">
                        <div className="md:w-auto">
                            <h3 className="text-xl font-bold mb-6 text-pink-100 md:text-right">
                                Quick Links
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-2">
                                {/* Quick Links Column */}
                                <div className="space-y-2 md:text-right">
                                    {[
                                        {
                                            href: "/history",
                                            label: "Church History",
                                        },
                                        {
                                            href: "/patron-saint",
                                            label: "About our Diocese",
                                        },
                                        {
                                            href: "/administration",
                                            label: "Parish Directory",
                                        },
                                        {
                                            href: "/feasts",
                                            label: "Feasts & Memorials Article",
                                        },
                                    ].map(({ href, label }) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            className="block hover:text-pink-300"
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>

                                {/* Second Column of Links */}
                                <div className="space-y-2 md:text-right">
                                    {[
                                        {
                                            href: "/donate",
                                            label: "Donate Now",
                                        },
                                        {
                                            href: "/news",
                                            label: "News & Events",
                                        },
                                        {
                                            href: "/contact",
                                            label: "Contact Us",
                                        },
                                        { href: "/live", label: "Live Stream" },
                                        {
                                            href: "/gallery",
                                            label: "Photo Gallery",
                                        },
                                        {
                                            href: "/youth",
                                            label: "Youth Ministry",
                                        },
                                    ].map(({ href, label }) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            className="block hover:text-pink-300"
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-4 border-t border-red-900 text-sm text-left">
                    <p className="text-pink-100">
                        © 2025 St. George Orthodox Cathedral, Muvattupuzah. All
                        Rights Reserved. Created by: MACE CS - DEPT
                    </p>
                </div>
            </div>
        </footer>
    );
}
