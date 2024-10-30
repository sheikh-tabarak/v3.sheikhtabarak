import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import Github from "./github.js";
import Link from 'next/link.js';

const Footer = ({ about }) => {
  return (
    <section>
      <div className="block lg:flex lg:justify-between lg:items-end">
        <div>
          <div className="hidden lg:block text-center lg:text-left bg-neutral-200 dark:bg-[#112240] p-4 mb-3 mr-10 rounded-[10px] text-[400] text-[12px] overflow-break tracking-tight text-[#8892B0] md:text-[15px] lg:text-[15px]">
            <Link
              className="font-sfmono text-[#4CD684] text-[10px] lg:text-[13px] pb-1 flex gap-2 content-between justify-start"
              href={"https://github.com/sheikh-tabarak/sheikhtabarak"}
              target="blank"
            >
              How Frequently I code
            </Link>
            <p className="font-poppins tracking-wide text-[8px] lg:text-[12px] text-background-500 dark:text-background-100">
              A visual journey through my coding commitment and open-source
              contributions.
            </p>
          </div>

          <Link
            href={"/"}
            className="font-sfmono  text-[10px] lg:text-[13px]  flex gap-2 content-between justify-center lg:justify-start "
          >
            <FaRegCopyright className="self-center	" />
            2023 Copyrights | All Rights Reserved
          </Link>
        </div>
        <Github about={about} />
      </div>
    </section>
  )
}

export default Footer