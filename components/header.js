import React, { useState } from 'react'
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { navLinks } from '@/config';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useTheme } from "next-themes";
import Image from 'next/image';

const Header = () => {
    const { theme, setTheme } = useTheme()
    const [menu, setMenu] = useState(false);

    function open() {
        setMenu(true);

    }

    function clickMenu() {
        setMenu(false);
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <header className="sticky top-4 z-10 mx-4 rounded-lg">

            <nav
                className="rounded-lg bg-background-100 border-[1px] shadow-lg border-gray-300 dark:border-gray-700  px-4 lg:px-8 py-2  dark:bg-background-500 z-50"
            >
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">



                    {/* <img onClick={scrollToTop}
                        src='logoicon.png' className="cursor-pointer h-16 lg:h-20 hover:-translate-x-2 hover:transition hover:ease-in-out"
                        alt="Sheikh Tabarak Logo"
                    /> */}
                    <Image
                        onClick={scrollToTop}
                        src='/logoicon.png' // Use a leading slash for the path
                        className="cursor-pointer hover:-translate-x-2 hover:transition hover:ease-in-out"
                        alt="Muhammad Tabarak Logo"
                        width={64} // Set the width (e.g., 64px)
                        height={64} // Set the height (e.g., 64px)
                        layout="intrinsic" // Optional: use "responsive" or "fixed" based on your needs
                    />

                    <div className='flex items-center'>
                        {/* <li className="lg:hidden flex items-center text-3xl">
                            <button className='text-background-100 hidden dark:flex' onClick={() => setTheme('light')}><CiLight /></button>
                            <button className='text-background-500  dark:hidden' onClick={() => setTheme('dark')}><CiDark /></button>
                        </li> */}
                        <button
                            onClick={open}
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <p className="text-[28px]">
                                <RiMenu3Fill />
                            </p>
                        </button>
                    </div>
                    <div
                        className={`w-full lg:w-min fixed lg:relative lg:bottom-auto z-50 bg-[#0A192F] lg:bg-transparent top-0 left-0 flex items-center justify-center h-full lg:h-auto leading-10 items-right  lg:flex lg:order-1 duration-500  ${menu ? 'translate-x-[0%] ' : 'translate-x-[100%] lg:translate-x-[0%]'}`}
                        id="mobile-menu-2">

                        <p onClick={clickMenu} className="text-6xl absolute top-8 right-8 text-background-100 lg:hidden">
                            <RiCloseLine />
                        </p>
                        <ul className="flex text-left flex-col gap-5 lg:gap-0 mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
                            {
                                navLinks.map(({ url, name }, i) => {
                                    return <li key={i}>
                                        <span className="text-primary-500 font-sfmono font-extralight pr-1 text-3xl lg:text-[13px]">0{i + 1}</span>

                                        <Link
                                            onClick={clickMenu}
                                            to={url}
                                            spy={true}
                                            smooth={true}
                                            duration={1000}
                                            className="cursor-pointer scroll-smooth font-sfmono text-background-500 hover:text-primary-500  dark:text-background-100  dark:hover:text-primary-500 text-3xl lg:text-[13px] py-2 "
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                })
                            }


                            {!menu && <li className="cursor-pointer mt-5 lg:mt-0 hover:-translate-y-1 hover:transition hover:ease-in-out ">
                                <a
                                    href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=admin@sheikhtabarak.me&su=Request+a+Reply+Back&body=Please+reply+back+to+this+email+so+we+will+proceed."
                                    target="_blank"
                                    className="border-2 bg-primary-500 dark:bg-background-500 border-primary-500 text-background-500 dark:text-primary-500 font-sfmono rounded px-12 py-3 hover:-translate-y-1 hover:transition hover:ease-in-out">
                                    Say&nbsp;Hi
                                </a>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header