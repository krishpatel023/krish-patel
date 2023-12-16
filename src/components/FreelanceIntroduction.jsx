import React from 'react'
import ProfilePicture from '../assets/ProfilePicture.jpg'
import TechStack from '../components/FreelanceTechstack'
import WhyMe from './WhyMe'
import FreelanceProjects from './FreelanceProjects'
import Email from '../assets/Email.svg'
import Links from './FreelanceContactMe'

export default function FreelanceIntroduction() {
  return (
    <>
        <div className='w-full flex md:flex-col-reverse bg-white'>
            <div className='w-[70%] md:w-full md:mt-6'>
                <h1 className='text-5xl font-semibold'>Krish Patel</h1>
                <h2 className='text-3xl font-normal mt-4'>Fullstack Developer <span className='italic'>and</span> Freelancer</h2>
                <p className='mt-6 text-justify'>
                I'm an experienced fullstack developer with a passion for transforming ideas into captivating digital experiences. Nestled in the heart of web development, I specialize in the MERN (MongoDB, Express.js, React, Node.js) stack, utilizing its robust capabilities to craft dynamic, user-friendly solutions. Over the course of my journey, I've had the privilege of working on a myriad of projects, each one contributing to a diverse portfolio that speaks volumes about my expertise. From startups with bold visions to established businesses seeking digital innovation, my approach is rooted in understanding your unique goals and bringing them to fruition through meticulous development.
                </p>
            </div>
            <div className='w-[30%] flex justify-center items-center md:w-full md:justify-start'>
                <img className='w-48 h-48 rounded' src={ProfilePicture} alt="" />
            </div>
        </div>
        <div className='w-full mt-16 flex flex-col items-center'>
            <TechStack/>
        </div>
        <div className='w-full mt-16 flex flex-col items-center'>
            <WhyMe/>
        </div>
        <div className='w-full mt-16 flex flex-col items-center'>
            <FreelanceProjects/>
        </div>
        <div className='w-full mt-16 flex flex-col items-center'>
            <Links/>
        </div>
    </>
  )
}
