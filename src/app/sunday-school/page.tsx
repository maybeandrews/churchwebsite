import React from "react";
import Image from "next/image";

export default function SundaySchoolPage() {
    return (
        <>
            <main className="sunday-school-container max-w-6xl mx-auto px-5 pt-24 pb-10">
                <h1 className="page-title text-4xl text-center text-[#7a3b2e] mb-10 pb-4 border-b-2 border-[#d4b78f]">
                    Sunday School
                </h1>

                {/* Hero Image Section */}
                <div className="relative w-full h-[300px] md:h-[400px] mb-10 overflow-hidden rounded-lg shadow-md">
                    <Image
                        src="/sundayschool.jpg"
                        alt="Sunday School Children St. Thomas Orthodox Church"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-3xl md:text-4xl font-bold px-4 text-center">
                            "Let the little children come to me" - Matthew 19:14
                        </h2>
                    </div>
                </div>

                {/* Introduction Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        About Our Sunday School
                    </h2>
                    <p className="mb-4">
                        The Sunday School at St. Thomas Orthodox Church is
                        dedicated to nurturing the spiritual growth of our
                        children and youth through Orthodox Christian education.
                        We strive to create a loving, supportive environment
                        where young people can develop a personal relationship
                        with God and a deep understanding of our Orthodox faith
                        and traditions.
                    </p>
                    <p>
                        Our program combines age-appropriate religious
                        instruction, Bible study, prayer, worship experiences,
                        and service activities to help children grow in faith
                        and become active members of the church community. We
                        emphasize both knowledge of the faith and its practical
                        application in daily life.
                    </p>
                </section>

                {/* Class Schedule Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Class Schedule and Structure
                    </h2>

                    <p className="mb-6">
                        Sunday School classes are held every Sunday following
                        the Divine Liturgy from 11:15 AM to 12:15 PM. Our
                        program is organized into the following age groups:
                    </p>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-[#f1e8d8]">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Class
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Age Group
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Location
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-[#7a3b2e] uppercase tracking-wider"
                                    >
                                        Teachers
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Pre-K & Kindergarten
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Ages 3-5
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Room 101
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Mrs. Sarah Thomas, Mrs. Anna Philip
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Primary
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Grades 1-3
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Room 102
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Mr. Joseph Varghese, Ms. Rachel John
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Intermediate
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Grades 4-6
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Room 103
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Mr. Matthew Abraham, Mrs. Susan Jacob
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Junior High
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Grades 7-9
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Room 104
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Mr. Thomas Kurien, Dr. Elizabeth George
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        High School
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Grades 10-12
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Room 105
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        Fr. Thomas Mathew, Mr. Philip George
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 p-4 bg-[#f9f5f0] rounded-lg">
                        <p className="text-gray-700">
                            <strong>Note:</strong> A typical Sunday School
                            session includes opening prayer, Bible lesson,
                            Orthodox tradition instruction, activities, and
                            closing prayer. All students gather together on the
                            first Sunday of each month for a combined assembly
                            before breaking into individual classes.
                        </p>
                    </div>
                </section>

                {/* Curriculum Section */}
                <section className="mb-12">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Our Curriculum
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Biblical Foundation
                            </h3>
                            <p className="mb-2">
                                Our curriculum is centered on Bible study,
                                helping children understand Scripture and its
                                relevance to their lives. Each age group
                                explores Bible stories and passages appropriate
                                to their level of understanding.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 mt-3">
                                <li>Old and New Testament stories</li>
                                <li>Life of Christ</li>
                                <li>Lives of Apostles</li>
                                <li>Scripture memorization</li>
                            </ul>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Orthodox Faith & Tradition
                            </h3>
                            <p className="mb-2">
                                Students learn about Orthodox theology,
                                liturgical life, and traditions, with a special
                                emphasis on our Malankara Orthodox Syrian
                                heritage and practices.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 mt-3">
                                <li>Church history and traditions</li>
                                <li>The Divine Liturgy and sacraments</li>
                                <li>Feast days and church calendar</li>
                                <li>Icons and Orthodox symbols</li>
                            </ul>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Prayer & Worship
                            </h3>
                            <p className="mb-2">
                                Children learn traditional Orthodox prayers and
                                are encouraged to develop their own prayer life.
                                They also learn about liturgical participation.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 mt-3">
                                <li>Common Orthodox prayers</li>
                                <li>Prayer in daily life</li>
                                <li>Participation in worship</li>
                                <li>Church hymns and music</li>
                            </ul>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Christian Living
                            </h3>
                            <p className="mb-2">
                                Applying faith to everyday life is essential.
                                Students explore moral and ethical teachings and
                                learn how to live as Orthodox Christians.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 mt-3">
                                <li>Christian values and ethics</li>
                                <li>Stewardship and service</li>
                                <li>Family and community relationships</li>
                                <li>
                                    Contemporary issues from an Orthodox
                                    perspective
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Special Events & Activities */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Special Events & Activities
                    </h2>

                    <p className="mb-6">
                        Throughout the academic year, our Sunday School
                        organizes various special events and activities to
                        enhance learning and build community:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-lg font-medium mb-2">
                                Annual Day Program
                            </h3>
                            <p>
                                A celebration featuring performances by students
                                showcasing what they've learned, typically held
                                in May with awards and recognition.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-lg font-medium mb-2">
                                Christmas Program
                            </h3>
                            <p>
                                Students present the Nativity story through
                                songs, skits, and readings, followed by carol
                                singing and community celebration.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-lg font-medium mb-2">
                                Lenten Retreat
                            </h3>
                            <p>
                                A special day of prayer, activities, and
                                learning focused on the meaning of Great Lent
                                and preparation for Pascha.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-lg font-medium mb-2">
                                Service Projects
                            </h3>
                            <p>
                                Regular opportunities for students to engage in
                                community service, such as food drives, visiting
                                nursing homes, and environmental clean-ups.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-lg font-medium mb-2">
                                Family Worship Day
                            </h3>
                            <p>
                                Special Sundays when families worship together
                                and students take active roles in the service as
                                readers, choir members, and altar servers.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#d4b78f] pl-4">
                            <h3 className="text-lg font-medium mb-2">
                                Summer Vacation Bible School
                            </h3>
                            <p>
                                A week-long program in July featuring Bible
                                stories, crafts, music, games, and activities
                                centered around a faith-based theme.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Registration Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Registration Information
                    </h2>

                    <p className="mb-4">
                        Registration for Sunday School takes place annually in
                        August for the academic year that begins in September.
                        However, new students are welcome to join at any time.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <h3 className="text-lg font-medium mb-2">
                                Registration Process
                            </h3>
                            <ol className="list-decimal pl-5 space-y-1">
                                <li>
                                    Complete the registration form (available
                                    online or at the church office)
                                </li>
                                <li>
                                    Submit the form along with the annual
                                    materials fee ($25 per student, maximum $60
                                    per family)
                                </li>
                                <li>
                                    Attend the parent orientation session in
                                    early September
                                </li>
                            </ol>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">
                                What to Bring Each Sunday
                            </h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Orthodox Study Bible (provided to new
                                    students)
                                </li>
                                <li>Sunday School textbook and workbook</li>
                                <li>Notebook and pencil</li>
                                <li>Folder for handouts</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Parent Involvement */}
                <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Parent Involvement
                    </h2>

                    <p className="mb-6">
                        Parents are the primary educators of their children in
                        the faith. Our Sunday School program works best when
                        supported by active family participation:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-medium text-[#7a3b2e] mb-2">
                                How Parents Can Help
                            </h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Ensure regular attendance and punctuality
                                </li>
                                <li>Review lessons at home during the week</li>
                                <li>Help with memory verses and prayers</li>
                                <li>Discuss the Sunday's lesson after class</li>
                                <li>
                                    Model active participation in church life
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-medium text-[#7a3b2e] mb-2">
                                Volunteer Opportunities
                            </h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Teach or assistant teach a class</li>
                                <li>Help with special events and programs</li>
                                <li>Prepare snacks for Sunday School</li>
                                <li>Assist with crafts and activities</li>
                                <li>Join the Sunday School parent committee</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p>
                            We welcome parent feedback and suggestions! Please
                            contact any Sunday School staff member with your
                            ideas or to learn more about getting involved.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
