import React from "react";
import Image from "next/image";

export default function NewsPage() {
    return (
        <>
            <main className="news-container max-w-6xl mx-auto px-5 pt-24 pb-10">
                <h1 className="page-title text-4xl text-center text-[#7a3b2e] mb-10 pb-4 border-b-2 border-[#d4b78f]">
                    News & Announcements
                </h1>

                {/* Featured News Item */}
                <section className="featured-news mb-12">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="relative w-full h-[400px]">
                            <Image
                                src="/eastercelebration.avif"
                                alt="Easter Celebrations at St. Thomas Orthodox Church"
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <span className="bg-[#7a3b2e] text-white px-3 py-1 rounded text-sm font-medium mb-3 inline-block">
                                    Featured
                                </span>
                                <h2 className="text-3xl font-bold mb-2">
                                    Easter Celebrations Draw Record Attendance
                                </h2>
                                <p className="text-gray-200 mb-2">
                                    Our parish celebrated the Resurrection of
                                    Christ with joy and reverence
                                </p>
                                <p className="text-sm opacity-75">
                                    April 1, 2025
                                </p>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="mb-4">
                                This year&apos;s Holy Week and Easter
                                celebrations at St. Thomas Orthodox Church were
                                marked by record attendance and deeply moving
                                services. The church was filled to capacity for
                                the midnight Resurrection service, with over 400
                                faithful participating in the candlelight
                                procession and joyous proclamation of
                                &quot;Christ is Risen!&quot;
                            </p>
                            <p className="mb-4">
                                &quot;The spirit of unity and faith was palpable
                                throughout Holy Week,&quot; said Fr. Thomas
                                Mathew. &quot;From Palm Sunday through the
                                Resurrection service, our community came
                                together in prayer, reflection, and ultimately,
                                celebration of our Lord&apos;s triumph over
                                death.&quot;
                            </p>
                        </div>
                    </div>
                </section>

                {/* News Grid */}
                <section className="news-grid mb-12">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Recent News & Updates
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* News Item 1 */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src="/youthmeeting.jpg"
                                    alt="Youth Retret 2025"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-[#f1e8d8] text-[#7a3b2e] px-3 py-1 rounded-full text-xs font-medium">
                                        Youth Ministry
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        March 25, 2025
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#7a3b2e]">
                                    Spring Youth Retreat Announced
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    Youth ages 13-25 are invited to attend our
                                    annual Spring Retreat, &quot;Faith in
                                    Action,&quot; to be held April 18-20 at St.
                                    Mary&apos;s Retreat Center.
                                </p>
                            </div>
                        </div>

                        {/* News Item 2 */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src="/churchchoir.jpg"
                                    alt="Church Choir Performance"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-[#f1e8d8] text-[#7a3b2e] px-3 py-1 rounded-full text-xs font-medium">
                                        Music Ministry
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        March 18, 2025
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#7a3b2e]">
                                    Church Choir to Perform at Diocesan
                                    Conference
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    Our parish choir has been selected to
                                    perform traditional Syrian Orthodox hymns at
                                    the upcoming Diocesan Conference in May.
                                </p>
                            </div>
                        </div>

                        {/* News Item 3 */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src="/sundayschool.jpg"
                                    alt="Sunday School Students Win Competition"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-[#f1e8d8] text-[#7a3b2e] px-3 py-1 rounded-full text-xs font-medium">
                                        Sunday School
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        March 10, 2025
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#7a3b2e]">
                                    Sunday School Students Win Bible Quiz
                                    Competition
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    Our Sunday School high school team took
                                    first place in the regional Orthodox Bible
                                    Knowledge competition, showcasing their
                                    dedication to Scripture study.
                                </p>
                            </div>
                        </div>

                        {/* News Item 4 */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src="/renovation.jpg"
                                    alt="Church Building Renovation"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-[#f1e8d8] text-[#7a3b2e] px-3 py-1 rounded-full text-xs font-medium">
                                        Parish News
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        March 5, 2025
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#7a3b2e]">
                                    Church Renovation Project Begins Next Month
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    The long-awaited renovation of our church
                                    sanctuary will begin on May 1, with
                                    improvements to include enhanced lighting,
                                    sound system, and accessibility features.
                                </p>
                            </div>
                        </div>

                        {/* News Item 5 */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src="/fooddrive.png"
                                    alt="Charity Food Drive"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-[#f1e8d8] text-[#7a3b2e] px-3 py-1 rounded-full text-xs font-medium">
                                        Outreach
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        February 28, 2025
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#7a3b2e]">
                                    Lenten Food Drive Collects Record Donations
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    This year&apos;s Lenten food drive collected
                                    over 1,500 pounds of non-perishable items
                                    for local families in need, surpassing our
                                    goal by 25%.
                                </p>
                            </div>
                        </div>

                        {/* News Item 6 */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src="/visit.jpg"
                                    alt="Bishop's Visit to Parish"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-[#f1e8d8] text-[#7a3b2e] px-3 py-1 rounded-full text-xs font-medium">
                                        Diocese News
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        February 15, 2025
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#7a3b2e]">
                                    His Grace Metropolitan to Visit Our Parish
                                    in June
                                </h3>
                                <p className="text-gray-600 mb-3">
                                    We are blessed to announce that His Grace
                                    Metropolitan Zachariah Mar Nicholovos will
                                    visit our parish on June 12-13 for a special
                                    hierarchical Divine Liturgy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section className="newsletter-signup bg-[#f9f5f0] p-8 rounded-lg shadow-sm mb-12">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-2xl text-[#7a3b2e] mb-3 font-semibold">
                            Stay Updated
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Subscribe to our parish newsletter to receive weekly
                            updates, announcements, and spiritual reflections
                            directly in your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 justify-center">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 rounded border border-gray-300 w-full sm:w-auto flex-grow sm:max-w-md"
                            />
                            <button className="bg-[#7a3b2e] text-white px-6 py-2 rounded hover:bg-[#8d4938] transition duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>

                {/* Parish Calendar */}
                <section className="parish-calendar bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Upcoming Events
                    </h2>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="min-w-[80px] bg-[#f1e8d8] text-center p-2 rounded">
                                <span className="text-[#7a3b2e] font-bold text-2xl block">
                                    10
                                </span>
                                <span className="text-[#7a3b2e] text-sm">
                                    April
                                </span>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg">
                                    Palm Sunday Service
                                </h3>
                                <p className="text-gray-600 mb-1">
                                    9:00 AM - Divine Liturgy
                                </p>
                                <p className="text-sm">
                                    Commemoration of our Lord&apos;s triumphant
                                    entry into Jerusalem, with blessing and
                                    distribution of palm fronds.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="min-w-[80px] bg-[#f1e8d8] text-center p-2 rounded">
                                <span className="text-[#7a3b2e] font-bold text-2xl block">
                                    15
                                </span>
                                <span className="text-[#7a3b2e] text-sm">
                                    April
                                </span>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg">
                                    Good Friday Service
                                </h3>
                                <p className="text-gray-600 mb-1">
                                    6:00 PM - Passion Service
                                </p>
                                <p className="text-sm">
                                    Service commemorating the crucifixion of our
                                    Lord Jesus Christ, with veneration of the
                                    cross.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="min-w-[80px] bg-[#f1e8d8] text-center p-2 rounded">
                                <span className="text-[#7a3b2e] font-bold text-2xl block">
                                    20
                                </span>
                                <span className="text-[#7a3b2e] text-sm">
                                    April
                                </span>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg">
                                    Easter Sunday
                                </h3>
                                <p className="text-gray-600 mb-1">
                                    12:00 AM - Midnight Service, 9:30 AM -
                                    Divine Liturgy
                                </p>
                                <p className="text-sm">
                                    Celebration of our Lord&apos;s Resurrection
                                    with midnight service and festive morning
                                    Divine Liturgy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
