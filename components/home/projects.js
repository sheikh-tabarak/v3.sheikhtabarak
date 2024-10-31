import React from 'react'
import { BsLink45Deg } from 'react-icons/bs';

const Projects = ({ featuredProjects }) => {


  return <div id='projects' className='lg:py-32 md:py-10'>
    <div className='flex'>
      <h1 className='col font-sfmono text-primary-500 text-[22px]'>05.</h1>
      <h1 className='col text-[20px] leading-8 font-bold mb-6  font-poppins text-background-500 dark:text-background-100 md:text-[40px] lg:text-[24px]'>
        List of best things I have done
      </h1>
    </div>

    {featuredProjects.map((items, index) => {
      return <div key={index} className='lg:flex justify-start gap-10'>
        <div className='lg:w-[100%] relative'>
          <div className='lg:flex items-center  font-poppins  gap-8 text-sm lg:text-base h-full bg-background-400 bg-opacity-70 hover:bg-opacity-100 cursor-pointer duration-500 p-8 leading-relaxed rounded-lg text-background-100'>
            <a target='_blank' href={items.linktoorg} className='lg:w-2/5 p-2 flex lg:sticky lg:top-32 mb-6 lg:mb-8 hover:scale-[1.03] duration-300 border-background-300 border-[1px] rounded-lg' >
              <img className='w-full' src={items.img} alt="" />
            </a>
            <div className='lg:w-3/5'>
              <h2 className='text-white font-semibold pb-2 text-lg'>
                {items.title} &middot; <a target="_blank" rel="noopener noreferrer" href={items.linktoorg}>{items.org}</a>
              </h2>
              {/* <h2 className='text-white font-semibold pb-2 text-lg'> {items.title} &middot; <a target="_blank" rel="noopener noreferrer" href={items.linktoorg}>{items.org} </a></h2> */}
              <div className='text-slate-400 pb-2 flex items-center'>{items.from && items.to && <span className='pr-4'>{items.from} - {items.to}</span>} {items.mode && <span className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>{items.mode}</span>}</div>
              <p>{items.intro}</p>

              <ul className='py-6 flex flex-wrap gap-2'>
                {items?.projects?.map((project, index) => {
                  return <a key={index} target='_blank' href={project.url} className='flex hover:text-primary-500 duration-500 text-sm cursor-pointer font-semibold items-center gap-[4px]'><span><BsLink45Deg className='text-lg' /></span> {project.name}</a>
                })}
              </ul>

              <ul className='flex flex-wrap gap-2'>
                {items?.skills?.map((skill, index) => {
                  return <li key={index} className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>{skill}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    })
    }
  </div>
}

export default Projects