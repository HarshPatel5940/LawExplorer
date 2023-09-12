import React from "react"
import Link from "next/link"
import logo from "../public/logo_white.svg"
import Image from "next/image"
const Chat = () => {
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
      <div className="min-h-[70vh] h-auto bg-[#000113] w-full flex flex-col">
        <div className="flex flex-col">
          <div className="flex justify-center items-start w-full pt-10 h-full">
            <form action="">
              <div className="flex items-center justify-center bg-black p-2 rounded-md">
                <textarea
                  className="appearance-none bg-[#200D38]  border-b-2 border-white w-[60vw] py-3 px-5  rounded-md text-white leading-tight focus:outline-none focus:border-[#8233A8]"
                  placeholder="Enter your prompt here..."
                ></textarea>
                <button className="bg-[#8233A8]  focus:bg-[#6b288a] active:bg-[#4c1b63] text-white px-4 py-2 rounded-md ml-2 cursor-pointer">
                  {">"}
                </button>
              </div>
            </form>
          </div>
          <div className="w-full h-auto flex items-center justify-center ">
            <div className="flex items-center justify-normal text-white pt-16 max-w-7xl px-10 sm:px-10">
              hello hello hello hello hello hello hello hello hello hello hello
              hello hello hello hello hello hello hello hello hello hello hello
              hello hello hello hello hello hello hello hello hello hello hello
              hello hello hello hello hello hello hello hello hello hello hello
              hello hello hello hello hello hello hello hello hello hello hello
              hello hello hello hello hello hello hello hello hello hello hello
              hello hello hello hello hello hello hello hello hello
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
