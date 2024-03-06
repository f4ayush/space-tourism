'use client'
import { useEffect, useState } from "react"
import logo from "../assets/shared/logo.svg"
import hamburger from "../assets/shared/icon-hamburger.svg"
import close from "../assets/shared/icon-close.svg"
import Image from 'next/image'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    let getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    useEffect(() => {
        function handleResize() {
            if (getWindowDimensions().width >= 768) {
                setIsOpen(true)
            }
            getWindowDimensions();
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [])


    return (
        <nav className='flex nav w-full ps-8 py-2 lg:py-10 justify-between items-center absolute flex-col md:flex-row'>
            <div className="logo flex flex-grow w-full md:w-auto justify-between items-center mr-8">
                <Image src={logo} alt="logo" />
                <div className="menu-button md:hidden" onClick={handleToggle}>
                    {
                        isOpen ? <Image src={close} alt="close" /> : <Image src={hamburger} alt="hamburger" />
                    }
                </div>
            </div>
            <div className={`relative flex  ${isOpen ? "md:flex absolute" : "hidden"} lg:flex flex-grow lg:justify-center md:justify-end backdrop-blur-md w-2/3 md:w-auto h-screen md:h-auto self-end md:self-auto justify-center`}>
                <span className="absolute w-2/3 h-1 border-b-[1px] border-b-[#979797] top-1/2 -left-[45%] hidden  lg:block"></span>
                <ul className='flex menu gap-4 flex-col md:flex-row'>
                    <li className='py-5 lg:py-6 border-b-white border-b-2'>00 Home</li>
                    <li className='py-5 lg:py-6'>01 Destination</li>
                    <li className='py-5 lg:py-6'>02 Crew</li>
                    <li className='py-5 lg:py-6'>03 Technology</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar