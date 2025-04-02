import React from "react";

export default function FeastsPage() {
    return (
        <>
            <main className="feasts-container max-w-6xl mx-auto px-5 pt-24 pb-10">
                <h1 className="page-title text-4xl text-center text-[#7a3b2e] mb-10 pb-4 border-b-2 border-[#d4b78f]">
                    Feast Days &amp; Church Calendar
                </h1>

                {/* Introduction Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        The Liturgical Calendar
                    </h2>
                    <p className="mb-4">
                        The Orthodox liturgical calendar is a cycle of feasts
                        and fasts that guides the rhythm of our worship
                        throughout the year. These sacred commemorations help us
                        experience the mysteries of our faith and connect us to
                        the universal Church across time and space.
                    </p>
                    <p>
                        At St. Thomas Orthodox Church, we observe the
                        traditional feast days of the Malankara Orthodox Syrian
                        Church, celebrating both the universal Orthodox feasts
                        and those with special significance to our Indian
                        Orthodox tradition.
                    </p>
                </section>

                {/* Major Feast Days Section */}
                <section className="mb-12">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Major Feast Days
                    </h2>

                    <div className="space-y-6">
                        {/* Feast 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/4">
                                    <div className="bg-[#f1e8d8] p-4 rounded-lg text-center">
                                        <h3 className="text-xl text-[#7a3b2e] font-semibold">
                                            Nativity of Our Lord
                                        </h3>
                                        <p className="text-lg mt-2">
                                            December 25
                                        </p>
                                    </div>
                                </div>
                                <div className="md:w-3/4">
                                    <p className="mb-3">
                                        Christmas celebrates the birth of Jesus
                                        Christ in Bethlehem. This feast
                                        commemorates God becoming man for our
                                        salvation—the mystery of the
                                        Incarnation.
                                    </p>
                                    <p>
                                        Our parish celebration includes a
                                        Christmas Eve service with carols, the
                                        Divine Liturgy on Christmas morning, and
                                        special programs by the Sunday School
                                        and youth groups. Traditional Kerala
                                        Christian customs are incorporated,
                                        including special foods and family
                                        gatherings.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feast 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/4">
                                    <div className="bg-[#f1e8d8] p-4 rounded-lg text-center">
                                        <h3 className="text-xl text-[#7a3b2e] font-semibold">
                                            Holy Pascha
                                        </h3>
                                        <p className="text-lg mt-2">
                                            Variable Date
                                        </p>
                                    </div>
                                </div>
                                <div className="md:w-3/4">
                                    <p className="mb-3">
                                        Easter (Pascha) is the &quot;Feast of
                                        Feasts&quot; celebrating Christ&apos;s
                                        Resurrection from the dead. It is the
                                        culmination of Holy Week and the 50-day
                                        Great Lent that precedes it.
                                    </p>
                                    <p>
                                        Our celebration begins with the Holy
                                        Saturday midnight service, followed by a
                                        procession and the joyous proclamation
                                        &quot;Christ is Risen!&quot; The feast
                                        continues with the Divine Liturgy on
                                        Sunday morning and festive community
                                        celebrations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feast 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/4">
                                    <div className="bg-[#f1e8d8] p-4 rounded-lg text-center">
                                        <h3 className="text-xl text-[#7a3b2e] font-semibold">
                                            Pentecost
                                        </h3>
                                        <p className="text-lg mt-2">
                                            50 days after Pascha
                                        </p>
                                    </div>
                                </div>
                                <div className="md:w-3/4">
                                    <p className="mb-3">
                                        Pentecost commemorates the descent of
                                        the Holy Spirit upon the Apostles and
                                        the birth of the Church. It occurs 50
                                        days after the Resurrection.
                                    </p>
                                    <p>
                                        We celebrate with a special Divine
                                        Liturgy, where the church is decorated
                                        with greenery symbolizing the new life
                                        brought by the Holy Spirit. Special
                                        prayers and hymns invoke the Holy
                                        Spirit&apos;s continued presence in our
                                        lives.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feast 4 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/4">
                                    <div className="bg-[#f1e8d8] p-4 rounded-lg text-center">
                                        <h3 className="text-xl text-[#7a3b2e] font-semibold">
                                            Feast of St. Thomas
                                        </h3>
                                        <p className="text-lg mt-2">July 3</p>
                                    </div>
                                </div>
                                <div className="md:w-3/4">
                                    <p className="mb-3">
                                        As our parish patron, the Feast of St.
                                        Thomas the Apostle holds special
                                        significance. We commemorate his
                                        missionary journey to India in 52 AD and
                                        his establishment of the first Christian
                                        communities in Kerala.
                                    </p>
                                    <p>
                                        Our celebration includes a solemn Divine
                                        Liturgy, procession with the
                                        saint&apos;s icon, special prayers, and
                                        parish festivities. This is one of our
                                        most important annual celebrations,
                                        drawing visitors from neighboring
                                        parishes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feast 5 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/4">
                                    <div className="bg-[#f1e8d8] p-4 rounded-lg text-center">
                                        <h3 className="text-xl text-[#7a3b2e] font-semibold">
                                            Theophany
                                        </h3>
                                        <p className="text-lg mt-2">
                                            January 6
                                        </p>
                                    </div>
                                </div>
                                <div className="md:w-3/4">
                                    <p className="mb-3">
                                        Theophany (also called Epiphany)
                                        celebrates the Baptism of Christ in the
                                        Jordan River and the manifestation of
                                        the Holy Trinity. This feast includes
                                        the Great Blessing of Waters.
                                    </p>
                                    <p>
                                        After the Divine Liturgy, we perform the
                                        blessing of water, symbolizing the
                                        sanctification of creation. The blessed
                                        water is distributed to parishioners to
                                        take to their homes for blessing and
                                        spiritual protection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seasonal Feasts */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Liturgical Seasons
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-xl text-[#7a3b2e] mb-2">
                                Great Lent
                            </h3>
                            <p className="mb-1">
                                <strong>Period:</strong> 50 days before Pascha
                            </p>
                            <p>
                                A time of spiritual preparation through prayer,
                                fasting, almsgiving, and repentance. Special
                                services include the Liturgy of the
                                Presanctified Gifts.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-xl text-[#7a3b2e] mb-2">
                                Paschal Season
                            </h3>
                            <p className="mb-1">
                                <strong>Period:</strong> 40 days after Pascha
                            </p>
                            <p>
                                A joyful celebration of Christ&apos;s
                                Resurrection, during which fasting is suspended.
                                Services begin with the greeting &quot;Christ is
                                Risen!&quot;
                            </p>
                        </div>

                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-xl text-[#7a3b2e] mb-2">
                                Nativity Fast
                            </h3>
                            <p className="mb-1">
                                <strong>Period:</strong> November 15 - December
                                24
                            </p>
                            <p>
                                A time of preparation for the Nativity of
                                Christ, involving fasting, prayer, and
                                almsgiving to prepare our hearts for Christmas.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-xl text-[#7a3b2e] mb-2">
                                Dormition Fast
                            </h3>
                            <p className="mb-1">
                                <strong>Period:</strong> August 1-14
                            </p>
                            <p>
                                A two-week fast preceding the Feast of the
                                Dormition (Falling Asleep) of the Theotokos on
                                August 15, honoring the Mother of God.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Feasts with Special Kerala Significance */}
                <section className="mb-12">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Feasts with Special Significance in Kerala Tradition
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Feast of St. Gregorios of Parumala
                            </h3>
                            <p className="mb-2">
                                <strong>Date:</strong> November 2
                            </p>
                            <p>
                                We commemorate St. Gregorios of Parumala, the
                                first canonized saint of the Malankara Orthodox
                                Church. Known for his ascetic life and spiritual
                                leadership, he is highly venerated throughout
                                Kerala.
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Feast of St. Dionysius Vattasseril
                            </h3>
                            <p className="mb-2">
                                <strong>Date:</strong> February 23
                            </p>
                            <p>
                                We honor St. Dionysius Vattasseril, a defender
                                of the Orthodox faith in Kerala and a spiritual
                                leader known for his wisdom and devotion to
                                preserving Orthodox traditions.
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Feast of the Holy Cross (Sleeba Perunnal)
                            </h3>
                            <p className="mb-2">
                                <strong>Date:</strong> September 14
                            </p>
                            <p>
                                This feast commemorates the finding of the True
                                Cross by Empress Helena. In Kerala tradition, it
                                is associated with the beginning of the harvest
                                season and includes special processions and
                                blessings.
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Feast of the Theotokos (Ettunombu)
                            </h3>
                            <p className="mb-2">
                                <strong>Date:</strong> September 1-8
                            </p>
                            <p>
                                An eight-day fast and feast celebrating the
                                Nativity of the Theotokos. In Kerala, this is
                                observed with special devotion, including pious
                                practices unique to the Malankara Orthodox
                                tradition.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Parish Feast Calendar */}
                <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Upcoming Feast Day Celebrations
                    </h2>

                    <p className="mb-6">
                        Below are the major feast days we will be celebrating in
                        the coming months. For a complete liturgical calendar,
                        please visit the church office or check our parish
                        bulletin.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-[#f1e8d8]">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Feast Day
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Service Times
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Special Events
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Holy Pascha (Easter)
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        April 20, 2025
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Midnight Service (11:30 PM), Morning
                                        Liturgy (9:30 AM)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Parish feast after morning service
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Pentecost
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        June 8, 2025
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Divine Liturgy (9:00 AM)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Special prayers for graduates
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Feast of St. Thomas
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        July 3, 2025
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Evening Service (6:30 PM), Morning
                                        Liturgy (9:00 AM)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Annual parish celebration with cultural
                                        program
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Dormition of the Theotokos
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        August 15, 2025
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Divine Liturgy (9:00 AM)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Blessing of herbs and flowers
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 text-center">
                        <p>
                            For a complete Orthodox liturgical calendar and
                            detailed information about upcoming feast day
                            celebrations, please contact the church office.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
