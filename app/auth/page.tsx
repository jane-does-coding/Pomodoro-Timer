"use client";
import Image from "next/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="flex h-screen p-0">
      <div className=" flex w-full max-w-[30vw] h-screen">
        <img
          src="/auth-banner.jpg"
          alt=""
          className="h-screen object-cover w-full"
        />
      </div>
      <div className=" flex align-center justify-center w-full h-screen">
        {/* Auth box */}
        <div
          className={`bg-slate-200/20 border-slate-200 p-4  border-[1px] w-fit h-fit rounded-lg  ${
            isSignup ? "w-[40vw]" : "w-[35vw]"
          } my-auto flex flex-col gap-2`}
        >
          <h1 className="mx-auto my-2 mb-4 text-2xl flex align-center justify-center gap-2">
            {isSignup ? "Welcome" : "Login"} to{" "}
            <span className="text-rose-500">Dribbble</span>
          </h1>
          <div className="flex flex-col gap-y-4 my-2">
            <input
              type="email"
              placeholder="email"
              className="p-4 py-2 text-lg rounded-md border-slate-200 border-[1px] focus:border-slate-500 focus:outline-none"
            />
            {isSignup && (
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="name"
                  className="p-4 py-2 w-full text-lg rounded-md border-slate-200 border-[1px] focus:border-slate-500 focus:outline-none"
                />
                <input
                  type="username"
                  placeholder="username"
                  className="p-4 py-2 w-full text-lg rounded-md border-slate-200 border-[1px] focus:border-slate-500 focus:outline-none"
                />
              </div>
            )}
            <input
              type="password"
              placeholder="password"
              className="p-4 py-2 text-lg rounded-md border-slate-200 border-[1px] focus:border-slate-500 focus:outline-none"
            />
          </div>
          <button className="bg-rose-500 hover:bg-rose-400 transition mt-4 text-white p-4 rounded-full">
            {isSignup ? "Signup" : "Login"}
          </button>
          {/* ----- OR ------ */}
          <div className="flex justify-between gap-4 w-full my-4 items-center">
            <div className="bg-slate-200 w-full h-[2px]"></div>
            <p className="text-slate-400">OR</p>
            <div className="bg-slate-200 w-full h-[2px]"></div>
          </div>
          <div className="flex gap-4">
            <button className="w-full gap-2 border-slate-300 border-[1px] rounded-full bg-slate-100 text-center flex hover:bg-slate-100/50 transition py-4 items-center justify-center">
              <FcGoogle size={28} /> Google
            </button>
            <button className="w-full gap-2 border-slate-300 border-[1px] rounded-full bg-slate-100 text-center flex hover:bg-slate-100/50 transition py-4 items-center justify-center">
              <FaGithub size={28} /> Github
            </button>
          </div>
          <div className="flex gap-2 text-slate-600 mt-4 mb-2 text-center items-center justify-center">
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <span
              className="cursor-pointer text-rose-500"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Login" : "Signup"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default auth;
