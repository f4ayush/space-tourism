import React from 'react'

import logo from "../assets/shared/logo.svg"
import Image from 'next/image'
function Navbar() {
    return (
        <nav className='flex nav w-full px-5 py-10 justify-between items-center absolute'>
            <div className="logo flex-grow">
                <Image src={logo} alt="logo" />
            </div>
            {/* <hr className=''/> */}
            <div className="relative flex flex-grow justify-center backdrop-blur-sm">
                <span className="absolute w-2/3 h-1 border-b-2 border-b-[#979797] top-1/2 -left-1/2"></span>
                <ul className='flex menu gap-4'>
                    <li className='py-5 border-b-white border-b-2'>00 Home</li>
                    <li className='py-5'>01 Destination</li>
                    <li className='py-5'>02 Crew</li>
                    <li className='py-5'>03 Technology</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar