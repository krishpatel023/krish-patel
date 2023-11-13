import React from 'react'
import ProfilePicture from '../assets/ProfilePicture.jpg'
import TechStack from '../components/TechStack'
import Experience from '../Data/Experience'

export default function HomeComponent() {
  return (
    <>
        <div className='w-full flex md:flex-col-reverse'>
            <div className='w-[70%] md:w-full md:mt-6'>
                <h1 className='text-5xl font-semibold'>Krish Patel</h1>
                <h2 className='text-3xl font-normal mt-4'>Fullstack Developer <span className='italic'>and</span> AIML Enthusiast</h2>
                <p className='mt-6 text-justify'>
                    I'm a full-stack web developer with expertise in React.js, Node.js, Express.js, MongoDB, and Firebase, proficient
                    in creating responsive user interfaces. As an AIML student, I'm passionate about harnessing the potential of AI and ML
                    to create intelligent algorithms and data-driven solutions. I thrive in collaborative environments and actively seek
                    opportunities to merge web development and AI/ML for impactful innovation.
                </p>
            </div>
            <div className='w-[30%] flex justify-center items-center md:w-full md:justify-start'>
                <img className='w-48 h-48 rounded' src={ProfilePicture} alt="" />
            </div>
        </div>
        <div className='w-full mt-16'>
            <TechStack/>
        </div>
        <div className='w-[95%] mt-16 md:w-full'>
            <h1 className='text-3xl font-semibold'>Current Position</h1>
            <div className='w-full flex justify-between mt-8 gap-4 sm:flex-col'>
                <div className='gap-2'>
                    <h1 className='text-2xl font-semibold'>{Experience[0].CompanyName}</h1>
                    <h2 className='text-xl font-normal'>{Experience[0].Position}</h2>
                    <h1 className='text-lg font-normal'>{Experience[0].Location}</h1>
                </div>      
                <h2>{Experience[0].StartDate} - {Experience[0].EndDate}</h2>
            </div>
            <p className='mt-4 text-justify'>{Experience[0].Description}</p>
        </div>
    </>
  )
}
