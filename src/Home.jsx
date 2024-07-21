import React from "react";

import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pics from '../public/pic.jpg';
import { RiTailwindCssLine } from "react-icons/ri";
function Home() {
    return (
        <>
      <div name="home" className="max-w-screen-xl container mx-auto px-4 md:px-20 my-12 md:my-20">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2  md:mt-24 order-2 md:order-1">
                        <span className="block md:whitespace-normal whitespace-nowrap font-semibold">
                            {/* Full message for desktop */}
                            <span className="hidden md:inline">
                                Welcome to my creative beginnings!
                            </span>
                            {/* Short message for medium screens */}
                            <span className="inline md:hidden">
                                Welcome to my creative beginnings!
                            </span>
                        </span>
                        <div className="flex space-x-1 text-2xl font-bold md:text-4xl">
                            <h1>
                                Hello, I'm a
                            </h1>
                            <ReactTyped
                                className="text-red-700"
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <p className="text-sm md:text-md text-justify mt-4">
                            Welcome to my digital playground, where I’m learning to merge Android development with web design. As someone just starting out, I’m exploring how to create smooth user experiences and engaging digital solutions. Take a look at my early projects to see how I’m growing and experimenting with every line of code.
                        </p>
                        <br/>
                        {/* social media icon */}
                        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left space-y-4 md:space-y-0">
                            <div className="flex-1">
                                <h1 className="space-y-2 font-bold">
                                    Available On
                                </h1>
                                <ul className="flex justify-center md:justify-start space-x-5 mt-1">
                                    <li>
                                        <a href="https://www.linkedin.com/in/ammara-rana-9b29ba212/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="text-2xl cursor-pointer" /></a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/AmmaraRana" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="text-2xl cursor-pointer"/></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <h1 className="space-y-2 font-bold">
                                    Currently Working On
                                </h1>
                                <div className="flex justify-center md:justify-start space-x-2 mt-1">
                                    <IoLogoAndroid className="text-lg md:text-2xl hover:scale-110 duration-200 rounded-full border-2"/>
                                    <FaReact className="text-xl md:text-xl hover:scale-110 duration-200 rounded-full border-2"/>
                                    <SiMongodb className="text-xl md:text-xl hover:scale-110 duration-200 rounded-full border-2"/>
                                    <FaNodeJs className="text-xl md:text-xl hover:scale-110 duration-200 rounded-full border-2"/>
                                    <FaGitSquare className="text-xl md:text-xl hover:scale-110 duration-200 rounded-full border-2"/>
                                    <RiTailwindCssLine className="text-xl md:text-xl hover:scale-110 duration-200 rounded-full border-2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:ml-24 md:mt-12 order-1 flex justify-center md:justify-start items-center">
    <img
        src={pics}
        alt="profile"
        className="rounded-full md:w-[450px] md:h-[400px] w-32 h-32"
    />
</div>
                </div>
            </div>
            
            <hr/>
        </>
    );
}

export default Home;
