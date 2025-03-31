import Image from "next/image";
import Link from "next/link";

const ChurchSection = () => {
    return (
        <div className="w-full max-w-7xl mx-auto p-6 border border-gray-200 rounded-lg bg-white shadow-sm my-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                    {/* Replace horizontal line with vertical line */}
                    <div className="flex items-center mb-4">
                        <div className="w-1.5 h-10 bg-red-600 mr-4"></div>
                        <h2 className="uppercase text-xl font-bold tracking-wide">
                            ORTHODOX CHURCH

                        </h2>
                    </div>

                    <div className="mt-6 mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                            St. Thomas Orthodox Cathedral
                        </h1>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Muvattupuzha
                        </h2>

                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                            Asia's largest shrine to Saint Thomas, about five
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
                        src="/stthomasstatue.jpeg"
                        alt="Saint Thomas Statue"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChurchSection;
