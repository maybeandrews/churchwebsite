import React from "react";
import Image from "next/image";

export default function YouthPage() {
    return (
        <>
            <main className="youth-container max-w-6xl mx-auto px-5 pt-24 pb-10">
                <h1 className="page-title text-4xl text-center text-[#7a3b2e] mb-10 pb-4 border-b-2 border-[#d4b78f]">
                    Youth Association
                </h1>

                {/* Hero Image Section */}
                <div className="relative w-full h-[300px] md:h-[400px] mb-10 overflow-hidden rounded-lg shadow-md">
                    <Image
                        src="/youthmeeting.jpg"
                        alt="Youth Group at St. Thomas Orthodox Church"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-3xl md:text-4xl font-bold px-4 text-center">
                            &quot;Let no one despise your youth&quot; - 1
                            Timothy 4:12
                        </h2>
                    </div>
                </div>

                {/* Introduction Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        About Our Youth Ministry
                    </h2>
                    <p className="mb-4">
                        The Mar Gregorios Orthodox Christian Student Movement
                        (MGOCSM) at St. Thomas Orthodox Church provides a
                        spiritual home for our youth, where they can grow in
                        faith, build lasting friendships, and develop as future
                        leaders of the church.
                    </p>
                    <p>
                        Our youth ministry serves young people from ages 13-25,
                        providing opportunities for spiritual growth,
                        fellowship, service, and leadership development in an
                        Orthodox Christian context that honors our Kerala
                        heritage while engaging with contemporary life in
                        America.
                    </p>
                </section>

                {/* Meeting Schedule Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Meeting Schedule
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-lg font-medium mb-2">
                                Regular Meetings
                            </h3>
                            <p className="mb-1">
                                <strong>When:</strong> Every Sunday, 12:30 PM -
                                2:00 PM
                            </p>
                            <p className="mb-1">
                                <strong>Where:</strong> Church Youth Room
                            </p>
                            <p>
                                Weekly gatherings include Bible study,
                                discussions on Orthodox faith and contemporary
                                issues, fellowship activities, and planning for
                                upcoming events.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-lg font-medium mb-2">
                                Prayer Fellowship
                            </h3>
                            <p className="mb-1">
                                <strong>When:</strong> First Friday of each
                                month, 7:00 PM - 8:30 PM
                            </p>
                            <p className="mb-1">
                                <strong>Where:</strong> Church Chapel
                            </p>
                            <p>
                                Monthly prayer service focused on strengthening
                                spiritual life through traditional Orthodox
                                prayers, meditation, and worship.
                            </p>
                        </div>
                    </div>

                    <div className="p-4 bg-[#f9f5f0] rounded-lg">
                        <h3 className="text-lg font-medium mb-2">
                            Leadership Team Meetings
                        </h3>
                        <p className="mb-1">
                            <strong>When:</strong> Second Saturday of each
                            month, 10:00 AM - 11:30 AM
                        </p>
                        <p className="mb-1">
                            <strong>Where:</strong> Church Conference Room
                        </p>
                        <p>
                            Planning and coordination meetings for youth leaders
                            to organize upcoming activities, discuss ministry
                            needs, and develop leadership skills.
                        </p>
                    </div>
                </section>

                {/* Activities Section */}
                <section className="mb-12">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Youth Activities
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Spiritual Growth
                            </h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Bible study &amp; Orthodox faith discussions
                                </li>
                                <li>Retreats (Fall &amp; Lenten)</li>
                                <li>
                                    Prayer services &amp; worship participation
                                </li>
                                <li>Youth-led Divine Liturgy (quarterly)</li>
                            </ul>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Service &amp; Outreach
                            </h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Food bank volunteering (monthly)</li>
                                <li>Nursing home visits (quarterly)</li>
                                <li>Church clean-up days</li>
                                <li>Mission trip (summer)</li>
                            </ul>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Fellowship &amp; Fun
                            </h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Game nights &amp; movie discussions</li>
                                <li>Sports tournaments</li>
                                <li>Annual camping trip</li>
                                <li>Holiday celebrations</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Upcoming Events Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Upcoming Events
                    </h2>

                    <div className="space-y-4">
                        <div className="border-l-4 border-[#d4b78f] pl-4 py-2">
                            <h3 className="text-lg font-medium">
                                Spring Retreat: &quot;Faith in Action&quot;
                            </h3>
                            <p className="mb-1">
                                <strong>Date:</strong> April 18-20, 2025
                            </p>
                            <p className="mb-1">
                                <strong>Location:</strong> St. Mary's Retreat
                                Center
                            </p>
                            <p>
                                A weekend of spiritual renewal, fellowship, and
                                fun activities.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#d4b78f] pl-4 py-2">
                            <h3 className="text-lg font-medium">
                                Community Service Day
                            </h3>
                            <p className="mb-1">
                                <strong>Date:</strong> May 15, 2025
                            </p>
                            <p className="mb-1">
                                <strong>Location:</strong> Central Food Bank
                            </p>
                            <p>
                                Serving our community together through
                                volunteering.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#d4b78f] pl-4 py-2">
                            <h3 className="text-lg font-medium">
                                Youth Sunday &amp; Talent Show
                            </h3>
                            <p className="mb-1">
                                <strong>Date:</strong> June 7, 2025
                            </p>
                            <p className="mb-1">
                                <strong>Location:</strong> Church &amp;
                                Fellowship Hall
                            </p>
                            <p>
                                Youth-led Divine Liturgy followed by talent
                                showcase and lunch.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p>
                            <strong>Stay Updated:</strong> Follow our youth
                            group on Instagram @StThomasYouth or join our
                            WhatsApp group for the latest information about
                            events and activities.
                        </p>
                    </div>
                </section>

                {/* Leadership Section */}
                <section className="mb-12">
                    <div className="mt-6 text-center bg-[#f9f5f0] p-4 rounded-lg">
                        <p>
                            <strong>
                                Interested in joining our youth group?
                            </strong>{" "}
                            All young people ages 13-25 are welcome! Simply come
                            to any of our Sunday meetings or contact any of our
                            youth leaders.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
