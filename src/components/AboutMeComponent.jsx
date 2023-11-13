import Links from '../components/Links'
import Education from '../components/Education'
import Location from '../assets/Location.svg'

export default function AboutMeComponent() {
  return (
    <>
        <Links/>
        <Education/>
        <h1 className='text-3xl font-semibold mt-16'>Location</h1>
        <div className='w-[90%] mt-8 flex flex-wrap gap-4 md:w-full md:mt-4'>
            <img className='w-6 h-6' src={Location} alt="" />
            <h1>Ahmedabad, India</h1>
        </div>
    </>
  )
}
