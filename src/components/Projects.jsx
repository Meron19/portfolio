import React from 'react'
// change these imports of images to images of actual projects
import MyBookList from '../assets/assets/MyBookList.png'
import Saigon from '../assets/assets/Saigon.png'

export const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Projects</p>
                    <p className='py-6'>Check out some of my recent projects</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item(duplicate to add more projects) */}
                    {/* Change URL to actual image of project */}
                    <div
                        style={{ backgroundImage: `url(${MyBookList})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider pb-3'>
                                MyBookList
                            </span>

                            <h1 className='text-center text-base'>Personal project focused creating a GoodReads clone to keep track of books I want to read.</h1>

                            <div className='pt-4 text-center'>

                                <a href="https://github.com/Meron19/MyBookList">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item(duplicate to add more projects) */}
                    {/* Change URL to actual image of project */}
                    <div
                        style={{ backgroundImage: `url(${Saigon})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider pb-3'>
                                MentorMentee App
                            </span>
                            <h1 className='text-center text-base'>Group project focused creating a mentor-mentee matching web app for a nonprofit SaigonChildren.</h1>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/lahrry/MentorMentee_App">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
