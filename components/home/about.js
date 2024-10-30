import Image from 'next/image';
import React, { useEffect } from 'react'
// import { skills, about, socialMedia } from '@/config';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';

const AboutSection = ({ about, socialMedia, skills }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

  const today = new Date();
  return (
    <section id="about" className="scroll-smooth motion-safe:animate-fadeIn py-24">
      <div className="flex items-center justify-between">

        <div className="w-full lg:w-2/3">
          <div className="">
            <div className="flex">
              <h1 className="col font-sfmono text-primary-500 text-[22px] ">02.</h1>
              <h1 className="col text-[22px] leading-8 font-bold mb-4  font-poppins text-background-500 dark:text-background-100 md:text-[40px] lg:text-[24px]">
                Here is more about me
              </h1>
            </div>
            <p className="text-[14px] tracking-wide font-poppins font-light lg:pr-24 text-slate-200 opacity-85 md:text-[14px] lg:text-[15px]">
              {about.aboutme}

            </p>

            <div className='py-4  text-primary-500 font-sfmono'>Why to choose me?</div>
            <div className='flex flex-col lg:flex-row  w-full gap-4 lg:pr-12 pb-4'>

              <a target='_blank' href={socialMedia.upwork.url} className='relative bg-background-500 border-slate-500 border-[1px] hover:scale-[.96] duration-500 cursor-pointer p-[9px] gap-2 rounded-lg flex w-full font-poppins justify-left items-center text-background-500'>
                <Image
                  // onClick={scrollToTop}
                  src='/testimonials/upwork.png' // Use a leading slash for the path
                  className="p-[3px] rounded-lg"
                  alt="Upwork Logo"
                  width={48} // Set the width (e.g., 64px)
                  height={48} // Set the height (e.g., 64px)
                  layout="intrinsic" // Optional: use "responsive" or "fixed" based on your needs
                />
                {/* <img className='p-[3px] rounded-lg h-12' src={'/testimonials/upwork.png'} alt="" /> */}
                <div>
                  <FaExternalLinkAlt className='absolute top-2 right-2 text-[9px] text-slate-400 opacity-55' />
                  <div className='text-sm font-semibold text-background-100'>Top Rated Developer.&nbsp;&nbsp; </div>
                  <div className='text-[13px] text-slate-400'>210+ hours worked</div>
                </div>
              </a>

              <a target='_blank' href={socialMedia.fiverr.url} className='relative bg-background-500 border-slate-500 border-[1px] hover:scale-[.96] duration-500 cursor-pointer p-[9px] gap-2 rounded-lg flex w-full  font-poppins justify-left items-center text-background-500'>

                <Image
                  // onClick={scrollToTop}
                  src='/testimonials/fiverr.jpg' // Use a leading slash for the path
                  className="p-[3px] rounded-lg"
                  alt="Fiverr Logo"
                  width={48} // Set the width (e.g., 64px)
                  height={48} // Set the height (e.g., 64px)
                  layout="intrinsic" // Optional: use "responsive" or "fixed" based on your needs
                />
                {/* <img className='p-[3px] rounded-lg h-12' src={'/testimonials/fiverr.jpg'} alt="" /> */}
                <div >
                  <FaExternalLinkAlt className='absolute top-2 right-2 text-[9px] text-slate-400 opacity-55' />
                  <div className='text-sm font-semibold text-background-100'>Level Two Developer.&nbsp;&nbsp; </div>
                  <div className='text-[13px] text-slate-400'>227+ reviews</div>
                </div>
              </a>

            </div>
            <div className='lg:flex w-full gap-4 lg:pr-12'>
              <a target='_blank' href={socialMedia.linkedin.url} className='relative bg-background-500 border-slate-500 border-[1px] hover:scale-[.96] duration-500 cursor-pointer p-[9px] gap-2  rounded-lg flex w-full  font-poppins justify-left items-center text-background-500'>
                <Image
                  // onClick={scrollToTop}
                  src='/testimonials/linkedin.svg' // Use a leading slash for the path
                  className="p-[3px] rounded-lg"
                  alt="Linkedin Logo"
                  width={48} // Set the width (e.g., 64px)
                  height={48} // Set the height (e.g., 64px)
                  layout="intrinsic" // Optional: use "responsive" or "fixed" based on your needs
                />
                {/* <img className='p-[3px] rounded-lg h-12' src={'/testimonials/linkedin.svg'} alt="" /> */}
                <div>
                  <FaExternalLinkAlt className='absolute top-2 right-2 text-[9px] text-slate-400 opacity-55' />
                  <div className='text-sm font-semibold text-background-100'>Top Voice in Web development</div>
                  <div className='text-[13px] text-slate-400'>2k+ followers</div>
                </div>
              </a>

            </div>

          </div>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:block align-middle">
          {/* <img
            className="motion-safe:animate-fadeIn rounded-lg w-80"
            src={'sheikhtabarak.png'}
            alt="sheikhtabarak"
          /> */}

          <Image
            src='/sheikhtabarak.png' // Use a leading slash for the path
            className="motion-safe:animate-fadeIn rounded-lg w-80"
            alt="sheikhtabarak"
            width={320} // Set the width (e.g., 64px)
            height={320} // Set the height (e.g., 64px)
            layout="intrinsic" // Optional: use "responsive" or "fixed" based on your needs
          />
        </div>
      </div>

      <div id='techstack' className='pt-32'>
        <div className="flex">
          <h1 className="col font-sfmono text-primary-500 text-[22px] ">03.</h1>
          <h1 className="col text-[20px] leading-8 font-bold mb-4  font-poppins text-background-500 dark:text-background-100 md:text-[40px] lg:text-[24px]">
            Tech Stack.
          </h1>
        </div>
        <div className='flex items-center gap-2 mb-5 w-full'>
          <div className="w-3/5 lg:w-1/5 text-primary-500 font-sfmono dark:font-normal font-bold text-center md:text-left lg:text-left text-sm ">
            Fullstack Development
          </div>
          <hr className='w-2/5 lg:w-4/5 border-background-500  dark:border-gray-700' />
        </div>

        <Carousel arrows={false} swipeable={true} autoPlay={true} autoPlaySpeed={6000} responsive={responsive}>
          {skills?.web.map((value, index) => {
            return (
              <li key={index} title={`${today.getFullYear() - value.since} Year(s) of experience using ${value.title} in ${value.type} development`} className="my-2 cursor-pointer bg-background-100 dark:bg-background-500 hover:scale-[1.02] ml-2 duration-500 ease-in-out hover:ease-in-out relative align-middle rounded-lg border-[1px] border-background-500 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 w-[100px] lg:w-[120px] text-center px-2 lg:px-4 py-6">
                <div className=' flex justify-center items-center'>
                  <Image
                    src={`/skills/${value.image}`} // Use a leading slash for the path
                    className="motion-safe:animate-fadeIn rounded-lg "
                    alt={value.title}
                    width={50} // Set the width (e.g., 64px)
                    height={50} // Set the height (e.g., 64px)
                    layout="intrinsic" // Optional: use "responsive" or "fixed" based on your needs
                  />
                  {/* <img className='w-[30px] lg:w-[50px]' src={`skills/${value.image}`} alt="" /> */}
                </div>
                <div className=' leading-10'> {value.title}</div>
                <div className='text-sm lg:text-base'>{today.getFullYear() - value.since} Years </div>
                <p className='text-[8px] leading-[14px]'> Since {value.since}  </p>
              </li>
            )
          })}
        </Carousel>

        <div className='pt-8 pb-6  relative flex items-center border-[1px] border-gray-700 mt-10 rounded-lg'>
          <div className='absolute -top-3 left-4 bg-background-100 dark:bg-background-500 px-2  text-primary-500 font-sfmono dark:font-normal font-bold text-center md:text-left lg:text-left text-sm'>Also Experienced with</div>
          <ul className="flex flex-wrap lg:flex lg:flex-nowrap justify-evenly lg:justify-between items-center w-full font-sfmono text-[13px] leading-8 text-[#8892B0] rounded-[5px]">

            {skills?.others.map((value, index) => {
              return (
                <li
                  key={index}
                  title={`${today.getFullYear() - value.since} Year(s) of experience using ${value.title} for ${value.type}`}
                  className="py-8 cursor-pointer hover:scale-[1.07] relative align-middle duration-500 w-[120px] text-center ">

                  <div className=' flex justify-center items-center'>

                    <Image
                      src={`/skills/${value.image}`}// Use a leading slash for the path
                      className="motion-safe:animate-fadeIn rounded-lg"
                      alt={value.title}
                      width={50} // Set the width (e.g., 64px)
                      height={50} // Set the height (e.g., 64px)
                      layout="intrinsic" // Optional: use "responsive" or "fixed" based on your needs
                    />

                    {/* <img width={50} src={`skills/${value.image}`} alt="" /> */}
                  </div>
                  <div className='leading-10'> {value.title}</div>
                  <p className='text-[8px] leading-[14px]'> {today.getFullYear() - value.since} Year(s)</p>

                </li>

              );
            })}

          </ul>

        </div>

      </div>
    </section>
  )
}

export default AboutSection