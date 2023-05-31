import React from "react";
// import { Link } from "react-router-dom";
import Rectangle from "../assets/Rectangle.png";
import Frame from "../assets/Frame.png";
import aesthisia from "../assets/aesthisia.png";
import petals from "../assets/petals .png";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
const Loginpage = () => {
  return (
    <div className="flex  flex-row w-11/12   ">
      <div className="relative   w-1/2 mt-[3rem] ml-4  ">
        <img className="   " src={Rectangle}></img>

        <div className="absolute top-[1rem] ml-3">
          <img src={Frame}></img>
        </div>

        <div className="flex flex-col absolute top-[20rem]  ml-4 ">
          <div className="flex flex-row  text-white-25 items-center gap-2 font-mono">
            <h1 className="font-bold text-2xl">100% Uptime</h1>
            <span className="text-2xl text-yellow-5">
              <BsFillEmojiSunglassesFill />
            </span>
          </div>
          <div>
            <p className="text-white-5 font-normal w-[90%] tracking-widest text-[1rem]">
              zero infrastructure Management
            </p>
          </div>
          <div className="mt-6 flex flex-row gap-1">
            <div className="w-4 rounded-full h-1 bg-white-25 "></div>
            <div className="w-1 rounded-full h-1 bg-white-5"></div>
            <div className="w-1 rounded-full h-1 bg-white-5"></div>
          </div>
        </div>
        <div className="absolute top-[31rem] ml-4">
          <img src={aesthisia}></img>
        </div>
      </div>



      <div className="  w-1/2  mt-[7rem] ">
        <div className="relative w-full space-y-2 flex flex-col items-center justify-between mx-auto">
          <div className="w-14">
            <img src={petals}></img>
          </div>
          <div>
            <p className="text-black font-bold text-3xl">
              Welcome <span className="text-white-75">Back!</span>
            </p>
          </div>
          <div>
            <p className="text-white-50">Glad to see you ,Again!</p>
          </div>
          <div>
            <form className="flex flex-col w-full gap-y-4 mt-6  ">
              <input
                required
                type="email"
                placeholder="Enter email address"
                className=" rounded-[0.5rem] text-white-100 border-2 border-white-100 w-[20rem] p-[8px]"
              ></input>
              <div className="w-full relative">
                <input
                  required
                  type="text"
                  placeholder="Enter Password"
                  className=" rounded-[0.5rem] text-white-100 border-2 w-[20rem] p-[8px]"
                ></input>
                <div>
                  <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                    Forgot Password
                  </p>
                </div>
                <div>
                  <button className="bg-black w-[20rem] rounded-[8px] font-medium text-white-25  px-[12px] py-[8px] mt-6">
                    Log In
                  </button>
                </div>
                <div className="mt-10">
                  <p className="text-white-5  text-center"> Don't an account yet? <span className="text-white-75 font-semibold">Sign Up</span></p>
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
