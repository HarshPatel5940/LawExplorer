import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo_white.svg";

const Landing = () => {
    return (
        <div className="grid w-full h-screen grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 grid-rows-2 sm:grid-rows-2 lg:grid-rows-1">
            {/* Column 1 */}
            <div className="w-full bg-[#581b74] h-screen">
                <div className="h-10% items-center flex justify-start">
                    <Image src={logo} alt="logo" />
                    <p className="font-bold text-lg">lawExplorer</p>
                </div>
                <div></div>
            </div>
            {/* Column 2 */}
            <div className="w-full bg-[#000113] h-screen flex justify-end">
                a
            </div>
        </div>
    );
};

export default Landing;
