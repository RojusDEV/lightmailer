import React from "react";
import Image from "next/image";

const footer = () => {
  return (
    <div>
      <div className="">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-20 h-20"
        />
        <div className="flex justify-between items-center">
          <ul>
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
          <ul>
            <li>
              <button>Sign In</button>
            </li>
            <li>
              <button>Request Demo</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default footer;
