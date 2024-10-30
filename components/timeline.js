// import React from 'react'
// import { Parallax, useParallax } from 'react-scroll-parallax';
// import { FaGraduationCap } from "react-icons/fa6";
// import { MdBusinessCenter } from "react-icons/md";
// import { experiences, skills } from '@/config';



// const TimeLine = () => {

//   return (

//       <div className='px-10  lg:px-36 lg:py-10 md:px-36 md:py-10 '>
//         <div className="flex">
//           <h1 className="col font-sfmono text-primary-500 text-[22px] ">2.</h1>
//           <h1
//             id=""
//             className="col text-[20px] leading-8 font-bold mb-4  font-eurostile text-background-500 dark:text-background-100 md:text-[40px] lg:text-[24px]"
//           >
//             Experience Timeline.
//           </h1>
//         </div>

//         {
//            experiences.map((items,i)=>{
//             return <div className='lg:flex justify-start gap-10 pr-8'>
          
//             <div className='lg:w-[23%] pt-8 '>
//             <div className="sticky top-32 space-y-2">
//             <div className='font-eurostile text-background-500 dark:text-background-100 text-2xl'>{items.title}</div>
//             <div className="font-sfmono text-sm text-primary-500 "><span className=''>{items.from} - </span> {items.to=='Present'?<span>{items.to}</span>:<span className=''>{items.to}</span>}</div>

//             <hr className='border-background-500 dark:border-background-100 w-24 h-2 opacity-35' />

//             <a target='_blank' href={items.linktoorg} className="font-eurostile text-lg text-background-500 dark:text-background-100">{items.org}</a>

//             </div>
//             </div>
            
//             <div className=' px-8 pb-10 lg:w-[77%] border-l-[1px] border-background-500 dark:border-background-100 border-opacity-50 relative'>
//             <div className="sticky top-32 -ml-12 bg-primary-500 w-8 h-8 rounded-full flex justify-center items-center">
//             {
//               items.type=='edu'?<FaGraduationCap/>:<MdBusinessCenter/>
//             }
//             </div>
//             <div className='bg-background-400 rounded-e-lg p-2'>
//               asdas
//               {/* <div dangerouslySetInnerHTML={{__html:items.desc}} className=' text-background-100 font-poppins text-lg lg:px-2 pt-2'> */}
//               {/* </div> */}
//               </div>
//             </div>
//           </div>

//           })
//         }
//       </div>
//   )
// }

// export default TimeLine