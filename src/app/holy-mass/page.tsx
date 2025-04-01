import React from "react";
import Image from "next/image";

export default function HolyMassPage() {
    return (
        <>
            <main className="holy-mass-container max-w-6xl mx-auto px-5 pt-24 pb-10">
                <h1 className="page-title text-4xl text-center text-[#7a3b2e] mb-10 pb-4 border-b-2 border-[#d4b78f]">
                    Holy Qurbana (Divine Liturgy)
                </h1>

                {/* Hero Image Section */}
                <div className="relative w-full h-[300px] md:h-[400px] mb-10 overflow-hidden rounded-lg shadow-md">
                    <Image
                        src="/images/homeimage.jpg"
                        alt="Holy Qurbana celebration at St. Thomas Orthodox Church"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-3xl md:text-4xl font-bold px-4 text-center">
                            The Sacred Mystery of Faith
                        </h2>
                    </div>
                </div>

                {/* Introduction Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        The Holy Qurbana
                    </h2>
                    <p className="mb-4">
                        The Holy Qurbana (Divine Liturgy) is the central worship
                        service of the Malankara Orthodox Syrian Church. It is a
                        sacred journey that leads the faithful through the life
                        of Jesus Christ, from His birth to His second coming.
                    </p>
                    <p>
                        At St. Thomas Orthodox Church, we celebrate the Holy
                        Qurbana in the West Syrian Rite, using both Malayalam
                        and English. The service is rich in symbolism, with
                        prayers, hymns, and rituals that have been preserved for
                        centuries, connecting us to the ancient traditions of
                        the Church.
                    </p>
                </section>

                {/* Schedule Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Holy Qurbana Schedule
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-[#f1e8d8]">
                                <tr>
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
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Notes
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Sunday
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        7:30 AM
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Malayalam
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Morning Prayer begins at 7:00 AM
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Sunday
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        9:30 AM
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        English
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Sunday School follows at 11:00 AM
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Wednesday
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        6:30 AM
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Malayalam
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Midweek service
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        First Saturday
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        8:00 AM
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Malayalam
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Special monthly service
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 p-4 bg-[#f9f5f0] rounded-lg">
                        <p className="text-gray-700">
                            <strong>Special Note:</strong> Holy Qurbana is also
                            celebrated on feast days and special occasions
                            throughout the liturgical year. Please check our
                            calendar for upcoming services.
                        </p>
                    </div>
                </section>

                {/* Order of Service Section */}
                <section className="mb-12">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Order of the Holy Qurbana
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Preparation Service
                            </h3>
                            <p className="mb-2">
                                The service begins with the preparation of the
                                priest, including prayers of preparation and
                                vesting. The bread and wine are prepared for
                                consecration.
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Service of the Word
                            </h3>
                            <p className="mb-2">
                                This includes the public entrance, Trisagion
                                (Holy God, Holy Mighty, Holy Immortal),
                                Scripture readings from the Old Testament,
                                Epistles, and the Holy Gospel.
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Anaphora (Eucharistic Prayer)
                            </h3>
                            <p className="mb-2">
                                The central part of the liturgy where the bread
                                and wine are consecrated to become the Body and
                                Blood of Christ, including the institution
                                narrative and epiclesis.
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Holy Communion
                            </h3>
                            <p className="mb-2">
                                The faithful receive the Body and Blood of
                                Christ, preceded by the Lord's Prayer and
                                prayers of preparation for worthy reception.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Etiquette Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Etiquette for Worship
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <h3 className="text-lg font-medium mb-2">
                                Before the Service
                            </h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Arrive at least 10 minutes early</li>
                                <li>Enter the church reverently and quietly</li>
                                <li>Light a candle and offer a short prayer</li>
                                <li>Dress modestly and respectfully</li>
                                <li>Turn off or silence mobile phones</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">
                                During the Service
                            </h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Stand during processions and Gospel reading
                                </li>
                                <li>
                                    Make the sign of the cross at appropriate
                                    times
                                </li>
                                <li>Join in communal prayers and responses</li>
                                <li>
                                    Maintain reverent silence during
                                    consecration
                                </li>
                                <li>
                                    Approach communion with hands crossed over
                                    chest
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-4 bg-[#f9f5f0] rounded-lg">
                        <h3 className="text-lg font-medium mb-2">
                            For Holy Communion
                        </h3>
                        <p>
                            Orthodox faithful should prepare for Holy Communion
                            through prayer, fasting, and if necessary, the
                            Sacrament of Confession. The standard fasting period
                            is from midnight until receiving Communion. Those
                            with medical conditions should consult with the
                            priest regarding fasting.
                        </p>
                        <p className="mt-2">
                            Visitors from other Orthodox churches in communion
                            with us are welcome to receive Holy Communion. Those
                            from other Christian traditions are invited to
                            receive a blessing at the end of the service.
                        </p>
                    </div>
                </section>

                {/* Special Liturgical Seasons */}
                <section className="mb-12">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Major Liturgical Seasons
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-2">
                                Great Lent
                            </h3>
                            <p>
                                A 50-day period of prayer, fasting, and
                                repentance leading to the Feast of the
                                Resurrection. Special liturgical services
                                include the Liturgy of the Presanctified Gifts.
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-2">
                                Holy Week
                            </h3>
                            <p>
                                The week before Easter with daily services
                                commemorating Christ's final days, passion,
                                crucifixion, and burial. The schedule includes
                                special evening services.
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-2">
                                Nativity Fast
                            </h3>
                            <p>
                                A 25-day period of preparation before Christmas
                                (December 25), with special services and hymns
                                celebrating the birth of Christ.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Learning Resources */}
                <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Resources for Learning
                    </h2>

                    <p className="mb-6">
                        To better understand and participate in the Holy
                        Qurbana, we recommend the following resources:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-medium">Service Books</h3>
                            <p>
                                Available at the church entrance for use during
                                services
                            </p>
                        </div>

                        <div className="p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-medium">Classes</h3>
                            <p>
                                Liturgical education classes held monthly after
                                Sunday service
                            </p>
                        </div>

                        <div className="p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-medium">Website Resources</h3>
                            <p>
                                Downloadable texts and explanations on our
                                website
                            </p>
                        </div>

                        <div className="p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-medium">Individual Guidance</h3>
                            <p>
                                The priest is available by appointment for
                                questions
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
