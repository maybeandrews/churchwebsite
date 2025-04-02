import React from "react";
import Image from "next/image";

export default function AdministrationPage() {
    return (
        <>
            <main className="administration-container max-w-6xl mx-auto px-5 pt-24 pb-10">
                <h1 className="page-title text-4xl text-center text-[#7a3b2e] mb-10 pb-4 border-b-2 border-[#d4b78f]">
                    Church Administration
                </h1>

                {/* Vicar Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/3 relative h-64 w-full">
                            <Image
                                src="/father.png"
                                alt="Rev. Fr. Thomas Mathew"
                                fill
                                style={{ objectFit: "cover" }}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-2xl text-[#7a3b2e] mb-2 font-semibold">
                                Rev. Fr. Thomas Mathew
                            </h2>
                            <h3 className="text-xl text-gray-700 mb-4">
                                Vicar
                            </h3>
                            <p className="mb-4">
                                Fr. Thomas Mathew has been serving as the vicar
                                of St. Thomas Orthodox Church since 2018. He
                                received his theological education from Orthodox
                                Theological Seminary, Kottayam and was ordained
                                as a priest in 2010.
                            </p>
                            <p>
                                Under his spiritual leadership, our parish has
                                strengthened its community outreach programs and
                                enhanced youth participation in church
                                activities.
                            </p>
                            <div className="mt-4 text-gray-700">
                                <p>
                                    <strong>Contact:</strong>{" "}
                                    vicar@stthomasmuvattupuzha.org
                                </p>
                                <p>
                                    <strong>Phone:</strong> +91 9847123456
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Church Committee Section */}
                <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Church Managing Committee (2024-2026)
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="commitee-member p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-medium text-lg">
                                Trustee (Ex-Officio)
                            </h3>
                            <p className="text-gray-700">
                                Rev. Fr. Thomas Mathew
                            </p>
                        </div>

                        <div className="commitee-member p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-medium text-lg">Secretary</h3>
                            <p className="text-gray-700">Mr. Jacob Varghese</p>
                        </div>

                        <div className="commitee-member p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-medium text-lg">Lay Trustee</h3>
                            <p className="text-gray-700">Mr. George Thomas</p>
                        </div>

                        <div className="commitee-member p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-medium text-lg">Treasurer</h3>
                            <p className="text-gray-700">Mr. Philip Kurian</p>
                        </div>
                    </div>

                    <h3 className="text-xl text-[#7a3b2e] mt-8 mb-4 font-semibold">
                        Committee Members
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-[#f9f5f0] p-3 rounded">
                            Mr. Thomas John
                        </div>
                        <div className="bg-[#f9f5f0] p-3 rounded">
                            Mrs. Sarah Philip
                        </div>
                        <div className="bg-[#f9f5f0] p-3 rounded">
                            Mr. Samuel David
                        </div>
                        <div className="bg-[#f9f5f0] p-3 rounded">
                            Mrs. Mariam Joseph
                        </div>
                        <div className="bg-[#f9f5f0] p-3 rounded">
                            Mr. John Varkey
                        </div>
                        <div className="bg-[#f9f5f0] p-3 rounded">
                            Mrs. Aleyamma Thomas
                        </div>
                    </div>
                </section>

                {/* Organizations Section */}
                <section className="mb-12">
                    <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                        Parish Organizations
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Sunday School
                            </h3>
                            <p className="mb-2">
                                Our Sunday School provides spiritual education
                                to children and youth.
                            </p>
                            <p className="text-gray-700">
                                <strong>Headmaster:</strong> Mr. Mathew George
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Martha Mariam Samajam
                            </h3>
                            <p className="mb-2">
                                Women&apos;s fellowship group engaged in prayer
                                and community service.
                            </p>
                            <p className="text-gray-700">
                                <strong>President:</strong> Mrs. Annamma Thomas
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Youth Movement (MGOCSM)
                            </h3>
                            <p className="mb-2">
                                Engages young adults in spiritual growth and
                                leadership activities.
                            </p>
                            <p className="text-gray-700">
                                <strong>Secretary:</strong> Mr. Joseph John
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="text-xl text-[#7a3b2e] mb-3">
                                Church Choir
                            </h3>
                            <p className="mb-2">
                                Leads the congregation in traditional Orthodox
                                hymns and worship.
                            </p>
                            <p className="text-gray-700">
                                <strong>Choir Leader:</strong> Mr. Thomas Kurien
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
