import { experiences } from '@/config';
import React from 'react'
import {  BsLink45Deg } from 'react-icons/bs';
import { FaGraduationCap } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";


const Experience = () => {
  return <div id='jobs' className='py-12 lg:py-32 md:py-10'>
    <div className="flex">
      <h3 className="col font-sfmono text-primary-500 text-[22px] ">05.</h3>
      <h3 className="col text-[20px] leading-8 font-bold mb-4  font-poppins text-background-500 dark:text-background-100 md:text-[40px] lg:text-[24px]">
        Journey of Experiences and Education.
      </h3>
    </div>

    {
      experiences.map((items, index) => {

        return <div key={index} className='lg:flex justify-start gap-10'>
          <div className='pl-8 pb-10 lg:w-[100%] border-l-[1px] border-background-500 dark:border-background-100 border-opacity-50 relative'>
            <div className="sticky top-32 -ml-12 bg-primary-500 w-8 h-8 rounded-full flex justify-center items-center">
              {items.type == 'edu' ? <FaGraduationCap /> : <MdBusinessCenter />}
            </div>
            <div className='timeline01 font-poppins text-sm lg:text-base bg-background-400 bg-opacity-70 hover:bg-opacity-100 cursor-pointer duration-500 p-8 leading-relaxed rounded-lg text-background-100'>
              <h2 className='text-white font-semibold pb-2 text-lg'> {items.title} &middot; <a target='_blank' href={items.linktoorg}>{items.org} </a></h2>
              <div className='text-slate-400 pb-2 flex items-center'>{items.from} - {items.to} <span className="ml-4 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{items.mode}</span></div>
              <p>{items.intro}</p>

              <ul className='py-6 flex flex-wrap gap-2'>
                {items?.projects?.map((project, index) => {
                  return <a key={index} target='_blank' href={project.url} className="flex hover:text-primary-500 duration-500 text-sm cursor-pointer font-semibold items-center gap-[4px]"><span><BsLink45Deg className='text-lg' /></span> {project.name}</a>
                })}
              </ul>

              <ul className='flex flex-wrap gap-2'>
                {items?.skills?.map((skill, index) => {
                  return <li key={index} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{skill}</li>
                })}
              </ul>
            </div>
          </div>
        </div>

      })
    }

  </div>
}

export default Experience