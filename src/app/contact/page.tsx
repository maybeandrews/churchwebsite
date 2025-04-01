import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
    return (
        <>
            <main className="contact-container max-w-6xl mx-auto px-5 pt-24 pb-10">
                <h1 className="page-title text-4xl text-center text-[#7a3b2e] mb-10 pb-4 border-b-2 border-[#d4b78f]">
                    Contact Us
                </h1>

                {/* Contact Information Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl text-[#7a3b2e] mb-6 font-semibold">
                            Get in Touch
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-[#7a3b2e]"
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
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-[#7a3b2e]">
                                        Email
                                    </p>
                                    <p className="text-gray-700">
                                        info@stthomasmuvattupuzha.org
                                    </p>
                                    <p className="text-gray-700">
                                        vicar@stthomasmuvattupuzha.org
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-[#7a3b2e]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-[#7a3b2e]">
                                        Phone
                                    </p>
                                    <p className="text-gray-700">
                                        Church Office: (123) 456-7890
                                    </p>
                                    <p className="text-gray-700">
                                        Fr. Thomas Mathew: (123) 456-7891
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-[#7a3b2e]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-[#7a3b2e]">
                                        Address
                                    </p>
                                    <p className="text-gray-700">
                                        St. Thomas Orthodox Church
                                    </p>
                                    <p className="text-gray-700">
                                        123 Main Street
                                    </p>
                                    <p className="text-gray-700">
                                        Muvattupuzha, NY 12345
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-[#7a3b2e]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-[#7a3b2e]">
                                        Office Hours
                                    </p>
                                    <p className="text-gray-700">
                                        Monday to Friday: 9:00 AM - 4:00 PM
                                    </p>
                                    <p className="text-gray-700">
                                        Saturday: 10:00 AM - 1:00 PM
                                    </p>
                                    <p className="text-gray-700">
                                        Sunday: Closed (Services Only)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-medium text-[#7a3b2e] mb-4">
                                Connect With Us
                            </h3>
                            <div className="flex space-x-4">
                                <Link
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-[#7a3b2e]"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                                <Link
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-[#7a3b2e]"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                                <Link
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-[#7a3b2e]"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                </Link>
                                <Link
                                    href="mailto:info@stthomasmuvattupuzha.org"
                                    className="text-gray-600 hover:text-[#7a3b2e]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
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
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                            <h2 className="text-2xl text-[#7a3b2e] mb-4 font-semibold">
                                Send a Message
                            </h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="firstName"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7a3b2e] focus:ring-[#7a3b2e] sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="lastName"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7a3b2e] focus:ring-[#7a3b2e] sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7a3b2e] focus:ring-[#7a3b2e] sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Phone (Optional)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7a3b2e] focus:ring-[#7a3b2e] sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7a3b2e] focus:ring-[#7a3b2e] sm:text-sm"
                                    >
                                        <option value="">Please select</option>
                                        <option value="general">
                                            General Inquiry
                                        </option>
                                        <option value="services">
                                            Service Times
                                        </option>
                                        <option value="prayer">
                                            Prayer Request
                                        </option>
                                        <option value="membership">
                                            Membership Information
                                        </option>
                                        <option value="events">
                                            Events & Programs
                                        </option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#7a3b2e] focus:ring-[#7a3b2e] sm:text-sm"
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#7a3b2e] text-white py-2 px-4 rounded hover:bg-[#8d4938] transition duration-300"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="relative h-[200px] rounded-lg overflow-hidden shadow-sm">
                            <Image
                                src="/images/homeimage.jpg"
                                alt="St. Thomas Orthodox Church Building"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-medium text-[#7a3b2e] mb-3">
                                Directions
                            </h3>
                            <p className="mb-3">
                                St. Thomas Orthodox Church is located on Main
                                Street in Muvattupuzha, approximately 2 miles
                                from the town center.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    From I-95: Take exit 23 toward Muvattupuzha.
                                    Follow Route 1 for 3 miles, then turn right
                                    onto Main Street.
                                </li>
                                <li>
                                    Public Transportation: Bus routes 12, 15,
                                    and 18 stop directly in front of the church.
                                </li>
                                <li>
                                    Parking is available in our lot behind the
                                    church building.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-[#7a3b2e] mb-3">
                                Accessibility
                            </h3>
                            <p className="mb-3">
                                Our church is committed to being accessible to
                                all worshippers.
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    Wheelchair accessible entrance on the north
                                    side of the building
                                </li>
                                <li>
                                    Reserved parking spaces for those with
                                    mobility challenges
                                </li>
                                <li>Accessible restrooms</li>
                                <li>
                                    Hearing assistance devices available upon
                                    request
                                </li>
                                <li>Large-print service books available</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
