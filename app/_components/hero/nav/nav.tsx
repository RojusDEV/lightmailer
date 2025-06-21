import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto py-5">
        <div className=" flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={50}
            height={50}
            className="w-10 h-10"
          />
          <span className="font-bold tracking-widest">LightMail</span>
        </div>
        <div className="flex gap-[74px] items-center">
          <ul className="flex gap-[39px]">
            <li>
              <button>About </button>
            </li>
            <li>
              <button>Pricing</button>
            </li>
            <li>
              <button>Careers</button>
            </li>
          </ul>
          <ul className="flex gap-[40px]">
            <li>
              <button>
                <Link href={"/signin"}>Sign In</Link>
              </button>
            </li>
            <li>
              <button className="text-yellowish-500">Request Demo</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
