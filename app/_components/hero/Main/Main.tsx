import React from "react";
import Nav from "../nav/nav";
import Layout from "../layout/layout";
import HeroButton from "../../buttons/hero-button";
import Image from "next/image";

function Main() {
  return (
    <Layout>
      <div className="h-full">
        <Nav />
        <div className="flex flex-col justify-center align-center text-center mt-[126px]">
          <span className="text-7xl tracking-wider"> The Email Engine</span>
          <span className="text-7xl">for Web3 Growth</span>
          <p className="text-xl mt-6 text-wrap">
            Lightweight email marketing built for speed and simplicity. <br />
            Create, send, and grow—without the clutter
          </p>
          <div className="mt-14">
            <HeroButton>Sign up for demo</HeroButton>
          </div>
          <div className="">
            <div className="h-[286px] w-[286px] bg-red rounded-full absolute top-0 left-0"></div>
            <div className=""></div>
          </div>
          <div className="flex justify-center mt-9 mb-16">
            <Image
            className="z-2"
              alt="test"
              src="/images/hero-showcase.png"
              height={431}
              width={806}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Main;
