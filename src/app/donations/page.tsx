import React from "react";
import Image from "next/image";

export default function DonationsPage() {
    return (
        <>
            <main className="donations-container max-w-6xl mx-auto px-5 pt-24 pb-10">
                <h1 className="page-title text-4xl text-center text-[#7a3b2e] mb-10 pb-4 border-b-2 border-[#d4b78f]">
                    Support Our Ministry
                </h1>

                {/* Hero Section */}
                <div className="relative w-full h-[300px] md:h-[400px] mb-10 overflow-hidden rounded-lg shadow-md">
                    <Image
                        src="/donation.jpg"
                        alt="Support St. Thomas Orthodox Church"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center max-w-3xl mx-auto px-4">
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                                &quot;Give, and it will be given to you&quot;
                            </h2>
                            <p className="text-white text-lg">Luke 6:38</p>
                        </div>
                    </div>
                </div>

                {/* Introduction Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Your Generosity Makes a Difference
                    </h2>
                    <p className="mb-4">
                        Thank you for considering a gift to St. Thomas Orthodox
                        Church. Your generosity supports our worship,
                        educational programs, community outreach, and the
                        maintenance of our church facilities. As we continue to
                        grow and serve, your financial contributions help make
                        our ministry possible.
                    </p>
                    <p>
                        There are several ways you can support our parish
                        financially. Choose the option that works best for you
                        below.
                    </p>
                </section>

                {/* Donation Options */}
                <section className="mb-12">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Ways to Give
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Online Giving */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-center mb-4">
                                <div className="rounded-full bg-[#f1e8d8] p-3 mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-[#7a3b2e]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-[#7a3b2e]">
                                    Online Giving
                                </h3>
                            </div>
                            <p className="mb-6">
                                Make a one-time donation or set up recurring
                                giving through our secure online payment system.
                                You can use your credit card, debit card, or
                                bank account.
                            </p>
                            <button className="w-full bg-[#7a3b2e] text-white py-3 rounded hover:bg-[#8d4938] transition duration-300">
                                Donate Now
                            </button>
                        </div>

                        {/* Text to Give */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-center mb-4">
                                <div className="rounded-full bg-[#f1e8d8] p-3 mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-[#7a3b2e]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-[#7a3b2e]">
                                    Text to Give
                                </h3>
                            </div>
                            <p className="mb-6">
                                Simply text &quot;GIVE&quot; to (123) 456-7890
                                to make a donation from your mobile device.
                                First-time donors will receive a link to set up
                                their payment information.
                            </p>
                            <div className="p-4 bg-[#f9f5f0] rounded text-center">
                                <span className="font-semibold">
                                    Text &quot;GIVE&quot; to:
                                </span>
                                <p className="text-xl font-bold">
                                    (123) 456-7890
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Mail/In-Person */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-center mb-4">
                                <div className="rounded-full bg-[#f1e8d8] p-3 mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-[#7a3b2e]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-[#7a3b2e]">
                                    Mail or In-Person
                                </h3>
                            </div>
                            <p className="mb-4">
                                Checks can be mailed to our church office or
                                placed in the offering tray during Sunday
                                services. Please make checks payable to
                                &quot;St. Thomas Orthodox Church.&quot;
                            </p>
                            <div className="p-4 bg-[#f9f5f0] rounded mb-4">
                                <p className="font-medium">Mailing Address:</p>
                                <p>St. Thomas Orthodox Church</p>
                                <p>123 Main Street</p>
                                <p>Muvattupuzha, NY 12345</p>
                            </div>
                            <p className="text-sm text-gray-600">
                                Cash donations are also accepted in person
                                during services.
                            </p>
                        </div>

                        {/* Bank Transfer */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex items-center mb-4">
                                <div className="rounded-full bg-[#f1e8d8] p-3 mr-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-[#7a3b2e]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-[#7a3b2e]">
                                    Bank Transfer
                                </h3>
                            </div>
                            <p className="mb-4">
                                Set up direct transfers from your bank account
                                to the church. This can be done as a one-time
                                transfer or as a recurring donation.
                            </p>
                            <div className="p-4 bg-[#f9f5f0] rounded mb-4">
                                <p className="font-medium">
                                    Bank Account Information:
                                </p>
                                <p>Bank Name: First National Bank</p>
                                <p>Account Name: St. Thomas Orthodox Church</p>
                                <p>Account Number: XXXX-XXXX-XXXX-1234</p>
                                <p>Routing Number: XXX-XXX-XXX</p>
                            </div>
                            <p className="text-sm text-gray-600">
                                Please include your name in the memo for proper
                                attribution.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Donation Categories */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Donation Categories
                    </h2>

                    <p className="mb-6">
                        You may designate your gift for a specific purpose or
                        give to our general fund. Below are the primary areas
                        where your support can make an impact:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 border-l-4 border-[#d4b78f]">
                            <h3 className="font-medium text-lg mb-2">
                                General Fund
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Supports the overall operations of the church,
                                including worship services, utilities, staff
                                salaries, and maintenance.
                            </p>
                        </div>

                        <div className="p-4 border-l-4 border-[#d4b78f]">
                            <h3 className="font-medium text-lg mb-2">
                                Building Fund
                            </h3>
                            <p className="text-gray-600 text-sm">
                                For construction, renovation, and major repair
                                projects to maintain and improve our church
                                facilities.
                            </p>
                        </div>

                        <div className="p-4 border-l-4 border-[#d4b78f]">
                            <h3 className="font-medium text-lg mb-2">
                                Outreach Ministry
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Supports our community service efforts,
                                including food drives, homeless ministry, and
                                other charitable works.
                            </p>
                        </div>

                        <div className="p-4 border-l-4 border-[#d4b78f]">
                            <h3 className="font-medium text-lg mb-2">
                                Youth Programs
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Funds our Sunday School, youth ministry, camps,
                                retreats, and educational materials for young
                                people.
                            </p>
                        </div>

                        <div className="p-4 border-l-4 border-[#d4b78f]">
                            <h3 className="font-medium text-lg mb-2">
                                Mission Support
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Contributes to missionary work, both domestic
                                and overseas, spreading the Orthodox faith and
                                providing humanitarian aid.
                            </p>
                        </div>

                        <div className="p-4 border-l-4 border-[#d4b78f]">
                            <h3 className="font-medium text-lg mb-2">
                                Special Collections
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Seasonal appeals for specific needs, such as
                                holiday outreach, seminarian support, or
                                disaster relief.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Planned Giving */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Planned Giving
                    </h2>

                    <p className="mb-6">
                        In addition to regular donations, you can support the
                        long-term future of St. Thomas Orthodox Church through
                        planned giving:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 bg-[#f9f5f0] rounded">
                            <h3 className="text-[#7a3b2e] font-semibold mb-3">
                                Legacy Giving
                            </h3>
                            <p className="mb-2">
                                Include St. Thomas Orthodox Church in your will
                                or estate plans to leave a lasting legacy that
                                will support the church for generations to come.
                            </p>
                            <p className="text-sm">
                                For information on how to include the church in
                                your will, please contact our church office or
                                speak with your estate planning attorney.
                            </p>
                        </div>

                        <div className="p-5 bg-[#f9f5f0] rounded">
                            <h3 className="text-[#7a3b2e] font-semibold mb-3">
                                Endowment Fund
                            </h3>
                            <p className="mb-2">
                                Contribute to our church endowment fund, which
                                provides ongoing support through investment
                                income while preserving the principal donation.
                            </p>
                            <p className="text-sm">
                                Gifts to the endowment fund ensure the financial
                                stability of our parish for years to come.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600 mb-3">
                            For more information about planned giving options,
                            please contact:
                        </p>
                        <p className="font-medium">Fr. Thomas Mathew, Vicar</p>
                        <p>vicar@stthomasmuvattupuzha.org</p>
                        <p>(123) 456-7890</p>
                    </div>
                </section>

                {/* Tax Information Section */}
                <section className="mb-12 bg-[#f9f5f0] p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                        Tax Information
                    </h2>

                    <p className="mb-4">
                        St. Thomas Orthodox Church is a 501(c)(3) non-profit
                        organization. All donations are tax-deductible to the
                        extent allowed by law.
                    </p>

                    <p className="mb-4">
                        You will receive a receipt for your donation that can be
                        used for tax purposes. Annual contribution statements
                        are sent out in January for the previous year&apos;s
                        donations.
                    </p>

                    <p className="text-center mt-6">
                        <strong>Tax ID/EIN:</strong> 12-3456789
                    </p>
                </section>

                {/* FAQ Section */}
                <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-medium text-[#7a3b2e] mb-2">
                                Can I make an anonymous donation?
                            </h3>
                            <p className="text-gray-600">
                                Yes, you can choose to make anonymous donations.
                                Please indicate your preference for anonymity
                                when making your contribution.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-[#7a3b2e] mb-2">
                                How are donation funds used?
                            </h3>
                            <p className="text-gray-600">
                                Donations support our parish operations,
                                ministries, facilities, outreach efforts, and
                                diocesan assessments. The Parish Council
                                oversees the responsible stewardship of all
                                gifts.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-[#7a3b2e] mb-2">
                                Is there a minimum donation amount?
                            </h3>
                            <p className="text-gray-600">
                                No, we appreciate gifts of all sizes. Every
                                contribution, regardless of amount, helps
                                support our parish mission and ministries.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-[#7a3b2e] mb-2">
                                How do I update or cancel my recurring donation?
                            </h3>
                            <p className="text-gray-600">
                                You can manage your recurring donations by
                                logging into your account on our online giving
                                platform or by contacting the church office for
                                assistance.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-[#f9f5f0] rounded text-center">
                        <p className="mb-3">
                            If you have additional questions about donations,
                            please contact our church treasurer:
                        </p>
                        <p className="font-medium">Mr. George Thomas</p>
                        <p>treasurer@stthomasmuvattupuzha.org</p>
                        <p>(123) 456-7890</p>
                    </div>
                </section>
            </main>
        </>
    );
}
