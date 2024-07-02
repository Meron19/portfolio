import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-red-600'>Hello, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Meron Amer Shaoo</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer in the works.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a third-year at the University of California, San Diego, studying Computer Science. 
              I am focused on developing the necessary skills and techniques through various personal 
              and group projects to become a full-fledged Software Developer.</p>
            <div>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600'>View Projects 
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>  
              </button>
              
            </div>
        </div>

    </div>
  )
}
