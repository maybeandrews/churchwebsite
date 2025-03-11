import Link from "next/link";
import Image from "next/image";
import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YouTubeIcon,
    LinkedInIcon,
    DiscordIcon,
    SoundCloudIcon,
    SnapchatIcon,
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
                                src="/church-logo.svg"
                                alt="Church Logo"
                                width={64}
                                height={64}
                                className="mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-medium">
                                    St. George Orthodox Church
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
                                        Diocesan Chancery
                                    </p>
                                    <p>2158 Route 106</p>
                                    <p>Muttontown, NY 11791</p>
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
                                { Icon: LinkedInIcon, href: "#" },
                                { Icon: DiscordIcon, href: "#" },
                                { Icon: SoundCloudIcon, href: "#" },
                                { Icon: SnapchatIcon, href: "#" },
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
                    <div className="md:col-span-8">
                        <h3 className="text-xl font-bold mb-6 text-pink-100">
                            Quick Links
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                            {/* Left Column */}
                            <div className="space-y-2">
                                {[
                                    {
                                        href: "/church-history",
                                        label: "Church History",
                                    },
                                    {
                                        href: "/catholicos",
                                        label: "Catholicos of the East",
                                    },
                                    {
                                        href: "/about-diocese",
                                        label: "About our Diocese",
                                    },
                                    {
                                        href: "/parish-directory",
                                        label: "Parish Directory",
                                    },
                                    {
                                        href: "/clergy-directory",
                                        label: "Clergy Directory",
                                    },
                                    { href: "/donate", label: "Donate Now" },
                                    { href: "/news", label: "News & Events" },
                                    {
                                        href: "/documents",
                                        label: "Official Documents",
                                    },
                                    { href: "/contact", label: "Contact Us" },
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

                            {/* Right Column */}
                            <div className="space-y-2">
                                {[
                                    {
                                        href: "/metropolitan",
                                        label: "Metropolitan Orders",
                                    },
                                    { href: "/videos", label: "Video Album" },
                                    {
                                        href: "/about-metropolitan",
                                        label: "About our Metropolitan",
                                    },
                                    {
                                        href: "/ministries",
                                        label: "Ministries",
                                    },
                                    { href: "/orthodoxy", label: "Orthodoxy" },
                                    { href: "/resources", label: "Resources" },
                                    {
                                        href: "/liturgical",
                                        label: "Liturgical Resource Development",
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
