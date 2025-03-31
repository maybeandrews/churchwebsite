import { HeroSection } from "@/components/hero-section";
import ChurchSection from "@/components/ChurchSection";
import WelcomeSection from "@/components/WelcomeSection";
import NewsCalendarSection from "@/components/NewsCalendarSection";
import GallerySection from "@/components/GallerySection";
import GoogleMapsEmbed from "@/components/maps";
import FeastDaySection from "@/components/FeastDaySection";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <WelcomeSection />
            <FeastDaySection />
            <ChurchSection />
            <NewsCalendarSection />
            <GallerySection />
            <GoogleMapsEmbed
                location="St. George Orthodox Syrian Cathedral"
                width="100%"
                height="500px"
            />
        </main>
    );
}
