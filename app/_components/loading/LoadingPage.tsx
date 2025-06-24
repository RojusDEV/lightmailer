import React from "react";

const LoadingPage = () => {
    return (
        <div className="animate-pulse" role="status">
            <div className="rounded-xl bg-(--modal-planInfo-bg) p-6">
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-500"></div>
                    </div>
                    <div className="">
                        <ul className="my-6 flex flex-col gap-6">
                            <li className="">
                                <div className="flex justify-between"></div>
                                <div className="relative w-full">
                                    <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-500"></div>
                                    <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-500"></div>
                                </div>
                            </li>

                            <li className="">
                                <div className="">
                                    <div className="flex justify-between">
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="relative w-full">
                                        <div className="mb-2.5 h-2 max-w-[330px] rounded-full bg-gray-200 dark:bg-gray-500"></div>
                                        <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-500"></div>
                                    </div>
                                </div>
                                <div className=""></div>
                            </li>
                            <li className="">
                                <div className="">
                                    <div className="flex justify-between">
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="relative w-full">
                                        <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-500"></div>
                                    </div>
                                </div>
                                <div className=""></div>
                            </li>
                        </ul>
                        <div className="mt-4 flex justify-start gap-1 pt-6 text-nowrap">
                            <span className="text-sm"></span>
                            <span className="text-sm font-bold text-(--text-clr-blue-500)"></span>
                        </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
