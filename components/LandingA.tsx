import React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo_white.svg"
import { Typewriter } from "react-simple-typewriter"
const LandingA = () => {
  return (
    <div className=" w-full h-screen  bg-gradient-to-r from-[#8233A8] to-[#000000]">
      <div className="grid w-full h-screen grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 grid-rows-2 sm:grid-rows-2 lg:grid-rows-1">
        {/* Column 1 */}
        <div className="w-full h-screen">
          <div className="h-15% items-center gap-4 pt-3 pl-5 flex justify-start">
            <Image src={logo} alt="logo" />
            <p className="font-bold text-xl text-white">lawExplorer</p>
          </div>
          <div className="h-[85%] flex flex-col text-xl sm:text-xl lg:text-5xl pl-10 bold text-white font-bold font-mono pt-[50%] sm:pt-[50%] lg:pt-[30%] justify-start items-start">
            <div>{`Tell me about `}</div>
            <div className="text-xl sm:text-xl lg:text-5xl ">
              <Typewriter
                words={[
                  "my rights which I have",
                  "Indian law and my powers",
                  "ruling government and it's powers ",
                  "constitution of India and it's sections",
                ]}
                loop={100}
                cursor
                cursorStyle="_"
                typeSpeed={30}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="">
          <div className="h-[85%] w-full flex flex-col items-center justify-center text-xl sm:text-xl lg:text-4xl font-bold text-white">
            Get started
            <div className="flex gap-10 pt-10">
              <Link href="/login">
                <button
                  className="bg-[#632282] duration-200 hover:bg-[#8233A8]  text-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-40"
                  type="submit"
                >
                  Sign In
                </button>
              </Link>
              <Link href="/signup">
                <button
                  className="border-[#632282] duration-200 border-solid border-2 hover:bg-[#8233A8] text-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-40"
                  type="submit"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
          <div className="h-[15%] w-full flex flex-col text-sm text-white items-center justify-end pb-10">
            <div className="flex justify-center items-center gap-2 pb-2 ">
              <Image src={logo} className="h-10" alt="logo" />
              <p className="font-bold text-xl text-white">lawExplorer</p>
            </div>
            <div className="pl-5">Terms of use | Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingA
