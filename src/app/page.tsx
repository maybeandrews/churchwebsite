import { HeroSection } from "@/components/hero-section";
import ChurchSection from "@/components/ChurchSection";
import WelcomeSection from "@/components/WelcomeSection";
import Image from "next/image";
import NewsCalendarSection from "@/components/NewsCalendarSection";
import GallerySection from "@/components/GallerySection";
import GoogleMapsEmbed from "@/components/maps";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <WelcomeSection />

            {/* This section needs its own component */}
            <section className="grid md:grid-cols-[auto,1fr,auto] items-stretch">
                <div className="bg-[#D4AF37] text-white p-8 text-center">
                    <div className="space-y-2">
                        <div className="text-4xl font-bold">May</div>
                        <div className="text-3xl">3, 4</div>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold">Feast Day</h3>
                    <p className="mt-2">
                        The feast of St. George in Edappally Church
                    </p>
                </div>
                <div className="relative h-[300px] bg-black">
                    <Image
                        src="/images/homeimage2.png"
                        alt="Open book with church text"
                        fill
                        className="object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">
                                ST.GEORGE FORANE CHURCH
                            </h2>
                            <p className="text-2xl">CATECHISM DEPARTMENT</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 p-8 flex items-center justify-center">
                    <Image
                        src="/placeholder.svg"
                        alt="Church Department Logo"
                        width={200}
                        height={200}
                        className="max-w-[200px]"
                    />
                </div>
            </section>

            <ChurchSection />
            <NewsCalendarSection />
            <GallerySection />
            <GoogleMapsEmbed
                location="St. George Orthodox Syrian Church, Mudavoor"
                width="100%"
                height="500px"
            />
        </main>
    );
}
