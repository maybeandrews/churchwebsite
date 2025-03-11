"use client";
import { useState } from "react";
import Image from "next/image";

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Gallery images data
    const galleryImages = [
        {
            id: 1,
            src: "/gallery/church-night.jpg",
            alt: "Church at night with reflection",
        },
        {
            id: 2,
            src: "/gallery/church-entrance.jpg",
            alt: "Church entrance with white facade",
        },
        {
            id: 3,
            src: "/gallery/church-fountain.jpg",
            alt: "Church with fountain in foreground",
        },
        {
            id: 4,
            src: "/gallery/church-flowers.jpg",
            alt: "Church with flowers in foreground",
        },
        {
            id: 5,
            src: "/gallery/church-altar.jpg",
            alt: "Interior of church showing golden altar",
        },
        {
            id: 6,
            src: "/gallery/church-aerial.jpg",
            alt: "Aerial view of the church complex",
        },
    ];

    // Open the image popup
    const openImagePopup = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        document.body.style.overflow = "hidden"; // Prevent scrolling when popup is open
    };

    // Close the image popup
    const closeImagePopup = () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto"; // Re-enable scrolling
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-6 my-8">
            <div className="mb-8">
                <div className="flex items-center mb-4">
                    <div className="w-1.5 h-10 bg-red-600 mr-4"></div>
                    <h2 className="uppercase text-2xl font-bold tracking-wide">
                        FROM THE GALLERY
                    </h2>
                </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((image) => (
                    <div
                        key={image.id}
                        className="relative h-64 overflow-hidden group cursor-pointer"
                        onClick={() => openImagePopup(image.src)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white bg-opacity-80 px-4 py-2 rounded-full">
                                <span className="text-gray-900 font-medium">
                                    View
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Image Popup */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                    onClick={closeImagePopup}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
                        <button
                            className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center z-10"
                            onClick={closeImagePopup}
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
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="relative w-full h-full">
                            <Image
                                src={selectedImage}
                                alt="Enlarged view"
                                fill
                                className="object-contain"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GallerySection;
