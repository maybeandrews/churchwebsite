import Image from "next/image";
import Link from "next/link";

const ChurchSection = () => {
    return (
        <div className="w-full max-w-7xl mx-auto p-6 border border-gray-200 rounded-lg bg-white shadow-sm my-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                    <div className="mb-4">
                        <div className="h-1 w-16 bg-red-700 mb-4"></div>
                        <h2 className="uppercase text-xl font-bold tracking-wide">
                            EDAPPALLY CHURCH
                        </h2>
                    </div>

                    <div className="mt-6 mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                            St. George Orthodox Cathedral
                        </h1>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Muvattupuzah
                        </h2>

                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                            Asia's largest shrine to Saint George, about five
                            million people visit it every year. The church is
                            thought to have been founded in 593 AD. It is
                            regarded as one of the oldest churches in Kerala,
                            after the seven churches founded by Thomas the
                            Apostle in the first century AD.
                        </p>

                        <div className="mt-8">
                            <Link href="/more-info" passHref>
                                <div className="inline-block bg-red-700 text-white px-8 py-3 font-medium uppercase text-sm tracking-wide cursor-pointer hover:bg-red-800 transition duration-300 rounded-md">
                                    MORE
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative h-64 md:h-96 w-full">
                    <Image
                        src="/saint-george-statue.jpg"
                        alt="Saint George Statue"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChurchSection;
