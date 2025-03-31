import React from "react";
import Image from "next/image";

const FeastDaySection = () => {
    return (
        <section className="grid md:grid-cols-[auto,1fr,auto] items-stretch">
            <div className="bg-[#D4AF37] text-white p-8 text-center">
                <div className="space-y-2">
                    <div className="text-4xl font-bold ">May</div>
                    <div className="text-3xl ">3, 4</div>
                </div>
                <h3 className="mt-4 text-2xl font-bold">Feast Day</h3>
                <p className="mt-2">The feast of St. George</p>
            </div>
            <div className="relative h-[300px] bg-black">
                <Image
                    src="/banner.jpg"
                    alt="Open book with church text"
                    fill
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">
                            ST. GEORGE FORANE CHURCH
                        </h2>
                        <p className="text-2xl">CATECHISM DEPARTMENT</p>
                    </div>
                </div>
            </div>
            <div className="bg-black p-8 flex items-center justify-center">
                <Image
                    src="/churchlogotransparent.png"
                    alt="Church Department Logo"
                    width={800}
                    height={800}
                    className="max-w-[200px]"
                />
            </div>
        </section>
    );
};

export default FeastDaySection;
