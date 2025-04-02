import React from "react";
import Image from "next/image";

export default function PrayersPage() {
    return (
        <>
            <main className="prayers-container max-w-6xl mx-auto px-5 pt-24 pb-10">
                <h1 className="page-title text-4xl text-center text-[#7a3b2e] mb-10 pb-4 border-b-2 border-[#d4b78f]">
                    Prayers and Devotions
                </h1>

                {/* Hero Image Section */}
                <div className="relative w-full h-[300px] md:h-[400px] mb-10 overflow-hidden rounded-lg shadow-md">
                    <Image
                        src="/banner.jpg"
                        alt="Prayer at St. Thomas Orthodox Church"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-3xl md:text-4xl font-bold px-4 text-center">
                            &quot;Pray without ceasing&quot; - 1 Thessalonians
                            5:17
                        </h2>
                    </div>
                </div>

                {/* Introduction Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Prayer in Orthodox Tradition
                    </h2>
                    <p className="mb-4">
                        Prayer is the foundation of Orthodox spiritual life. It
                        is through prayer that we communicate with God, express
                        our faith, and grow in our relationship with Him. The
                        Orthodox tradition offers rich resources for prayer,
                        from formal liturgical prayers to personal devotions.
                    </p>
                    <p>
                        At St. Thomas Orthodox Church, we emphasize both
                        communal and personal prayer as essential spiritual
                        disciplines. Below, you&apos;ll find some of the most
                        common prayers used in our tradition, along with
                        information about prayer practices and devotional life.
                    </p>
                </section>

                {/* Common Prayers Section */}
                <section className="mb-12">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Common Orthodox Prayers
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                The Trisagion Prayer
                            </h3>
                            <div className="bg-[#f9f5f0] p-4 rounded-lg mb-4">
                                <p className="italic">
                                    Holy God, Holy Mighty, Holy Immortal, have
                                    mercy on us. (3 times)
                                </p>
                                <p className="italic mt-2">
                                    Glory to the Father, and to the Son, and to
                                    the Holy Spirit, now and ever, and unto ages
                                    of ages. Amen.
                                </p>
                                <p className="italic mt-2">
                                    O most Holy Trinity, have mercy on us. O
                                    Lord, cleanse us from our sins. O Master,
                                    pardon our transgressions. O Holy One, visit
                                    and heal our infirmities, for Thy
                                    Name&apos;s sake.
                                </p>
                                <p className="italic mt-2">
                                    Lord, have mercy. (3 times)
                                </p>
                            </div>
                            <p className="text-sm text-gray-600">
                                The Trisagion (&quot;Thrice Holy&quot;) Prayer
                                is one of the most common prayers in Orthodox
                                worship, used both in liturgical services and
                                personal devotions.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                The Lord&apos;s Prayer
                            </h3>
                            <div className="bg-[#f9f5f0] p-4 rounded-lg mb-4">
                                <p className="italic">
                                    Our Father, who art in heaven, hallowed be
                                    Thy name. Thy kingdom come. Thy will be
                                    done, on earth as it is in heaven. Give us
                                    this day our daily bread; and forgive us our
                                    trespasses, as we forgive those who trespass
                                    against us; and lead us not into temptation,
                                    but deliver us from evil.
                                </p>
                                <p className="italic mt-2">
                                    For Thine is the kingdom, and the power, and
                                    the glory, of the Father, and of the Son,
                                    and of the Holy Spirit, now and ever and
                                    unto ages of ages. Amen.
                                </p>
                            </div>
                            <p className="text-sm text-gray-600">
                                Taught by Christ Himself, the Lord&apos;s Prayer
                                forms a central part of Orthodox worship and is
                                recited in every Divine Liturgy.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Prayer to the Holy Spirit
                            </h3>
                            <div className="bg-[#f9f5f0] p-4 rounded-lg mb-4">
                                <p className="italic">
                                    O Heavenly King, the Comforter, the Spirit
                                    of Truth, who art everywhere present and
                                    fillest all things, Treasury of blessings
                                    and Giver of life: Come and abide in us, and
                                    cleanse us from every impurity, and save our
                                    souls, O Good One.
                                </p>
                            </div>
                            <p className="text-sm text-gray-600">
                                This prayer invokes the Holy Spirit and is
                                commonly used at the beginning of prayers,
                                services, and personal devotions.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                The Jesus Prayer
                            </h3>
                            <div className="bg-[#f9f5f0] p-4 rounded-lg mb-4">
                                <p className="italic text-center text-lg">
                                    Lord Jesus Christ, Son of God, have mercy on
                                    me, a sinner.
                                </p>
                            </div>
                            <p className="text-sm text-gray-600">
                                This simple but profound prayer is a cornerstone
                                of Orthodox spirituality. It can be recited
                                continuously throughout the day as a form of
                                inner meditation and constant prayer.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Prayer in Daily Life Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Prayer in Daily Life
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-lg font-medium mb-2">
                                Morning Prayers
                            </h3>
                            <p>
                                Begin each day with prayer, offering the first
                                moments to God in thanksgiving and asking for
                                His blessing on the day&apos;s activities.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-lg font-medium mb-2">
                                Evening Prayers
                            </h3>
                            <p>
                                End the day in prayer, examining your
                                conscience, asking forgiveness for sins, and
                                thanking God for His mercies throughout the day.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-lg font-medium mb-2">
                                Mealtime Prayers
                            </h3>
                            <p>
                                Bless your food before eating and give thanks
                                afterward, acknowledging God as the provider of
                                all sustenance.
                            </p>
                        </div>
                    </div>

                    <div className="p-4 bg-[#f9f5f0] rounded-lg mt-6">
                        <h3 className="text-lg font-medium mb-2">
                            Creating a Prayer Corner
                        </h3>
                        <p>
                            Orthodox Christians traditionally maintain a small
                            prayer corner in their homes with icons, candles,
                            and prayer books. This sacred space serves as a
                            focal point for family and personal prayers.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex items-center">
                                <span className="h-2 w-2 bg-[#7a3b2e] rounded-full mr-2"></span>
                                <span>
                                    Place in the eastern part of a room if
                                    possible
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="h-2 w-2 bg-[#7a3b2e] rounded-full mr-2"></span>
                                <span>
                                    Include icons of Christ, the Theotokos, and
                                    patron saints
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="h-2 w-2 bg-[#7a3b2e] rounded-full mr-2"></span>
                                <span>
                                    Keep a candle or oil lamp to light during
                                    prayers
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fasting and Prayer Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Fasting and Prayer
                    </h2>
                    <p className="mb-4">
                        In the Orthodox tradition, fasting and prayer go hand in
                        hand. Fasting is not merely abstinence from food but a
                        discipline that helps focus our spiritual attention and
                        creates space for deeper prayer.
                    </p>
                    <p>
                        The Church observes several fasting periods throughout
                        the year, including Great Lent, the Nativity Fast, the
                        Apostles&apos; Fast, and the Dormition Fast. During
                        these times, the faithful are encouraged to intensify
                        their prayer life alongside their fasting discipline.
                    </p>
                </section>

                {/* Prayer Books and Resources */}
                <section className="mb-12">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Prayer Books and Resources
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Orthodox Prayer Books
                            </h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>The Orthodox Prayer Book</li>
                                <li>The Jordanville Prayer Book</li>
                                <li>A Prayer Book for Orthodox Christians</li>
                                <li>The Ancient Faith Prayer Book</li>
                                <li>Daily Prayers for Orthodox Christians</li>
                            </ul>
                            <p className="mt-3 text-sm">
                                These are available in our church bookstore or
                                can be ordered online.
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Digital Resources
                            </h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    Daily Readings App (Ancient Faith
                                    Ministries)
                                </li>
                                <li>Orthodox Prayer App</li>
                                <li>
                                    Online Orthodox Prayer Book
                                    (orthodoxprayer.org)
                                </li>
                                <li>
                                    Orthodox Church of America Prayer Resources
                                </li>
                                <li>Orthodox Christian Prayers podcast</li>
                            </ul>
                            <p className="mt-3 text-sm">
                                These digital resources can help you maintain a
                                prayer life even when traveling.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Prayer Groups */}
                <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Prayer Groups at St. Thomas
                    </h2>

                    <p className="mb-6">
                        Our parish offers several opportunities for communal
                        prayer:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-medium text-[#7a3b2e]">
                                Wednesday Evening Prayer Group
                            </h3>
                            <p>7:00 PM - 8:30 PM in the church hall</p>
                            <p className="text-sm mt-2">
                                Focus on intercessory prayer for the parish and
                                community
                            </p>
                        </div>

                        <div className="p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-medium text-[#7a3b2e]">
                                Akathist Service
                            </h3>
                            <p>Friday evenings at 6:30 PM</p>
                            <p className="text-sm mt-2">
                                Hymns of praise to Christ, the Theotokos, or
                                saints
                            </p>
                        </div>

                        <div className="p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-medium text-[#7a3b2e]">
                                Mothers&apos; Prayer Circle
                            </h3>
                            <p>First Monday of each month, 10:00 AM</p>
                            <p className="text-sm mt-2">
                                Prayers focused on families and children
                            </p>
                        </div>

                        <div className="p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-medium text-[#7a3b2e]">
                                Youth Prayer Fellowship
                            </h3>
                            <p>Sundays after Divine Liturgy, twice monthly</p>
                            <p className="text-sm mt-2">
                                For teens and young adults
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 text-center">
                        <p>
                            For more information or to join any of these prayer
                            groups, please contact the church office.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
