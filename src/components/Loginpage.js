


import React from "react";
import Rectangle from "../assets/Rectangle.png";
import Frame from "../assets/Frame.png";
import aesthisia from "../assets/aesthisia.png";
import petals from "../assets/petals .png";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { AiOutlineInstagram, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const Loginpage = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row w-11/12 mx-auto">
      <div className="relative w-full md:w-1/2 mt-[4rem] ">
        <img className="" src={Rectangle} alt="Rectangle"></img>

        <div className="absolute top-3 left-3">
          <img src={Frame} alt="Frame"></img>
        </div>

        <div className="flex flex-col absolute top-20 md:top-[22rem] ml-4 ">
          <div className="flex flex-row text-white-25 items-center gap-2 font-mono">
            <h1 className="font-bold text-lg md:text-2xl">100% Uptime</h1>
            <span className="text-2xl text-yellow-500">
              <BsFillEmojiSunglassesFill />
            </span>
          </div>
          <div>
            <p className="text-white-50 font-normal w-11/12 md:w-[90%] tracking-widest text-sm md:text-base">
              Zero infrastructure Management
            </p>
          </div>
          <div className="mt-6 flex flex-row gap-2">
            <div className="w-4 rounded-full h-1 bg-white-25 "></div>
            <div className="w-1 rounded-full h-1 bg-white-50"></div>
            <div className="w-1 rounded-full h-1 bg-white-50"></div>
          </div>
        </div>
        <div className="absolute flex justify-between w-11/12 md:w-90 top-[15rem] md:top-[31rem] ml-4">
          <div>
            <img src={aesthisia} alt="Aesthisia"></img>
          </div>

          <div className="text-2xl text-white-25 flex flex-row ">
            <AiOutlineInstagram />
            <AiFillLinkedin />
            <AiFillFacebook />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-7 md:mt-[5rem] md:ml-5">
        <div className="relative w-full space-y-2 flex flex-col items-center justify-between mx-auto">
          <div className="w-14">
            <img src={petals} alt="Petals"></img>
          </div>
          <div>
            <p className="text-black font-bold text-3xl">
              Welcome <span className="text-white-75">Back!</span>
            </p>
          </div>
          <div>
            <p className="text-white-50">Glad to see you again!</p>
          </div>
          <div>
            <form className="flex flex-col w-full gap-y-4 mt-6">
              <input
                required
                type="email"
                placeholder="Enter email address"
                className="rounded-0.5rem text-white-100 border-2 border-white-100 w-80 md:w-96 p-2"
              ></input>
              <div className="w-full relative">
                <input
                  required
                  type="text"
                  placeholder="Enter Password"
                  className="rounded-0.5rem text-white-100 border-2 w-80 md:w-96 p-2"
                ></input>
                <div>
                  <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                    Forgot Password
                  </p>
                </div>
                <div>
                  <button className="bg-black w-80 md:w-96 rounded-8px font-medium text-white-25 px-3 py-2 mt-6">
                    Log In
                  </button>
                </div>
                <div className="mt-10">
                  <p className="text-white-500 text-center">
                    Don't have an account yet?{" "}
                    <span className="text-white-75 font-semibold">Sign Up</span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
