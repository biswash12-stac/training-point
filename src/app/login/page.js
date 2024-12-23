import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import { HomeIcon } from "@/assets/shop-page-images";
import { ArrowDownIcon } from "@/assets/icons";
import { rightArrow } from "@/assets/images";

const page = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* for top banner */}
        <div className=" flex gap-3 mt-6">
          <Image src={HomeIcon} alt="Home icon" className="cursor-pointer" />
          <Image
            src={ArrowDownIcon}
            alt="arrow down"
            className="-rotate-90 cursor-pointer"
          />
          <span className="text-Body-Medium font-400 text-Gray-6 cursor-pointer">
            Account
          </span>
          <Image
            src={ArrowDownIcon}
            alt="arrow down"
            className="-rotate-90 cursor-pointer"
          />
          <span className="text-primary text-Body-Medium font-400 cursor-pointer">
            Login
          </span>
        </div>

        <div className="w-[520px] h-[371px] bg-white border border-[#F2F2F2] shadow-lg mt-[80px] ml-[33%] ">
          <h1 className="text-center text-Heading-05 font-600 text-Gray-9 p-[24px]">
            Sign In
          </h1>
          <div className="ml-[24px] ">
            <input
              className="w-[472px]  p-5 border border-[#E6E6E6] rounded-[6px] h-[49px]"
              type="text"
              name="email"
              placeholder="Email"
            />
            <input
              className="w-[472px] p-5 border border-[#E6E6E6] rounded-[6px] h-[49px] mt-3"
              type="text"
              name="password"
              placeholder="Password"
            />
          </div>
          {/* for forget password and remember */}
          <div className=" ml-[24px] mt-[16px] flex items-center gap-2  ">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] rounded-[3px] bg-gray-200 cursor-pointer"
            />
            <div className=" flex items-center justify-between ">
              <p className="text-Body-Small font-400 text-Gray-6">
                Remember me
              </p>
              <p className="text-Body-Small font-400 text-Gray-6  ml-56 ">
                Forget Password
              </p>
            </div>
          </div>
          <button className="w-[472px] h-[45px] ml-[24px] rounded-[32px] mt-5  items-center bg-primary text-white text-Body-Small font-600">
            Login
          </button>
          <p className="text-center text-Body-Small font-400 text-Gray-6 mt-6">
            Don’t have account?
            <span className="text-Body-Small font-500 text-Gray-9">
              <a href="register">Register</a>
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
