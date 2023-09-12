import React from "react"
import Link from "next/link"
import logo from "../public/logo_white.svg"
import Image from "next/image"
const LoginAComponent = () => {
  return (
    <>
      <div className="h-screen max-h-[30vh] bg-gradient-to-b from-[#8233A8] to-[#000113]">
        <div className="flex flex-row items-center justify-center w-screen h-screen max-h-[27vh] ">
          <Image src={logo} alt="" className="pr-2" />
          <div className="flex flex-col pl-2 text-white">
            <div className="font-bold text-2xl">lawExplorer</div>
            <div>Personal Law Assistant</div>
          </div>
        </div>
      </div>
      <div className="h-[70vh] bg-[#000113]">
        <div className="flex justify-center items-center h-full">
          <form className="bg-[#000113] rounded-lg p-8 max-w-sm w-full">
            <h2 className="text-2xl font-bold text-white mb-6">Sign Up</h2>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2">Name</label>
              <input
                className="appearance-none bg-transparent border-b-2 border-white w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-[#8233A8]"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2">E-mail</label>
              <input
                className="appearance-none bg-transparent border-b-2 border-white w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-[#8233A8]"
                id="email"
                type="text"
                placeholder="Enter your E-mail"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white font-bold mb-2">
                Password
              </label>
              <input
                className="appearance-none bg-transparent border-b-2 border-white w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-[#8233A8]"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <Link href="/">
              <button
                className="bg-[#632282] hover:bg-[#8233A8] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Sign Up
              </button>
            </Link>

            <p className="text-white text-center mt-10">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Already have an account?
              <Link className="text-purple-500 underline" href="/login">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginAComponent
