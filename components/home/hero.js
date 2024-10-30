import React from 'react'
import { BsArrowDownCircle } from "react-icons/bs";
import { PiCaretDownLight } from "react-icons/pi";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from 'react-scroll';

import Shapes from '../hero-shapes/shapes';
import Image from 'next/image';

const HeroSection = ({ about }) => {
  return (
    <div  >
      <div className='py-4 relative' >
        <div className="flex justify-center lg:mt-4 lg:col-span-5 lg:hidden align-middle pt-4">

          <Image
            src={`/sheikhtabarak.png`}// Use a leading slash for the path
            className="motion-safe:animate-fadeIn rounded-lg w-60"
            alt='Muhammad Tabarak'
            width={240} // Set the width (e.g., 64px)
            height={240} // Set the height (e.g., 64px)
            layout="intrinsic" // Optional: use "responsive" or "fixed" based on your needs
          />
          {/* <img
            className="motion-safe:animate-fadeIn rounded-lg w-60"
            src={'sheikhtabarak.png'}
            alt="mockup"
          />      */}
        </div>

        <div className='flex gap-4 '>

          <div className='lg:w-3/5 rounded-lg pt-2'>

            <p className="lg:py-0 text-primary-500 font-sfmono dark:font-normal font-bold text-center md:text-left lg:text-left menu-font-span leading-2 text-[16px] ">
              Hi, my name is
            </p>

            <h1 className="font-poppins py-2 lg:py-0 text-3xl lg:text-5xl lg:leading-[80px] font-bold text-center md:text-left lg:text-left text-bg-background-500 dark:text-background-100 ">
              {about?.name}
            </h1>

            <h1 className="font-poppins text-2xl lg:text-4xl md:text-left lg:text-left  text-primary-500 opacity-90 font-bold text-center ">
              {about?.headline}
            </h1>

            <p className="font-poppins py-2 text-[14px] lg:pr-12  text-slate-400 md:text-[24px] lg:text-[18px] text-center md:text-left lg:text-left">
              A software engineer with over <span className='font-semibold text-background-100'> 4 years of experience </span> working as a  <span className='font-semibold text-background-100'>Full-stack developer</span>, building scalable and efficient solutions.
            </p>
            <div className='flex justify-center lg:justify-start pt-6'>
              <Link
                to={'projects'}
                spy={true}
                smooth={true}
                duration={1000}
                className="cursor-pointer border-2 hover:-translate-y-2 z-2 bg-primary-500 dark:bg-background-500 border-primary-500 text-background-500 dark:text-primary-500 font-sfmono rounded px-12 py-3 hover:transition hover:ease-in-out hover:delay-175 ">
                Visit Archive
              </Link>
            </div>
          </div>

          <div className='w-2/5 z-[1] hidden lg:flex'>
            <Shapes />
          </div>

        </div>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
          className="flex lg:absolute bottom-4 w-full justify-center animate-bounce text-3xl mt-8 cursor-pointer text-background-500 dark:text-background-100"> <TfiAngleDown /></Link>

      </div>
    </div>
  )
}

export default HeroSection