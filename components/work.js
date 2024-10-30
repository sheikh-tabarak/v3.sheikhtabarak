import React from 'react'
import { BsGithub, BsLink } from 'react-icons/bs'
import { MdDetails } from 'react-icons/md'
import Carousel from 'react-multi-carousel'

const FeaturedProjects = ({ projects }) => {

    const showSlideData = (index) => {
        const ImageAcually = document.getElementById('image-' + index)
        const ImgData = document.getElementById('img-' + index)
        if (ImageAcually) {
            ImgData.classList.remove('translate-y-96')
            ImgData.classList.add('translate-y-0')
            ImageAcually.classList.add('scale-105')
        }
    }


    const hideSlideData = (index) => {
        const ImageAcually = document.getElementById('image-' + index)
        const ImgData = document.getElementById('img-' + index)
        if (ImageAcually) {
            ImgData.classList.remove('translate-y-0')
            ImgData.classList.add('translate-y-96')
            ImageAcually.classList.remove('scale-105')
        }
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <div id='projects' className="flex pt-28">
                <h1 className="col font-sfmono text-primary-500 text-[22px] ">04.</h1>
                <h1 className="col text-[20px] leading-8 font-bold mb-4  font-poppins text-background-500 dark:text-background-100 md:text-[40px] lg:text-[24px]">
                    Featured Projects.
                </h1>
            </div>


            <Carousel swipeable={true} responsive={responsive}>

                {projects.map((project, index) => {
                    return <div onMouseLeave={() => hideSlideData(index)} onMouseEnter={() => showSlideData(index)} className='mr-4 border-2 relative overflow-hidden border-background-400 p-2 rounded-lg hover:backdrop-grayscale'>
                        <img id={`image-${index}`} className={`w-80 h-80 object-cover object-${project.position} rounded-lg duration-500 cursor-pointer`} src={project.img} alt="" />
                        <div id={`img-${index}`} className='absolute transform translate-y-96 hover:z-10 duration-500 bg-black bg-opacity-75 cursor-pointer w-full h-full left-0 bottom-0 rounded-lg p-6'>
                            <div className='flex h-full w-full justify-center items-center gap-2'>
                                <a target='_blank' href={project.github} className='rounded-full border-2 border-background-100 p-4 text-2xl hover:bg-background-100 hover:text-background-400 hover:scale-95 duration-500'>
                                    <BsGithub />
                                </a>
                                <a target='_blank' href={project.fiverrurl} className='rounded-full border-2 border-background-100 p-4 text-2xl hover:bg-background-100 hover:text-background-400 hover:scale-95 duration-500'>
                                    <BsLink />
                                </a>
                            </div>
                        </div>
                    </div>
                })

                }

                {/* <div onMouseLeave={() => hideSlideData('2')} onMouseEnter={() => showSlideData('2')} className=' mr-4 border-2 relative overflow-hidden border-background-400 p-2 rounded-lg hover:backdrop-grayscale'>
                    <img id='image-2' className='w-80 h-80 top-0  object-cover rounded-lg duration-500 cursor-pointer ' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/97cd4f41deaa926e959ae2b8a94a44dc-1696463188498/spothub.png" alt="" />
                    <div id='img-2' className='absolute transform translate-y-70 hover:z-10 duration-500 bg-black bg-opacity-75 cursor-pointer w-full h-full left-0 bottom-0 rounded-lg p-6'>

                        <div className='flex h-full w-full justify-center items-center gap-2'>
                            <div className='rounded-full border-2 border-background-100 p-4 text-2xl hover:bg-background-100 hover:text-background-400 hover:scale-95 duration-500'>
                                <BsGithub />
                            </div>
                            <div className='rounded-full border-2 border-background-100 p-4 text-2xl hover:bg-background-100 hover:text-background-400 hover:scale-95 duration-500'>
                                <BsLink />
                            </div>
                        </div>

                    </div>
                </div> */}


            </Carousel>

            {/* </div> */}

        </>

    )
}

export default FeaturedProjects