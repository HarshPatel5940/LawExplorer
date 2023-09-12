import React, { useState } from "react";
import Link from "next/link";
import logo from "../assets/logo_white.svg";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { promptOpenAI } from "@/utils/rest";
const Chat = () => {
    const [response, setResponse] = useState("");
    const [prompt, setPrompt] = useState({
        data: "",
    });
    async function handleClick(event: any) {
        try {
            event.preventDefault();
            const result = await promptOpenAI(prompt.data);
            const data = await result;
            console.log(data);

            setResponse(data.data);
            setPrompt({
                data: "",
            });
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (e: any) => {
        e.preventDefault();
        const { name, value } = e.target;

        setPrompt((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
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
                                    onChange={handleChange}
                                    name="data"
                                    value={prompt.data}
                                ></textarea>
                                <button
                                    onClick={handleClick}
                                    type="submit"
                                    className="bg-[#8233A8]  focus:bg-[#6b288a] active:bg-[#4c1b63] text-white px-4 py-2 rounded-md ml-2 cursor-pointer"
                                >
                                    {">"}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full h-auto flex items-center justify-center ">
                        <div className="flex items-center justify-normal text-white pt-16 max-w-7xl px-10 sm:px-10">
                            {response}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;
