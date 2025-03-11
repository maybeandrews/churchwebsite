import React from "react";
import { X } from "lucide-react";
import { SheetContent, SheetTitle } from "./ui/sheet";

interface DetailedMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const DetailedMenu = ({ isOpen, onClose }: DetailedMenuProps) => {
    return (
        <SheetContent side="left" className="w-full sm:w-[540px] p-0">
            <SheetTitle>Menu</SheetTitle>
            <div
                className={`fixed inset-0 bg-white z-50 overflow-y-auto p-6 ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Detailed Menu</h1>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="space-y-8">
                    {/* The Holy See Section */}
                    <div>
                        <div className="flex items-center border-b pb-2 mb-4">
                            <div className="w-8 h-8 mr-2 text-red-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <rect x="6" y="3" width="12" height="18" />
                                    <line x1="12" y1="3" x2="12" y2="21" />
                                    <path d="M6 8h12" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-medium text-red-500">
                                The Holy See
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        H
                                    </span>
                                    <span className="text-gray-600">
                                        oly Father (Pope)
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        D
                                    </span>
                                    <span className="text-gray-600">
                                        icastery for the Eastern Churches
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        A
                                    </span>
                                    <span className="text-gray-600">
                                        postolic Nunciature
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Major Archbishop Section */}
                    <div>
                        <div className="flex items-center border-b pb-2 mb-4">
                            <div className="w-8 h-8 mr-2 text-red-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 2v5m0 15v-5m10-5h-5m-15 0h5M4.9 4.9l3.5 3.5m7.2 7.2l3.5 3.5m0-14.2l-3.5 3.5M8.4 15.6l-3.5 3.5" />
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-medium text-red-500">
                                Major Archbishop
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        P
                                    </span>
                                    <span className="text-gray-600">
                                        resent Major Archbishop
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        F
                                    </span>
                                    <span className="text-gray-600">
                                        ormer Major Archbishops
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Syro-Malabar Synod Section */}
                    <div>
                        <div className="flex items-center border-b pb-2 mb-4">
                            <div className="w-8 h-8 mr-2 text-red-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 2v5m0 15v-5m10-5h-5m-15 0h5M4.9 4.9l3.5 3.5m7.2 7.2l3.5 3.5m0-14.2l-3.5 3.5M8.4 15.6l-3.5 3.5" />
                                    <circle cx="12" cy="12" r="4" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-medium text-red-500">
                                Syro-Malabar Synod
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        S
                                    </span>
                                    <span className="text-gray-600">
                                        ynod of Bishops
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        T
                                    </span>
                                    <span className="text-gray-600">
                                        ribunals
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        O
                                    </span>
                                    <span className="text-gray-600">
                                        bituary
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        P
                                    </span>
                                    <span className="text-gray-600">
                                        ermanent Synod
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        S
                                    </span>
                                    <span className="text-gray-600">
                                        ynodal News
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Syro-malabar CHURCH Section */}
                    <div>
                        <div className="flex items-center border-b pb-2 mb-4">
                            <div className="w-8 h-8 mr-2 text-red-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M12 3L2 12h3v8h14v-8h3L12 3z" />
                                    <line x1="12" y1="12" x2="12" y2="21" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-medium text-red-500">
                                Syro-malabar CHURCH
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        B
                                    </span>
                                    <span className="text-gray-600">
                                        rief History
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        S
                                    </span>
                                    <span className="text-gray-600">
                                        yro-malabar church at a Glance
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        P
                                    </span>
                                    <span className="text-gray-600">
                                        rocurator of the Major Archbishop, Rome
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        E
                                    </span>
                                    <span className="text-gray-600">
                                        parchies
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        I
                                    </span>
                                    <span className="text-gray-600">
                                        nstitutes for Men
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        M
                                    </span>
                                    <span className="text-gray-600">
                                        ajor Seminaries
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        T
                                    </span>
                                    <span className="text-gray-600">
                                        he Prelates of Syro-Malabar Church
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        B
                                    </span>
                                    <span className="text-gray-600">
                                        ishops from Syro-Malabar Church in Latin
                                        Dioceses
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        P
                                    </span>
                                    <span className="text-gray-600">
                                        ostular General
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        S
                                    </span>
                                    <span className="text-gray-600">
                                        t. Thomas the Apostle
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        C
                                    </span>
                                    <span className="text-gray-600">
                                        hronology
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        A
                                    </span>
                                    <span className="text-gray-600">
                                        postolic visitation
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        M
                                    </span>
                                    <span className="text-gray-600">
                                        ajor Archiepiscopal Pilgrim Churches
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        I
                                    </span>
                                    <span className="text-gray-600">
                                        nstitutes for Women
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        A
                                    </span>
                                    <span className="text-gray-600">
                                        postolic Nuncios from Syro Malabar
                                        church
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        S
                                    </span>
                                    <span className="text-gray-600">
                                        yro-Malabar Faithful around the Globe
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        PRO
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* THE SM CURIA */}
                    <div>
                        <div className="flex items-center border-b pb-2 mb-4">
                            <div className="w-8 h-8 mr-2 text-red-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-medium text-red-500">
                                THE SM CURIA
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        C
                                    </span>
                                    <span className="text-gray-600">
                                        uria Bishop
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        F
                                    </span>
                                    <span className="text-gray-600">
                                        inance Office
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        M
                                    </span>
                                    <span className="text-gray-600">
                                        ount Community
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        C
                                    </span>
                                    <span className="text-gray-600">
                                        hancery
                                    </span>
                                </div>
                                <div className="mb-2">
                                    <span className="text-red-500 font-medium">
                                        O
                                    </span>
                                    <span className="text-gray-600">
                                        rdinary Tribunal
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SheetContent>
    );
};

export default DetailedMenu;
