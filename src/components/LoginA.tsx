import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../assets/logo_white.svg";
import Image from "next/image";

const LoginAComponent = () => {
    const [otpVisible, setOtpVisible] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    // Function to toggle OTP visibility
    const toggleOtpVisibility = () => {
        setOtpVisible(!otpVisible);
    };

    // Function to disable the button and re-enable it after 1 minute
    const disableSendButtonForOneMinute = () => {
        setIsButtonDisabled(true);
        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 60000); // 1 minute = 60,000 milliseconds
    };

    useEffect(() => {
        setIsButtonDisabled(true);

        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 15000);
    }, []);
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
                    <div className="bg-[#000113] rounded-lg p-8 max-w-sm w-full">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Sign In
                        </h2>
                        <div className="mb-4">
                            <label className="block text-white font-bold mb-2">
                                Phone Number
                            </label>
                            <input
                                className="appearance-none bg-transparent border-b-2 border-white w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-[#8233A8]"
                                id="phone"
                                type="text"
                                placeholder="Enter your Phone Number"
                            />
                        </div>
                        <button
                            className={`bg-[#632282] hover:bg-[#8233A8] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-6`}
                            onClick={() => {
                                toggleOtpVisibility();
                                disableSendButtonForOneMinute();
                            }}
                            disabled={isButtonDisabled}
                        >
                            Send OTP
                        </button>
                        <div
                            className={`mb-6 ${
                                otpVisible ? "block" : "hidden"
                            }`}
                        >
                            <label className="block text-white font-bold mb-2">
                                OTP
                            </label>
                            <input
                                className="appearance-none bg-transparent border-b-2 border-white w-full py-2 px-3 text-white leading-tight focus:outline-none focus:border-[#8233A8]"
                                id="OTP"
                                type="text"
                                placeholder="Enter OTP"
                            />
                            <Link href="/chat">
                                <button
                                    className="bg-[#632282] hover:bg-[#8233A8] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
                                    type="submit"
                                >
                                    Sign In
                                </button>
                            </Link>
                        </div>

                        <p className="text-white text-center mt-10">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Don't have an account?
                            <Link
                                className="text-purple-500 underline"
                                href="/signup"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginAComponent;
