import React from 'react'
import Experience from '../Data/Experience'

export default function ExperienceComponent() {
  return (
    <>
            <h1 className='text-3xl font-semibold'>Experience</h1>
            <div className='w-[90%] mt-10 md:w-full'>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">  

                    {
                        Experience.map((data,i)=>
                        <li className="mb-10 ms-4" key={i}>
                            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
                            <div className='w-full flex justify-between mt-8 gap-4 sm:flex-col'>
                                <div className='gap-2'>
                                    <h1 className='text-2xl font-semibold'>{data.CompanyName}</h1>
                                    <h2 className='text-xl font-normal'>{data.Position}</h2>
                                    <h1 className='text-lg font-normal'>{data.Location}</h1>
                                </div>      
                                <h2>{data.StartDate} - {data.EndDate}</h2>
                            </div>
                            <p className='mt-4 text-justify'>{data.Description}</p>
                            <h1 className='mt-4 text-lg font-semibold'>Key Achievements</h1>
                            <div className='w-full flex justify-end gap-4'>
                                <ul className='w-[96%] list-disc'>
                                    {
                                        data.Work.map((work,j)=>
                                        <li key={j} className='mt-4 text-justify'>{work}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        </li>                        
                        )
                    }
                </ol>
            </div>
    </>
  )
}
