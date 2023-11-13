import Website from '../assets/Website.svg'
import Link from '../assets/Link.svg'
import Go from '../assets/GoArrow.svg'
import GithubLink from '../assets/GithubLink.svg'

import {ProjectsAIML, ProjectsWebDevelopment} from '../Data/Projects'
import { Fragment } from 'react'
export default function ProjectsComponent() {
  return (
    <>
    <h1 className='text-3xl font-semibold'>Projects</h1>
    <h1 className='text-2xl font-semibold mt-10 underline'>Web Development</h1>
    <div className='w-[90%] md:w-full'>
        {
          ProjectsWebDevelopment.map((data,i)=>
          <Fragment key={i}>
            <h1 className='text-2xl font-semibold mt-14'>{data.ProjectName}</h1>
            <h2 className='text-lg font-normal'>{data.ProjectType}</h2>
            <div className='flex gap-4 flex-wrap mt-2'>
              {
                data.TechnologiesUsed.map((tech,k)=>
                  <div key={k} className='h-9 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4 md:h-auto md:p-2'>
                    <img className='w-6 h-6' src={tech.logo} alt="" />
                    <span>{tech.title}</span>
                  </div>                
                )
              }

            </div>
            <p className='mt-4 text-justify'>{data.Description}</p>
            <div className='flex gap-x-4 flex-wrap'>   
              {
                data.Links.map((link,j)=>
                  <a key={j} href={link.link} target="_blank">
                  <div  className='h-9 w-auto border-[1px] rounded border-gray-700 flex items-center gap-4 mt-4
                                  md:h-auto  md:p-2
                  '>
                      <img className='w-4 h-4 ml-4' src={link.img} alt="" />
                      <h1 className='text-sm'>{link.title}</h1>
                      <span className='text-sm md:hidden'>-</span>
                      <span className='text-sm md:hidden'>{link.link}</span>
                      <img className='w-4 h-4 mr-4' src={Go} alt="" />
                  </div>

                  </a>               
                )
              }
            </div>
          </Fragment>
          )
        }
    </div>
    <h1 className='text-2xl font-semibold mt-20 underline'>Artificial Intelligence and Machile Learning</h1>
    <div className='w-[90%] md:w-full'>
        {
          ProjectsAIML.map((data,i)=>
          <Fragment key={i}>
            <h1 className='text-2xl font-semibold mt-10'>{data.ProjectName}</h1>
            <h2 className='text-lg font-normal'>{data.ProjectType}</h2>
            <p className='mt-4 text-justify'>{data.Description}</p>
            <div className='flex gap-x-4 flex-wrap'>   
              {
                data.Links.map((link,j)=>
                  <a key={j} href={link.link} target="_blank">
                  <div  className='h-9 w-auto border-[1px] rounded border-gray-700 flex items-center gap-4 mt-4
                                  md:h-auto  md:p-2'>
                      <img className='w-4 h-4 ml-4' src={link.img} alt="" />
                      <h1 className='text-sm'>{link.title}</h1>
                      <span className='text-sm md:hidden'>-</span>
                      <span className='text-sm md:hidden'>{link.link}</span>
                      <img className='w-4 h-4 mr-4' src={Go} alt="" />
                  </div>
                  </a>               
                )
              }
            </div>
          </Fragment>
          )
        }
    </div>      
    </>
  )
}
