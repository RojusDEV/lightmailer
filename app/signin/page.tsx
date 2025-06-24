import Link from "next/link";
import React from "react";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const page = () => {
  return (
    <div className="grid h-screen content-center justify-center bg-[url(/images/loginPageBg.png)] bg-cover bg-center">
      <div className="flex h-[564px] w-[540px] flex-col items-center justify-center rounded-2xl border-2 border-[#3D404F] bg-[#131316]/60 backdrop-blur-lg">
        <span className="text-3xl font-bold">Create an account</span>
        <div className="mt-8 flex gap-4">
          <div className="flex cursor-pointer items-center gap-2 rounded-lg bg-(--bg-socials) px-13 py-4">
            <FcGoogle size={20} />
            <span className="text-lg">Google</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 rounded-lg bg-(--bg-socials) px-13 py-4">
            <FaFacebook size={20} />
            <span className="">Facebook</span>
          </div>
        </div>
        <div className="w-full text-center">
          <div className="relative mt-4 pr-3">
            <span className="font-bold text-(--foreground-low)">Or</span>
          </div>
        </div>
        <form action="" className="grid gap-6 w-full">
          <div className="max-w-[405px] mx-auto w-full">
            <div className="flex flex-col">
              <span>Email</span>
              <input
                type="text"
                className="mt-3 rounded-md autofill:bg-transparent bg-transparent px-4 py-2 outline-1 outline-(--outline-default) invalid:border-pink-500 invalid:text-pink-600 focus:outline-3 focus:outline-(--outline-primary)"
                placeholder="Enter your email"
                name=""
                id="email"
              />
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex justify-between">
                <span>Password</span>
                <span className="text-(--foreground-primary)">Forgot?</span>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                name=""
                id="password"
                className="mt-3 rounded-md bg-transparent px-4 py-2 outline-1 outline-(--outline-default) invalid:border-pink-500 invalid:text-pink-600 focus:outline-3 focus:outline-(--outline-primary)"
              />
            </div>
            <button className="bg-(--container-primary) w-full py-4 rounded-xl font-bold cursor-pointer mt-6">Create account</button>
            <div className="text-center mt-8">
              <span className="text-(--foreground-low)">Already have an account ?</span>
              <button className="ml-2">
                <Link href="/signin" className="text-(--foreground-primary)">Log in</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
