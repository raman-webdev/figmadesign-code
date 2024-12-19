"use client";
import React from "react";
import Image from "next/image";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { FaTree } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="p-16 ml-5">
          <div className="w-[320px] h-10 font-bold text-blue-500 flex items-center justify-center bg-blue-200 border-1 rounded-xl">
            <RiFlightTakeoffFill className="h-7 w-12" />
            <h2>.Explore The Wonderful Indonesia!</h2>
          </div>

          <div className="inline-flex mt-5">
            <p className="font-bold text-5xl ">
              Luburan & nikmati <br />
              <span className="text-blue-500">tempt baru di</span>
              <br /> ndonesia
              <FaTree className="inline align-text-top mt-3 " />
            </p>
          </div>

          <div className="flex items-center mt-8">
            <div className=" bg-blue-400 w-36 h-10 flex items-center justify-center">
              Mulai Sekarang <FaArrowRight className="mt-2" />
            </div>
            <div className=" w-10 h-10 border rounded-full border-blue-600  ml-8 flex items-center justify-center ">
              <FaPlay />
            </div>
            <p className="ml-5 font-semibold text-gray-600">Putra Demo</p>
          </div>
        </div>
        <div>
          <Image
            src="/Assets/heroright.png"
            width={500}
            height={500}
            className="h-96 w-96 ml-auto"
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
