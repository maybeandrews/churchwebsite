import React from "react";
import Link from "next/link";

export default function LiveStreamPage() {
    // Specific video ID from the URL you provided (Nfprm0rLIO8)
    const youtubeVideoId = "Nfprm0rLIO8";
    const youtubeChannelHandle = "@exodusperumbavoor"; // Keep this for the link

    return (
        <>
            <main className="live-stream-container max-w-6xl mx-auto px-5 pt-24 pb-10">
                <h1 className="page-title text-4xl text-center text-[#7a3b2e] mb-10 pb-4 border-b-2 border-[#d4b78f]">
                    Live Stream
                </h1>

                {/* Video Section */}
                <section className="mb-10">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="w-full" style={{ height: "500px" }}>
                            <iframe
                                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                                title="Holy Liturgy Stream"
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                                Divine Liturgy
                            </h2>
                            <p className="text-gray-700 mb-6">
                                Welcome to our video stream of the Holy Qurbana
                                (Divine Liturgy) from St. Thomas Orthodox
                                Church. Join us every Sunday at 9:00 AM for the
                                live service. If you&apos;d like to see more
                                videos, please visit our YouTube channel.
                            </p>
                            <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                                <span>Sundays 9:00 AM</span>
                                <span>|</span>
                                <span>English/Malayalam</span>
                            </div>
                            <Link
                                href={`https://www.youtube.com/${youtubeChannelHandle}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#7a3b2e] font-medium hover:underline"
                            >
                                View on YouTube →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Live Stream Information */}
                <section className="mb-10 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Our Live Broadcast Schedule
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-[#f1e8d8]">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Service
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Day
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Time
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Language
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Sunday Divine Liturgy
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Every Sunday
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        9:00 AM - 11:30 AM
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        English/Malayalam
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Feast Day Services
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Various
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        As Announced
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Malayalam/English
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Holy Week Services
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Holy Week
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Various
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Malayalam/English
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Live Stream FAQ
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium text-[#7a3b2e] mb-2">
                                How do I watch the live stream?
                            </h3>
                            <p className="text-gray-600">
                                Simply visit this page during our scheduled
                                broadcast times. The stream will play
                                automatically. You can also watch directly on
                                our YouTube channel by clicking the &quot;View
                                on YouTube&quot; link.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-[#7a3b2e] mb-2">
                                What if I&apos;m having technical difficulties?
                            </h3>
                            <p className="text-gray-600">
                                If you&apos;re experiencing issues with the
                                stream, try refreshing your browser, checking
                                your internet connection, or watching directly
                                on YouTube. For persistent problems, please
                                contact our tech team at
                                tech@stthomasmuvattupuzha.org.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-[#7a3b2e] mb-2">
                                Can I participate in Holy Communion through the
                                live stream?
                            </h3>
                            <p className="text-gray-600">
                                While virtual attendance allows you to
                                participate spiritually in the Divine Liturgy,
                                Holy Communion requires physical presence in the
                                church. We encourage you to attend in person
                                whenever possible for the fullness of
                                sacramental life.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-[#7a3b2e] mb-2">
                                How can I support the church&apos;s live
                                streaming ministry?
                            </h3>
                            <p className="text-gray-600">
                                We welcome both financial contributions and
                                volunteers with technical skills to help
                                maintain and improve our streaming capabilities.
                                Please contact the church office if you&apos;re
                                interested in supporting this ministry.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
