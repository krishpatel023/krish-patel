import React, { Fragment, useState } from 'react'
import Website from '../assets/ProfilePicture.jpg'
import GithubLink from '../assets/GithubLink.svg'
import LinkLogo from '../assets/GoArrowWhite.svg'
import {ProjectsWebDevelopment} from '../Data/Projects'

export default function FreelanceProjects() {

    const [mode,setMode] = useState('static')

    const changeMode = (input) => {
        if(mode === 'static' && input!==mode) {
            setMode('dynamic')
        }
        if(mode === 'dynamic' && input!==mode){
            setMode('static')
        }
    }


    function changeBorders (name){
        if(name === mode){
            return "border-[1px] border-black"
        }
        if(name !== mode){
            return 'border-[1px] border-gray-300'
        }
    }
  return (
    <>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <div className='w-full flex flex-col items-center mt-16'>
        <div className='flex h-20'>
            <button className={`h-10 px-3 rounded-tl-xl rounded-bl-xl ${changeBorders('static')}  md:h-auto` }
                onClick={()=>{changeMode('static')}}
            > 
            Static Websites / Landing Pages
            </button>
            <button className={`h-10 px-3 rounded-tr-xl rounded-br-xl ${changeBorders('dynamic')}  md:h-auto`}
                onClick={()=>{changeMode('dynamic')}}
            >
            Dynamic Websites / Web Applications
            </button>
        </div>
        <div className='flex flex-col items-center mt-6'>
            {
                ProjectsWebDevelopment.map((data,i) =>

                <Fragment key={i}>
                {
                    data.Category === mode?

                    <div className='w-[80%] min-h-[20rem] flex border-[1px] border-black rounded-xl mb-8 py-8 shadow-lg
                    md:flex-col-reverse md:gap-10 sm:w-[95%]'>
                        <div className='w-[50%] h-full flex flex-col items-center justify-center px-8 gap-4 text-center md:w-full'>
                            <h1 className='text-xl font-semibold'>{data.ProjectName}</h1>
                            <span className='text-center'>{data.Description}</span>
                            <h2 className='text-xl font-semibold'>Technologies Used</h2>
                            <div className='flex justify-center gap-4 flex-wrap mt-2'>
                            {
                                data.TechnologiesUsed.map((tech,k)=>
                                <div key={k} className=' border-[1px] rounded border-gray-700 flex justify-center items-center px-3 py-2 gap-4 md:h-auto md:px-2'>
                                    <img className='w-6 h-6' src={tech.logo} alt="" />
                                    <span>{tech.title}</span>
                                </div>  
                                )
                            }
                            </div>
                            <div className='flex justify-center items-center gap-4 flex-wrap'>
                                {
                                    data.Links.map((link,j)=>
                                    <a key={j} href={link.link} target="_blank">
                                        <div  className='h-10 flex justify-center items-center gap-4 bg-black text-white rounded px-4
                                                        md:h-auto  md:p-2
                                        '>
                                            <h1 className='text-sm'>{link.title}</h1>
                                            <img className='w-6 h-6' src={link.img} alt="" />                                       
                                        </div>
                                    </a>               
                                    )
                                }
                            </div>
                        </div>
                        <div className='w-[50%] flex justify-center items-center md:w-full'>
                            <img className="rounded-xl w-[85%]" src={data.PreviewImg} alt="" />
                        </div>
                    </div>

                    :null
                }
                </Fragment>
                )
            }

        </div>

      </div>
    </>
  )
}