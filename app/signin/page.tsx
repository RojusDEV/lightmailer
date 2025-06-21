import Link from "next/link";
import React from "react";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const page = () => {
  return (
    <div className="grid justify-center content-center h-screen bg-[url(/images/loginPageBg.png)] bg-cover bg-center">
      <div className="w-[540px] h-[564px] backdrop-blur-lg bg-[#131316]/60 border-2 border-[#3D404F] rounded-2xl flex flex-col justify-center items-center">
        <span className="text-3xl font-bold">Create an account</span>
        <div className="flex gap-4">
          <div className="bg-(--bg-socials) flex">
            <FcGoogle />
            <span>Google</span>
          </div>
          <div className="bg-(--bg-socials) flex">
            <FaFacebook />
            <span>Facebook</span>
          </div>
        </div>
        <span>or</span>
        <form action="">
          <div className="">
            <span>Email</span>
            <input type="text" placeholder="Enter your email" name="" id="" />
          </div>
          <div className="">
            <div className="">
              <span>Password</span>
              <span>Forgot?</span>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              name=""
              id=""
            />
          </div>
          <button>Create account</button>
          <div className="">
            <span>Already have an account ?</span>
            <button>
              <Link href="/signin">Log in</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
