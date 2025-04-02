"use client;";
import Link from "next/link";
import {
    NavigationMenu as Nav,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navigation = [
    {
        title: "Our Parish",
        items: [
            { title: "Patron Saint", href: "/patron-saint" },
            { title: "Church History", href: "/history" },
            { title: "Administration", href: "/administration" },
        ],
    },
    {
        title: "Worship",
        items: [
            { title: "Holy Mass", href: "/holy-mass" },
            { title: "Prayers", href: "/prayers" },
            { title: "Feasts", href: "/feasts" },
        ],
    },
    {
        title: "Activities",
        items: [
            { title: "Sunday School", href: "/sunday-school" },
            { title: "Youth Association", href: "/youth" },
        ],
    },
    {
        title: "News & Media",
        items: [
            { title: "Latest News", href: "/news" },
            { title: "Gallery", href: "/gallery" },
            { title: "Watch Live", href: "/live" },
        ],
    },
];

export function NavigationMenu({ mobile = false }: { mobile?: boolean }) {
    if (mobile) {
        return (
            <div className="flex flex-col space-y-4 mt-4 text-white">
                {navigation.map((item) => (
                    <div key={item.title} className="space-y-2">
                        <h4 className="font-medium text-sm text-white">
                            {item.title}
                        </h4>
                        <div className="ml-4 space-y-1">
                            {item.items.map((subItem) => (
                                <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="block text-sm text-white"
                                >
                                    {subItem.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <Nav className="bg-transparent">
            <NavigationMenuList className="bg-transparent">
                {navigation.map((item) => (
                    <NavigationMenuItem key={item.title}>
                        <NavigationMenuTrigger className="bg-transparent text-white data-[state=open]:bg-transparent focus:bg-transparent hover:bg-transparent hover:text-white">
                            {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-md">
                                {item.items.map((subItem) => (
                                    <li key={subItem.href}>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={subItem.href}
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-blue-200/50 text-white"
                                            >
                                                <div className="text-sm font-medium leading-none">
                                                    {subItem.title}
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </Nav>
    );
}
