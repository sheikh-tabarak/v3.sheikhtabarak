import React from 'react'
import { FaAngleLeft, FaAngleRight, FaQuoteLeft } from 'react-icons/fa'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide, slides } } = rest;
  const lastSlide = slides ? slides.length - 1 : 2;

  return (
    <div className=" absolute justify-center lg:justify-end w-full py-4 lg:py-0 lg:top-4 lg:right-4 flex gap-4">
      <span onClick={() => previous()} className={`w-10 h-10 flex items-center justify-center rounded-full border-2 duration-500  ${currentSlide === 0 ? 'text-background-200 border-background-200' : 'hover:border-white hover:text-white hover:scale-105 hover:bg-background-400 cursor-pointer border-background-100 text-background-100'}`}><FaAngleLeft /></span>
      <span onClick={() => next()} className={`w-10 h-10 flex items-center justify-center rounded-full border-2   duration-500  ${currentSlide === lastSlide ? 'text-background-200 border-background-200' : 'hover:border-white hover:text-white hover:scale-105 hover:bg-background-400 cursor-pointer border-background-100 text-background-100'}`}><FaAngleRight /></span>
    </div>
  );
};

const Testimonials = ({ testimonials }) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
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
      <div id='feedbacks' className="container pt-32 pb-24 mx-auto">

        <div className="relative">
          <div className='lg:flex w-full justify-between py-4 relative'>

            <div className="flex">
              <h1 className="col font-sfmono text-primary-500 text-[22px] ">01.</h1>
              <h1 className="col text-[22px] leading-8 font-bold mb-4  font-poppins text-background-500 dark:text-background-100 md:text-[40px] lg:text-[24px]">
                Client Kudos: Real Stories, Real Results!
              </h1>
            </div>
          </div>

          <Carousel arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />} swipeable={true} autoPlay={true} autoPlaySpeed={10000} responsive={responsive}>
            {testimonials && testimonials.map((testimonial,index) => {
              return <div key={index} className="flex flex-grow pr-6 w-full cursor-pointer h-[450px] lg:h-[360px]">
                <div className="relative h-full  p-8 rounded-lg bg-background-400 border-[1px] border-background-200">
                  <FaQuoteLeft className=" top-4 opacity-45 left-4 block w-8 h-8 text-primary-200 mb-4 rotate-180" />
                  <div className=" top-4 absolute right-4 block w-8 h-8 text-primary-200 mb-4">
                    <a href={testimonial.link}>
                      <img className='w-16 rounded-lg cursor-pointer hover:scale-95' src={testimonial.source} alt="" />
                    </a>
                  </div>

                  <p className="leading-relaxed mb-6 font-poppins">
                    {testimonial.testimonial.slice(0, 300)}
                    {testimonial.testimonial.length > 300 ? '...' : ''}
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src={testimonial.img}
                      className="w-16 h-16 border-primary-300 border-2 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font text-lg font-semibold text-primary-500 font-sfmono">
                        {testimonial.name}
                      </span>
                      <span className="text-slate-400 text-base font-poppins">{testimonial.position}</span>
                    </span>
                  </a>
                </div>
              </div>
            })
            }
          </Carousel>
        </div>
      </div>
    </>

  )
}


export default Testimonials