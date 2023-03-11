import { useEffect, useState } from "react";
export default function Header() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 0) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`z-[999] flex mx-auto flex-row fixed top-0 left-0 px-6 md:px-[100px] w-full justify-between py-5 items-center transition duration-500 ease-out ${visible ? "bg-transparent" : "bg-black-60"}`}>
            <p className=" text-white text-[30px] font-bold">いらっしゃいませ</p>
            <ul className="flex-row text-[13px] text-white font-bold gap-8 hidden md:flex ">
                <a className="hover:text-[#50BEC2]" href="#home">Home</a>
                <a className="hover:text-[#50BEC2]" href="#aboutme">About me</a>
                <a className="hover:text-[#50BEC2]" href="#whatido">What I Do</a>
                <a className="hover:text-[#50BEC2]" href="#portfolio">Portfolio</a>
                <a className="hover:text-[#50BEC2]" href="#resume">My Resume</a>
            </ul>
        </div>
    )
}