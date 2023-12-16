import React from 'react'
import FreelanceIntroduction from '../components/FreelanceIntroduction'

export default function Freelance() {
  return (
    <>
    <div className='w-full flex flex-col items-center bg-white'>
        <div className='w-[85%] max-w-[1519px] mt-20'>
            <FreelanceIntroduction/>
        </div>
        <div className='w-full h-12 mt-16 flex flex-col items-center justify-center text-center bg-secondary-color'>
            <h1>Developed by Krish Patel</h1>
        </div>
    </div>
    </>
  )
}
