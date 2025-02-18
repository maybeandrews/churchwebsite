"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="relative h-[600px] w-full overflow-hidden">
            {/*<style jsx>{`
                @keyframes slowZoom {
                    from {
                        transform: scale(1);
                    }
                    to {
                        transform: scale(1.5);
                    }
                }

                .zoom-animation {
                    animation: slowZoom 15s ease-out forwards;
                }
            `}</style>*/}
            <Image
                src="/images/homeimage.jpg"
                alt="St. George's Orthodox Church at night"
                fill
                style={{
                    // Apply transform directly
                    objectFit: "cover",
                    transform: isLoaded ? "scale(1.5)" : "scale(1)", // Initial scale is 1
                    transition: "transform 15s ease-out",
                }}
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
                <p className="font-serif text-xl italic mb-4">
                    "Blessed are the merciful, for they shall obtain mercy"
                </p>
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                    St. George&apos;s
                </h1>
                <p className="mt-4 text-xl font-light">
                    Forane Church, Edappally
                </p>
            </div>
        </div>
    );
}
