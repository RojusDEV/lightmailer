"use client";
import LoadingPage from "@/app/_components/loading/LoadingPage";
import getLimits from "@/app/api/getLimits";
import { LimitData } from "@/app/types/getLimitsTypes";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

const PlanInformation = () => {
    // Initialize state based on localStorage, default to false
    const [closed, setClosed] = useState(false);

    //Reference: to dom element progress bar

    const ref = useRef(null);

    const { data, isLoading, isError } = useQuery<LimitData | null, Error>({
        queryFn: getLimits,
        queryKey: ["limits"],
    });

    useEffect(() => {
        const state = localStorage.getItem("PlanModalState");
        setClosed(state == "true");
    }, []);

    const handleCloseModal = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault();
        localStorage.setItem("PlanModalState", closed.toString());
        setClosed(true);
    };

    if (closed) {
        return <span></span>;
    }

    if (isLoading) return <LoadingPage />;
    if (isError || !data) return <div>Error loading data</div>;

    return (
        <div className="rounded-xl bg-(--modal-planInfo-bg) p-6">
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <span>Your Plan</span>
                    <button
                        aria-label="close button"
                        onClick={handleCloseModal}
                    >
                        <IoClose size={16} />
                    </button>
                </div>
                <div className="">
                    <ul className="my-6 flex flex-col gap-6">
                        <li className="">
                            <div className="flex justify-between">
                                <span>Emails sent</span>
                                <span>{data?.emails} of 100</span>
                            </div>
                            <div className="relative w-full">
                                <div
                                    className="absolute z-1 h-1 w-[50%] bg-[#4263EB]"
                                    ref={ref}
                                ></div>
                                <div className="absolute z-0 h-1 w-[100%] bg-[#F1F3F5]"></div>
                            </div>
                        </li>

                        <li className="">
                            <div className="">
                                <div className="flex justify-between">
                                    <span>SMS sent</span>
                                    <span>{data?.sms} of 50</span>
                                </div>
                                <div className="relative w-full">
                                    <div
                                        className="absolute z-1 h-1 w-[50%] bg-[#4263EB]"
                                        ref={ref}
                                    ></div>
                                    <div className="absolute z-0 h-1 w-[100%] bg-[#F1F3F5]"></div>
                                </div>
                            </div>
                            <div className=""></div>
                        </li>
                        <li className="">
                            <div className="">
                                <div className="flex justify-between">
                                    <span>Daily requests</span>
                                    <span>{data?.dailyRequests} of 100</span>
                                </div>
                                <div className="relative w-full">
                                    <div
                                        className="absolute z-1 h-1 w-[50%] bg-[#4263EB]"
                                        ref={ref}
                                    ></div>
                                    <div className="absolute z-0 h-1 w-[100%] bg-[#F1F3F5]"></div>
                                </div>
                            </div>
                            <div className=""></div>
                        </li>
                    </ul>
                    <div className="mt-4 flex justify-start gap-1 pt-6 text-nowrap">
                        <span className="text-sm">Want more?</span>
                        <span className="text-sm font-bold text-(--text-clr-blue-500)">
                            Make an upgrade
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanInformation;
