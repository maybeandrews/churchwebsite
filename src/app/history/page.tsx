import React from "react";
import Image from "next/image";

export default function ChurchHistoryPage() {
    return (
        <>
            <main className="history-container max-w-6xl mx-auto px-5 pt-24 pb-10">
                <h1 className="page-title text-4xl text-center text-[#7a3b2e] mb-10 pb-4 border-b-2 border-[#d4b78f]">
                    Our Parish History
                </h1>

                {/* Hero Image Section */}
                <div className="relative w-full h-[300px] md:h-[400px] mb-10 overflow-hidden rounded-lg shadow-md">
                    <Image
                        src="/images/homepage.jpg"
                        alt="Historical photo of St. Thomas Orthodox Church"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h2 className="text-white text-3xl md:text-4xl font-bold px-4 text-center">
                            St. Thomas Orthodox Church, Muvattupuzha
                        </h2>
                    </div>
                </div>

                {/* Introduction Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Our Beginnings
                    </h2>
                    <p className="mb-4">
                        St. Thomas Orthodox Church in Muvattupuzha traces its
                        roots back to the early Christian community established
                        by St. Thomas the Apostle in Kerala during the 1st
                        century AD. The parish as we know it today began to take
                        shape in the early 20th century, when Orthodox
                        Christians in the Muvattupuzha region felt the need for
                        a spiritual home.
                    </p>
                    <p>
                        The foundation stone for our church building was laid on
                        March 15, 1932, by His Grace Geevarghese Mar Ivanios,
                        marking the beginning of our parish's physical presence
                        in the community. Construction was completed through the
                        devoted efforts and sacrifices of our founding members.
                    </p>
                </section>

                {/* Timeline Section */}
                <section className="timeline-section mb-12">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold text-center">
                        Key Milestones in Our Journey
                    </h2>

                    <div className="timeline-container space-y-12">
                        {/* Timeline Item 1 */}
                        <div className="timeline-item flex flex-col md:flex-row">
                            <div className="timeline-year md:w-1/4 bg-[#d4b78f] text-[#7a3b2e] p-4 text-center rounded-t md:rounded-l md:rounded-tr-none">
                                <span className="text-2xl font-bold">1932</span>
                            </div>
                            <div className="timeline-content md:w-3/4 bg-white p-6 rounded-b md:rounded-r md:rounded-bl-none shadow-sm">
                                <h3 className="text-xl font-semibold text-[#7a3b2e] mb-2">
                                    Foundation
                                </h3>
                                <p>
                                    The foundation stone for St. Thomas Orthodox
                                    Church was laid by His Grace Geevarghese Mar
                                    Ivanios. The small but dedicated community
                                    of 35 families contributed their resources
                                    and labor to begin construction.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="timeline-item flex flex-col md:flex-row">
                            <div className="timeline-year md:w-1/4 bg-[#d4b78f] text-[#7a3b2e] p-4 text-center rounded-t md:rounded-l md:rounded-tr-none">
                                <span className="text-2xl font-bold">1934</span>
                            </div>
                            <div className="timeline-content md:w-3/4 bg-white p-6 rounded-b md:rounded-r md:rounded-bl-none shadow-sm">
                                <h3 className="text-xl font-semibold text-[#7a3b2e] mb-2">
                                    Consecration
                                </h3>
                                <p>
                                    The church building was consecrated and the
                                    first Holy Qurbana (Divine Liturgy) was
                                    celebrated. Fr. Thomas Panicker was
                                    appointed as the first vicar of the parish.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 3 */}
                        <div className="timeline-item flex flex-col md:flex-row">
                            <div className="timeline-year md:w-1/4 bg-[#d4b78f] text-[#7a3b2e] p-4 text-center rounded-t md:rounded-l md:rounded-tr-none">
                                <span className="text-2xl font-bold">1956</span>
                            </div>
                            <div className="timeline-content md:w-3/4 bg-white p-6 rounded-b md:rounded-r md:rounded-bl-none shadow-sm">
                                <h3 className="text-xl font-semibold text-[#7a3b2e] mb-2">
                                    Parish Expansion
                                </h3>
                                <p>
                                    As the congregation grew to over 100
                                    families, the church building was expanded
                                    with an additional wing to accommodate the
                                    growing community.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 4 */}
                        <div className="timeline-item flex flex-col md:flex-row">
                            <div className="timeline-year md:w-1/4 bg-[#d4b78f] text-[#7a3b2e] p-4 text-center rounded-t md:rounded-l md:rounded-tr-none">
                                <span className="text-2xl font-bold">1978</span>
                            </div>
                            <div className="timeline-content md:w-3/4 bg-white p-6 rounded-b md:rounded-r md:rounded-bl-none shadow-sm">
                                <h3 className="text-xl font-semibold text-[#7a3b2e] mb-2">
                                    Golden Jubilee
                                </h3>
                                <p>
                                    The parish celebrated its 50th anniversary
                                    with a series of spiritual and cultural
                                    programs. The Sunday School building was
                                    inaugurated during this time.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 5 */}
                        <div className="timeline-item flex flex-col md:flex-row">
                            <div className="timeline-year md:w-1/4 bg-[#d4b78f] text-[#7a3b2e] p-4 text-center rounded-t md:rounded-l md:rounded-tr-none">
                                <span className="text-2xl font-bold">1995</span>
                            </div>
                            <div className="timeline-content md:w-3/4 bg-white p-6 rounded-b md:rounded-r md:rounded-bl-none shadow-sm">
                                <h3 className="text-xl font-semibold text-[#7a3b2e] mb-2">
                                    New Church Building
                                </h3>
                                <p>
                                    Construction of the new church building
                                    began to accommodate the growing
                                    congregation. The architectural design
                                    incorporated traditional Kerala Christian
                                    elements with modern amenities.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 6 */}
                        <div className="timeline-item flex flex-col md:flex-row">
                            <div className="timeline-year md:w-1/4 bg-[#d4b78f] text-[#7a3b2e] p-4 text-center rounded-t md:rounded-l md:rounded-tr-none">
                                <span className="text-2xl font-bold">2001</span>
                            </div>
                            <div className="timeline-content md:w-3/4 bg-white p-6 rounded-b md:rounded-r md:rounded-bl-none shadow-sm">
                                <h3 className="text-xl font-semibold text-[#7a3b2e] mb-2">
                                    Consecration of New Church
                                </h3>
                                <p>
                                    The new church building was consecrated by
                                    His Holiness Baselius Marthoma Mathews II,
                                    Catholicos of the East. The ceremony was
                                    attended by thousands of faithful from
                                    across Kerala.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 7 */}
                        <div className="timeline-item flex flex-col md:flex-row">
                            <div className="timeline-year md:w-1/4 bg-[#d4b78f] text-[#7a3b2e] p-4 text-center rounded-t md:rounded-l md:rounded-tr-none">
                                <span className="text-2xl font-bold">2010</span>
                            </div>
                            <div className="timeline-content md:w-3/4 bg-white p-6 rounded-b md:rounded-r md:rounded-bl-none shadow-sm">
                                <h3 className="text-xl font-semibold text-[#7a3b2e] mb-2">
                                    Community Center
                                </h3>
                                <p>
                                    The parish established a community center to
                                    serve the social and educational needs of
                                    both church members and the wider
                                    Muvattupuzha community. The center houses a
                                    library, computer lab, and meeting spaces.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 8 */}
                        <div className="timeline-item flex flex-col md:flex-row">
                            <div className="timeline-year md:w-1/4 bg-[#d4b78f] text-[#7a3b2e] p-4 text-center rounded-t md:rounded-l md:rounded-tr-none">
                                <span className="text-2xl font-bold">2020</span>
                            </div>
                            <div className="timeline-content md:w-3/4 bg-white p-6 rounded-b md:rounded-r md:rounded-bl-none shadow-sm">
                                <h3 className="text-xl font-semibold text-[#7a3b2e] mb-2">
                                    Digital Transformation
                                </h3>
                                <p>
                                    In response to the global pandemic, our
                                    parish embraced digital technology to
                                    continue worship services and community
                                    engagement. Live streaming of services
                                    began, reaching our members worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Parish Activities Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Our Community Today
                    </h2>
                    <p className="mb-4">
                        Today, St. Thomas Orthodox Church, Muvattupuzha serves
                        over 350 families. Our parish has grown from humble
                        beginnings to become a vibrant spiritual and cultural
                        center for Orthodox Christians in the region.
                    </p>
                    <p className="mb-4">
                        We continue to honor our heritage while embracing the
                        future through various ministries:
                    </p>
                    <ul className="list-disc pl-8 mb-4 space-y-2">
                        <li>Sunday School for children and youth</li>
                        <li>Martha Mariam Samajam (Women's Fellowship)</li>
                        <li>MGOCSM (Orthodox Youth Movement)</li>
                        <li>Choir and cultural activities</li>
                        <li>Charitable outreach programs</li>
                        <li>Prayer groups and Bible study</li>
                    </ul>
                    <p>
                        As we look to the future, we remain committed to
                        preserving our Orthodox faith and traditions while
                        serving the needs of our growing community and spreading
                        Christ's message of love and peace.
                    </p>
                </section>

                {/* Former Vicars Section */}
                <section className="vicars-section mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold text-center">
                        Past Vicars Who Served Our Parish
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-[#f1e8d8]">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Period
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Notable Contributions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Fr. Thomas Panicker
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        1934-1942
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        First vicar who established many parish
                                        practices that continue today
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Fr. Geevarghese Kurien
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        1942-1956
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Led the church expansion and established
                                        the Sunday School
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Fr. Philip Mathew
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        1956-1970
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Started the Martha Mariam Samajam and
                                        youth outreach programs
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Fr. Jacob John
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        1970-1985
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Organized the Golden Jubilee
                                        celebrations and improved church
                                        finances
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Fr. Thomas Varghese
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        1985-2000
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Spearheaded the construction of the new
                                        church building
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
}
