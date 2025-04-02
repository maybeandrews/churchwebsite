"use client";

import React, { useState } from "react";
import Image from "next/image";

// Define the types for your gallery data
interface GalleryImage {
    src: string;
    alt: string;
    caption: string;
}

interface GalleryCategory {
    id: string;
    name: string;
    images: GalleryImage[];
}

export default function GalleryPage() {
    // Gallery image data
    const galleryCategories: GalleryCategory[] = [
        {
            id: "church-services",
            name: "Church Services",
            images: [
                {
                    src: "/gallery/church/divineliturgy.jpg",
                    alt: "Divine Liturgy celebration",
                    caption: "Sunday Divine Liturgy",
                },
                {
                    src: "/gallery/church/holyweek.jpg",
                    alt: "Holy Week services",
                    caption: "Good Friday service",
                },
                {
                    src: "/gallery/church/eastercelebration.avif",
                    alt: "Easter celebration",
                    caption: "Easter midnight service",
                },
                {
                    src: "/gallery/church/christmasservice.jpg",
                    alt: "Christmas service",
                    caption: "Christmas Eve service",
                },
                {
                    src: "/gallery/church/baptismservice.webp",
                    alt: "Baptism ceremony",
                    caption: "Infant baptism ceremony",
                },
                {
                    src: "/gallery/church/orthodoxwedding.webp",
                    alt: "Orthodox wedding",
                    caption: "Wedding ceremony",
                },
            ],
        },
        {
            id: "events",
            name: "Parish Events",
            images: [
                {
                    src: "/gallery/parish/annualparishday.jpeg",
                    alt: "Annual parish day celebration",
                    caption: "Annual Parish Day 2024",
                },
                {
                    src: "/gallery/parish/churchpicnic.jpg",
                    alt: "Church picnic",
                    caption: "Summer parish picnic",
                },
                {
                    src: "/gallery/parish/faithconference.jpg",
                    alt: "Faith conference",
                    caption: "Orthodox Faith Conference",
                },
                {
                    src: "/gallery/parish/churchprogram.jpg",
                    alt: "Cultural program",
                    caption: "Kerala cultural program",
                },
                {
                    src: "/gallery/parish/foodfestival.jpg",
                    alt: "Kerala food festival",
                    caption: "Annual Kerala Food Festival",
                },
                {
                    src: "/gallery/parish/chrityfooddrive.png",
                    alt: "Charity food drive",
                    caption: "Thanksgiving charity drive",
                },
            ],
        },
    ];

    // State for active category (now using useState for client component)
    const [activeCategory, setActiveCategory] = useState<GalleryCategory>(
        galleryCategories[0]
    );

    // Function to handle category change
    const handleCategoryChange = (category: GalleryCategory) => {
        setActiveCategory(category);
    };

    return (
        <>
            <main className="gallery-container max-w-6xl mx-auto px-5 pt-24 pb-10">
                <h1 className="page-title text-4xl text-center text-[#7a3b2e] mb-10 pb-4 border-b-2 border-[#d4b78f]">
                    Photo Gallery
                </h1>

                {/* Introduction Section */}
                <section className="mb-10 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Parish Memories
                    </h2>
                    <p className="mb-0">
                        Browse through images from our parish life, including
                        liturgical services, special events, youth activities,
                        and community gatherings. These photos capture the
                        vibrant spirit and faithful journey of our St. Thomas
                        Orthodox Church community.
                    </p>
                </section>

                {/* Category Navigation */}
                <section className="category-navigation mb-8">
                    <div className="flex flex-wrap gap-2">
                        {galleryCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                                    category.id === activeCategory.id
                                        ? "bg-[#7a3b2e] text-white"
                                        : "bg-[#f1e8d8] text-[#7a3b2e] hover:bg-[#d4b78f]"
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="gallery-grid mb-12">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        {activeCategory.name}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeCategory.images.map((image, index) => (
                            <div key={index} className="gallery-item">
                                <div className="relative h-64 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="transition group-hover:scale-105 duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition"></div>
                                    <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition">
                                        <p className="text-sm font-medium">
                                            {image.caption}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Historical Photos */}
                <section className="historical-photos mb-12">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Church History in Photos
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="relative h-52 rounded-lg overflow-hidden mb-4">
                                <Image
                                    src="/gallery/historical/churchconstruction.jpg"
                                    alt="Church Construction 1995"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <h3 className="text-lg font-medium text-[#7a3b2e] mb-2">
                                Church Construction (1995)
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Historical photos documenting the construction
                                of our current church building, which began in
                                1995 and was completed in 2001.
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <div className="relative h-52 rounded-lg overflow-hidden mb-4">
                                <Image
                                    src="/gallery/historical/churchconsecration.jpg"
                                    alt="Church Consecration 2001"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <h3 className="text-lg font-medium text-[#7a3b2e] mb-2">
                                Church Consecration (2001)
                            </h3>
                            <p className="text-gray-600 text-sm">
                                The consecration ceremony of our church
                                building, presided over by His Holiness Baselius
                                Marthoma Mathews II, Catholicos of the East.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
