"use client";

const NewsCalendarSection = () => {
    return (
        <div className="w-full max-w-7xl mx-auto p-6 border border-gray-200 rounded-lg bg-white shadow-sm my-8">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                {/* Latest News Section */}
                <div className="w-full lg:w-1/2">
                    <div className="mb-6">
                        <div className="flex items-center mb-4">
                            <div className="w-1.5 h-20 bg-red-600 mr-4"></div>
                            <h2 className="uppercase text-2xl font-bold tracking-wide">
                                ANNOUNCEMENTS
                            </h2>
                        </div>
                    </div>

                    {/* First Announcement */}
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
                    </div>

                    {/* Second Announcement */}
                    <div className="mt-4 mb-8 border-t pt-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Easter Mass Schedule
                        </h3>

                        <p className="text-gray-700 leading-relaxed">
                            Join us for Easter celebrations at St. George Forane
                            Church. Good Friday service starts at 9:00 AM on
                            April 18th. Easter Vigil will be held on Saturday,
                            April 19th at 8:00 PM. Easter Sunday Mass will be
                            celebrated at 7:00 AM, 9:30 AM, and 11:00 AM. All
                            parishioners and visitors are welcome to attend.
                            Experience the joy of the Resurrection with our
                            community. May this holy season bring you peace and
                            blessings.
                        </p>
                    </div>
                </div>

                {/* Google Calendar Embed Section */}
                <div className="w-full lg:w-1/2 bg-gray-100 rounded-lg p-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                        Calendar
                    </h2>
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&showPrint=0&src=a3Jpc2huYWFzd2luNDkwQGdtYWlsLmNvbQ&src=Y2NmNWIzMDljYzFmYTJjMDVjYzY0ZGYzMTk0NDgxNTE0Yzg0MzkzOWNiNzIwMDg4NTQ1ODdjMmYzMzA5ZDU4ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTE1MDAyOTM0Njk5NzcxMjAyMzA4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2IuaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb21mZTcxMGNiZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAzMDA4NDk1MDk0MDQ1NzA0ODg2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTA3MzcxMTUyOTU4MDYwNzMyMzM2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y2xhc3Nyb29tMTAxMTM4NzMyNzUyOTYzOTc4NDE4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23AD1457&color=%230047a8&color=%230B8043&color=%230B8043&color=%23c26401&color=%23007b83&color=%23202124&color=%230047a8"
                            style={{ border: "solid 1px #777" }}
                            width="100%"
                            height="600"
                            frameBorder="0"
                            scrolling="no"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCalendarSection;
