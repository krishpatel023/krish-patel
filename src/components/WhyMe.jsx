import FigmaToCode from '../assets/FigmaToCode.png'
import RemoteWork from '../assets/RemoteWork.svg'
import FastDelivery from '../assets/FastDelivery.svg'
import Versatile from '../assets/Versatile.svg'
import WorkAnytime from '../assets/WorkAnytime.svg'
import TeamOrSolo from '../assets/TeamOrSolo.svg'

export default function WhyMe() {
  return (
    <>
    <h1 className='text-3xl font-semibold'>Why Hire Me?</h1>
    <div className='w-full flex flex-wrap mt-8 gap-10 justify-evenly md:justify-center'>
        <div className='w-[22rem] border-[1px] rounded border-gray-700 flex flex-col justify-center items-center p-3 gap-4 shadow-lg'>
            <img className='w-[80%] mt-2' src={FigmaToCode} alt="" />
            <h1 className='text-xl font-semibold text-center'>Accurate Conversion from Figma Designs to Code.</h1>
            <span className='text-center mb-2'>
            Flawlessly translating Figma designs into code is my expertise. I bring precision and responsiveness to ensure your vision is accurately transformed into an interactive digital reality.
            </span>
        </div>
        <div className='w-[22rem] border-[1px] rounded border-gray-700 flex flex-col justify-center items-center p-3 gap-4 shadow-lg'>
            <img className='w-[80%] mt-2' src={RemoteWork} alt="" />
            <h1 className='text-xl font-semibold text-center'>Have Remote Work Experience.</h1>
            <span className='text-center mb-2'>
            Armed with extensive remote work experience, I excel in delivering results while seamlessly navigating virtual collaboration. With effective communication skills, I guarantee a productive and collaborative freelance partnership.            
            </span>
        </div>  
        <div className='w-[22rem] border-[1px] rounded border-gray-700 flex flex-col justify-center items-center p-3 gap-4 shadow-lg'>
            <img className='w-[80%] mt-2' src={FastDelivery} alt="" />
            <h1 className='text-xl font-semibold text-center'>Fast and Timely Delivery</h1>
            <span className='text-center mb-2'>
            With a commitment to swift and efficient project delivery, I ensure your deadlines are not just met but exceeded. Fast-paced yet quality-driven, I bring your vision to reality with a dedication to delivering results promptly and effectively.
            </span>
        </div>  
        <div className='w-[22rem] border-[1px] rounded border-gray-700 flex flex-col justify-center items-center p-3 gap-4 shadow-lg'>
            <img className='w-[80%] mt-2' src={TeamOrSolo} alt="" />
            <h1 className='text-xl font-semibold text-center'>Ability to Work with a Team or Solo.</h1>
            <span className='text-center mb-2'>
            I thrive both in collaborative team environments and as a solo contributor. With a track record of successful projects in both settings, I bring the experience and comfort to seamlessly integrate within a team or independently to drive projects forward.
            </span>
        </div>
        <div className='w-[22rem] border-[1px] rounded border-gray-700 flex flex-col justify-center items-center p-3 gap-4 shadow-lg'>
            <img className='w-[80%] mt-2' src={Versatile} alt="" />
            <h1 className='text-xl font-semibold text-center'>From Static Websites to Dynamic Web Applications, I Build Both!</h1>
            <span className='text-center mb-2'>
            Whether it's a sleek and responsive static site or a feature-rich, scalable web application, my skills are tailored to meet the unique demands of each project. Versatility is key, ensuring that I can deliver impactful results across a broad range of web development requirements.          
            </span>
        </div>  
        <div className='w-[22rem] border-[1px] rounded border-gray-700 flex flex-col justify-center items-center p-3 gap-4 shadow-lg'>
            <img className='w-[80%] mt-2' src={WorkAnytime} alt="" />
            <h1 className='text-xl font-semibold text-center'>Flexibility of Work Hours or Timezones.</h1>
            <span className='text-center mb-2'>
            I am committed to accommodating diverse schedules and global collaboration. I ensure that project timelines are met with efficiency and precision. Whether you're across the globe or working on a unique schedule, my commitment to adaptability ensures a harmonious and productive collaboration.
            </span>
        </div>
    </div>
    </>
  )
}