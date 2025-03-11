"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NewsCalendarSection = () => {
    const [currentMonth, setCurrentMonth] = useState("FEBRUARY 2025");

    // Calendar data
    const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const daysInMonth = [
        { day: 1, type: "weeklyOff" },
        { day: 2, type: "restrictedHoliday" },
        { day: 3, type: null },
        { day: 4, type: null },
        { day: 5, type: null },
        { day: 6, type: null },
        { day: 7, type: null },
        { day: 8, type: "weeklyOff" },
        { day: 9, type: "weeklyOff" },
        { day: 10, type: null },
        { day: 11, type: null },
        { day: 12, type: "restrictedHoliday" },
        { day: 13, type: null },
        { day: 14, type: null },
        { day: 15, type: "weeklyOff" },
        { day: 16, type: "weeklyOff" },
        { day: 17, type: null },
        { day: 18, type: null },
        { day: 19, type: "restrictedHoliday" },
        { day: 20, type: null },
        { day: 21, type: null },
        { day: 22, type: "weeklyOff" },
        { day: 23, type: "restrictedHoliday" },
        { day: 24, type: null },
        { day: 25, type: null },
        { day: 26, type: "gazettedHoliday" },
        { day: 27, type: null },
        { day: 28, type: null },
    ];

    // Helper function to get cell class based on day type
    const getCellClass = (type: string | null) => {
        if (type === "gazettedHoliday") return "bg-red-500 text-white";
        if (type === "restrictedHoliday") return "bg-green-500 text-white";
        if (type === "weeklyOff") return "text-blue-500";
        return "";
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-6 border border-gray-200 rounded-lg bg-white shadow-sm my-8">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                {/* Latest News Section */}
                <div className="w-full lg:w-1/2">
                    <div className="mb-6">
                        <div className="flex items-center mb-4">
                            <div className="w-1.5 h-10 bg-red-600 mr-4"></div>
                            <h2 className="uppercase text-2xl font-bold tracking-wide">
                                LATEST NEWS
                            </h2>
                        </div>
                    </div>

                    <div className="relative h-64 w-full mb-6">
                        <Image
                            src="/church-building.jpg"
                            alt="Church Building"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="mt-4 mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Invitation For Tender
                        </h3>

                        <p className="text-gray-700 leading-relaxed">
                            St. George Forane Church, Edappally, invites sealed
                            tender applications for constructing an Auditorium
                            building at Edappally. Contractors who have
                            successfully completed a single civil construction
                            project with a minimum value of 5 crores are
                            eligible to apply. Last date for submission is March
                            15, 2025.
                        </p>

                        <div className="mt-6">
                            <Link href="/news-details" passHref>
                                <div className="inline-block bg-red-700 text-white px-8 py-3 font-medium uppercase text-sm tracking-wide cursor-pointer hover:bg-red-800 transition duration-300">
                                    MORE
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Calendar Section */}
                <div className="w-full lg:w-1/2 bg-gray-100 rounded-lg p-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                        Calendar
                    </h2>

                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        {/* Calendar Header with Navigation */}
                        <div className="flex items-center justify-between bg-gray-100 p-4">
                            <button className="text-gray-600 hover:text-gray-800 p-2">
                                <span className="text-2xl">&lt;</span>
                            </button>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                {currentMonth}
                            </h3>
                            <button className="text-gray-600 hover:text-gray-800 p-2">
                                <span className="text-2xl">&gt;</span>
                            </button>
                        </div>

                        {/* Calendar Days of Week */}
                        <div className="grid grid-cols-7 text-center border-b">
                            {weekDays.map((day, index) => (
                                <div
                                    key={index}
                                    className="p-2 font-bold text-gray-800"
                                >
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Days */}
                        <div className="grid grid-cols-7 text-center">
                            {daysInMonth.map((dayObj, index) => (
                                <div
                                    key={index}
                                    className={`p-4 border ${getCellClass(
                                        dayObj.type
                                    )}`}
                                >
                                    {dayObj.day}
                                </div>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className="flex flex-wrap justify-around p-4 text-sm border-t">
                            <div className="flex items-center mb-2">
                                <div className="w-4 h-4 bg-red-500 mr-2"></div>
                                <span>Gazetted Holiday</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <div className="w-4 h-4 bg-green-500 mr-2"></div>
                                <span>Restricted Holiday</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <div className="w-4 h-4 border border-blue-500 mr-2"></div>
                                <span className="text-blue-500">
                                    Weekly Off
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCalendarSection;
