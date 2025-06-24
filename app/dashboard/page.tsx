import React from "react";
import Navigation from "./components/Aside/Nav/Navigation";
import Aside from "./components/Aside/Aside";

const page = () => {
    return (
        <div className="grid min-h-screen min-w-screen grid-cols-[min(312px,_20%)_auto] bg-white text-black">
            <Aside />
            <main className="">
                <Navigation/>
            </main>
        </div>
    );
};

export default page;
