"use client";
import Image from "next/image";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import img from "@/public/avatars/Avatar.png";
const Navigation = () => {
    return (
        <nav className="">
            <div className="py-6 px-8">
                <div className="flex items-center justify-between">
                    <div className="">
                        <span>Welcome, </span>
                        <span>Marc</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <form action="" className="max-w-[16.875em]">
                            <div className="flex items-center gap-3 rounded-xl bg-(--input-bg-gray) px-4 py-3">
                                <IoIosSearch className="cursor-pointer" />
                                <input
                                    type="text"
                                    placeholder="Search here"
                                    alt="search"
                                    aria-label="search"
                                    className="outline-none"
                                />
                            </div>
                        </form>
                        <div className="flex gap-4">
                            <div className="">
                                <button>
                                    <Image
                                        src={"icons/widgets/notifications.svg"}
                                        alt="notifications"
                                        width={24}
                                        height={24}
                                    />
                                </button>
                            </div>
                            <div className="">
                                <button>
                                    <Image
                                        src={"icons/widgets/darkMode.svg"}
                                        alt="Darkmode"
                                        width={24}
                                        height={24}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Image
                                src={img}
                                alt="notifications"
                                width={40}
                                height={40}
                            />
                            <div className="flex flex-col">
                                <span>Marc Jacob</span>
                                <span>marco@goodmail.io</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
