import Github from '../assets/Github.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import Email from '../assets/Email.svg'
import Go from '../assets/GoArrow.svg'
export default function FreelanceContactMe() {
  return (
    <>
        <h1 className='text-3xl font-semibold'>Contact Me At 👇</h1>
        <div className='w-[90%] mt-8 flex flex-wrap justify-center gap-4 md:w-full'>
            <a href="https://github.com/krishpatel023" target='_blank'>  
                <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4 shadow-lg'>
                    <img className='w-6 h-6' src={Github} alt="" />
                    <span>Github</span>
                    <img className='w-6 h-6' src={Go} alt="" />
                </div>
            </a>
            <a href="https://www.linkedin.com/in/krish-patel-7824231ba/" target='_blank'>
                <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4 shadow-lg'>
                    <img className='w-8 h-8' src={LinkedIn} alt="" />
                    <span>LinkedIn</span>
                    <img className='w-6 h-6' src={Go} alt="" />
                </div>
            </a>
            <div className='h-12 border-[1px] rounded border-gray-700 flex justify-center items-center p-3 gap-4 shadow-lg'>
                <img className='w-8 h-8' src={Email} alt="" />
                <span>Email - krishpatel0234@gmail.com</span>
            </div>
        </div>
    </>
  )
}
