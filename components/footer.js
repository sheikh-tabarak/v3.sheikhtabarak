import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import Github from "./github.js";
import Link from 'next/link.js';
import GitHubCalendar from 'react-github-calendar';

const Footer = ({ about }) => {
  const theme = {
    light: ['#ffffff', '#000000', '#cccccc', '#aaaaaa', '#888888'],
    dark: ['#3b4458', '#2cba64', '#4CD684', '#6fdd9a', '#98e7b7']

  };
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-8 justify-between items-center lg:items-end">
        <div className='flex flex-col w-full'>
          <div className="lg:block text-left bg-neutral-200 dark:bg-[#112240] p-4 mb-3 lg:mr-10 rounded-[10px] text-[400] text-[12px] overflow-break tracking-tight text-[#8892B0] md:text-[15px] lg:text-[15px]">
            <Link
              className="font-sfmono text-[#4CD684] text-[13px] pb-1 flex gap-2 content-between justify-start"
              href={"https://github.com/sheikh-tabarak/sheikhtabarak"}
              target="blank">

              How Frequently I code

            </Link>
            <p className="font-poppins tracking-wide text-[12px] text-background-500 dark:text-background-100">

              A visual journey through my coding commitment and open-source contributions.

            </p>
          </div>

          <Link
            href={"/"}
            className="font-sfmono  text-[10px] lg:text-[13px]  flex gap-2 content-between justify-center lg:justify-start" >
            <FaRegCopyright className="self-center" />
            2023 Copyrights | All Rights Reserved
          </Link>
        </div>

        {/* <div className=" lg:flex lg:justify-center w-full overflow-x-scroll text-xs font-sfmono font-medium leading-5 text-primary-500 dark:text-teal-200 " > */}
        <div className="w-full lg:w-[610px]">
          <GitHubCalendar
            theme={theme}
            blockSize={7.5} blockRadius={1}
            username={about.githubUsername}
          />
        </div>
        {/* </div > */}
        {/* <div className='overflow-x-scroll w-full'>
        <Github about={about} />
        </div> */}
      </div>
    </section>
  )
}

export default Footer