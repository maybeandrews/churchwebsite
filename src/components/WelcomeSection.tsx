import Link from "next/link";
import Image from "next/image";
import { Church, Video, Gift } from "lucide-react";

export default function WelcomeSection() {
    return (
        <section className="bg-[#990000] text-white py-16 md:py-24">
            <div className="container">
                <h2 className="text-5xl font-serif text-center mb-8">
                    WELCOME
                </h2>
                <div className="grid lg:grid-cols-[400px,1fr] gap-8 items-start">
                    <Image
                        src="/stthomashorseback.jpeg"
                        alt="St. Thomas on horseback"
                        width={400}
                        height={400}
                        className="mx-auto lg:mx-0"
                    />
                    <div className="space-y-6">
                        <p className="text-lg leading-relaxed">
                            St. Thomas Orthodox Cathedral in Muvattupuzha is a
                            significant cathedral belonging to the Malankara
                            Orthodox Syrian Church under the Diocese of Kandanad
                            East. While specific details about its founding date
                            and unique historical events are less readily
                            available in the immediate search results compared
                            to some other ancient churches in Kerala, it stands
                            as an important religious center in the region. As a
                            cathedral, it holds a prominent position within its
                            diocese. The head priest is Metropolitan Thomas Mar
                            Athanasius. Located in Muvattupuzha, Ernakulam
                            district, Kerala, it serves as a key place of
                            worship and community for the Malankara Orthodox
                            Syrian Christian faithful in that area.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Link href="/mass-times" className="group">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                        <Church className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            Holy Mass
                                        </h3>
                                        <p className="text-white/80">
                                            Click to Know Holy Mass Timings
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/live" className="group">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                        <Video className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            Live TV
                                        </h3>
                                        <p className="text-white/80">
                                            Live Telecasting of Liturgy
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/prayer-request" className="group">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                        <svg
                                            className="h-8 w-8"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                                            <path d="M13 7h-2v6h2V7zm0 8h-2v2h2v-2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            Ask For Prayer
                                        </h3>
                                        <p className="text-white/80">
                                            Submit your Prayer Request
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/offerings" className="group">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                        <Gift className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            Offerings
                                        </h3>
                                        <p className="text-white/80">
                                            Donation for various Noble causes
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
