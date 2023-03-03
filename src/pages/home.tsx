/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import Header from "./header";
import { Typewriter } from 'react-simple-typewriter'
import { url } from "inspector";

export default function Home() {

    return (
        <div className="flex flex-col bg-no-repeat" >
            <div id="home" className="relative flex flex-row justify-between pl-6 lg:pl-[100px] ">
                {/* eslint-disable-next-line */}

                <img className="absolute top-0 left-0 w-full h-full -z-29" src="/img/6.jpg" alt="" />
                <Header />
                <div className="container mx-auto flex z-0 md:flex-row flex-col">
                    <div className="md:w-[calc(100%-360px)] w-full lg:w-[calc(100%-500px)] my-[300px]">
                        <p className="text-[16px] text-white-100 mb-2 font-bold">WELCOME TO MY WEBSITE</p>
                        <p className="text-[45px] text-white-100 font-black">
                            Hi,This is <span className="text-[#50BEC2]">Frank Till</span>
                            <br />
                            <Typewriter
                                words={['Frontend developer', 'Backend developer', 'Blockchain developer', 'Web3 developer']}
                                cursor
                                loop={100}
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </p>
                        <p className="text-[16px] mt-2 text-white-100 font-thin max-w-[600px]">I am a Full-stack developer from Lousiana, with a strong focus in UI/UX design. I love to get new experiences and always learn from my surroundings.I looking forward to any opportunities and challenges.</p>
                    </div>
                    <div className="w-[360px] lg:w-[480px] flex items-end">
                        <img src="/img/1.png" className="-z-10" alt="" />
                    </div>
                </div>

            </div>
            <div id="aboutme" className="flex flex-row bg-[#212529]">
                <div className="container mx-auto flex mt-[60px] lg:flex-row items-center flex-col">
                    <img className="w-1/2 z-10" src="/img/4.png" alt="" />
                    <div className="flex flex-col mb-10">
                        <p className="text-[40px] text-white font-bold mb-5">About Me</p>
                        <p className="text-[16px] text-[#aaaaaa] leading-7 mb-4">I am a passionate Blockchain Fullstack Developer particularly interested in newly-built all chains and high logic. I am an experienced IT professional with a unique combination of technical, consulting, and management skills. I take great care in the experience, high logic, and architecture-especially fancy interface and code quality of the things I build.
                            I have mastered JavaScript frameworks such as React.js, Redux.js, Next.js, Vue.js, Nuxt.js, Angular.js, and so on.
                            Quality-oriented professional with 8+ years of experience and proven knowledge of IT strategy, programming, and web design.</p>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-[22px] text-white font-bold mb-2">React JS</p>
                            <p className="text-[16px] text-white font-thin mb-2">91%</p>
                        </div>
                        <div className="bg-white h-2 rounded-[5px] mb-5">
                            <div className="bg-green h-2 w-11/12 rounded-l-[5px]">
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-[22px] text-white font-bold mb-2">Vue JS</p>
                            <p className="text-[16px] text-white font-thin mb-2">97%</p>
                        </div>
                        <div className="bg-white h-2 rounded-[5px] mb-5">
                            <div className="bg-green h-2 w-[97%] rounded-l-[5px]">
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-[22px] text-white font-bold mb-2">Web3 JS</p>
                            <p className="text-[16px] text-white font-thin mb-2">95%</p>
                        </div>
                        <div className="bg-white h-2 rounded-[5px] mb-5">
                            <div className="bg-green h-2 w-[95%] rounded-l-[5px]">
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-[22px] text-white font-bold mb-2">Smart Contract</p>
                            <p className="text-[16px] text-white font-thin mb-2">93%</p>
                        </div>
                        <div className="bg-white h-2 rounded-[5px] mb-5">
                            <div className="bg-green h-2 w-[93%] rounded-l-[5px]">
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-[22px] text-white font-bold mb-2">Blockchain</p>
                            <p className="text-[16px] text-white font-thin mb-2">88%</p>
                        </div>
                        <div className="bg-white h-2 rounded-[5px] mb-5">
                            <div className="bg-green h-2 w-[88%] rounded-l-[5px]">
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-[22px] text-white font-bold mb-2">Solidity</p>
                            <p className="text-[16px] text-white font-thin mb-2">91%</p>
                        </div>
                        <div className="bg-white h-2 rounded-[5px] mb-5">
                            <div className="bg-green h-2 w-[91%] rounded-l-[5px]">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="whatido" className="relative flex flex-col">
                <img className="absolute top-0 left-0 w-full h-full -z-50" src="/img/2.jpg" alt="" />
                <p className="text-white text-[40px] font-semibold text-center py-5">What I Do</p>
                <div className="container mx-auto mt-10 flex lg:flex-row gap-8 flex-col">
                    <div className="flex flex-col lg:w-1/3 w-full z-10 border-l-[1px] px-4">
                        <div className="flex flex-row items-center">
                            {/* eslint-disable-next-line */}
                            <img className="w-14 h-14" src="https://img.icons8.com/external-flaticons-flat-flat-icons/1x/external-atom-oil-gas-flaticons-flat-flat-icons.png" alt="" />
                            <p className="text-[34px] text-white font-bold ml-3">Full-stack development</p>
                        </div>
                        <div className="mt-7">
                            <p className="text-[16px] text-[#aaaaaa] font-normal leading-7"> As a Full Stack Developer proficient in PHP, MySQL, HTML and Website Design, I am confident in my ability to implement your website efficiently and effectively.</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-1/3 z-10 border-l-[1px] px-4">
                        <div className="flex flex-row items-center">
                            <img className="w-14 h-14" src="https://img.icons8.com/cotton/1x/blockchain-node.png" alt="" />
                            <p className="text-[34px] text-white font-bold ml-3">Blockchain development</p>
                        </div>
                        <div className="mt-7">
                            <p className="text-[16px] text-[#aaaaaa] font-normal leading-7">Over the years I have created many custom Smart Contracts for lots of clients in different Blockchain such as Ethereum, Binance. I have extensive experience working with high-speed, efficient logic.</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-1/3 w-full z-10 border-l-[1px] px-4">
                        <div className="flex flex-row items-center">
                            <img className="w-14 h-14" src="https://img.icons8.com/external-filled-outline-wichaiwi/1x/external-ux-ui-designer-services-business-filled-outline-wichaiwi.png" alt="" />
                            <p className="text-[34px] text-white font-bold ml-3">Wonderful <br />UX/UI design</p>
                        </div>
                        <div className="mt-7">
                            <p className="text-[16px] text-[#aaaaaa] font-normal leading-7">I have extensive experience with a range of design and development tools, including Adobe Photoshop, Adobe Illustrator, InDesign, Adobe XD, Sketch, InVision, Marvel, Balsamiq, Axure, Figma, and Adobe Animate.</p>
                        </div>
                    </div>
                </div>
                <p className="container mx-auto text-white text-[35px] font-bold px-40 text-center my-[200px]">Do more than is required. What is the distance between someone who achieves their goals consistently and those who spend their lives and careers merely following?</p>
            </div>
            <div id="portfolio" className="flex flex-col z-10 pb-20" style={{ backgroundImage: "url('/img/3(1).jpg')" }}>
                <p className="text-white text-[40px] font-semibold text-center py-[50px]">Portfolio</p>
                <div className="container z-5 gap-5 mx-auto flex flex-wrap justify-center">
                    <a href="https://goblinarmy.io/" className="lg:w-1/4 w-full rounded-[10px] hover:scale-110 transition-transform duration-200 cursor-pointer" target={"_blank"} rel="noreferrer">
                        <img className="rounded-[10px]" src="/img/p2.png" alt="" ></img>
                    </a>
                    <a href="https://goblinarmy.io/" className="w-full lg:w-1/4 rounded-[10px] hover:scale-110 transition-transform duration-200 cursor-pointer" target={"_blank"} rel="noreferrer">
                        <img className="rounded-[10px]" src="/img/p2.png" alt="" ></img>
                    </a>
                    <a href="https://goblinarmy.io/" className="w-full lg:w-1/4 rounded-[10px] hover:scale-110 transition-transform duration-200 cursor-pointer" target={"_blank"} rel="noreferrer">
                        <img className="rounded-[10px]" src="/img/p3.png" alt="" ></img>
                    </a>
                    <a href="https://goblinarmy.io/" className="w-full lg:w-1/4 rounded-[10px] hover:scale-110 transition-transform duration-200 cursor-pointer" target={"_blank"} rel="noreferrer">
                        <img className="rounded-[10px]" src="/img/p4.png" alt="" ></img>
                    </a>
                    <a href="https://goblinarmy.io/" className="w-full lg:w-1/4 rounded-[10px] hover:scale-110 transition-transform duration-200 cursor-pointer" target={"_blank"} rel="noreferrer">
                        <img className="rounded-[10px]" src="/img/p5.png" alt="" ></img>
                    </a>
                    <a href="https://goblinarmy.io/" className="w-full lg:w-1/4 rounded-[10px] hover:scale-110 transition-transform duration-200 cursor-pointer" target={"_blank"} rel="noreferrer">
                        <img className="rounded-[10px]" src="/img/p6.png" alt="" ></img>
                    </a>
                    <a href="https://goblinarmy.io/" className="w-full lg:w-1/4 rounded-[10px] hover:scale-110 transition-transform duration-200 cursor-pointer" target={"_blank"} rel="noreferrer">
                        <img className="rounded-[10px]" src="/img/p4.png" alt="" ></img>
                    </a>
                    <a href="https://goblinarmy.io/" className="w-full lg:w-1/4 rounded-[10px] hover:scale-110 transition-transform duration-200 cursor-pointer" target={"_blank"} rel="noreferrer">
                        <img className="rounded-[10px]" src="/img/p5.png" alt="" ></img>
                    </a>
                    <a href="https://goblinarmy.io/" className="w-full lg:w-1/4 rounded-[10px] hover:scale-110 transition-transform duration-200 cursor-pointer" target={"_blank"} rel="noreferrer">
                        <img className="rounded-[10px]" src="/img/p6.png" alt="" ></img>
                    </a>
                </div>
            </div>
            <div id="resume" className="flex flex-col z-10 pb-10 bg-[#212529]">
                <p className="text-white text-[40px] font-semibold text-center py-5">Resume</p>
                <div className="container mx-auto flex flex-col lg:flex-row">
                    <div className="flex flex-col lg:w-1/2 w-full">
                        <p className="text-white text-[40px] font-semibold text-center py-5">Experiences</p>
                        <div className="flex flex-row">
                            <div className="w-10 h-10 rounded-full bg-[#50BEC2] text-white text-[13px] flex justify-center items-center">1</div>
                            <div className="flex w-full bg-gradient1 -ml-3 text-white text-[13px] justify-center items-center">2017-2018</div>
                        </div>
                        <div className="flex flex-col ml-[18px] pl-4 border-l-[1px] border-[#aaaaaa]">
                            <p className="text-white text-[20px] font-bold mt-4">Mern&Mevn stack developer</p>
                            <p className="text-[#50BEC2] text-[18px] font-semibold">kros studio</p>
                            <p className="text-[#aaaaaa] text-[16px] font-semibold mt-4">Orginally,I started learning frontend course such as React,Angular and Vue.js. And it was Wonderful experience for me to grow up to senior developer. I built 13 big projects including shopify projects,Advertising projects...</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-10 h-10 rounded-full bg-[#50BEC2] text-white text-[13px] flex justify-center items-center">2</div>
                            <div className="flex w-full bg-gradient1 -ml-3 text-white text-[13px] justify-center items-center">2018-2020</div>
                        </div>
                        <div className="flex flex-col ml-[18px] pl-4 border-l-[1px] border-[#aaaaaa]">
                            <p className="text-white text-[20px] font-bold mt-4">Full stack developer</p>
                            <p className="text-[#50BEC2] text-[18px] font-semibold">kros studio</p>
                            <p className="text-[#aaaaaa] text-[16px] font-semibold mt-4">In addition to excellent programming and creativity, I rely on extensive knowledge of HTML, CSS,HTML5, Wordpress, JavaScript, JQuery, Vue.js, PHP, Node.js,Laravel, React.js, Angular, MySQL,Web application and Protoscript.</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-10 h-10 rounded-full bg-[#50BEC2] text-white text-[13px] flex justify-center items-center">3</div>
                            <div className="flex w-full bg-gradient1 -ml-3 text-white text-[13px] justify-center items-center">2020-2022</div>
                        </div>
                        <div className="flex flex-col ml-[18px] pl-4 border-l-[1px] border-[#aaaaaa]">
                            <p className="text-white text-[20px] font-bold mt-4">Solana&Blockchain developer</p>
                            <p className="text-[#50BEC2] text-[18px] font-semibold">kros studio</p>
                            <p className="text-[#aaaaaa] text-[16px] font-semibold mt-4"> I have knowledge of MySQL, MongoDB PostgreSQL InfluxDB Solana TRON Polygon Avalanche Ethereum Binance Smart Chain Desktop Develop Qt Creator PyQT Java C++ and Arbitrage bot Whatsapp Telegram bot chatGPT bard .</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-1/2 w-full">
                        <p className="text-white text-[40px] font-semibold text-center py-5">Education</p>
                        <div className="flex flex-row">
                            <div className="w-10 h-10 rounded-full bg-[#50BEC2] text-white text-[13px] flex justify-center items-center">1</div>
                            <div className="flex w-full bg-gradient1 -ml-3 text-white text-[13px] justify-center items-center">2014-2017</div>
                        </div>
                        <div className="flex flex-col ml-[18px] pl-4 border-l-[1px] border-[#aaaaaa]">
                            <p className="text-white text-[20px] font-bold mt-4">Bachelor degree</p>
                            <p className="text-[#50BEC2] text-[18px] font-semibold">University of Waterloo</p>
                            <p className="text-[#aaaaaa] text-[16px] font-semibold mt-4">During the Brock University,My major was Computer science and Mathematics and I got Bachelor degree. I have experienced  strengths of our Computer Science program with our Mathematics program, showing you how to apply what you learn in Mathematics by using technology.</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-10 h-10 rounded-full bg-[#50BEC2] text-white text-[13px] flex justify-center items-center">2</div>
                            <div className="flex w-full bg-gradient1 -ml-3 text-white text-[13px] justify-center items-center">2014-2017</div>
                        </div>
                        <div className="flex flex-col ml-[18px] pl-4 border-l-[1px] border-[#aaaaaa]">
                            <p className="text-white text-[20px] font-bold mt-4">MCSA Certification</p>
                            <p className="text-[#50BEC2] text-[18px] font-semibold">BI development team</p>
                            <p className="text-[#aaaaaa] text-[16px] font-semibold mt-4">Design, implement, and maintain a data warehouse
                                Extract, transform, and load data
                                Build data quality solutions
                                Design a multidimensional business intelligence (BI) semantic model
                                Design a tabular BI semantic model
                                Develop queries using Multidimensional Expressions (MDX) and Data Analysis Expressions (DAX)
                                Configure and maintain SQL Server Analysis Services (SSAS)</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-10 h-10 rounded-full bg-[#50BEC2] text-white text-[13px] flex justify-center items-center">3</div>
                            <div className="flex w-full bg-gradient1 -ml-3 text-white text-[13px] justify-center items-center">2014-2017</div>
                        </div>
                        <div className="flex flex-col ml-[18px] pl-4 border-l-[1px] border-[#aaaaaa]">
                            <p className="text-white text-[20px] font-bold mt-4">PMP certification</p>
                            <p className="text-[#50BEC2] text-[18px] font-semibold">PMI org</p>
                            <p className="text-[#aaaaaa] text-[16px] font-semibold mt-4">Plan and Develop the Project Idea. Every project starts as an idea. ...
                                Create and Lead Your Dream Team. ...
                                Monitor Project Progress and Set Deadlines. ...
                                Solve Issues That Arise. ...
                                Manage the Money. ...
                                Ensure Stakeholder Satisfaction. ...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="" className="flex flex-row bg-black-100 justify-between">
                <p className="ml-10 text-[15px] text-white py-8">© Copyright 2023 - Kyros by Designesia</p>
                <div className="flex flex-row">
                    <p className="ml-10 text-[15px] text-white py-8 mr-10">All rights reserved.</p>

                </div>
            </div>
        </div>
    )
}