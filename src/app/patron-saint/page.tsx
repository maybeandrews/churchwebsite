import React from "react";
import Image from "next/image";

export default function PatronSaintPage() {
    return (
        <>
            {/* Content starts below the fixed header */}
            <main className="patron-container max-w-6xl mx-auto px-5 pt-24 pb-10">
                <h1 className="page-title text-4xl text-center text-[#7a3b2e] mb-10 pb-4 border-b-2 border-[#d4b78f]">
                    St. Thomas the Apostle: Our Patron Saint
                </h1>

                <section className="saint-intro flex flex-col md:flex-row gap-8 mb-12">
                    <div className="saint-description md:w-2/3 p-5">
                        <h2 className="text-2xl text-[#7a3b2e] mt-0">
                            The Apostle to India
                        </h2>
                        <p>
                            St. Thomas, also known as Didymus ("the Twin"), was
                            one of the Twelve Apostles of Jesus Christ. He is
                            best known for his initial doubt about Jesus's
                            resurrection, leading to the famous moment when
                            Jesus invited him to touch his wounds, prompting
                            Thomas's confession of faith: "My Lord and my God!"
                        </p>
                        <p>
                            As the patron saint of our church, St. Thomas holds
                            special significance for our community in
                            Muvattupuzha. According to tradition, he arrived in
                            India in 52 AD, establishing seven and a half
                            churches in Kerala, and bringing Christianity to the
                            Indian subcontinent.
                        </p>
                        <p>
                            St. Thomas is venerated as the Apostle to India and
                            the founder of the Malankara Orthodox Syrian Church,
                            to which our parish belongs. His missionary zeal,
                            unwavering faith (after his moment of doubt), and
                            martyrdom continue to inspire our congregation
                            today.
                        </p>
                    </div>

                    {/* Image container on the right */}
                    <div className="saint-image md:w-1/3 bg-[#f1e8d8] rounded-lg p-4 flex justify-center items-center">
                        <div className="relative w-full aspect-[3/4] overflow-hidden rounded border-8 border-[#d4b78f] shadow-md">
                            <Image
                                src="/stthomas.jpeg"
                                alt="St. Thomas the Apostle"
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                            />
                        </div>
                    </div>
                </section>

                <section className="timeline bg-white p-8 rounded shadow-sm mb-10">
                    <h2 className="text-2xl text-[#7a3b2e] text-center mb-8">
                        Life & Journey of St. Thomas
                    </h2>
                    <div className="timeline-events grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="event bg-[#f1e8d8] p-5 rounded shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mt-0">
                                Early Life
                            </h3>
                            <p>
                                Born in Galilee, St. Thomas was a fisherman
                                before being called by Jesus to become one of
                                the Twelve Apostles. His name in Aramaic
                                (Tau'ma) means "twin," and he was also called
                                Didymus, the Greek word for twin.
                            </p>
                        </div>
                        <div className="event bg-[#f1e8d8] p-5 rounded shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mt-0">
                                Ministry with Jesus
                            </h3>
                            <p>
                                During Jesus's ministry, Thomas displayed both
                                devotion and questioning nature. When Jesus
                                decided to return to Judea despite dangers,
                                Thomas said to the other disciples, "Let us also
                                go, that we may die with him" (John 11:16).
                            </p>
                        </div>
                        <div className="event bg-[#f1e8d8] p-5 rounded shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mt-0">
                                Doubt & Faith
                            </h3>
                            <p>
                                After the resurrection, Thomas was not present
                                when Jesus first appeared to the disciples. When
                                told of this, he said, "Unless I see the nail
                                marks in his hands... I will not believe." Eight
                                days later, Jesus appeared, inviting Thomas to
                                touch his wounds, leading to Thomas's profound
                                confession of faith.
                            </p>
                        </div>
                        <div className="event bg-[#f1e8d8] p-5 rounded shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mt-0">
                                Journey to India
                            </h3>
                            <p>
                                According to tradition, St. Thomas arrived at
                                Muziris (modern-day Kerala) in 52 AD. He
                                established seven and a half churches in
                                different parts of Kerala and converted many
                                families to Christianity.
                            </p>
                        </div>
                        <div className="event bg-[#f1e8d8] p-5 rounded shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mt-0">
                                Martyrdom
                            </h3>
                            <p>
                                St. Thomas was martyred in 72 AD at St. Thomas
                                Mount in Chennai (formerly Madras), India. He
                                was pierced with a spear while praying, and his
                                remains were later taken to Edessa and then to
                                Ortona, Italy.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="quote-section bg-[#7a3b2e] text-white p-10 text-center my-10 rounded">
                    <blockquote className="italic text-2xl max-w-4xl mx-auto relative">
                        "My Lord and my God!" — The confession of faith by St.
                        Thomas upon seeing the resurrected Christ, becoming one
                        of the most profound declarations of Christ's divinity
                        in the Gospels.
                    </blockquote>
                </section>

                <section className="relevance bg-white p-8 rounded shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] text-center mb-8">
                        Legacy & Relevance Today
                    </h2>
                    <p>
                        St. Thomas's journey from doubt to faith continues to
                        resonate with Christians today. His story teaches us
                        that questioning can lead to deeper understanding and
                        stronger belief. As our patron saint, he reminds us that
                        faith often requires personal encounter and experience.
                    </p>
                    <p>
                        The Mar Thoma Nazranis (St. Thomas Christians) of Kerala
                        trace their origins to the apostle's mission work. Our
                        church continues this ancient tradition, preserving the
                        liturgical and spiritual heritage brought by St. Thomas
                        to India nearly two millennia ago.
                    </p>
                    <p>
                        In our community at St. Thomas Orthodox Church in
                        Muvattupuzha, we honor our patron by emulating his
                        missionary zeal, his journey to deeper faith, and his
                        ultimate sacrifice for the Gospel. His feast day on July
                        3rd is a special time of celebration in our parish.
                    </p>
                </section>
            </main>
        </>
    );
}
