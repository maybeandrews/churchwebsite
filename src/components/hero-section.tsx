"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const slides = [
        {
            image: "/images/homeimage.jpg",
            quote: "Blessed are the merciful, for they shall obtain mercy",
            title: "St. Thomas's",
            subtitle: "Orthodox Cathedral, Muvattupuzah",
        },
        {
            image: "/images/homeimage2.jpg",
            quote: "I am the light of the world",
            title: "Join Our Community",
            subtitle: "Sunday Service at 9:00 AM",
        },
        {
            image: "/images/homepage.jpg",
            quote: "Faith, Hope and Love",
            title: "Serving Since 1932",
            subtitle: "A Century of Faith and Devotion",
        },
    ];

    useEffect(() => {
        setIsLoaded(true);

        const startAutoSlide = () => {
            timeoutRef.current = setTimeout(() => {
                goToNextSlide();
            }, 6000);
        };

        if (!isTransitioning) {
            startAutoSlide();
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [slides.length, currentSlide, isTransitioning]);

    const goToSlide = (newIndex: any) => {
        if (isTransitioning || newIndex === currentSlide) {
            return;
        }

        setIsTransitioning(true);

        // Fade out current slide
        setTimeout(() => {
            setCurrentSlide(newIndex);

            // Fade in new slide after a small delay
            setTimeout(() => {
                setIsTransitioning(false);
            }, 20); // Small delay to ensure opacity-100 is applied
        }, 500); // Duration of the fade-out
    };

    const goToNextSlide = () => {
        goToSlide((currentSlide + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gray-900">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={cn(
                        "absolute inset-0 h-full w-full transition-opacity duration-500 ease-in-out",
                        currentSlide === index
                            ? "opacity-100 z-10"
                            : "opacity-0 pointer-events-none z-0"
                    )}
                    style={{
                        transitionDelay:
                            currentSlide === index ? "0ms" : "500ms", // Delay fade-in
                    }}
                >
                    <div className="relative h-full w-full overflow-hidden">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            priority={index === 0}
                            className={cn(
                                "object-cover transition-transform duration-10000 ease-in-out transform scale-100",
                                isLoaded && currentSlide === index
                                    ? "scale-110"
                                    : "scale-100"
                            )}
                            style={{ transition: "transform 8s linear" }}
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                </div>
            ))}

            <button
                onClick={goToPrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors z-20"
                aria-label="Previous slide"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            <button
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors z-20"
                aria-label="Next slide"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10">
                <p className="max-w-md mb-4 text-xl md:text-2xl font-light italic opacity-80">
                    {slides[currentSlide].quote}
                </p>
                <h1 className="text-3xl md:text-5xl font-bold mb-2">
                    {slides[currentSlide].title}
                </h1>
                <h2 className="text-xl md:text-2xl font-medium mb-8 opacity-90">
                    {slides[currentSlide].subtitle}
                </h2>

                <div className="flex items-center justify-center gap-2 mt-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                currentSlide === index
                                    ? "bg-white w-3"
                                    : "bg-white/50"
                            )}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
